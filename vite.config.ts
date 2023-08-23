// import { defineConfig } from 'vite'
// import Vue from '@vitejs/plugin-vue'
// import Markdown from 'vite-plugin-md'
// import VueRouter from 'unplugin-vue-router/vite'
import vuetify from 'vite-plugin-vuetify'

import path from 'path'

// // https://vitejs.dev/config/
// export default defineConfig({
//   // mode: 'development',
//   envPrefix: 'MLPDS_CLIENT_',
//   // esbuild: {
//   //   exclude: ['*.md']
//   // },
//   plugins: [
//     // https://github.com/posva/unplugin-vue-router
//     VueRouter({
//       routesFolder: 'src/pages',
//       extensions: ['.vue', '.md'],
//       dts: './src/typed-router.d.ts',
//     }),
//     Vue({
//       include: [/\.vue$/, /\.md$/],
//       template: {
//         compilerOptions: {
//           isCustomElement: (tag) => ['subtitle'].includes(tag),
//         }
//       }
//     }),
//     // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
//     vuetify({
//       autoImport: true,
//       // styles: 'expose',
//     }),
//     // https://github.com/mdit-vue/unplugin-vue-markdown
//     Markdown({
//       // headEnabled: true,
//       wrapperComponent: 'MarkdownWrapper',
//     }),
//   ],
//   /* remove the need to specify .vue files https://vitejs.dev/config/#resolve-extensions
//   resolve: {
//     extensions: [
//       '.js',
//       '.json',
//       '.jsx',
//       '.mjs',
//       '.ts',
//       '.tsx',
//       '.vue',
//     ]
//   },
//   */
// })

import vue from '@vitejs/plugin-vue'
import md from 'vite-plugin-md'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
  envPrefix: 'MLPDS_CLIENT_',
  plugins: [
    ssr({ prerender: true }),
    vue({
      include: [/\.vue$/, /\.md$/],
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['subtitle'].includes(tag),
        }
      }
    }),
    md({
      wrapperComponent: 'MarkdownWrapper',
    }),
  ],
  ssr: { noExternal: ['vuetify'] },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}

export default config
