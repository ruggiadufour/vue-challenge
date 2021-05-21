<template>
  <div>
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      v-bind:data-bs-target="'#' + book.title.replaceAll(' ', '-')"
    >
      See details
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      v-bind:id="book.title.replaceAll(' ', '-')"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              {{ book.title }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <img
              class="image-in-details"
              v-bind:src="book.book_image"
              v-bind:alt="book.title + book.author"
            />
            <p>
              <strong>Ranking:</strong> {{ book.rank }} -
              <strong>Last week ranking:</strong> {{ book.rank_last_week }}
            </p>
            <p>
              <strong>ISBN-10:</strong> {{ book.primary_isbn10 }} -
              <strong>ISBN-13:</strong> {{ book.primary_isbn13 }}
            </p>
            <p>
              <strong>Publisher:</strong> {{ book.publisher }} -
              <strong>Contributor: </strong> {{ book.contributor }}
            </p>
            <p><strong>Age group:</strong> {{ book.age_group }}</p>
            <p><strong>Price:</strong> {{ book.price }}</p>
            <p>
              <a v-bind:href="book.amazon_product_url">Amazon product link</a>
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoreDetails",
  props: ["book"],
  data() {
    return {};
  },
  methods: {},
  created: function() {},
};
</script>

<style>
    .image-in-details{
        height: 400px;
        margin: auto;
        display: block;
    }
</style>
