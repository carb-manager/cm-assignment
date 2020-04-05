import { withKnobs } from "@storybook/addon-knobs";

import StarRating from "../src/components/StarRating.vue";

export default {
  title: "Star Rating",
  component: StarRating,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { StarRating },
  template: '<StarRating stars="3" ratings="200" />'
});
