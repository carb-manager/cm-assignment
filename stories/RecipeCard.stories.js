import { action, withActions } from '@storybook/addon-actions';
import {
  withKnobs,
  boolean,
  select,
  text,
  number
} from '@storybook/addon-knobs';

import RecipeCard from '../src/components/RecipeCard.vue';

export default {
  title: 'RecipeCard',
  component: RecipeCard,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { RecipeCard },
  props: {
    isPremium: { default: boolean('isPremium', true) },
    energyUnits: {
      default: select('energyUnits', ['calories', 'kilojoules'], 'calories')
    },
    hasFavoriteIcon: { default: boolean('hasFavoriteIcon', true) },
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
  template: `<RecipeCard @click="log" :recipe="recipe" :is-premium="isPremium" :energyUnits="energyUnits" :has-favorite-icon="hasFavoriteIcon"/>`,
  methods: {
    log: action('clicked')
  }
});
