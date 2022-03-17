// // expose the store, axios client and redirect method from the Nuxt context
// // https://nuxtjs.org/api/context/
// export default function ({ store, app: { $axios }, redirect }) {
//   $axios.onRequest((config) => {
//     // check if the user is authenticated
//     if (store.state.auth.access_token) {
//       // set the Authorization header using the access token
//       config.headers.Authorization = 'Bearer ' + store.state.auth.access_token
//     }
//
//     return config
//   })
// }


export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
