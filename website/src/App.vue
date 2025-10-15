<script lang="ts">
import Shell from './components/Shell.vue'

export default {
  components: {
    Shell,
  },
}
</script>

<template>
  <Shell>
    <RouterView />
  </Shell>
</template>

<style scoped></style>
