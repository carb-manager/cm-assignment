import { withKnobs } from "@storybook/addon-knobs";

import PremiumRecipeCard from "../src/components/PremiumRecipeCard.vue";

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
    }
  },
  template: '<premium-recipe-card :title="title"></premium-recipe-card>'
});

export const KitchenSink = () => ({
  components: { PremiumRecipeCard },
  props: {
    title: {
      default: () => "Low Carb Thai Chicken Curry With Coconut Cauliflower Rice"
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
