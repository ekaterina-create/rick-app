<template>
  <div class="card">
    <img class="card__img" :src="character.image" alt="Avatar"/>
    <div class="card__container">
      <nuxt-link 
      class="card__title"
      :to="`/character/${character.id}`">
        {{ character.name }}
      </nuxt-link>
      <p>{{ character.species }}</p>
      <p>{{ character.status }}</p>
      <h2 class="card__subtitle">Episodes</h2>
      <div class="card__wrapper">
        <nuxt-link
          :to="`/episode/${episode}`"
          class="card__link"
          v-for="episode in sliceEpisodes"
          :key="episode"
          >{{ episode }}</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["hero"],
  data() {
    return {
      info: "",
      character: this.hero,
    };
  },
  computed: {
    sliceEpisodes: function () {
      return this.character.episode
        .slice(0, 5)
        .map((item) => item.slice(-2).replace("/", ""));
    },
  },
};
</script>


<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  height: 420px;
}
.card__img{
  display: block;
  width: 100%;
  height: 260px;
  object-fit: cover;
}
.card__title {
  width: 100%;
  font-size: 18px;
  color: #333;
  font-weight: 700;
  margin-bottom: 10px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.card__container {
  padding: 10px;
}
.card__subtitle {
  margin: 10px 0;
  font-size: 15px;
}
.card__wrapper {
  display: flex;
}
.card__link {
  display: block;
  font-size: 18px;
  font-weight: 700;
  margin-right: 15px;
  color: blue;
}
</style>