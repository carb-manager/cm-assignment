<template>
  <div>
    <div>
      <img />
      <premium-badge></premium-badge>
    </div>
    <div>
      <h2>{{ title }}</h2>
      <div>
        <star-rating :stars="3" :ratings="200"></star-rating>
      </div>
      <div>
        <div><img alt="Preparation time" src="../assets/clock.svg" />24 min</div>
        <div><img alt="Calories" src="../assets/cals.svg" />489 calories</div>
        <div>
          <ul>
            <li>20g</li>
            <li>16g</li>
            <li>6g</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "./StarRating";
import PremiumBadge from "./PremiumBadge";

export default {
  name: "PremiumRecipeCard",
  components: { StarRating, PremiumBadge },
  props: {
    title: String
  }
};
</script>
