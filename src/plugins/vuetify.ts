// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify, ThemeDefinition } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
// @ts-ignore
import colors from 'vuetify/lib/util/colors'

const mlpdsLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: colors.deepPurple.base,
    'primary-darken-1': colors.deepPurple.darken1,
    secondary: colors.pink.base,
    'secondary-darken-1': colors.pink.darken1,
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
  //TODO: remove this when we upgrade
  variables: {},
}

const mlpdsDarkTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: colors.grey.darken4,
    surface: colors.blueGrey.darken4,
    primary: colors.deepPurple.base,
    'primary-darken-1': colors.deepPurple.darken1,
    secondary: colors.pink.base,
    'secondary-darken-1': colors.pink.darken1,
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
    }
  },
})
