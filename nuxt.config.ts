// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: false },

  css: ['~/assets/sass/main.sass'],

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxtjs/i18n',
    '@ant-design-vue/nuxt',
  ],
  i18n: {
    strategy: 'prefix',
    defaultLocale: 'en',
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json'
      },
      {
        code: 'zh',
        iso: 'zh-TW',
        file: 'zh-TW.json'
      }
    ],
    
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },


})
