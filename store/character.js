export const state = () => ({
   hero: {}
 })
  
 export const mutations = {
   SET_HERO (state, data) {
     state.hero = data
   }
 }
  
 export const actions = {
   async fetchHero ({ commit }, id) {
       
         let apiUrl = `https://rickandmortyapi.com/api/character/${id}`
  
        await this.$axios.get(apiUrl).then(response => {
         
         let hero = response.data
         
         commit('SET_HERO', hero)
        
             })
   }
 }
  
 export const getters = {
   getHero (state) {
     return state.hero
   }
 }
 