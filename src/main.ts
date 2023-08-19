import { createApp } from 'vue'
// import { createHead } from '@unhead/vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import MarkdownWrapper from './components/MarkdownWrapper.vue'
import Ponymote from '@/components/Ponymote.vue'
import ColourWheel from '@/components/ColourWheel.vue'
import GuideFullWidthImage from '@/components/GuideFullWidthImage.vue'
import GuideImageGallery from '@/components/GuideImageGallery.vue'
import GuideNote from '@/components/GuideNote.vue'
import HSV from '@/components/HSV.vue'
import YouTube from '@/components/YouTube.vue'

import router from './routes'

loadFonts()

// const head = createHead()

createApp(App)
  // .use(head)
  .use(router)
  .use(vuetify)
  .component('MarkdownWrapper', MarkdownWrapper)
  .component('markdownwrapper', MarkdownWrapper)
  .component('ColourWheel', ColourWheel)
  .component('Ponymote', Ponymote)
  .component('GuideFullWidthImage', GuideFullWidthImage)
  .component('GuideImageGallery', GuideImageGallery)
  .component('GuideNote', GuideNote)
  .component('HSV', HSV)
  .component('YouTube', YouTube)
  .mount('#app')
