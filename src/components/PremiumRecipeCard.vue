<template>
  <div class="card">
    <div class="image">
      <div class="favorite"></div>
      <div class="badge"></div>
    </div>
    <div class="details">
      <h3 class="title"></h3>
      <div class="description"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PremiumRecipeCard",
  props: {
    title: {
      type: String,
      default: "Premium Recipe Title"
    },
    ratings: Number,
    ratingsCount: Number,
    isFavorite: {
      type: Boolean,
      default: false
    },
    imageUrl: {
      type: String,
      default: ""
    },
    durations: Number,
    carbs: Number,
    protein: Number,
    fats: Number,
    calories: Number
  },
  computed: {},
  methods: {}
};
</script>