import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import PremiumRecipeCard from '../src/components/PremiumRecipeCard.vue';

export default {
  title: 'PremiumRecipeCard',
  component: PremiumRecipeCard,
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { PremiumRecipeCard },
  props: {
    title: {
      default: text(
        'Title',
        'Low Carb Thai Chicken Curry With Coconut Cauliflower Rice'
      ),
    },
    pictureFilename: {
      default: text('Food Picture', 'thai-chicken-curry.svg'),
    },
    isFavorite: {
      default: boolean('Is Favorite', false),
    },
    isPremium: {
      default: boolean('Is Premium', true),
    },
    rating: {
      default: number('Star Rating', 3),
    },
    ratingsCount: {
      default: number('Ratings Count', 200),
    },
    durationsInMinutes: {
      default: number('Recipe Durations', 24),
    },
    energyValue: {
      default: number('Energy Value', 489),
    },
    energyUnit: {
      default: text('Energy Unit', 'Calories'),
    },
    carbs: {
      default: number('Carbs', 20),
    },
    protein: {
      default: number('Protein', 16),
    },
    fats: {
      default: number('Fats', 6),
    },
  },
  template: `<PremiumRecipeCard @click="action" 
    v-bind:title="title"     
    v-bind:pictureFilename="pictureFilename"    
    v-bind:rating="rating" 
    v-bind:ratingsCount="ratingsCount" 
    v-bind:carbs="carbs" 
    v-bind:protein="protein" 
    v-bind:fats="fats"
    v-bind:isFavorite="isFavorite" 
    v-bind:energyValue="energyValue" 
    v-bind:energyUnit="energyUnit"  
    v-bind:durationsInMinutes="durationsInMinutes" 
    v-bind:isPremium="isPremium"/>`,
  methods: { action: action('clicked') },
});
