import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import MarkdownWrapper from './components/MarkdownWrapper.vue'
import Ponymote from '@/components/Ponymote.vue'
import GuideFullWidthImage from '@/components/GuideFullWidthImage.vue'
import GuideNote from '@/components/GuideNote.vue'

import router from './routes'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .component('MarkdownWrapper', MarkdownWrapper)
  .component('Ponymote', Ponymote)
  .component('GuideFullWidthImage', GuideFullWidthImage)
  .component('GuideNote', GuideNote)
  .mount('#app')
