<template>
  <div class="card" @click="$emit('click')">
    <div class="overlay"></div>
    <div class="header">
      <div class="food-picture">
        <img v-bind:src="this.getImageUrl(pictureFileName)" />
      </div>
      <Favorite v-bind:isFavorite="isFavorite" />
      <div class="badge">
        <img src="../assets/trophy.svg" class="trophy-icon" />
        <span class="title">Premium Recipe</span>
      </div>
    </div>
    <div class="body">
      <div class="title">{{ title }}</div>
      <Ratings
        v-bind:rating="rating"
        v-bind:ratingsCount="ratingsCount"
        v-bind:showedRatingsCount="true"
      />
      <div class="break" />
      <div class="details">
        <Durations v-bind:minutes="durationsInMinutes" />
        <Energy v-bind:value="energyValue" v-bind:units="energyUnit" />
        <Nutrition v-bind:carbs="carbs" v-bind:protein="protein" v-bind:fats="fats" />
      </div>
    </div>
  </div>
</template>

<script>
import Nutrition from "./ui/Nutrition.vue";
import Ratings from "./ui/Ratings.vue";
import Energy from "./ui/Energy.vue";
import Durations from "./ui/Durations.vue";
import Favorite from "./ui/Favorite.vue";

export default {
  name: "PremiumRecipeCard",
  components: {
    Nutrition,
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
    pictureFileName: {
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
    getImageUrl(fileName) {
      return require("../assets/" + fileName);
    }
  }
};
</script>


<style scoped>
.card {
  width: 343px;
  max-width: 343px;
  text-align: left;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0px 13px 35px rgba(0, 30, 47, 0.1);
}

.overlay {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0%,
    rgba(22, 27, 35, 0.2) 70.94%,
    rgba(26, 29, 34, 0.79) 106.25%
  );
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}

.card .overlay:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  transition: background 80ms linear;
  background: rgba(255, 255, 255, 0);
}

.card:hover .overlay:after {
  background: rgba(255, 255, 255, 0.2);
}

.card .header {
  color: red;
}

.card .header .food-picture {
  height: 200px;
  position: relative;
  background-position: center center;
  background-size: cover;
}

.card .header .favorite {
  position: absolute;
  top: 25px;
  left: 315px;
  z-index: 3;
}

.card .header .badge {
  position: absolute;
  top: 185px;
  left: 10px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 5px 10px;
  border-radius: 10px;
  z-index: 2;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.2px;
  color: #ffffff;
}

.card .header .badge .title {
  font-weight: 600;
  font-size: 12px;
  font-family: Proxima Nova;
}

.card .body {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
  flex-wrap: wrap;
  padding: 10px;
  background: #fff;
}

.card .body .break {
  flex-basis: 100%;
  height: 2px;
}

.card .body .title {
  font-size: 18px;
  line-height: 20px;
  margin: 0;
  padding-top: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-style: normal;
  font-weight: bold;
  color: #0c0c0a;
  margin-bottom: 8px;
}

.card .body .details {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.card .body .details .durations {
  margin-right: 10px;
}

.card .body .details .nutrition {
  position: absolute;
  margin-left: 198px;
}
</style>
