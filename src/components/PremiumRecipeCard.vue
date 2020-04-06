<template>
  <div class="card" @click="$emit('click')">
    <div class="image-top" :style="recipeImageStyle">
      <div class="overlay"></div>
      <MealIcon v-if="!imageUrl" class="meal-icon" />
      <Favorite v-bind:isFavorited="isFavorited" />
      <Badge v-bind:isPremium="isPremium" />
    </div>
    <div class="contents-bottom">
      <h3 class="title">{{ title }}</h3>
      <Ratings v-bind:rating="rating" v-bind:ratingsCount="ratingsCount" v-bind:isShowed="true" />
      <div class="details">
        <Durations v-bind:minutes="durationsInMinutes" />
        <Energy v-bind:value="energyValue" v-bind:units="energyUnit" />
        <Macros v-bind:carbs="carbs" v-bind:protein="protein" v-bind:fats="fats" />
      </div>
    </div>
  </div>
</template>

<script>
import Macros from "./ui/Macros.vue";
import Badge from "./ui/Badge.vue";
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
    MealIcon,
    Badge
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
    energyUnit: String
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
