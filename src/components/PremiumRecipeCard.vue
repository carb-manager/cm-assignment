<template>
  <div>
    <div>
      <img />
      <premium-badge></premium-badge>
    </div>
    <div>
      <h2>{{ title }}</h2>
      <star-rating :stars="3" :ratings="200"></star-rating>
      <div>
        <bullet alt="Preparation time" :icon="clockIcon" text="24 min"></bullet>
        <bullet alt="Calories" :icon="calsIcon" text="489 calories"></bullet>

        <bullet alt="20g Carbs" :icon="carbsIcon" text="20g"></bullet>
        <bullet alt="16g Protein" :icon="proteinIcon" text="16g"></bullet>
        <bullet alt="6g Fats" :icon="fatsIcon" text="6g"></bullet>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "./StarRating";
import PremiumBadge from "./PremiumBadge";
import Bullet from "./Bullet";

import clockIcon from "../assets/clock.svg";
import calsIcon from "../assets/cals.svg";
import carbsIcon from "../assets/dot-carbs.svg";
import proteinIcon from "../assets/dot-protein.svg";
import fatsIcon from "../assets/dot-fats.svg";

export default {
  name: "premium-recipe-card",
  components: { StarRating, PremiumBadge, Bullet },
  props: {
    title: String
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
