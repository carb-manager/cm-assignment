<template>
  <div>
    <div>
      <!-- Head -->
      <img />
      <span>
        <img alt="Premium Recipe" src="../assets/trophy.svg" />
        Premium Recipe
      </span>
    </div>
    <div>
      <!-- Body -->
      <h2>{{ title }}</h2>
      <!-- Rating -->
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

export default {
  name: "PremiumRecipeCard",
  components: { StarRating },
  props: {
    title: String
  }
};
</script>
