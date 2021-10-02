<template>
   <div class="card">
  <img :src="character.image" alt="Avatar" style="width:100%">
  <div class="card__container">
    <nuxt-link 
    :to="`/character/${character.id}`">
    {{character.name}}
    </nuxt-link>
     <p>{{character.species}}</p>
    <p>{{character.status}}</p>
     <p>{{info.name}}</p>
     <p>{{info[0]}}</p>
    </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  props: ['hero'],
  data() {
    return {
      info: '',
      character: this.hero
    }
},

// mounted() {
//   axios.get(`${this.character.episode[1]}`)
//     .then(response => this.info = response);
// }
 
}
</script>


<style>
.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 100%;
    height: 400px;
}
.card__title{
  width: 100%;
  margin-bottom: 10px;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.card__container {
    padding: 10px;
}
</style>