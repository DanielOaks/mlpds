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

      <v-col cols="12">
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

      <v-col class="mt-5" cols="12">
        <v-row justify="center">
          <v-card
            v-for="item in externalLinks"
            elevation="2"
            tile
            class="lpGalleryCard lpLinksCard rounded-b-xl rounded-t-xl"
          >
            <v-sheet class="fill-height img">
              <a
                link
                :href="item.link"
                :target="item.inlineLink ? '' : '_blank'"
              >
                <v-icon size="70" :color="item.iconColor">{{ item.icon }}</v-icon>
              </a>
            </v-sheet>
            <v-card-subtitle class="subtitle">
              <a :href="item.link">{{ item.title }}</a>
            </v-card-subtitle>
          </v-card>
        </v-row>
      </v-col>

      <v-col class="mt-5" cols="12">
        <h2 class="headline mb-4">
          Fineline
          <subtitle>Fineline is our mascot, and you can see her here!</subtitle>
        </h2>
        <v-row justify="center">
          <v-card
            v-for="(item, i) in finelineImages"
            :key="i"
            elevation="2"
            tile
            class="lpGalleryCard rounded-b-xl rounded-t-lg"
          >
            <v-sheet class="fill-height img">
              <a
                link
                :href="item.img"
                target="_blank"
              >
                <v-img
                  :src="item.img"
                  width="300"
                />
              </a>
            </v-sheet>
            <v-card-subtitle class="subtitle">
              <a :href="`https://twitter.com/${item.twitter}`">@{{ item.twitter }}</a>
            </v-card-subtitle>
          </v-card>
        </v-row>
      </v-col>

      <FinelineSubmitForm/>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import FinelineSubmitForm from '@/components/FinelineSubmitForm.vue';
import { socialMediaLinks, externalLinks } from '@/links'
import logo from '@/assets/logo.png'

import fluffyxaiFineline1 from '@/assets/fineline/fluffyxai-fineline-1.png'
import vexFineline1 from '@/assets/fineline/vex-fineline-1.jpg'
const finelineImages = [
  {
    img: fluffyxaiFineline1,
    twitter: 'FluffyXai',
  },
  {
    img: vexFineline1,
    twitter: 'terminal_vex',
  },
]
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
.lpLinksCard {
  width: 10em;
  box-shadow: none !important;
  .img {
    margin: 1em 0;
  }
}
.lpGalleryCard {
  margin: 0.5em;
  display: flex;
  flex-direction: column;
  .img {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  a {
    display: block;
    text-decoration: none;
  }
  .subtitle {
    display: block;
    text-align: center;
    margin: .2em 0;
  }
}
</style>
