import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import FavoriteHeart from '../src/components/FavoriteHeart.vue';

export default {
  title: 'FavoriteHeart',
  component: FavoriteHeart,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { FavoriteHeart },
  props: {
    isActive: { default: boolean('isActive', true) }
  },

  template: `<FavoriteHeart :is-active="isActive"/>`,
  methods: { log: action('clicked') }
});
