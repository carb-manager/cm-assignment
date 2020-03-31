import { withKnobs, number } from '@storybook/addon-knobs';

import StarRating from '../src/components/StarRating.vue';

export default {
  title: 'StarRating',
  component: StarRating,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { StarRating },
  props: {
    size: { default: number('size', 20) },
    rating: {
      default: {
        count: number('count', 100),
        star: number('star', 3.5)
      }
    }
  },
  template: `<StarRating :size="size" :rating="rating"/>`
});
