<template>
  <div class="guideList">
    <template v-for="section in guideLists[list].pages">
      <h2 v-text="section.name" v-if="titles !== 'none'"/>
      <div class="guideLink" v-for="p in section.pages">
        <router-link :to="g(p).link || '/guides/'+p">{{ g(p).name }}</router-link>
        <span class="author" v-text="g(p).author"/>
      </div>
    </template>
  </div>
</template>

<style lang="scss">
h1 + .guideList {
  margin-top: -1.1em;
}
.guideList {
  .guideLink {
    + .guideLink {
      margin-top: .2em;
    }
    .author {
      font-size: .9em;
      margin-left: .4em;
      opacity: .7;
    }
  }
  + hr {
    margin: 2.5em 0 2em 0 !important;
  }
}
</style>

<script setup lang="ts">
const props = defineProps({
  list: String,
  titles: String,
})

import { guides, guideLists } from '../data/guides'

function g(page: string) {
  return guides[page];
}
</script>