import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';
import Nutrition from '../src/components/ui/Nutrition.vue';

export default {
  title: 'Nutrition',
  component: Nutrition,
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { Nutrition },
  props: {
    carbs: {
      default: number('Carbs', 200),
    },
    protein: {
      default: number('Protein', 16),
    },
    fats: {
      default: number('Fats', 6),
    },
  },
  template:
    '<Nutrition v-bind:carbs="carbs" v-bind:protein="protein" v-bind:fats="fats"/>',
  methods: { action: action('clicked') },
});
