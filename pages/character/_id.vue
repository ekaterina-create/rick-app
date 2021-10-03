<template>
  <div class="container hero__container">
    <nuxt-link to="/" class="hero__link"> Назад </nuxt-link>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <h1 class="title">
        {{ hero.name }}
      </h1>
      <p class="hero__text">
        {{ hero.species }}
      </p>
      <p class="hero__text" v-if="hero.location !== undefined">
        {{ hero.location.name }}
      </p>
      <img class="hero__img" :src="hero.image" alt="" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Character",
  methods: {
    ...mapActions("character", ["fetchHero"]),
  },
  mounted() {
    this.fetchHero(this.$route.params.id).then((this.loading = false));
  },
  computed: mapGetters({
    hero: "character/getHero",
  }),
  data() {
    return {
      loading: true,
    };
  },
};
</script>

<style>
.hero__container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.hero__link {
  display: block;
  color: #333;
  margin-bottom: 20px;
  font-size: 20px;
}
.hero__text {
  color: blue;
  margin-bottom: 20px;
  font-size: 40px;
}
.hero__img {
  width: 600px;
  height: 600px;
  object-fit: contain;
}
</style>

