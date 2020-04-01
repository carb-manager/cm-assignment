import { withKnobs, number } from '@storybook/addon-knobs';

import RecipeNutrition from '../src/components/RecipeNutrition.vue';

export default {
  title: 'RecipeNutrition',
  component: RecipeNutrition,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { RecipeNutrition },
  props: {
    nutrition: {
      default: {
        carbs: number('carbs', 20),
        protein: number('protein', 23),
        fats: number('fats', 27)
      }
    }
  },
  template: `<RecipeNutrition :nutrition="nutrition" />`
});
