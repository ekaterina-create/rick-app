<template>
<div class="container episode__container">
   <nuxt-link to='/' class='episode__link'>
       Назад
   </nuxt-link>
   <div v-if="loading" class="loader">Loading...</div>
   <div v-else>
      <h1 class="title">
        {{episode.name}}
        </h1>
     <p class="episode__text"> 
        {{episode.air_date}}
      </p>
   </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Episode',
  methods: mapActions ({
    'fetchEpisode': 'episode/fetchEpisode'
  }),
   
  async mounted () {
    this.fetchEpisode(this.$route.params.id)
    .then(
        setTimeout(() => this.loading = false, 300),
            
    )    
    },
  computed:mapGetters({
    episode:'episode/getEpisode'
   }),
   
  data () {
    return {
      loading: true
    }
  },
 
}
 
</script>

<style>
.episode__container{
  position: relative;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
}
.episode__link{
   display: block;
   color: #333;
   margin-bottom: 20px;
   font-size: 20px;
}
.episode__text{
color:blue;
margin-bottom: 20px;
font-size: 40px;
}
.episode__img{
   width: 600px;
   height: 600px;
   object-fit: contain;
}
.loader{
position: absolute;
height: 100%;
width: 100%;
top: 0;
left: 0;
bottom: 0;
display: flex;
align-items: center;
justify-content: center;
font-size: 100px;
}
</style>

