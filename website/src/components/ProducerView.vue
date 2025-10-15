<script>
import { producers } from '../data/products.js'
import ProductGrid from './ProductGrid.vue'
import { LinkIcon } from '@heroicons/vue/24/outline'

export default {
  components: {
    ProductGrid,
    LinkIcon,
  },
  computed: {
    producerData() {
      const producer = producers.filter(
        (p) => p.name.toLowerCase().replaceAll(' ', '-') === this.$route.params.producerslug,
      )
      return producer[0]
    },
    products() {
      return this.producerData['products'].map((p) => {
        const producerId = this.producerData['name'].toLowerCase().replaceAll(' ', '-')
        const id = p.name.toLowerCase().replaceAll(' ', '-')
        return {
          name: p.name,
          id: id,
          href: '/producers/' + producerId + '/products/' + id,
          img: p.img,
        }
      })
    },
  },
}
</script>

<template>
  <div class="pt-12 mx-auto max-w-[1280px]">
    <div class="flex flex-row-reverse gap-20 w-full">
      <div class="flex flex-col gap-4 grow">
        <h1 class="text-3xl pb-4">
          {{ producerData['name'] }}
        </h1>
        <a class="brewery-url pb-4 flex gap-2" :href="producerData['url']">
          <LinkIcon class="w-4" />
          <span>Visiter le site web</span></a
        >
        <div class="flex flex-col gap-6">
          <p v-for="descPar in producerData['desc']">{{ descPar }}</p>
        </div>
      </div>
      <img class="w-[30%] max-w-[320px]" :src="producerData['img']" />
    </div>

    <div class="pt-10">
      <h2 class="text-xl pb-8">Produits</h2>

      <ProductGrid :products="products" />
    </div>
  </div>
</template>

<style>
@reference "../../public/styles.css";
.brewery-url {
  @apply underline text-blue-600 hover:text-blue-800 visited:text-purple-600;
}
</style>
