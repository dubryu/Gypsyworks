export const state = () => ({
    access_token: 'c26d324daa74924ca3c621512a9619fdbfaaf012a183d2756105efd9a1cf02a7'
});

export const mutations = {
    addToken(state, token) {
        state.access_token = token
    },
}
