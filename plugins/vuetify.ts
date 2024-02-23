import 'vuetify/styles';
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'


const customLightTheme = {
  dark: false,
  colors: {
    background: '#f9fafa',
    surface: '#d2d3db',
    primary: '#006064',
    primaryText: '#0F0F0F',
    link: '#BDBDBD'
  },
};


export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'customLightTheme',
      themes: {
        customLightTheme,
      },
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
  });
  app.vueApp.use(vuetify);
});
