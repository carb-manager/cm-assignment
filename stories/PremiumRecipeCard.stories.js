import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import PremiumRecipeCard from "../src/components/PremiumRecipeCard.vue";

export default {
  title: "PremiumRecipeCard",
  component: PremiumRecipeCard,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { PremiumRecipeCard },
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
    favorite: {
      default: boolean('Favorite', false)
    }
  },
  template: '<PremiumRecipeCard @click="action" v-bind:title="title" v-bind:favorite="favorite" v-bind:rating="rating" v-bind:ratingsCount="ratingsCount" v-bind:carbs="carbs" v-bind:protein="protein" v-bind:fats="fats" v-bind:favorite="favorite" />',
  methods: { action: action("clicked") }
})


