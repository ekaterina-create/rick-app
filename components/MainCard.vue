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
    <h2 class="card__subtitle">Episodes</h2>
    <div class="card__wrapper">
    <nuxt-link
      to="/"
      class="card__link"
      v-for="episode in sliceEpisodes" 
      :key='episode'>{{ episode }}</nuxt-link>
    </div>
     </div>
</div>
</template>

<script>

export default {
  props: ['hero'],
  data() {
    return {
      info: '',
      character: this.hero
    }
},
computed: {
    sliceEpisodes: function () {
      return this.character.episode.slice(0, 5).map(item => item.slice(-2).replace('/', ''))
    }
  }
}
</script>


<style>
.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 100%;
    height: 600px;
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
.card__subtitle{
  margin: 10px 0;
}
.card__wrapper{
  display: flex;
}
.card__link{
  display: block;
  font-size: 25px;
  font-weight: 700;
  margin-right: 15px;
  color: blue;
}
</style>