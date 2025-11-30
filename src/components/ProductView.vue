<template>
  <div class="pt-12 max-w-[1280px] mx-auto">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
    >
      <!-- Product details -->
      <div class="lg:max-w-lg lg:self-end">
        <a :href="'/producers/' + $route.params.producerslug">{{ producer.name }}</a>

        <div class="mt-4">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {{ product.name }}
          </h1>
        </div>

        <section aria-labelledby="information-heading" class="mt-4">
          <h2 id="information-heading" class="sr-only">Product information</h2>

          <div v-if="hasPriceInfo" class="flex flex-col gap-1 items-start">
            <div class="flex gap-2 items-center text-lg text-gray-900 sm:text-xl">
              <span>{{ regularTotalPrice }}$/bouteille</span>
              <span> - </span>
              <span> {{ regularTotalPrice * bottlesPerCase }}$/caisse </span>
              <Tooltip>
                <div class="flex flex-col gap-2">
                  <span
                    >Frais d'agent: {{ regularAgentFee }}$ + taxes payable au moment de la
                    commande</span
                  >
                  <span>Prix SAQ: {{ regularPrice }} payable en succursale lors du ramassage</span>
                </div>
              </Tooltip>
            </div>

            <div class="flex gap-2 text-sm text-gray-900">
              <span>Restauration: </span>
              <span>{{ licenseeTotalPrice }}$/bouteille</span>
              <span>-</span>
              <span> {{ licenseeTotalPrice * bottlesPerCase }}$/caisse </span>
              <Tooltip>
                <div class="flex flex-col gap-2">
                  <span
                    >Frais d'agent: {{ licenseeAgentFee }}$ + taxes payable au moment de la
                    commande</span
                  >
                  <span>Prix SAQ: {{ licenseePrice }} payable en succursale lors du ramassage</span>
                </div>
              </Tooltip>
            </div>
          </div>

          <div class="mt-4 space-y-6">
            <p v-for="line in product.desc" class="text-base text-gray-500">{{ line }}</p>
          </div>

          <div v-if="hasPriceInfo" class="mt-4 text-base text-gray-500">
            Vendu en caisses de {{ bottlesPerCase }} bouteilles de {{ bottleVolume }}ml.
          </div>
        </section>
      </div>

      <!-- Product image -->
      <div class="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
        <img :src="product.img" class="aspect-square w-full rounded-lg object-cover" />
      </div>

      <!-- Product form -->
      <div class="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
        <section aria-labelledby="options-heading">
          <form>
            <div class="sm:flex sm:justify-between">
              <!-- Size selector -->
            </div>
            <div class="mt-4"></div>

            <div v-if="hasPriceInfo">
              <div v-if="hasInventory" class="mt-4 flex items-center">
                <CheckIcon class="size-5 shrink-0 text-green-500" aria-hidden="true" />
                <p class="ml-2 text-sm text-gray-500">Disponible</p>
              </div>
              <div v-else-if="hasOrdered" class="mt-6 flex items-center">
                <ClockIcon class="size-5 shrink-0 text-gray-500" aria-hidden="true" />
                <p class="ml-2 text-sm text-gray-500">Disponible bientôt</p>
              </div>
              <div v-else class="mt-4 flex items-center">
                <XMarkIcon class="size-5 shrink-0 text-gray-500" aria-hidden="true" />
                <p class="ml-2 text-sm text-gray-500">Temporairement en rupture de stock</p>
              </div>
            </div>
            <div v-else class="mt-4 flex items-center">
              <XMarkIcon class="size-5 shrink-0 text-gray-500" aria-hidden="true" />
              <p class="ml-2 text-sm text-gray-500">Temporairement en rupture de stock</p>
            </div>

            <div class="mt-6">
              <a
                type="button"
                href="mailto:info@agencekoji.com"
                class="flex w-full items-center justify-center rounded-md border border-transparent bg-brand hover:bg-brand/70 px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Contactez-nous pour commander
              </a>
            </div>
            <div class="mt-6 text-center"></div>
          </form>
        </section>
      </div>
    </div>
    <div class="pt-10 pb-10">
      <h2 class="text-xl pb-8 px-6">Autres produits de {{ producer.name }}</h2>

      <ProductGrid :products="otherProducts" />
    </div>
  </div>
</template>

