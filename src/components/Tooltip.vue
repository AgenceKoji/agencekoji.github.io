<script>
import { InformationCircleIcon } from '@heroicons/vue/24/outline'
export default {
  components: {
    InformationCircleIcon,
  },
}
</script>
<template>
  <div class="group relative flex">
    <span tabindex="0" role="button" aria-label="Plus d'info">
      <InformationCircleIcon class="size-5 text-gray-500" />
    </span>

    <div
      class="/* Common properties */ invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 absolute w-48 bg-gray-800 text-white text-sm rounded py-1 px-2 transition-opacity duration-300 z-10 text-center pointer-events-none /* --- MOBILE (Default): Position LEFT --- */ right-full top-1/2 -translate-y-1/2 mr-2 /* --- DESKTOP (md+): Position TOP --- */ md:top-auto md:right-auto md:bottom-full md:left-1/2 md:-translate-x-1/2 md:-translate-y-0 md:mr-0 md:mb-2"
    >
      <slot></slot>
      <div
        class="absolute border-4 border-transparent /* --- MOBILE (Default): Arrow points RIGHT (towards icon) --- */ top-1/2 left-full -translate-y-1/2 border-l-gray-800 /* --- DESKTOP (md+): Arrow points DOWN (towards icon) --- */ md:top-full md:left-1/2 md:-translate-y-0 md:-translate-x-1/2 md:border-l-transparent md:border-t-gray-800"
      ></div>
    </div>
  </div>
</template>
