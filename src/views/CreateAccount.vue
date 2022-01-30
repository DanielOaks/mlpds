<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1 class="display-2 font-weight-bold mt-6 mb-4">
          Create Account
        </h1>

        <p class="mb-1">Linking Discord:</p>
        <DiscordAccountCard class="mb-3" :name="discordName" :avatar="discordAvatar" guild="MLPDS"/>

        <v-alert
          class="countdownAlert"
          v-if="secondsLeft > 0"
          :type="secondsLeft > 480 ? 'info' : 'warning'"
          variant="outlined"
          density="compact"
        >{{secondsLeft}} seconds left to register</v-alert>
        <v-alert
          class="countdownAlert"
          v-if="secondsLeft <= 0"
          type="error"
          variant="outlined"
          density="compact"
        >Page expired, click Login again</v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import DiscordAccountCard from '@/components/DiscordAccountCard.vue';

import { useRoute } from 'vue-router'
const route = useRoute()

const discordAvatar = `https://cdn.discordapp.com/avatars/${route.query.id}/${route.query.avatar}.png`;
const discordName = route.query.name;

let now = ref(Date.now());
setInterval(() => {
  now.value = Date.now();
}, 500)

const secondsLeft = computed(() => {
  return parseInt(((Date.parse(route.query.expiry ? route.query.expiry.toString() : '') - now.value) / 1000).toFixed());
});
</script>

<style lang="scss" scoped>
.countdownAlert {
  margin: 0 auto;
  width: 20em;
}
</style>
