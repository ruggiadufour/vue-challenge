<template>
  <div class="card card-hover" style="width: 18rem;">
    <img v-bind:src="book.book_image" class="image-h" alt="book" />
    <div class="card-body">
      <h3 class="card-title">{{ book.title }}</h3>
      <p class="card-text">
        {{ book.description }}
      </p>
      <h4>Author: {{ book.author }}</h4>
      <a
        v-bind:href="`https://www.google.com/search?q=${book.author}+${book.title}`"
        target="_blank"
        >Search in Google</a
      >
      <MoreDetails :book="book" />
    </div>
  </div>
</template>

<script>
import MoreDetails from "./MoreDetails.vue";

export default {
  name: "Card",
  props: ["book"],
  components: {
    MoreDetails,
  },
  data() {
    return {};
  },
  methods: {},
  created: function() {},
};
</script>

<style>
.card-hover {
  transition: transform 0.3s;
  overflow: hidden;
}
.card-hover:hover .image-h {
  transform: scale(1.1);
}
.image-h {
  max-height: 200px;
  object-fit: cover;
  transition: transform 0.3s;
}
</style>
