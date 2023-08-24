import { createSSRApp, h } from 'vue'
import vuetify from './vuetify'

import App from '../src/App.vue'
import RouterLink from '../src/components/RouterLink.vue'
import MarkdownWrapper from '../src/components/MarkdownWrapper.vue'
import Ponymote from '@/components/Ponymote.vue'
import ColourWheel from '@/components/ColourWheel.vue'
import GuideFullWidthImage from '@/components/GuideFullWidthImage.vue'
import GuideImageGallery from '@/components/GuideImageGallery.vue'
import GuideNote from '@/components/GuideNote.vue'
import HSV from '@/components/HSV.vue'
import YouTube from '@/components/YouTube.vue'

export { createApp }

function createApp(pageContext) {
  const { Page, pageProps } = pageContext
  const PageWithLayout = {
    render() {
      return h(
        App,
        {},
        {
          default() {
            return h(Page, pageProps || {})
          }
        }
      )
    }
  }
  const app = createSSRApp(PageWithLayout)

  app.provide('pageContext', pageContext)
  app.use(vuetify)
  app.component('router-link', RouterLink)
  app.component('markdown-wrapper', MarkdownWrapper)
  app.component('ColourWheel', ColourWheel)
  app.component('Ponymote', Ponymote)
  app.component('GuideFullWidthImage', GuideFullWidthImage)
  app.component('GuideImageGallery', GuideImageGallery)
  app.component('GuideNote', GuideNote)
  app.component('HSV', HSV)
  app.component('YouTube', YouTube)

  return app
}