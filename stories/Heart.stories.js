import { withKnobs, boolean } from "@storybook/addon-knobs";

import Heart from "../src/components/Heart.vue";

export default {
  title: "Heart",
  component: Heart,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { Heart },
  props: {
    isHearted: {
      default: () => boolean("Hearted", true)
    }
  },
  template: '<heart :isHearted="isHearted"></heart>'
});
