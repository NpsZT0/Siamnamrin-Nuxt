// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
    dir: 'assets/images',
  },
  webVitals: {
    // provider: '', // auto detectd
    debug: false,
    disabled: false
  }
})