<template>
  <span :class="{HSV: true, big: big}" :style="`background-color: hsl(${h}, ${s}, ${v});`"></span>
</template>

<style lang="scss">
span.HSV {
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  vertical-align: -4px;
  // box-shadow: 0px 0px 0px 1px #FFFFFF, 0px 0px 0px 2px #000000;
  box-shadow: 0px 0px 0px 1px rgb(var(--v-theme-on-background));
  border-radius: .3em;
  margin: 0 .15em;
  &.big {
    width: 2.2em;
  }
  + span.HSV {
    margin-left: .3em;
  }
}
</style>

<script setup lang="ts">
const props = defineProps({
  h: Number,
  s: {
    type: String,
    default: "100%",
  },
  v: {
    type: String,
    default: "50%",
  },
  big: Boolean,
})
</script>
