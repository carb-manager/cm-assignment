<template>
  <div id="app">
    <div class="cm-container">
      <div class="cm-logo-wrapper">
        <img alt="Carb Manager" src="./assets/cm-logo.svg" class="cm-logo" />
      </div>
      <h2>Carb Manager Dev Assignment</h2>
      <p>See the README file for assignment requirements.</p>

      <div class="premium-recipe-wrapper">
        <PremiumRecipeCard
          title="Low Carb Thai Chicken Curry With Coconut Cauliflower Rice"
          energy-units="calories"
          :image="CurryImage"
          :preparationTime="61"
          :calories="300"
          :carbs="20"
          :protein="16"
          :fats="6"
          :ratings="200"
          :stars="3"
          :isPremium="true"
          :isHearted="true"
        />
        <PremiumRecipeCard
          title="Low Carb Philly Cheesesteak Skillet"
          energy-units="kilojoules"
          :image="CheeseSteakImage"
          :preparationTime="35"
          :calories="426"
          :carbs="2"
          :protein="43"
          :fats="26"
          :ratings="684"
          :stars="4.5"
          :isPremium="false"
          :isHearted="false"
        />
        <PremiumRecipeCard
          title="Low Carb Creamy Balsamic Chicken With Sundried Tomatoes"
          energy-units="calories"
          :image="BalsamicChicken"
          :preparationTime="40"
          :calories="331"
          :carbs="6"
          :protein="37"
          :fats="16"
          :ratings="135"
          :stars="4.5"
          :isPremium="true"
          :isHearted="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PremiumRecipeCard from "./components/PremiumRecipeCard.vue";

import CurryImage from "../src/assets/recipes/lowcarbthaichickencurry.jpeg";
import CheeseSteakImage from "../src/assets/recipes/phillycheesesteak.jpeg";
import BalsamicChicken from "../src/assets/recipes/balsamicchicken.jpeg";

export default {
  name: "App",
  components: {
    PremiumRecipeCard
  },
  data() {
    return {
      CurryImage,
      CheeseSteakImage,
      BalsamicChicken
    };
  }
};
</script>

<style>
#app {
  font-family: "proxima-nova", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
.cm-logo-wrapper {
  margin-bottom: 30px;
}

.cm-logo {
  max-width: 150px;
  height: auto;
}

.cm-container {
  max-width: 960px;
  margin: auto;
}

.premium-recipe-wrapper {
  display: flex;
  flex-direction: column;
}

.premium-recipe-wrapper .cm-c-card {
  margin: 0.5rem 0;
}

@media screen and (min-width: 768px) {
  .premium-recipe-wrapper {
    flex-direction: row;
  }

  .premium-recipe-wrapper .cm-c-card:first-child {
    margin-right: 0.5rem;
  }

  .premium-recipe-wrapper .cm-c-card:last-child {
    margin-left: 0.5rem;
  }
}
</style>
