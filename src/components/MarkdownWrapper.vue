<template>
  <v-container>
    <h1>{{ frontmatter.title }}</h1>
    <hr />
    <div class="post-wrapper">
        <slot></slot>
    </div>
  </v-container>
</template>

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