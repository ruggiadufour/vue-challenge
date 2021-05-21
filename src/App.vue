<template>
  <div id="app">
    <div class="navbar navbar-dark bg-dark">
      <div class="container">
        <router-link
          class="display-6 text-light text-decoration-none m-2"
          to="/"
          >Book finder 📚</router-link
        >
        <div class="d-flex flex-wrap justify-content-center auto ">
          <select
            name="select"
            placeholder="Select a category"
            class="input"
            v-model="selectedCategory"
          >
            <option value="">
              {{ categories.length ? "Select a category" : "Loading" }}
            </option>
            <option
              v-for="category in categories"
              v-bind:value="category.list_name_encoded"
            >
              {{ category.list_name }}
            </option>
          </select>
          <input
            :disabled="selectedCategory == ''"
            type="text"
            class="input"
            placeholder="Search books 🕵️‍♀️"
            v-model="search"
          />
          <button
            :disabled="selectedCategory == ''"
            class="search-button auto"
            v-on:click="searchBook()"
          >
            🔎
          </button>
        </div>
      </div>
    </div>
    <div class="view">
      <router-view />
    </div>
    <footer class="navbar navbar-dark bg-dark d-flex justify-content-center">
      <a
        href="https://github.com/ruggiadufour/bigbox-challenge"
        target="_blank"
      >
        <img src="/github.png" alt="github" width="50px" />
      </a>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/global.css";
import Search from "./components/Search.vue";
import Home from "./components/Home.vue";

export default {
  name: "app",
  components: {
    Search,
    Home,
  },
  data() {
    return {
      categories: [],
      selectedCategory: "",
      search: "",
    };
  },
  methods: {
    searchBook() {
      if (this.search !== "") {
        this.$router.push(
          `/search?category=${this.selectedCategory}&book_title=${this.search}`
        );
      }
    },
  },
  created: async function() {
    const { data } = await axios(
      "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=wMrIxYjKdpTQq76wy7ngPAG1OD0VJy8j"
    );
    this.categories = data.results;
  },
};
</script>

<style>
#app{
  height:100vh;
  position: relative;
  display: flex;
  flex-direction: column;
}
.view{
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
}


.search-button {
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
}
.input {
  padding: 0.7rem 7px;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.8);
  border: solid thin rgba(0, 0, 0, 0.1);
  outline: none;
  color: black;
  width: auto;
  border-radius: 4px 4px 0 0;
}
@media (max-width: 600px) {
  .input {
    width: 100%;
  }
}
.input:focus {
  outline: none;
  background-color: rgba(255, 255, 255, 1);
}
.input:hover {
  background-color: rgba(255, 255, 255, 0.4);
}
</style>
