<script lang="ts">
import CTASection from './CTASection.vue'
import LandingHeader from './LandingHeader.vue'

export default {
  components: {
    LandingHeader,
    CTASection,
  },
}
</script>

<template>
  <LandingHeader />
  <div class="flex flex-col mx-auto max-w-[1080px] pt-12 text-xl gap-12">
    <h2
      class="text-center text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl dark:text-white lg:pb-12 px-6"
    >
      Découvrez des sakés exceptionnels
    </h2>

    <div class="flex gap-12 items-center justify-start lg:h-64 flex-wrap lg:flex-nowrap">
      <img class="object-contain w-full lg:h-full" src="/pouring_sake.jpg" />
      <p class="px-6 text-center lg:text-start">
        Agence Koji est une jeune agence de représentation de produits d'alcool, mettant l'emphase
        sur les sakés d'artisant. Notre mission est de faire découvrir des sakés d'exception aux
        Québécois.
      </p>
    </div>

    <div
      class="flex flex-row-reverse gap-12 items-center justify-start lg:h-64 flex-wrap lg:flex-nowrap"
    >
      <img class="object-contain w-full lg:h-full" src="/sake_cups.jpg" />
      <p class="px-6 text-center lg:text-end">
        Nous travaillons avec des petits brasseurs indépendents pour vous présenter des produits
        artisanaux et de petites production, tout en couvrant la vaste diversité de styles qu'offre
        le saké.
      </p>
    </div>

    <CTASection />
  </div>
</template>
