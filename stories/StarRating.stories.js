import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number} from '@storybook/addon-knobs';

import StarRating from "../src/components/subcomponents/StarRating.vue";

export default {
  title: "StarRating",
  component: StarRating,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { StarRating },
  props: {
    rating: {
      default: number('Rating', 1)
    },
    ratingsCount: {
      default: number('Ratings Count', 200)
    },
    showRatingsCount: {
      default: boolean('Show Ratings Count', true)
    }
  },
  template: '<StarRating v-bind:rating="rating" v-bind:ratingsCount="ratingsCount" v-bind:showRatingsCount="showRatingsCount" />',
  methods: { action: action("clicked") }
});

