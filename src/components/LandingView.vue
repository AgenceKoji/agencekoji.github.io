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
      class="text-center text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl lg:pb-12 px-6"
    >
      Découvrez des sakés exceptionnels
    </h2>

    <div class="flex gap-12 lg:gap-4 items-center justify-start flex-wrap lg:flex-nowrap">
      <div class="flex flex-col gap-8 lg:gap-4">
        <p class="px-6 text-center">
          Agence Koji est une jeune agence de représentation de produits d'alcool, mettant l'emphase
          sur les sakés d'artisans. Notre mission, c'est d'inspirer le Québec à choisir le saké.
        </p>
        <p class="px-6 text-center">
          Nous travaillons avec des petits brasseurs indépendants pour vous présenter des produits
          artisanaux de grande qualité et de petite production, tout en couvrant la vaste diversité
          de styles qu'offre le saké.
        </p>
      </div>
    </div>
  </div>

  <div class="relative isolate overflow-hidden bg-white mt-24 px-6 py-24 sm:py-24 lg:px-8 h-128">
    <img
      src="/group.jpg"
      alt=""
      class="absolute inset-0 -z-10 size-full object-cover object-bottom opacity-30"
    />
  </div>

  <div class="flex flex-col mx-auto max-w-[1080px] pt-4 text-xl gap-12">
    <CTASection />
  </div>
</template>
