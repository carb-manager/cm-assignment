import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';
import Energy from '../src/components/ui/Energy.vue';

export default {
  title: 'Energy',
  component: Energy,
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { Energy },
  props: {
    value: {
      default: number('Energy Value', 489),
    },
    units: {
      default: text('Energy Unit', 'Calories'),
    },
    isShowedIcon: {
      default: boolean('Show Icon', true),
    },
  },
  template:
    '<Energy v-bind:isShowedIcon="isShowedIcon" v-bind:value="value" v-bind:units="units"/>',
  methods: { action: action('clicked') },
});
