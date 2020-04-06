import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import RecipeOfTheDay from '../src/components/RecipeOfTheDay.vue';

export default {
  title: 'RecipeOfTheDay',
  component: RecipeOfTheDay,
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { RecipeOfTheDay },
  props: {
    title: {
      default: text('Title', 'Keto Italian Beef With Cabbage Noodles'),
    },
    pictureFilename: {
      default: text('Food Picture', 'keto-italian-beef.svg'),
    },
    isFavorite: {
      default: boolean('Is Favorite', true),
    },
    isPremium: {
      default: boolean('Is Premium', false),
    },
    rating: {
      default: number('Star Rating', 3),
    },
    ratingsCount: {
      default: number('Ratings Count', 200),
    },
    durationsInMinutes: {
      default: number('Recipe Durations', 8),
    },
    energyValue: {
      default: number('Energy Value', 269),
    },
    energyUnit: {
      default: text('Energy Unit', 'kcal'),
    },
    carbs: {
      default: number('Carbs', 2),
    },
    protein: {
      default: number('Protein', 26),
    },
    fats: {
      default: number('Fats', 43),
    },
  },
  template: `<RecipeOfTheDay @click="action" 
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
