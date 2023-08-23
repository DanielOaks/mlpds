import { createSSRApp, h } from 'vue'
import vuetify from './vuetify'

import App from '../src/App.vue'
import RouterLink from '../src/components/RouterLink.vue'
import MarkdownWrapper from '../src/components/MarkdownWrapper.vue'

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

  app.component('router-link', RouterLink)
  app.component('markdownwrapper', MarkdownWrapper)
  app.use(vuetify)

  return app
}