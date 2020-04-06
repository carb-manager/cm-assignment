import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import Favorite from '../src/components/ui/Favorite.vue';

export default {
  title: 'Favorite',
  component: Favorite,
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { Favorite },
  props: {
    isFavorite: {
      default: boolean('Is Favorite', true),
    },
  },
  template: '<Favorite v-bind:isFavorite="isFavorite"/>',
  methods: { action: action('clicked') },
});
