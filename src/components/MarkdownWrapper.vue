<template>
  <div :class="'wrapper-'+frontmatter.type">
    <h1>{{ frontmatter.title }}</h1>
    <hr />
    <div :class="{'post-wrapper': true}">
        <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.wrapper-guide {
  width: 54em;
  max-width: 90%;
  max-width: calc(100% - 2em);
  margin: 0 auto 1em;
  h1 {
    margin-top: .5em;
    + hr {
      margin: 1em 0;
    }
  }
  h2 {
    font-size: 1.4em;
    margin-top: .9em;
  }

  .post-wrapper {
    font-size: 1.1em;
    p {
      + p {
        margin-top: .6em;
      }
    }
    hr {
      margin: 1em 0;
    }
    ul, ol {
      margin: 0.5em 0 1em 1em;
      li {
        + li {
          margin-top: .35em;
        }
      }
    }
  }
}
</style>

<script setup lang="ts">

import { useRoute } from 'vue-router'
const route = useRoute()
const guidePath = route.path.replace(/^(\/guides\/)/,'')
console.log(guidePath)

const props = defineProps({
  frontmatter: {},
})
</script>