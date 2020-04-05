import { withKnobs } from "@storybook/addon-knobs";

import PremiumRecipeCard from "../src/components/PremiumRecipeCard.vue";
import Image from "../src/assets/lowcarbthaichickencurry.jpeg";

export default {
  title: "Premium Recipe Card",
  component: PremiumRecipeCard,
  decorators: [withKnobs]
};

export const Empty = () => ({
  components: { PremiumRecipeCard },
  props: {
    title: {
      default: () => "Low Carb Thai Chicken Curry With Coconut Cauliflower Rice"
    },
    image: {
      default: () => Image
    }
  },
  template: '<premium-recipe-card :title="title" :image="image"></premium-recipe-card>'
});

export const KitchenSink = () => ({
  components: { PremiumRecipeCard },
  props: {
    title: {
      default: () => "Low Carb Thai Chicken Curry With Coconut Cauliflower Rice"
    },
    image: {
      default: () => Image
    },
    preparationTime: {
      default: () => "24 min"
    },
    calories: {
      default: () => "489 calories"
    },
    carbs: {
      default: () => "20g"
    },
    protein: {
      default: () => "16g"
    },
    fats: {
      default: () => "6g"
    },
    ratings: {
      default: () => 200
    },
    stars: {
      default: () => 3
    },
    isPremium: {
      default: () => true
    }
  },
  template: `
  <premium-recipe-card :title="title"
    :image="image"
    :preparationTime="preparationTime"
    :calories="calories"
    :carbs="carbs"
    :protein="protein"
    :fats="fats"
    :ratings="ratings"
    :stars="stars"
    :isPremium="isPremium">
  </premium-recipe-card>
  `
});
