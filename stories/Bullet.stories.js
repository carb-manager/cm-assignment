import { withKnobs, text, select } from "@storybook/addon-knobs";

import Bullet from "../src/components/Bullet.vue";
import clock from "../src/assets/clock.svg";

export default {
  title: "Bullet",
  component: Bullet,
  decorators: [withKnobs]
};

const spacingOptions = {
  Medium: "medium",
  Small: "small"
};

export const Default = () => ({
  components: { Bullet },
  props: {
    icon: { default: () => clock },
    alt: { default: () => text("Alt Text", "24 min") },
    text: { default: () => text("Text", "24 min") },
    spacing: { default: () => select("Spacing", spacingOptions) }
  },
  template: `<bullet :icon="icon" :alt="alt" :text="text" :spacing="spacing"></bullet>`
});
