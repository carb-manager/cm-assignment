<template>
  <div>{{ recipe.title }}</div>
</template>
<script>
export default {
  name: 'RecipeCard',
  props: {
    recipe: {
      type: Object,
      required: true,
    },
    isPremium: Boolean,
    energyUnits: {
      type: String,
      required: true,
      validator: value => {
        const isValid = ['calories', 'kilojoules'].includes(value);
        if (!isValid) {
          console.error(`energyUnits prop must include "calories" or "kilojoules".`);
        }
        return isValid;
      },
    },
  },
};
</script>
