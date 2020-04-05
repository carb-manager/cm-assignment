<template>
  <div class="ratings">
    <div v-if="showRatingsCount" class="ratings-count">
      {{ ratingsCount }} rating
      <span v-if="ratingsCount != 1">s</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ratings",
  props: {
    rating: {
      type: Number,
      default: 0
    },
    ratingsCount: {
      type: Number,
      default: 1
    },
    showRatingsCount: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    starsCount() {
      let rating = Math.min(Math.max(parseFloat(this.rating), 0), 5);
      return Math.round(rating * 2) / 2;
    }
  }
};
</script>
