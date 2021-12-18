<template>
  <div class="guideList">
    <template v-for="section in guideLists[list]">
      <h2 v-text="section.name" v-if="titles !== 'none'"/>
      <div class="guideLink" v-for="p in section.pages">
        <router-link :to="g(p).link || '/guides/'+p" v-text="g(p).name"/>
        <span class="author" v-text="g(p).author"/>
      </div>
    </template>
  </div>
</template>

<style lang="scss">
.guideList {
  .guideLink {
    + .guideLink {
      margin-top: .2em;
    }
    .author {
      font-size: .9em;
      margin-left: .4em;
      opacity: .8;
    }
  }
}
</style>

<script setup lang="ts">
const props = defineProps({
  list: String,
  titles: String,
})

import { guides, guideLists } from '../data'

function g(page: string) {
  return guides[page];
}
</script>