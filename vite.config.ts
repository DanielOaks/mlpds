import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import VueRouter from 'unplugin-vue-router/vite'
import vuetify from 'vite-plugin-vuetify'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // mode: 'development',
  envPrefix: 'MLPDS_CLIENT_',
  // esbuild: {
  //   exclude: ['*.md']
  // },
  plugins: [
    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      routesFolder: 'src/pages',
      extensions: ['.vue', '.md'],
      dts: './src/typed-router.d.ts',
    }),
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
      // styles: 'expose',
    }),
    // https://github.com/mdit-vue/unplugin-vue-markdown
    Markdown({
      // headEnabled: true,
      wrapperComponent: 'MarkdownWrapper',
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  /* remove the need to specify .vue files https://vitejs.dev/config/#resolve-extensions
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ]
  },
  */
})
