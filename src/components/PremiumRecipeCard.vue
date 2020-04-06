<template>
  <div class="card" @click="$emit('click')">
    <div class="top">
      <div class="food-picture">
        <img v-bind:src="this.getImgUrl(foodPicture)" />
      </div>
      <Favorite v-bind:isFavorite="isFavorite" />
      <div class="badge" v-if="isPremium">
        <img v-bind:src="this.getImgUrl('trophy.svg')" class="trophy-icon" />Premium Recipe
      </div>
      <div class="overlay"></div>
    </div>
    <div class="bottom">
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
import Ratings from "./ui/Ratings.vue";
import Energy from "./ui/Energy.vue";
import Durations from "./ui/Durations.vue";
import Favorite from "./ui/Favorite.vue";

export default {
  name: "PremiumRecipeCard",
  components: {
    Macros,
    Ratings,
    Energy,
    Durations,
    Favorite
  },
  props: {
    title: {
      type: String,
      default: "Recipe Title"
    },
    rating: Number,
    ratingsCount: Number,
    isFavorite: {
      type: Boolean,
      default: false
    },
    isPremium: {
      type: Boolean,
      default: false
    },
    foodPicture: {
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
  computed: {},
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic);
    }
  }
};
</script>
