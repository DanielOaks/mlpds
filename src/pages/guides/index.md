---
title: Guides
---
Here are guides

<template v-for="section in guideSidebar">
  <h2 v-text="section.name"/>
  <template v-for="p in section.pages">
    <router-link :to="g(p).link" v-text="g(p).name"/>
    <span v-text="g(p).author"/>
    <br>
  </template>
</template>

<script setup lang="ts">
import { guides, guideSidebar } from '@/data'

function g(page) {
  return guides[page];
}
</script>
