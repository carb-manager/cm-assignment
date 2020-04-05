import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, text, number, select } from "@storybook/addon-knobs";

import PremiumRecipeCard from "../src/components/PremiumRecipeCard.vue";
import Image from "../src/assets/lowcarbthaichickencurry.jpeg";

const EnergyUnits = {
  Calories: "Calories",
  Kilojoules: "Kilojoules"
};

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
    energyUnits: {
      default: () => select("Enery Units", EnergyUnits)
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
  methods: {
    action: action("Card was clicked")
  },
  template: `
  <premium-recipe-card :title="title"
    :image="image"
    :preparationTime="preparationTime"
    :calories="calories"
    :energy-units="energyUnits"
    :carbs="carbs"
    :protein="protein"
    :fats="fats"
    :ratings="ratings"
    :stars="stars"
    :isPremium="isPremium"
    :isHearted="isHearted"
    @click="action">
  </premium-recipe-card>
  `
});
