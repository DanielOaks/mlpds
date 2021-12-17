import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import MarkdownWrapper from './components/MarkdownWrapper.vue'

import router from './routes'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .component('MarkdownWrapper', MarkdownWrapper)
  .mount('#app')
