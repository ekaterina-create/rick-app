<template>
  <section class="container">
    <div>
        <h1 class="title">
       Персонажи мультфильма
      </h1>
      <ul>
       
       <card v-for="hero in data.results"
         :key=hero.id
         :hero="hero"/> 
      </ul>
      
      </div>
  </section>
</template>

<script>
import axios from "axios";
import Card from '@/components/MainCard'

export default {
  components: {
    Card
  },
  name: 'Main',
   data () {
            return {
                characters: []
            }
        },
  
 async asyncData() {
     const { data } = await axios.get(
      'https://rickandmortyapi.com/api/character'
    );
        return {data} 
  }  
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
}

.title {
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
  gap: 30px;
}

</style>

