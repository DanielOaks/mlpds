<template>
  <v-alert
    class="guideNote"
    border="bottom"
    icon="mdi-information"
    type="info"
    rounded="shaped"
    variant="outlined"
  >
    <slot></slot>
  </v-alert>
</template>

<style land="scss">
.guideNote {
  margin: 1em 0 1.3em;
}
</style>