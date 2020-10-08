import * as webpack from "webpack";

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'vanderelst',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/node_modules/bootstrap/dist/css/bootstrap.min.css',
    '@/assets/css/templatemo-diagoona.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '@/plugins/jquery-3.4.1.min.js', ssr: false},
    {src: '@/node_modules/bootstrap/dist/js/bootstrap.min.js', ssr: false},
    {src: '@/plugins/jquery.backstretch.min.js', ssr: false},
    {src: '@/plugins/templatemo-script.js', ssr: false},


    // '@/node_modules/bootstrap/dist/js/bootstrap.js',


  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            file: 'en-US.js'
          },
          {
            code: 'ru',
            file: 'ru-RU.js'
          }
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'en',
        // parsePages: false,
        // pages: {
        //   contacts: {
        //     en: '/contacts',
        //     ru: '/contacts',
        //   },
        //   'index': {
        //     en: '/',
        //     ru: '/o_nas',
        //   },
        //   'services/development/index': {
        //     en: '/services/development',
        //     ru: '/offres/developement',
        //   },
        //   'services/development/app/index': {
        //     en: '/services/development/app',
        //     ru: '/offres/developement/app',
        //   },
        //   'services/development/website/index': {
        //     en: '/services/development/website',
        //     ru: '/offres/developement/site-web',
        //   },
        //   'services/coaching/index': {
        //     en: '/services/coaching',
        //     ru: '/offres/formation',
        //   }
        // }
      }
    ]
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  }
}
