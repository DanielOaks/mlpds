<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-card flat color="amber-lighten-5" height="12em">
        <v-img
          :src="logo"
        />
      </v-card>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item key="logo">
          <v-list-item-content>
            <h3>MLP Drawing School</h3>
            <subtitle>A supportive and nurturing art community.</subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="item in socialMediaLinks"
          :key="item.title"
          link
          :href="item.link"
          target="_blank"
        >
          <v-list-item-icon>
            <v-icon :color="item.iconColor">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>&nbsp;&nbsp;{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-card flat height="1.2em"/>
        <v-list-item
          v-for="item in externalLinks"
          :key="item.title"
          link
          :href="item.link"
          target="_blank"
        >
          <v-list-item-icon>
            <v-icon :color="item.iconColor">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>&nbsp;&nbsp;{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar density="compact" flat color="primary" app>
      <v-app-bar-nav-icon @click="drawer = !drawer" color="primary"></v-app-bar-nav-icon>
      <v-app-bar-title>MLPDS</v-app-bar-title>
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

<script setup lang="ts">
import { socialMediaLinks, externalLinks } from './links'
import logo from '@/assets/mlpds-icon.png'
import { ref } from 'vue'

const drawer = ref(false);
</script>