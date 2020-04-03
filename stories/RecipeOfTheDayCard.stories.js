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
    ratingsCount: {
      default: number("Ratings Count", 200)
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
    energyValue: {
      default: number("Energy Value", 516)
    },
    energyUnit: {
      default: text("Energy Unit", 'Calories')
    },
    recipeDuration: {
      default: number("Recipe Duration Min",  136)
    }
  },
  template: '<RecipeOfTheDayCard @click="action" v-bind:title="title" v-bind:rating="rating" v-bind:carbs="carbs" v-bind:protein="protein" v-bind:fats="fats" v-bind:energy-value="energyValue" v-bind:energy-unit="energyUnit"  v-bind:recipe-duration-minutes="recipeDuration" />',
  methods: { action: action("clicked") }
});
