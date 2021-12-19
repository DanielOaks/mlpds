<template>
  <div :class="'wrapper-'+frontmatter.type">
    <h1>{{ frontmatter.title }}
      <span class="subtitle" v-if="frontmatter.author" v-text="frontmatter.author"/>
    </h1>
    <div class="homeLinks" v-if="prevPage || home || nextPage">
      <router-link v-if="prevPage" :to="guidesPrefix+prevPage" v-text="'Previous Page'"/>
      <span v-if="!prevPage" v-text="'Previous Page'"/>
      <router-link :to="guidesPrefix+home" v-text="'Home'"/>
      <router-link v-if="nextPage" :to="guidesPrefix+nextPage" v-text="'Next Page'"/>
      <span v-if="!nextPage" v-text="'Next Page'"/>
    </div>
    <hr />
    <div :class="{'post-wrapper': true}">
        <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.wrapper-guide, .wrapper-guideindex {
  width: 54em;
  max-width: 90%;
  max-width: calc(100% - 2em);
  margin: 0 auto 1em;
  .homeLinks {
    margin: .2em 0 .3em;
    text-align: center;
    position: sticky;
    top: 3em;
    background: rgb(var(--v-theme-background));
    a, span {
      display: inline-block;
      padding: .5em;
      color: rgb(var(--v-theme-on-background));
      text-decoration: none;
      + a, + span {
        margin-left: 2em;
      }
    }
    a {
      opacity: .66;
    }
    span {
      opacity: .36;
    }
  }
  h1 {
    margin-top: .5em;
    + hr {
      margin: 1em 0;
    }
    .subtitle {
      font-size: .7em;
      font-weight: 400;
      opacity: .66;
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
const props = defineProps({
  frontmatter: Object,
})

import { useRoute } from 'vue-router'
import { guideLists } from '../data'

// get this guide's path
const guidesPrefix = '/guides/'
let home = ''
let prevPage = ''
let nextPage = ''
if (props.frontmatter && props.frontmatter.type === 'guide') {
  const route = useRoute()
  const guidePath = route.path.replace(/^(\/guides\/)/,'')

  const list = props.frontmatter.list || 'default';

  if(guideLists[list]) {
    home = guideLists[list].home
    let found = false
    for (const section of guideLists[list].pages) {
      for (const page of section.pages) {
        if (found && nextPage == '') {
          nextPage = page
        }
        if (!found && page !== guidePath) {
          prevPage = page
        }
        if (page === guidePath) {
          found = true
        }
      }
    }
  }
  // console.log(prevPage, guidePath, nextPage)

  // console.log(this.frontmatter)


  // guideLists[list].pages
}
</script>