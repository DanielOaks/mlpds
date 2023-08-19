<template>
  <div :class="{'colourChart': true, 'smol': small}"></div>
</template>

<script setup lang="ts">
const props = defineProps({
  small: Boolean,
})
</script>

<style lang="scss">
$stops: ();
$totalStops:36;
$radius:0.9;

@for $i from 0 through $totalStops{
  $stops:  append($stops,hsl($i * calc(360deg/$totalStops),100%,50%),comma);
}

.colourChart {
  margin: 1.5em auto;
  width: 25em;
  height: 25em;
  max-width: 100%;
  &.smol {
    width: 10em;
    height: 10em;
    border: 2px solid #fff;
  }
  /* width: 100vh * $radius;
  height: 100vh * $radius;
  position: absolute; 
  top: 50%; 
  left:50%;
  transform:translate(-50%, -50%); */
  
  background: #000;
  background: 
    radial-gradient(
      circle closest-side,
      hsl(0,0%,100%),
      hsl(0,0%,0%) 90%
    ),
    conic-gradient($stops);
  border: 5px solid #fff;
  box-shadow: 0px 5px 10px rgba(#000,0.5);
  background-blend-mode: screen;
  border-radius: 50%
}
</style>