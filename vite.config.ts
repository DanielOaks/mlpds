import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from '@vuetify/vite-plugin'
import markdown from 'vite-plugin-md'
import pages from "vite-plugin-pages";

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
    // https://github.com/hannoeru/vite-plugin-pages
    pages({
      dirs: [
        { dir: "src/pages", baseRoute: "" },
      //   { dir: "src/features/**/pages", baseRoute: "features" },
      //   { dir: "src/admin/pages", baseRoute: "admin" },
      ],
      extensions: ['vue', 'ts', 'js', 'md'],
    }),
    // https://github.com/antfu/vite-plugin-md
    markdown({
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
