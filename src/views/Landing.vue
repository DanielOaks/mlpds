<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="logo"
          class="landingLogo"
          contain
          height="200"
        />
      </v-col>

      <v-col>
        <h1 class="display-2 font-weight-bold mb-3">
          MLP Drawing School
          <subtitle>We're a supportive and nurturing art community.</subtitle>
        </h1>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <v-row justify="center">
          <a
            v-for="item in socialMediaLinks"
            :key="item.title"
            link
            :href="item.link"
            target="_blank"
            class="lpLink"
          >
            <v-icon size="50" :color="item.iconColor">{{ item.icon }}</v-icon>
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { socialMediaLinks, externalLinks } from '@/links'
import logo from '../assets/mlpds-icon.png'
</script>

<style lang="scss" scoped>
subtitle {
  display: block;
  font-size: .6em;
  font-weight: 400;
}
.lpLink {
  text-decoration: none;
  margin: 0 .5em;
}
</style>
