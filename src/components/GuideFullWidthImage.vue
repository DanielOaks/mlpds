<template>
  <a class="guideFullWidthImage" :href="href ? href : src">
    <figure>
      <img
        :src="src"
      />
      <figcaption v-if="artist" v-text="'art by '+artist"/>
    </figure>
  </a>
</template>

<style lang="scss">
.guideFullWidthImage {
  display: block;
  margin: .5em 0;
  text-decoration: none;
  text-align: center;
  figure {
    padding: .5em;
    border-radius: .5em;
    border: rgba(169, 169, 169, 0.399) solid 2px;
    margin: 0 auto;
    display: inline-block;
  }
  img {
    max-width: 100%;
  }
  figcaption {
    display: block;
    text-align: center;
    color: rgb(var(--v-theme-on-background));
    opacity: .7;
    font-size: .9em;
  }
}
</style>

<script setup lang="ts">
const props = defineProps({
  src: String,
  href: String,
  artist: String,
})
</script>
