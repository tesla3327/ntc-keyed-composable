import tailwindTypography from '@tailwindcss/typography';

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
    },
  },

  optimization: {
    keyedComposables: [
      {
        name: 'useKey',
        // Nuxt will only auto-inject a key if we've supplied
        // less than this number of arguments to the composable
        argumentLength: 1,
      },
      {
        name: 'useId',
        argumentLength: 1,
      },
    ],
  },
});
