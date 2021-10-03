export const state = () => ({
  data: [],
  currentPage: 1
})

export const mutations = {
  SET_DATA(state, data) {
    state.data = data
  }
}

export const actions = {
  
  async fetchData({ commit }, currentPage = '') {
     let apiUrl;
     if(currentPage !== '') {
      apiUrl = `https://rickandmortyapi.com/api/character/?page=${currentPage}`
     } else {
      apiUrl = `https://rickandmortyapi.com/api/character`
     }
    
    await this.$axios.get(apiUrl).then(response => {

      let data = response.data

      commit('SET_DATA', data)

    })
  }
}

export const getters = {
  getData(state) {
    return state.data
  }
}
