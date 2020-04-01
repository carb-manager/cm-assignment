<template>
  <div id="app">
    <div class="cm-container">
      <div class="cm-logo-wrapper">
        <div class="cm-logo">
          <cm-logo />
        </div>
      </div>
      <h2>Carb Manager Dev Assignment</h2>
      <p>See the README file for assignment requirements.</p>

      <div class="premium-recipe-wrapper">
        <RecipeCard
          :recipe="mockRecipe"
          energy-units="calories"
          :is-premium="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RecipeCard from './components/RecipeCard.vue';
import cmLogo from '@/assets/cm-logo.svg';
import { mockRecipe } from '../tests/mocks';

export default {
  name: 'App',
  components: {
    RecipeCard,
    cmLogo
  },
  data() {
    return {
      mockRecipe
    };
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

#app {
  font-family: 'proxima-nova', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style lang="scss" scoped>
.cm-logo-wrapper {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
}

.cm-logo {
  max-width: 150px;
  height: auto;

  svg {
    width: 150px;
  }
}

.cm-container {
  max-width: 960px;
  margin: auto;
}

/** Remove these styles when done */
.premium-recipe-wrapper {
  margin-top: 100px;
  padding: 16px;
}
</style>
