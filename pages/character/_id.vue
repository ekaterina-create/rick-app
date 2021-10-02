<template>
<div class="container hero__container">
   <nuxt-link to='/' class='hero__link'>
   Назад
   </nuxt-link>
   <h1 class="title">{{getHero.name}}</h1>
   <p class="hero__text">{{getHero.location.name}}</p>
   <p class="hero__text">{{getHero.species}}</p>
  <img class="hero__img" :src="getHero.image" alt="">
</div>
   
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Hero',
  methods: {
    ...mapActions('hero', [
      'fetchHero'
    ]),
    },
  mounted () {
    this.fetchHero(this.$route.params.id)
  },
  computed: {
    ...mapGetters('hero', [
      'getHero'
    ]),
    
  },
  
}
  

</script>

<style>
.hero__container{
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
}
.hero__link{
   display: block;
   color: #333;
   margin-bottom: 20px;
   font-size: 20px;
}
.hero__text{
color:blue;
margin-bottom: 20px;
font-size: 40px;
}
.hero__img{
   width: 600px;
   height: 600px;
   object-fit: contain;
}
</style>

