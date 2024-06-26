// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  css: ['~/assets/css/main.css'],

  plugins: ["~/plugins/preline.client.ts"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@nuxt/image',
    '@nuxtjs/web-vitals',
    '@vesp/nuxt-fontawesome',
  ],

  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  },

  webVitals: {
    // provider: '', // auto detectd
    debug: false, // debug enable metrics reporting on dev environments
    disabled: false
  },

  fontawesome: {
    icons: {
      solid: ['coffee', 'child'],
      regular: ['comment'],
      brands: ['twitter', 'facebook', 'line'],
    },
    proIcons: {
      solid: [],
      regular: [],
      light: [],
      thin: [],
      duotone: [],
    },
    sharpIcons: {
      solid: [],
      regular: [],
      light: [],
      thin: [],
    }
  }
})