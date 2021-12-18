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

<script lang="ts">
export default {
    props: ['frontmatter'],
    // mounted() {
    //     let utterancesScript = document.createElement('script');
    //     utterancesScript.setAttribute('src', 'https://utteranc.es/client.js');
    //     utterancesScript.setAttribute('repo', 'cdgeass/cdgeass.github.io');
    //     utterancesScript.setAttribute('issue-term', 'pathname');
    //     utterancesScript.setAttribute('label', 'Comments');
    //     utterancesScript.setAttribute('theme', 'github-light');
    //     utterancesScript.setAttribute('crossorigin', 'anonymous');
    //     utterancesScript.setAttribute('async', 'true');
    //     document.getElementsByClassName('post-wrapper').item(0)?.appendChild(utterancesScript);
    // }
}
</script>