<template>
  <a :href="to"><slot /></a>
</template>

<style lang="scss">
</style>

<script setup lang="ts">
const props = defineProps({
  to: String,
})
</script>