<script lang="ts">
import { CheckIcon } from '@heroicons/vue/24/solid'
import { ClockIcon, XMarkIcon, InformationCircleIcon } from '@heroicons/vue/24/outline'
import { producers } from '../data/products.ts'
import ProductGrid from './ProductGrid.vue'
import Tooltip from './Tooltip.vue'

import { useProducts } from '@/queries/products.js'

export default {
  components: {
    CheckIcon,
    ClockIcon,
    ProductGrid,
    XMarkIcon,
    InformationCircleIcon,
    Tooltip,
  },
  data() {
    return {
      products: useProducts(),
    }
  },
  computed: {
    producer() {
      return producers.filter(
        // @ts-ignore
        (p) => p.name.toLowerCase().replaceAll(' ', '-') === this.$route.params.producerslug,
      )[0]!
    },
    otherProducts() {
      // @ts-ignore
      return this.producer['products']
        .filter((p) => {
          // @ts-ignore
          const id = p.name.toLowerCase().replaceAll(' ', '-')
          return this.$route.params.productslug !== id
        })
        .map((p) => {
          // @ts-ignore
          const producerId = this.producer['name'].toLowerCase().replaceAll(' ', '-')
          // @ts-ignore
          const id = p.name.toLowerCase().replaceAll(' ', '-')
          return {
            name: p.name,
            id: id,
            href: '/producers/' + producerId + '/products/' + id,
            img: p.img,
          }
        })
    },
    product() {
      const producer = producers.filter(
        // @ts-ignore
        (p) => p.name.toLowerCase().replaceAll(' ', '-') === this.$route.params.producerslug,
      )[0]!

      // @ts-ignore
      return producer['products'].filter((p) => {
        // @ts-ignore
        const id = p.name.toLowerCase().replaceAll(' ', '-')
        return this.$route.params.productslug === id
      })[0]!
    },
    hasInventory() {
      const info = this.products.state.data.data.filter((p) => {
        return p.saq_article_number === this.product.articleNumber
      })[0]
      return info.inventory_cases > 0
    },
    hasOrdered() {
      const info = this.products.state.data.data.filter((p) => {
        return p.saq_article_number === this.product.articleNumber
      })[0]
      return info.ordered_cases > 0
    },
    bottlesPerCase() {
      const info = this.products.state.data.data.filter((p) => {
        return p.saq_article_number === this.product.articleNumber
      })[0]
      return info.bottles_per_case
    },
    bottleVolume() {
      const info = this.products.state.data.data.filter((p) => {
        return p.saq_article_number === this.product.articleNumber
      })[0]
      return info.bottle_volume
    },
    hasPriceInfo() {
      return (
        this.products.state.status === 'success' &&
        this.products.state.data.data.filter((p) => {
          return p.saq_article_number === this.product.articleNumber
        }).length > 0
      )
    },
    regularPrice() {
      const info = this.products.state.data.data.filter((p) => {
        return p.saq_article_number === this.product.articleNumber
      })[0]
      return ((info.regular_price * info.bottles_per_case) / 100).toFixed(2)
    },
    regularAgentFee() {
      const info = this.products.state.data.data.filter((p) => {
        return p.saq_article_number === this.product.articleNumber
      })[0]
      return ((info.regular_agent_fee * info.bottles_per_case) / 100).toFixed(2)
    },
    regularTotalPrice() {
      const info = this.products.state.data.data.filter((p) => {
        return p.saq_article_number === this.product.articleNumber
      })[0]
      return ((info.regular_price + info.regular_agent_fee) / 100).toFixed(2)
    },
    licenseePrice() {
      const info = this.products.state.data.data.filter((p) => {
        return p.saq_article_number === this.product.articleNumber
      })[0]
      return ((info.licensee_price * info.bottles_per_case) / 100).toFixed(2)
    },
    licenseeAgentFee() {
      const info = this.products.state.data.data.filter((p) => {
        return p.saq_article_number === this.product.articleNumber
      })[0]
      return ((info.licensee_agent_fee * info.bottles_per_case) / 100).toFixed(2)
    },
    licenseeTotalPrice() {
      const info = this.products.state.data.data.filter((p) => {
        return p.saq_article_number === this.product.articleNumber
      })[0]
      return ((info.licensee_price + info.licensee_agent_fee) / 100).toFixed(2)
    },
  },
}
</script>
