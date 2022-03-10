// // reusable aliases for mutations
// export const AUTH_MUTATIONS = {
//   SET_USER: 'SET_USER',
//   SET_PAYLOAD: 'SET_PAYLOAD',
//   LOGOUT: 'LOGOUT',
// }
//
// export const state = () => ({
//   access_token: null, // JWT access token
//   refresh_token: null, // JWT refresh token
//   id: null, // user id
//   email_address: null, // user email address
// })
//
// export const mutations = {
//   // store the logged in user in the state
//   [AUTH_MUTATIONS.SET_USER] (state, { id, emailAddress }) {
//     state.id = id
//     state.email_address = emailAddress
//   },
//
//   // store new or updated token fields in the state
//   [AUTH_MUTATIONS.SET_PAYLOAD] (state, { accessToken, refreshToken = null }) {
//     state.access_token = accessToken
//
//     // refresh token is optional, only set it if present
//     if (refreshToken) {
//       state.refresh_token = refreshToken
//     }
//   },
//
//   // clear our the state, essentially logging out the user
//   [AUTH_MUTATIONS.LOGOUT] (state) {
//     state.id = null
//     state.email_address = null
//     state.access_token = null
//     state.refresh_token = null
//   },
// }
//
// export const actions = {
//   async login ({ commit, dispatch }, { emaiAddress, password }) {
//     // make an API call to login the user with an email address and password
//     const { data: { data: { user, payload } } } = await this.$axios.post(
//       '/api/auth/login',
//       { emailAddress, password }
//     )
//
//     // commit the user and tokens to the state
//     commit(AUTH_MUTATIONS.SET_USER, user)
//     commit(AUTH_MUTATIONS.SET_PAYLOAD, payload)
//   },
//
//   async register ({ commit }, { emailAddr, password }) {
//     // make an API call to register the user
//     const { data: { data: { user, payload } } } = await this.$axios.post(
//       '/api/auth/register',
//       { emailAddress, password }
//     )
//
//     // commit the user and tokens to the state
//     commit(AUTH_MUTATIONS.SET_USER, user)
//     commit(AUTH_MUTATIONS.SET_PAYLOAD, payload)
//   },
//
//   // given the current refresh token, refresh the user's access token to prevent expiry
//   async refresh ({ commit, state }) {
//     const { refreshToken } = state
//
//     // make an API call using the refresh token to generate a new access token
//     const { data: { data: { payload } } } = await this.$axios.post(
//       '/api/auth/refresh',
//       { refreshToken }
//     )
//
//     commit(AUTH_MUTATIONS.SET_PAYLOAD, payload)
//   },
//
//   // logout the user
//   logout ({ commit, state }) {
//     commit(AUTH_MUTATIONS.LOGOUT)
//   },
// }
//
// export const getters = {
//   // determine if the user is authenticated based on the presence of the access token
//   isAuthenticated: (state) => {
//     return state.access_token && state.access_token !== ''
//   },
// }
