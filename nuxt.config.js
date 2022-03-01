
export default {
  mode: 'spa',  // auth-module は SSR に使用できない
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
      { rel: 'icon', type: 'image/x-icon', href: '/project_name/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/assets/scss/common.scss' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '@/plugins/plugin',
      mode: 'client'
    }
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
    }
  },
  auth: {
    redirect: {
      login: '/',  // 未ログイン時のリダイレクト先
      logout: '/',  // ログアウト処理を実行した直後のリダイレクト先
      callback: '/',  // コールバックURL（各プロバイダで設定したものと同じPathにする）
      home: '/succeed',  // ログイン後に遷移するページ
    },
    strategies: {
      colorme: {
        client_id: "3206fb3506571dc4a400dab19b8319b5ce1fdb5f1bf069e5a943a521d60a6462",
        client_secret: "2a52dff122e7ead048d0ff87b4687123163985ce6ba0706bd2e7e8f4fedfc3b2",
        // code: "a99755df020d16d4b1fea8e9e2ce0eb724663aaf119dcc42618b6e37f1a2876c",
        // grant_type: 'authorization_code',
        // redirect_uri: 'https://dubryu.github.io/gypsyworks/',
        scope: ['read_products'],
      },
    },
  },
  // generate: {
  //   dir: 'docs'
  // }
}
