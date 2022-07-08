import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase'],
  app: {
    head: {
      script: [
        {
          src: 'https://udbaa.com/slider.php?section=General&pub=715616&ga=g&side=random',
          defer: true,
        },
      ],
    },
  },
})
