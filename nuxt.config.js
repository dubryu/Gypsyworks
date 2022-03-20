
export default {
  // ssr: false,
  ssr: true,
  // mode: 'universal',
  // mode: 'spa',  // auth-module は SSR に使用できない ->deprecated
  router: {
    base: '/gypsyworks/'
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // target: 'node'
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'gypsyworks',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/project_name/favicon.ico' },
      { href: '~/assets/scss/common.scss', rel: 'stylesheet' },
      { href: '~/assets/scss/style.scss', rel: 'stylesheet' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/assets/scss/common.scss' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/plugin', mode: 'client' },
    { src: '~/plugins/local-storage' },
    { src: '~/plugins/axios' },

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/dotenv',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // loaders: {
    //   scss: {
    //     implementation: Sass,
    //     sassOptions: {
    //       fiber: Fiber
    //     }
    //   }
    // }
    transpile: ['vue-intersect'],
    babel: {
      babelrc: false,
      compact: false
    },
   //  filenames: {
   //   app: ({ isDev }) => isDev ? '[name].js' : '[chunkhash].js',
   //   chunk: ({ isDev }) => isDev ? '[name].js' : '[chunkhash].js',
   //   css: ({ isDev }) => isDev ? '[name].css' : '[contenthash].css',
   //   img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[hash:7].[ext]',
   //   font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[hash:7].[ext]',
   //   video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[hash:7].[ext]'
   // }
  },
  auth: {
    redirect: {
      login: '/',  // 未ログイン時のリダイレクト先
      logout: '/',  // ログアウト処理を実行した直後のリダイレクト先
      callback: '/index',  // コールバックURL（各プロバイダで設定したものと同じPathにする）
      home: '/succeed',  // ログイン後に遷移するページ
    },
    strategies: {
      colorme: {
        // client_id: 'cf1b5a845474eb77cef50e84089c962d7e7da35817d9add4c9e658966c7fad54',
        // client_secret: 'fb2b45126fb414ad63f7eebc253a142a509a796cdf8adad056b08cd0cd43b7b5',
        // code: 'f2daf4ad9b7bcfdbd9f6b0eceff550be280c8e63174e5a5e9817dee6fca5f530',
        // grant_type: 'authorization_code',
        // redirect_uri: 'https://dubryu.github.io/gypsyworks/',
        // scope: ['read_products'],
      },
    },
  },
  // firebaseにホスティング
  generate: {
    dir: 'dist'
  }
}
