import { action } from '@storybook/addon-actions';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';
import Ratings from '../src/components/ui/Ratings.vue';

export default {
  title: 'Ratings',
  component: Ratings,
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { Ratings },
  props: {
    rating: {
      default: number('Rating', 3),
    },
    ratingsCount: {
      default: number('Ratings Count', 200),
    },
  },
  template:
    '<Ratings v-bind:rating="rating" v-bind:ratingsCount="ratingsCount"/>',
  methods: { action: action('clicked') },
});
