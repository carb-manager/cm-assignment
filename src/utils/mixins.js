import StarRating from '@/components/StarRating';
import IconWithLabel from '@/components/IconWithLabel';
import RecipeNutrition from '@/components/RecipeNutrition';

import { timeConvert, calorieConvert } from '@/utils';

export const recipeCardMixin = {
  components: {
    StarRating,
    IconWithLabel,
    RecipeNutrition
  },
  props: {
    recipe: {
      type: Object,
      required: true
    },
    energyUnits: {
      type: String,
      required: true,
      validator: value => {
        const isValid = ['calories', 'kilojoules'].includes(value);
        if (!isValid) {
          console.error(
            `energyUnits prop must include "calories" or "kilojoules".`
          );
        }
        return isValid;
      }
    },
    testId: {
      type: String,
      default: null
    }
  },
  computed: {
    recipeDuration() {
      return timeConvert(this.recipe.duration);
    },
    recipeCals() {
      return calorieConvert(this.recipe.nutrition.calories, this.energyUnits);
    }
  },
  methods: {
    onClick($event) {
      this.$emit('click', $event);
    }
  }
};
