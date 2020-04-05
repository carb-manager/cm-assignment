import { withKnobs } from "@storybook/addon-knobs";

import Bullet from "../src/components/Bullet.vue";
import clock from "../src/assets/clock.svg";

export default {
  title: "Bullet",
  component: Bullet,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { Bullet },
  props: {
    // Add your props here and hook them up to the template below
  },
  template: `<bullet icon="${clock}" alt="24 min" text="24 min"></bullet>`
});
