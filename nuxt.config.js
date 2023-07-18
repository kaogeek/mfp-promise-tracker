import promises from './data/promises.json';
import { createMetadata } from './utils/metadata';

const BASE_PATH = process.env.BASE_PATH || '';
const { title, meta } = createMetadata();

export default {
  ssr: true,

  target: 'static',

  head: {
    title,
    htmlAttrs: {
      lang: 'th',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'ติดตามชุดกฎหมายเปลี่ยนประเทศ พร้อมยื่นเข้าสภา',
      },
      { name: 'format-detection', content: 'telephone=no' },
      ...meta,
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `${BASE_PATH}/favicon-32x32.png`,
      },
      {
        rel: 'manifest',
        href: `${BASE_PATH}/site.webmanifest`,
      },
      { rel: 'stylesheet', href: `${BASE_PATH}/fonts/typography.css` },
    ],
  },

  css: [
    '@wevisdemo/ui/styles/typography.css',
    '@wevisdemo/ui/styles/components.css',
  ],

  plugins: [],

  components: true,

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],

  modules: ['vue-plausible'],

  build: {},

  publicRuntimeConfig: {
    path: {
      base: BASE_PATH,
      images: `${BASE_PATH}/images`,
    },
  },

  router: {
    base: BASE_PATH || '/',
  },

  generate: {
    // async routes() {
    //   const promisesRoute = await Promise.all(
    //     promises.map((promise) => ({
    //       route: `/promises/${promise.id}`,
    //       payload: {
    //         promise,
    //       },
    //     }))
    //   );
    //   return [...promisesRoute];
    // },
  },
};
