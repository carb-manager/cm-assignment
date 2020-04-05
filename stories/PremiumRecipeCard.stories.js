import { withKnobs, boolean, text, number } from "@storybook/addon-knobs";

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
      default: () => text("Title", "Low Carb Thai Chicken Curry With Coconut Cauliflower Rice")
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
      default: () => text("Title", "Low Carb Thai Chicken Curry With Coconut Cauliflower Rice")
    },
    image: {
      default: () => Image
    },
    preparationTime: {
      default: () => number("Prep time (mins)", 24)
    },
    calories: {
      default: () => number("Calories (kcal)", 489)
    },
    carbs: {
      default: () => number("Carbs (g)", 20)
    },
    protein: {
      default: () => number("Protein (g)", 16)
    },
    fats: {
      default: () => number("Fats (g)", 6)
    },
    ratings: {
      default: () => number("Ratings", 200, { step: 1 })
    },
    stars: {
      default: () => number("Stars", 3, { step: 0.5 })
    },
    isPremium: {
      default: () => boolean("Premium?", true)
    },
    isHearted: {
      default: () => boolean("Hearted?", true)
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
    :isPremium="isPremium"
    :isHearted="isHearted">
  </premium-recipe-card>
  `
});
