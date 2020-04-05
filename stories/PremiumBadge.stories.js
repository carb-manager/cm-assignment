import { action } from "@storybook/addon-actions";
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
  template: '<PremiumBadge @click="action" />',
  methods: { action: action("clicked") }
});
