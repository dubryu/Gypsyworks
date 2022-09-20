export const state = () => ({
    access_token: 'defffaulttt'
});

export const mutations = {
    addToken(state, token) {
        state.access_token = token
    },
}
