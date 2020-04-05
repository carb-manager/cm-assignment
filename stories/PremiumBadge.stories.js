import { withKnobs } from "@storybook/addon-knobs";

import PremiumBadge from "../src/components/PremiumBadge.vue";

export default {
  title: "Premium Badge",
  component: PremiumBadge,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { PremiumBadge },
  props: {
    // Add your props here and hook them up to the template below
  },
  template: "<premium-badge></premium-badge>"
});
