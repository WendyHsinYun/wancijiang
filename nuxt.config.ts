// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en'
      }
    }},

  devtools: { enabled: false },

  ssr: false,

  css: ['~/assets/sass/main.sass'],

  build: {
    transpile: ['vuetify'],
  },

  runtimeConfig: {
    apiSecret: '',
    public: {
      apiBase: '/',
    },
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    '@nuxtjs/i18n',
  ],
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    
    langDir: 'locales',
    lazy: true,
    locales: [
      {
        code: 'zh',
        iso: 'zh-TW',
        file: 'zh-TW.json',
      },
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json',
      },
    ],
    detectBrowserLanguage: {
      useCookie: false,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "@/assets/sass/color.sass" as *\n'
        }
      }
    }
  },

});
