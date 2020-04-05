<template>
  <div>
    <div>
      <img :alt="title" />
      <premium-badge v-if="isPremium"></premium-badge>
      <heart :isHearted="isHearted"></heart>
    </div>
    <div>
      <h2>{{ title }}</h2>
      <star-rating :stars="stars" :ratings="ratings"></star-rating>
      <div>
        <bullet
          v-if="preparationTime"
          alt="Preparation time"
          :icon="clockIcon"
          :text="preparationTime"
        ></bullet>
        <bullet v-if="calories" alt="Calories" :icon="calsIcon" :text="calories"></bullet>

        <bullet v-if="carbs" alt="20g Carbs" :icon="carbsIcon" :text="carbs"></bullet>
        <bullet v-if="protein" alt="16g Protein" :icon="proteinIcon" :text="protein"></bullet>
        <bullet v-if="fats" alt="6g Fats" :icon="fatsIcon" :text="fats"></bullet>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "./StarRating";
import PremiumBadge from "./PremiumBadge";
import Bullet from "./Bullet";
import Heart from "./Heart";

import clockIcon from "../assets/clock.svg";
import calsIcon from "../assets/cals.svg";
import carbsIcon from "../assets/dot-carbs.svg";
import proteinIcon from "../assets/dot-protein.svg";
import fatsIcon from "../assets/dot-fats.svg";

export default {
  name: "premium-recipe-card",
  components: { StarRating, PremiumBadge, Bullet, Heart },
  props: {
    title: String,
    preparationTime: String,
    calories: String,
    carbs: String,
    protein: String,
    fats: String,
    ratings: {
      type: Number,
      required: false,
      default: 0
    },
    stars: {
      type: Number,
      required: false,
      default: 0
    },
    isPremium: {
      type: Boolean,
      required: false,
      default: false
    },
    isHearted: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      clockIcon,
      calsIcon,
      carbsIcon,
      proteinIcon,
      fatsIcon
    };
  }
};
</script>
