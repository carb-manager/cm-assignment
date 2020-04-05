<template>
  <div class="cm-c-card">
    <div class="cm-c-card__head">
      <img :alt="title" :src="image" class="cm-c-card__image" />
      <div class="cm-c-card__head-content">
        <premium-badge v-if="isPremium"></premium-badge>
        <heart :isHearted="isHearted"></heart>
      </div>
    </div>
    <div class="cm-c-card__body">
      <h2 class="cm-c-card__title">{{ title }}</h2>
      <star-rating :stars="stars" :ratings="ratings"></star-rating>
      <div class="cm-u-flex">
        <bullet
          v-if="preparationTime"
          alt="Preparation time"
          :icon="clockIcon"
          :text="`${preparationTime} min`"
          spacing="medium"
        ></bullet>
        <bullet
          v-if="calories"
          alt="Calories"
          :icon="calsIcon"
          :text="`${calories} calories`"
          spacing="medium"
        ></bullet>

        <div class="cm-u-flex-grow"></div>

        <bullet
          v-if="carbs"
          alt="20g Carbs"
          :icon="carbsIcon"
          :text="`${carbs}g`"
          spacing="small"
        ></bullet>
        <bullet
          v-if="protein"
          alt="16g Protein"
          :icon="proteinIcon"
          :text="`${protein}g`"
          spacing="small"
        ></bullet>
        <bullet
          v-if="fats"
          alt="6g Fats"
          :icon="fatsIcon"
          :text="`${fats}g`"
          spacing="small"
        ></bullet>
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
    image: String,
    title: String,
    preparationTime: Number,
    calories: Number,
    carbs: Number,
    protein: Number,
    fats: Number,
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
