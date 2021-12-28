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

<style lang="scss">
.guideNote {
  margin: 1em 0 1.3em;
  // just a bit of extra space on the bottom
  .v-alert__text {
    margin-bottom: .5em;
  }
}
</style>