<template>
  <div id="app">
    <div class="cm-container">
      <div class="cm-logo-wrapper">
        <CarbManager style="width:200px"/>
      </div>
      <h2>Carb Manager Dev Assignment</h2>
      <p>See the README file for assignment requirements.</p>
      <div class="premium-recipe-wrapper">
        <PremiumRecipeCard 
          title="Low Carb Thai Chicken Curry With Coconut Cauliflower Rice"
          recipeImageUrl="/chicken.jpg"
          v-bind:favorite="true"
          v-bind:carbs="55"
          v-bind:protein="21"
          v-bind:fats="5"
          v-bind:recipeDurationMinutes="60"
          v-bind:energyValue="320"
          v-bind:rating="3.24"
          v-bind:ratingsCount="221"
        />
        <PremiumRecipeCard 
          v-bind:favorite="false"
          v-bind:carbs="55"
          v-bind:protein="21"
          v-bind:fats="5"
          v-bind:rating="3.25"
          v-bind:energyValue="320"
          v-bind:recipeDurationMinutes="31"
          energyUnit="kJ"
        />
        <PremiumRecipeCard 
          v-bind:v-bind:favorite="true"
          title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, laborum."
          v-bind:carbs="55"
          v-bind:protein="21"
          v-bind:fats="5"
          v-bind:recipeDurationMinutes="1"
          v-bind:rating="4.9"
        />
        <RecipeOfTheDayCard 
          recipeImageUrl="/noodles.jpeg"
          title="Keto Italian Beef With Cabbage Noodles"
          v-bind:rating="3.2"
          v-bind:carbs="11"
          v-bind:protein="5"
          v-bind:fats="3"
        />
        <RecipeOfTheDayCard 
          recipeImageUrl="/noodles.jpeg"
          title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, laborum."
          v-bind:rating="5"
          v-bind:carbs="522"
          v-bind:protein="100"
          v-bind:fats="51"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import PremiumRecipeCard from "./components/PremiumRecipeCard.vue";
  import RecipeOfTheDayCard from "./components/RecipeOfTheDayCard.vue";
  import CarbManager from "./assets/cm-logo.svg";

  export default {
    name: "App",
    components: {
      PremiumRecipeCard,
      RecipeOfTheDayCard,
      CarbManager
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
    max-width: 1200px;
    margin: auto;
  }

  .premium-recipe-wrapper{
    display: flex;
    flex-flow: row wrap;
    flex: 1 0 50%; 
  }

  .premium-recipe-wrapper > div{
    margin: 20px;
  }
</style>
