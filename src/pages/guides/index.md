---
title: Guides
---
Here are guides

<router-link v-for="p in guideSidebar[0].pages" :to='g(p).link' v-text="g(p).name"></router-link>

<script setup lang="ts">
import { guides, guideSidebar } from '@/data'

function g(page) {
  return guides[page];
}
</script>
