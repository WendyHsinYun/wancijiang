import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

const customDarkTheme = {
  dark: true,
  colors: {},
};

const customLightTheme = {
  dark: false,
  colors: {
    background: '#f9fafa',
    surface: '#d2d3db',
    hover: '#757575',
    primary: '#006064',
    primaryText: '#0F0F0F',
    secondaryText: '#212121',
    error: '#F44336',
    success: '#009688',
    warning: '#EBCD2F',
  },
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'customLightTheme',
      themes: {
        customDarkTheme,
        customLightTheme,
      },
    },
  });
  app.vueApp.use(vuetify);
});
