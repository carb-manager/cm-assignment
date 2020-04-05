import { withKnobs } from "@storybook/addon-knobs";

import StarRating from "../src/components/StarRating.vue";

export default {
  title: "Star Rating",
  component: StarRating,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { StarRating },
  props: {
    stars: {
      default: () => 3
    },
    ratings: {
      default: () => 200
    }
  },
  template: '<star-rating :stars="stars" :ratings="ratings"></star-rating>'
});
