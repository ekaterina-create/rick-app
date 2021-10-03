export const state = () => ({
   episode: {}
})

export const mutations = {
   SET_EPISODE(state, data) {
      state.episode = data
   }
}

export const actions = {
   async fetchEpisode({ commit }, number) {

      let apiUrl = `https://rickandmortyapi.com/api/episode/${number}`

      await this.$axios.get(apiUrl).then(response => {

         let episode = response.data

         commit('SET_EPISODE', episode)

      })
   }
}

export const getters = {
   getEpisode(state) {
      return state.episode
   }
}
