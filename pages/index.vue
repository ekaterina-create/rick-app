<template>
  <section class="container">
    <div class="loader" 
    v-if="loading">
    Loading...
    </div>
    <div v-else>
      <h1 class="title">Персонажи мультфильма</h1>
      <select name="" id="" class="select" v-model="selected">
        <option disable value="Выберите статус">Выберите статус</option>
        <option value="alive">alive</option>
        <option value="dead">dead</option>
        <option value="unknown">unknown</option>
      </select>
      <form action="">
        <input type="text" v-model="search" placeholder="Поиск......" />
      </form>
        <div class="pagination">
        <button
          @click="changeCurrentPage(n)"
          :class="{ active: currentPage === n }"
          v-for="n in pages"
          :key="`pagination-item__${n}`"
        >
          {{ n }}
        </button>
      </div> 
      <div class="list"> 
        <card
          v-for="hero in filterByStatus(filterByName)"
          :key="hero.id"
          :hero="hero"
        />
      </div>
       </div>
  </section>
</template>

<script>
import Card from "@/components/MainCard";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Card,
  },
  name: "Main",
  methods: {
    ...mapActions("main", ["fetchData"]),
    changeCurrentPage(number) {
      this.currentPage = number;
      this.fetchData(this.currentPage);
    },
    filterByStatus(items) {
      if (this.selected !== "Выберите статус") {
        return items.filter(
          (item) => item.status.toLowerCase() === this.selected
        );
      } else {
        return items;
      }
    }
  },
  mounted() {
    this.fetchData(this.currentPage)
    .then(
      this.pages = this.getData.info.pages,
      this.loading = false
    )},
  computed: {
    ...mapGetters("main", ["getData"]),
    filterByName: function () {
      if (this.search !== "") {
        return this.getData.results.filter(
          (item) => item.name.toLowerCase().indexOf(this.search) !== -1
        );
      } else {
        return this.getData.results;
      }
    },
  },
  data() {
    return {
      loading: true,
      currentPage: 1,
      selected: "Выберите статус",
      search: "",
      pages: ''
    };
  },
};
</script>

<style>
.container {
  position: relative;
  display: flex;
  width: 80%;
  min-height: 70vh;
  margin: 0 auto;
}

.title {
  text-align: center;
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 100;
  font-size: 50px;
  color: #35495e;
  margin-bottom: 20px;
}
.select {
  display: inline-block;
  border: 1px solid #e5e5e5;
  width: 300px;
  padding: 10px;
  margin-bottom: 20px;
  margin-right: 50px;
  border-radius: 5px;
}

form {
  display: inline-block;
  width: 700px;
}
input {
  padding: 10px;
  width: 75%;
  height: 100%;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
}
button {
  border-radius: 5px;
  font-size: 18px;
  color: #333;
  border: none;
  padding: 7px 20px;
}
.list {
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.pagination {
  margin-top: 40px;
  padding-bottom: 20px;
  display: inline-block;
}

.pagination button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  border: none;
  color: black;
  padding: 8px 16px;
  margin-right: 6px;
  text-decoration: none;
}

.pagination button.active {
  background-color: #4caf50;
  color: white;
}

.pagination button:hover:not(.active) {
  background-color: #ddd;
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

