import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import RecipeOfTheDayCard from "../src/components/RecipeOfTheDayCard.vue";

export default {
  title: "RecipeOfTheDayCard",
  component: RecipeOfTheDayCard,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { RecipeOfTheDayCard },
  props: {
    title: {
      default: text('Recipe Title', 'Recipe title consectetur adipisicing elit culpa earum inventore, cupiditate fugiat distinctio voluptatum incidunt tenetur vitae reiciendis illo libero voluptatem iure soluta consequuntur facere nostrum, corporis eos!')
    },
    rating: {
      default: number("Star Rating", 3)
    },
    carbs: {
      default: number("Carbs", 35)
    },
    protein: {
      default: number("Protein", 35)
    },
    fats: {
      default: number("Fats", 35)
    },
  },
  template: '<RecipeOfTheDayCard @click="action" v-bind:title="title" v-bind:rating="rating" v-bind:carbs="carbs" v-bind:protein="protein" v-bind:fats="fats" />',
  methods: { action: action("clicked") }
});
