import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number} from '@storybook/addon-knobs';

import HeartIcon from "../src/components/subcomponents/HeartIcon.vue";

export default {
  title: "HeartIcon",
  component: HeartIcon,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { HeartIcon },
  props: {
    active: {
      default: boolean('Active', true)
    }
  },
  template: '<div style="background:#333; padding: 50px;"><HeartIcon v-bind:active="active"/></div>',
  methods: { action: action("clicked") }
});

