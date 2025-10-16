<template>
  <div class="bg-white min-h-lvh flex flex-col">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open">
      <Dialog class="relative z-40 lg:hidden" @close="open = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to=""
          leave="transition-opacity ease-linear duration-300"
          leave-from=""
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>
        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel
              class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
            >
              <div class="flex px-4 pb-2 pt-5">
                <button
                  type="button"
                  class="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  @click="open = false"
                >
                  <span class="absolute -inset-0.5" />
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="size-6" aria-hidden="true" />
                </button>
              </div>

              <!-- Links -->
              <TabGroup as="div" class="mt-2">
                <div class="border-b border-gray-200">
                  <TabList class="-mb-px flex space-x-8 px-4">
                    <Tab
                      as="template"
                      v-for="category in navigation.categories"
                      :key="category.name"
                      v-slot="{ selected }"
                    >
                      <button
                        :class="[
                          selected ? 'border-brand text-brand' : 'border-transparent text-gray-900',
                          'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium',
                        ]"
                      >
                        {{ category.name }}
                      </button>
                    </Tab>
                  </TabList>
                </div>
                <TabPanels as="template">
                  <TabPanel
                    v-for="category in navigation.categories"
                    :key="category.name"
                    class="space-y-12 px-4 py-6"
                  >
                    <div class="grid grid-cols-2 gap-x-4 gap-y-10">
                      <div
                        v-for="item in category.featured"
                        :key="item.name"
                        class="group relative"
                      >
                        <img
                          :src="item.imageSrc"
                          class="aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-75"
                        />
                        <RouterLink
                          :to="item.href"
                          class="mt-6 block text-sm font-medium text-gray-900"
                        >
                          <span class="absolute inset-0 z-10" aria-hidden="true" />
                          {{ item.name }}
                        </RouterLink>
                      </div>
                    </div>
                  </TabPanel>
                </TabPanels>
              </TabGroup>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <div v-for="page in navigation.pages" :key="page.name" class="flow-root">
                  <RouterLink :to="page.href" class="-m-2 block p-2 font-medium text-gray-900">{{
                    page.name
                  }}</RouterLink>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <header class="relative">
      <nav aria-label="Top">
        <!-- Secondary navigation -->
        <div class="bg-white">
          <div class="mx-auto px-6 lg:px-8 border-b border-gray-200">
            <div class="">
              <div class="flex h-16 items-center justify-between">
                <!-- Logo (lg+) -->
                <div class="hidden lg:flex lg:flex-1 lg:items-center">
                  <a href="/">
                    <span class="sr-only">Agence Koji, Inc.</span>
                    <img class="h-8 w-auto" src="/logo.png" alt="" />
                  </a>
                </div>

                <div class="hidden h-full lg:flex">
                  <!-- Flyout menus -->
                  <PopoverGroup class="inset-x-0 bottom-0 px-4">
                    <div class="flex h-full justify-center space-x-8">
                      <Popover
                        v-for="category in navigation.categories"
                        :key="category.name"
                        class="flex"
                        v-slot="{ open }"
                      >
                        <div class="relative flex">
                          <PopoverButton
                            :class="[
                              open ? 'text-brand' : 'text-gray-700 hover:text-gray-800',
                              'relative flex items-center justify-center text-sm font-medium transition-colors duration-200 ease-out',
                            ]"
                          >
                            {{ category.name }}
                            <span
                              :class="[
                                open ? 'bg-brand' : '',
                                'absolute inset-x-0 -bottom-px z-30 h-0.5 transition duration-200 ease-out',
                              ]"
                              aria-hidden="true"
                            />
                          </PopoverButton>
                        </div>
                        <transition
                          enter-active-class="transition ease-out duration-200"
                          enter-from-class="opacity-0"
                          enter-to-class=""
                          leave-active-class="transition ease-in duration-150"
                          leave-from-class=""
                          leave-to-class="opacity-0"
                        >
                          <PopoverPanel
                            v-slot="{ close }"
                            class="absolute inset-x-0 top-full z-20 w-full bg-white text-sm text-gray-500"
                          >
                            <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                            <div
                              class="absolute inset-0 top-1/2 bg-white shadow"
                              aria-hidden="true"
                            />
                            <div class="relative bg-white">
                              <div class="mx-auto max-w-7xl px-8">
                                <div class="grid grid-cols-4 gap-x-8 gap-y-10 pb-10">
                                  <div
                                    v-for="item in category.featured"
                                    :key="item.name"
                                    class="group relative flex flex-col items-center"
                                    @click="close()"
                                  >
                                    <div class="w-[280px] h-[280px] flex items-center">
                                      <img
                                        :src="item.imageSrc"
                                        :alt="item.imageAlt"
                                        class="w-full h-auto rounded-md bg-gray-100 object-cover group-hover:opacity-75"
                                      />
                                    </div>
                                    <RouterLink
                                      :to="item.href"
                                      class="mt-4 block font-medium text-gray-900"
                                    >
                                      <span class="absolute inset-0 z-10" aria-hidden="true" />
                                      {{ item.name }}
                                    </RouterLink>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </PopoverPanel>
                        </transition>
                      </Popover>
                      <RouterLink
                        v-for="page in navigation.pages"
                        :key="page.name"
                        :to="page.href"
                        class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                        >{{ page.name }}</RouterLink
                      >
                    </div>
                  </PopoverGroup>
                </div>

                <!-- Mobile menu and search (lg-) -->
                <div class="flex flex-1 items-center lg:hidden">
                  <button
                    type="button"
                    class="-ml-2 rounded-md bg-white p-2 text-gray-400"
                    @click="open = true"
                  >
                    <span class="sr-only">Open menu</span>
                    <Bars3Icon class="size-6" aria-hidden="true" />
                  </button>
                </div>

                <!-- Logo (lg-) -->
                <a href="/" class="lg:hidden">
                  <span class="sr-only">Agence Koji, Inc.</span>
                  <img src="/logo.png" alt="" class="h-8 w-auto" />
                </a>

                <div class="flex flex-1 items-center justify-end">
                  <a
                    type="button"
                    href="mailto:info@agencekoji.com"
                    class="items-center justify-center rounded-md border border-transparent bg-brand hover:bg-brand/70 px-6 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-gray-50"
                  >
                    Commander
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <!-- Page content -->
    <div class="grow">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import Footer from './Footer.vue'

