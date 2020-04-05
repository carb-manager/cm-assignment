<template>
  <div class="card" @click="$emit('click')">
    <div class="image" :style="recipeImageStyle">
      <MealIcon v-if="!imageUrl" class="meal-icon" />
      <div class="image-overlay"></div>
      <Favorite v-bind:isFavorited="isFavorited" />
      <Badge v-bind:isPremium="isPremium" />
    </div>
    <div class="contents">
      <h3 class="title">{{ title }}</h3>
      <Ratings
        class="star-rating"
        v-bind:rating="rating"
        v-bind:ratings-count="ratingsCount"
        v-bind:show-ratings-count="true"
      />
      <div class="contents">
        <Durations v-bind:minutes="durationsInMinutes" />
        <Energy v-bind:value="energyValue" v-bind:unit="Energy" />
        <Macros v-bind:carbs="carbs" v-bind:protein="protein" v-bind:fats="fats" />
      </div>
    </div>
  </div>
</template>

<script>
import Macros from "./ui/Macros.vue";
import Ratings from "./ui/Ratings.vue";
import Energy from "./ui/Energy.vue";
import Durations from "./ui/Durations.vue";
import Favorite from "./ui/Favorite.vue";
import MealIcon from "../assets/meal.svg";

export default {
  name: "PremiumRecipeCard",
  components: {
    Macros,
    Ratings,
    Energy,
    Durations,
    Favorite,
    MealIcon
  },
  props: {
    title: {
      type: String,
      default: "Recipe Title"
    },
    rating: Number,
    ratingsCount: Number,
    isFavorited: {
      type: Boolean,
      default: false
    },
    isPremium: {
      type: Boolean,
      default: false
    },
    imageUrl: {
      type: String,
      default: ""
    },
    carbs: Number,
    protein: Number,
    fats: Number,
    durationsInMinutes: Number,
    energyValue: Number,
    Energy: String
  },
  computed: {
    recipeImageStyle() {
      return {
        "background-image": `url(${this.imageUrl})`
      };
    }
  },
  methods: {}
};
</script>
