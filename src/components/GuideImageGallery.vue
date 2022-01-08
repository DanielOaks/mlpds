<template>
  <swiper :modules="modules" :slides-per-view="3" :space-between="50" navigation>
    <slot></slot>
  </swiper>
</template>

<script setup lang="ts">
import { Navigation } from 'swiper';
import { Swiper } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';

const modules = [Navigation];
</script>

<style lang="scss">
.swiper-button-prev, .swiper-button-next {
  &:after {
    background-color: rgb(var(--v-theme-secondary));
    color: rgb(var(--v-theme-on-secondary));
    font-weight: bold;
    padding: .2em;
    border-radius: .2em;
  }
  &.swiper-button-disabled {
    pointer-events: auto;
  }
}
</style>
