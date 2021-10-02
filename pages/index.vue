<template>
  <section class="container">
      <div>
        <h1 class="title">
       Персонажи мультфильма
      </h1>
      <ul>
       
      <card v-for="hero in getData.results"
         :key=hero.id
         :hero="hero"/> 
      </ul>
     <div class="pagination" v-if="getData.info !== undefined">
          <button
          @click="changeCurrentPage(n)"
          :class="{'active' : currentPage === n}" 
          v-for="n in getData.info.pages"
          :key="`pagination-item__${n}`">
          {{ n }}
        </button>
  
        </div> 
      </div>
          
  </section>
</template>

<script>
import Card from '@/components/MainCard'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Card
  },
  name: 'Main',
  methods: {
    ...mapActions('characters', [
      'fetchData'
    ]),
    changeCurrentPage (number) {
      this.currentPage = number
      this.fetchData(this.currentPage)
   }
  },
  async mounted () {
    this.fetchData(this.currentPage)
  },
  computed: {
    ...mapGetters('characters', [
      'getData'
    ]),
    
  },
  data() {
        return {
            currentPage: 1
        };
    },
}
  

</script>

<style>
.container {
  min-height: 80vh;
  display: flex;
  max-width: 1300px;
  margin: 0 auto;
}

.title {
  text-align: center;
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 100;
  font-size: 50px;
  color: #35495e;
  margin-bottom: 20px;
}

ul {
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.pagination {
  margin-top: 20px;
  padding-bottom: 20px;
  display: inline-block;
}

.pagination button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  border: none;
  color: black;
  padding: 8px 16px;
  margin-right: 6px;
  text-decoration: none;
}

.pagination button.active {
  background-color: #4CAF50;
  color: white;
}

.pagination button:hover:not(.active) {background-color: #ddd;}
</style>

