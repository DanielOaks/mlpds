// Styles
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/brands.min.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify, ThemeDefinition } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { fa } from 'vuetify/iconsets/fa'
// @ts-ignore
import colors from 'vuetify/lib/util/colors'

const mlpdsLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: "#b75ba3",
    // 'primary-darken-1': colors.purple.darken1,
    secondary: colors.amber.lighten5,
    // 'secondary-darken-1': colors.pink.darken1,
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
  //TODO: remove this when we upgrade
  variables: {},
}

const mlpdsDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: colors.grey.darken4,
    surface: colors.blueGrey.darken4,
    primary: "#b93fa0",
    // 'primary-darken-1': colors.purple.darken1,
    secondary: colors.amber.lighten4,
    // 'secondary-darken-1': colors.pink.darken1,
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
  //TODO: remove this when we upgrade
  variables: {},
}

export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  theme: {
    // defaultTheme: 'dark',
    themes: {
      light: mlpdsLightTheme,
      dark: mlpdsDarkTheme,
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
      fa,
    }
  },
})
