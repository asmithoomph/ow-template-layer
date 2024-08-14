// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    name: "Oomph Theme Layer",
    defaultLocale: "en",
  },

  colorMode: {
    preference: "light",
  },

  googleFonts: {
    display: "swap",
    outputDir: "app/assets/fonts",
    families: {
      Poppins: {
        wght: [400, 500, 600, 700, 800],
      },
    },
  },
});
