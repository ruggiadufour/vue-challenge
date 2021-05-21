<template>
  <div class="d-flex flex-wrap justify-content-center gap10 m-3">
    <h1 class="display-5">
      You can find bestsellers and the most famous books here.
    </h1>
    <p class="display-6">
      Select a category, put a book title and get the results.
    </p>

    <div class="card-home">
      <p >Watch the book cards.</p>
      <img src="/card-book.png" class="e-h" alt="home watch card" />
    </div>
    <div class="card-home">
      <p >See more details.</p>
      <img src="/book-details.png" class="e-h" alt="home watch card" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {},
  created: async function() {},
};
</script>

<style>
.card-home {
  background: lightgray;
  padding: 10px;
}
.card-home p{
    font-size: 1.5rem;
}

.card-hom img {
  width: 100%;
}
</style>
