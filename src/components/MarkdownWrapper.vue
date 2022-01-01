<template>
  <div class="pageWrapper">
    <div v-if="frontmatter.banner" class="topBanner" :style="{ backgroundImage: `url(${Banner1})` }"/>
    <div :class="'wrapper-'+frontmatter.type + ' ' + (frontmatter.nopagenav ? 'nopagenav' : '')">
      <div class="content">
        <h1 :class="{'banner': frontmatter.banner}">{{ frontmatter.title }}
          <span class="authorName" v-if="frontmatter.author" v-text="frontmatter.author"/>
          <span class="subtitle" v-if="frontmatter.subtitle" v-text="frontmatter.subtitle"/>
        </h1>
        <div class="homeLinks" v-if="prevPage || home || nextPage">
          <router-link v-if="prevPage" :to="guidesPrefix+prevPage" v-text="'Prev'"/>
          <span v-if="!prevPage" v-text="'Prev'"/>
          <router-link :to="guidesPrefix+home" v-text="'Home'"/>
          <router-link v-if="nextPage" :to="guidesPrefix+nextPage" v-text="'Next'"/>
          <span v-if="!nextPage" v-text="'Next'"/>
        </div>
        <hr v-if="!frontmatter.banner" />
        <div :class="{'post-wrapper': true}">
            <slot></slot>
        </div>
      </div>
      <div id="mdPageNav" class="pageNav">
        nav lmao
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.pageWrapper {
  margin: 0;
  padding: 0;
  .topBanner {
    width: calc(100% + 2em);
    height: 15em;
    margin: -.8em -1em 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-color: rgb(var(--v-theme-secondary));
  }
}
.wrapper-guide {
  hr:first-of-type {
    margin-bottom: 1em;
  }
}
.wrapper-guideindex, .wrapper-guide.nopagenav {
  width: 55em !important;
  .pageNav {
    display: none;
  }
}
.wrapper-guide, .wrapper-guideindex {
  width: 69em;
  max-width: 90%;
  max-width: calc(100% - 2em);
  margin: 0 auto 1em;
  display: flex;

  #mdPageNav {
    position: sticky;
    align-self: flex-start;
    top: 4em;
    z-index: 2;
    width: 17em;
    margin-left: 1em;
    flex: none;
    flex-grow: 0;
    flex-shrink: 0;
    background: rgb(var(--v-theme-background));

    .nav {
      height: calc(100vh - 5em);
      padding-bottom: 1em;
      overflow-y: scroll;

      .title {
        opacity: .49;
        padding-bottom: 1em;
        border-bottom: rgb(var(--v-theme-on-background)) 1px dotted;
        margin-bottom: 1em;
      }
      a {
        display: block;
        text-decoration: none;
        opacity: .8;
        padding: .25em 0;
      }
      .tagH2 {
        padding-left: 0;
      }
      .tagH3 {
        padding-left: 1em;
      }
      .tagH4 {
        padding-left: 2em;
      }
    }
  }

  .content {
    width: 100%;
    width: calc(100% - 18em);
    flex: 1 1 auto;
    .homeLinks {
      margin: .2em 0 .3em;
      text-align: center;
      position: sticky;
      top: 3em;
      background: rgb(var(--v-theme-background));
      z-index: 1;
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
      &.banner {
        height: 3em;
        margin-top: -3.2em;
        margin-bottom: .7em;
        color: #fff;
        text-align: center;
        font-size: 3em;
        text-shadow: -1px 1px 2px #000, 1px 1px 2px #000, 1px -1px 0 #000, -1px -1px 0 #000, 0 0 30px #fff;
      }
      + hr {
        margin: 1em 0;
      }
      .subtitle {
        display: block;
        font-size: .64em;
        font-weight: 400;
        opacity: .83;
      }
      .authorName {
        font-size: .7em;
        font-weight: 400;
        opacity: .55;
        margin-left: .35em;
      }
    }
    h2 {
      font-size: 1.4em;
      // make anchors work
      padding-top: 4em;
      margin-top: -2.5em;
    }
    h3 {
      // make anchors work
      padding-top: 4em;
      margin-top: -3em;
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
      blockquote {
        margin: 1em 0;
        padding-left: 1em;
        border-left: rgb(var(--v-theme-primary)) 4px solid;
      }
    }
  }
}
</style>

<script setup lang="ts">
const props = defineProps({
  frontmatter: Object,
})

import Banner1 from '@/assets/banner-1.jpg'

import { useRoute } from 'vue-router'
import { guideLists } from '../data'

// set the front-matter
document.title = props.frontmatter ? `${props.frontmatter.title} | MLP Drawing School` : 'MLP Drawing School';

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
}

// set anchors
import AnchorJS from 'anchor-js';
const anchors = new AnchorJS();

import { onMounted, onUpdated, onUnmounted } from 'vue'
const headerSelector = '.content h2, .content h3, .content h4';

function renderPageNav(): void {
  const nav = document.getElementById('mdPageNav');

  if (nav) {
    const newNav = document.createElement('div');
    newNav.classList.add('nav');

    const newTitle = document.createElement('div');
    newTitle.classList.add('title');
    newTitle.innerText = props.frontmatter && props.frontmatter.title ? props.frontmatter.title : 'MLPDS Guide';
    newNav.appendChild(newTitle);

    document.querySelectorAll('.content h2, .content h3, .content h4').forEach(element => {
      const newLink = document.createElement('a');
      newLink.href = `#${element.id}`;
      newLink.innerText = (element as HTMLElement).innerText;
      newLink.classList.add(`tag${element.tagName.toUpperCase()}`)

      newNav.append(newLink);
    });

    // empty out nav element
    nav.textContent = '';
    // replace content with the new one
    nav.appendChild(newNav);
  }
}

anchors.add(headerSelector);
renderPageNav();
onMounted(() => {
  anchors.add(headerSelector);
  renderPageNav();
})
onUpdated(() => {
  anchors.add(headerSelector);
  renderPageNav();
})
</script>
