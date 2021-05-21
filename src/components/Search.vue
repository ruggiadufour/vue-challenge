<template>
  <div class="d-flex flex-column flex-wrap align-items-center justify-content-center m-3">
    <h1 v-if="loading === true">⏳</h1>
    <h1 v-if="books.length === 0 && loading === false">No results</h1>

    <div class="d-flex flex-wrap justify-content-center gap10">
      <div v-for="book in books" v-bind:key="book.primary_isbn10">
        <Card :book="book" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import axios from "axios";
export default {
  name: "Search",
  components: {
    Card,
  },
  data() {
    return {
      books: [],
      loading: true,
    };
  },
  methods: {
    async search() {
      this.loading = true;
      const { book_title, category } = this.$route.query;
      try {
        const { data } = await axios(
          `https://api.nytimes.com/svc/books/v3/lists/current/${category}.json?api-key=wMrIxYjKdpTQq76wy7ngPAG1OD0VJy8j`
        );
        const books_ = data.results.books;

        const filtered_books = books_.filter((book) => {
          return book.title.toLowerCase().includes(book_title.toLowerCase());
        });
        this.books = filtered_books;
        this.loading = false;
      } catch (error) {
        this.loading = false;
      }
    },
  },
  watch: {
    $route: async function() {
      this.search();
    },
  },
  created: async function() {
    this.search();
  },
};
</script>

<style></style>