export default {
  components: {
    Dialog,
    DialogPanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    TransitionChild,
    TransitionRoot,
    Bars3Icon,
    XMarkIcon,
    Footer,
  },
  data() {
    return {
      navigation: {
        categories: [
          {
            name: 'Producteurs',
            featured: [
              {
                name: 'Taiun Sake Brewing',
                href: '/producers/taiun-sake-brewing',
                imageSrc: '/taiun.webp',
                imageAlt: 'Taiun Sake Brewing LLC logo on a rice field backdrop.',
              },
              {
                name: 'Obama Sake Co',
                href: '/producers/obama-sake-company',
                imageSrc: '/obama.avif',
                imageAlt: 'Obama Sake Company logo.',
              },
              {
                name: 'Lagoon Brewery',
                href: '/producers/lagoon-brewery',
                imageSrc: '/lagoon.jpg',
                imageAlt: 'Lagoon Brewery logo.',
              },
              {
                name: 'Omurasaki Beverage Company',
                href: '/producers/omurasaki-beverage-company',
                imageSrc: '/uka.png',
                imageAlt: 'Uka logo.',
              },
            ],
          },
        ],
        pages: [{ name: 'À propos', href: '/about' }],
      },
      open: false,
    }
  },
  watch: {
    $route(to, from) {
      this.open = false
    },
  },
}
</script>
