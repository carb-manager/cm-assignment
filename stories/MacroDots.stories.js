import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number} from '@storybook/addon-knobs';

import MacroDots from "../src/components/subcomponents/MacroDots.vue";

export default {
  title: "MacroDots",
  component: MacroDots,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { MacroDots },
  props: {
    carbs: {
      default: number('carbs', 32)
    },
    protein: {
      default: number('Proteins', 10)
    },
    fats: {
      default: number('Fats', 5)
    }
  },
  template: '<MacroDots v-bind:carbs="carbs" v-bind:protein="protein" v-bind:fats="fats" />',
  methods: { action: action("clicked") }
});

