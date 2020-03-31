import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import RecipeCard from '../src/components/RecipeCard.vue';
import { mockRecipe } from '../tests/mocks';

export default {
  title: 'RecipeCard',
  component: RecipeCard,
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { RecipeCard },
  data() {
    return {
      mockRecipe,
    };
  },
  template: `<RecipeCard @click="log" :recipe="mockRecipe"/>`,
  methods: { log: action('clicked') },
});
