<template>
  <div :style="styles.widthLimiter">
    <div :style="styles.renderingAreaProvider">
      <iframe :src="src" :style="styles.iframe" frameborder="0" allowfullscreen="true" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  maxWidth: String,
  videoId: String,
})

const src = `https://www.youtube.com/embed/${props.videoId}`;

const styles = {
  widthLimiter: {
    maxWidth: props.maxWidth ? props.maxWidth : null,
  },
  renderingAreaProvider: {
    background: "#f0f0f0",
    height: 0,
    margin: "1rem 0",
    /*
      * - '56.25%' indicates the aspect rasio (9/16 = 56.25%).
      * - note that percentage inside 'padding-(top|bottom)' is calculated based on
      *   its current width. this is a specification of 'calc' used inside
      *   the 'padding-(top|bottom)' property.
      *
      * see: https://nathan.gs/2018/01/07/responsive-slideshare-iframe/
      */
    paddingBottom: "calc(56.25%)",
    position: "relative",
    width: "100%"
  },
  iframe: {
    height: "100%",
    left: 0,
    position: "absolute",
    top: 0,
    width: "100%"
  }
}
</script>
