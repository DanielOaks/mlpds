<template>
  <v-app :theme="darkTheme ? 'dark' : 'light'">
    <v-navigation-drawer v-model="drawer" app>
      <!-- <v-sheet flat color="secondary" height="12em">
        <router-link to="/">
        <v-img
          :src="logo"
        />
        </router-link>
      </v-sheet> -->
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item key="logo">
          <v-list-item-content>
            <v-img alt="MLP Drawing School" class="mlpdsBanner" :src="mlpdsBanner"/>
            <!-- <h3>MLP Drawing School</h3> -->
            <subtitle>We're a supportive and nurturing art community.</subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item key="home" href="/">
          <v-list-item-icon color="#4455aa" icon="mdi-home-circle-outline"></v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>&nbsp;&nbsp;Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="item in socialMediaLinks"
          :key="item.title"
          link
          :href="item.link"
          target="_blank"
        >
          <v-list-item-icon :color="item.iconColor" :icon="item.icon"></v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>&nbsp;&nbsp;{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-card flat height="1.2em"/>
        <v-list-item
          v-for="item in externalLinks1"
          :key="item.title"
          link
          :href="item.link"
          :target="item.inlineLink ? '' : '_blank'"
        >
          <v-list-item-icon :color="item.iconColor" :icon="item.icon"></v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>&nbsp;&nbsp;{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="item in externalLinks2"
          :key="item.title"
          link
          :href="item.link"
          :target="item.inlineLink ? '' : '_blank'"
        >
          <v-list-item-icon :color="item.iconColor" :icon="item.icon"></v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>&nbsp;&nbsp;{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar density="compact" flat color="primary" app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>MLPDS</v-app-bar-title>
      <v-spacer/>
      <v-btn v-if="backend" style="margin-right: 1.3em;" :href="login_url">Login</v-btn>
      <v-icon style="margin-right: .2em;">mdi-theme-light-dark</v-icon>
      <v-switch
        v-model="darkTheme"
        compact
        hide-details
        class="flex-grow-0"
        style="margin-inline-end: 10px;"
      />
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <!-- <v-footer app>
    </v-footer> -->
  </v-app>
</template>

<style lang="scss">
.mlpdsBanner {
  margin-left: -1.05em;
  margin-bottom: .3em;
}
.v-application.v-theme--dark .mlpdsBanner {
  filter: invert(1);
}
// fix vuetify setting bad link colours
// on the dark theme :<
.v-application.v-theme--dark a {
  color: rgb(139, 191, 247);
}
// fix fontawesome icons
.fa::before, .fab::before {
  font: var(--fa-font-brands); // use bundled styling
  font-size: .8em; // but make them fit better with mdi's icons
}
</style>

<script setup lang="ts">
import { useStoredRef } from './refs'
import { socialMediaLinks, externalLinks1, externalLinks2 } from './links'
import logo from '@/assets/logo.png'
import mlpdsBanner from '@/assets/mlpds-banner-dark.png'
import { ref } from 'vue'

const backend = import.meta.env.MLPDS_CLIENT_BACKEND_URL;
let login_url = '';
if (backend) {
  login_url = (new URL(`${backend}/auth/discord?fe`)).toString();
}

const drawer = ref(false);
const darkTheme = useStoredRef(false, 'useDarkTheme');
</script>