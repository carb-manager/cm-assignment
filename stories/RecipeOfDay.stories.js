import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  boolean,
  select,
  text,
  number
} from '@storybook/addon-knobs';

import RecipeOfDay from '../src/components/RecipeOfDay.vue';

export default {
  title: 'RecipeOfDay',
  component: RecipeOfDay,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { RecipeOfDay },
  props: {
    energyUnits: {
      default: select('energyUnits', ['calories', 'kilojoules'], 'calories')
    },
    recipe: {
      default: {
        title: text(
          'title',
          'Low Carb Thai Chicken Curry With Coconut Cauliflower Rice',
          'recipe'
        ),
        isFavorite: boolean('isFavorite', true, 'recipe'),
        rating: {
          count: number('rating count', 200, '', 'recipe'),
          star: number('star count', 4, '', 'recipe')
        },
        duration: number('duration', 34, '', 'recipe'),
        nutrition: {
          calories: number('calories', 450, '', 'recipe'),
          carbs: number('carbs', 50, '', 'recipe'),
          protein: number('protein', 10, '', 'recipe'),
          fats: number('fats', 20, '', 'recipe')
        }
      }
    }
  },
  template: `<RecipeOfDay @click="log" :recipe="recipe" :is-premium="isPremium" :energyUnits="energyUnits" :has-favorite-icon="hasFavoriteIcon"/>`,
  methods: {
    log: action('clicked')
  }
});
