import { withKnobs, number } from "@storybook/addon-knobs";

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
      default: () => number("Stars", 3, { step: 0.5 })
    },
    ratings: {
      default: () => number("Ratings", 200, { step: 1 })
    }
  },
  template: '<star-rating :stars="stars" :ratings="ratings"></star-rating>'
});
