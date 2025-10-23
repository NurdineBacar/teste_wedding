// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  runtimeConfig: {
    public: {
      bd_con:process.env.DATABASE_URL  || "errro"
    }
  },

  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      'Fleur De Leah': true
    }
  }
})