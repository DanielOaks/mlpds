<template>
  <div class="pageWrapper">
    <div v-if="frontmatter.banner" class="topBanner" :style="{ backgroundImage: `url(${Banner1})` }"/>
    <div :class="'wrapper-'+frontmatter.type + ' ' + (frontmatter.nopagenav ? 'nopagenav' : '')">
      <div class="content">
        <h1 :class="{'banner': frontmatter.banner}">{{ frontmatter.title }}
          <div class="author" v-if="!author">
            <span class="name" v-text="frontmatter.author"/>
          </div>
          <div class="author" v-if="author">
            <img class="avatar" v-if="author.icon" :src="author.icon"/>
            <span class="name" v-text="author.name"/>
            <a v-if="author.youtube" :href="author.youtube"><v-icon color="#FF0000">mdi-youtube</v-icon></a>
            <a v-if="author.twitter" :href="`https://twitter.com/${author.twitter}`"><v-icon color="#1DA1F2">mdi-twitter</v-icon></a>
            <a v-if="author.reddit" :href="`https://reddit.com/u/${author.reddit}`"><v-icon color="#FF5700">mdi-reddit</v-icon></a>
            <a v-if="author.homepage" :href="author.homepage"><v-icon color="indigo">mdi-link-variant</v-icon></a>
          </div>
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
        <div id="mdPageContent" :class="{'post-wrapper': true}">
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
.wrapper-guideindex, .wrapper-guide.nopagenav, .wrapper-policy {
  width: 55em !important;
  #mdPageNav {
    display: none;
  }
}
.wrapper-guide:not(.nopagenav) {
  $pagenav-breakpoint-shrunk: 968px;
  $pagenav-breakpoint-hidden: 700px;
  @media (max-width: $pagenav-breakpoint-shrunk) and (min-width: $pagenav-breakpoint-hidden) {
    #mdPageNav {
      width: 10em;
    }
  }
  @media (max-width: $pagenav-breakpoint-hidden) {
    #mdPageNav {
      display: none;
    }
  }
}
.wrapper-guide, .wrapper-guideindex, .wrapper-policy {
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
      padding-bottom: calc(100vh - 7em);
      overflow-y: scroll;

      .title {
        opacity: .49;
        padding-bottom: 1em;
        border-bottom: rgb(var(--v-theme-on-background)) 1px dotted;
        margin-bottom: 1em;
        + a {
          padding-top: 0;
        }
      }
      a {
        display: block;
        text-decoration: none;
        opacity: .69;
        padding: .25em 0;
        font-size: .85em;
      }
      .tagH2 {
        padding-top: 1em;
        padding-left: 0;
        + .tagH2 {
          padding-top: .4em;
        }
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
      .author {
        display: inline-block;
        font-size: .7em;
        margin-left: .35em;
        a {
          text-decoration: none;
          padding: 0 .25em;
        }
        .avatar {
          height: 2.5em;
          border-radius: 50%;
          vertical-align: -.6em;
          margin-right: .3em;
        }
        .name {
          font-weight: 400;
          opacity: .55;
        }
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
    h4 {
      // make anchors work
      padding-top: 5em;
      margin-top: -3.5em;
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
import { authors, guideLists } from '../data'

const author = authors[props.frontmatter?.author];

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

import { onMounted, onUpdated, onUnmounted, nextTick } from 'vue'
const headerSelector = '.content h2, .content h3, .content h4';

// setup page nav
type NavInfo = {
  nav?: HTMLElement;
  currentIndex: number;
}
const pageNavInfo: NavInfo = {
  currentIndex: 0,
};
type NavScrollItem = {
  top: number;
  link?: HTMLElement;
  navTop: number;
}
let pageNavScrollInfo: Array<NavScrollItem> = [];

function updatePageNavScroll(scrollPos: number): void {
  if (!pageNavInfo.nav) {
    // not ready yet
    return
  }

  pageNavScrollInfo.every((item, index) => {
    // scrollPos+5 to feel a touch more responsive
    if (scrollPos+5 <= pageNavScrollInfo[index+1]?.top) {
      if (index != pageNavInfo.currentIndex) {
        pageNavInfo.currentIndex = index;
        pageNavInfo.nav.scroll(0, item.navTop);
      }
      return false;
    }
    return true;
  });
}

let lastKnownScrollPosition = 0;
let ticking = false;

function tryUpdatePageNavScroll(e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      updatePageNavScroll(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
}

function renderPageNav(): void {
  const nav = document.getElementById('mdPageNav');

  if (nav) {
    const newNav = document.createElement('div');
    newNav.classList.add('nav');

    const newTitle = document.createElement('div');
    newTitle.classList.add('title');
    newTitle.innerText = props.frontmatter && props.frontmatter.title ? props.frontmatter.title : 'MLPDS Guide';
    newNav.appendChild(newTitle);

    pageNavScrollInfo = [{
      'top': 0,
      'navTop': 0,
    }];

    document.querySelectorAll('.content h2, .content h3, .content h4').forEach(element => {
      const newLink = document.createElement('a');
      newLink.href = `#${element.id}`;
      newLink.innerText = (element as HTMLElement).innerText;
      newLink.classList.add(`tag${element.tagName.toUpperCase()}`)

      newNav.append(newLink);

      // this element's top point:
      pageNavScrollInfo.push({
        'top': window.scrollY + element.getBoundingClientRect().top,
        'link': newLink,
        'navTop': 0,
      });
    });

    // empty out nav element
    nav.textContent = '';
    // replace content with the new one
    nav.appendChild(newNav);
    newNav.querySelectorAll('a').forEach((element, index) => {
      pageNavScrollInfo[index+1].navTop = element.offsetTop;
    });

    pageNavInfo.nav = newNav;
    updatePageNavScroll(window.scrollY);

    // console.log(pageNavScrollInfo);
  }
}

anchors.add(headerSelector);
renderPageNav();

onUpdated(() => {
  anchors.add(headerSelector);
  renderPageNav();
})
onMounted(() => {
  anchors.add(headerSelector);
  renderPageNav();
  document.getElementById('mdPageContent')?.querySelectorAll('img').forEach((element) => {
    element.addEventListener('load', renderPageNav);
  });
  window.addEventListener('load', renderPageNav);
  window.addEventListener('resize', renderPageNav);
  window.addEventListener('scroll', tryUpdatePageNavScroll);
})
onUnmounted(() => {
  window.removeEventListener('load', renderPageNav);
  window.removeEventListener('resize', renderPageNav);
  window.removeEventListener('scroll', tryUpdatePageNavScroll);
})
</script>
