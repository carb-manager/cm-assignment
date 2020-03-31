import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import RecipeCard from '../src/components/RecipeCard.vue';
import { mockRecipe } from '../tests/mocks';

export default {
  title: 'RecipeCard',
  component: RecipeCard,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { RecipeCard },
  props: {
    isPremium: { default: boolean('isPremium', true) },
    energyUnits: { default: select('energyUnits', ['calories', 'kilojoules']) }
  },
  data() {
    return {
      mockRecipe
    };
  },
  template: `<RecipeCard @click="log" :recipe="mockRecipe" :is-premium="isPremium" :energyUnits="energyUnits"/>`,
  methods: { log: action('clicked') }
});
