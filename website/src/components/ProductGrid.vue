<script>
export default {
  props: ['products'],
}
</script>

<template>
  <div
    class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
  >
    <a v-for="product in products" :key="product.id" :href="product.href" class="group">
      <img
        :src="product.img"
        class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
      />
      <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
      <!-- <p class="mt-1 text-lg font-medium text-gray-900">{{ product.price }}</p> -->
    </a>
  </div>
</template>
