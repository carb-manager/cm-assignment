import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';
import Durations from '../src/components/ui/Durations.vue';

export default {
  title: 'Durations',
  component: Durations,
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { Durations },
  props: {
    minutes: {
      default: number('Minutes', 24),
    },
  },
  template: '<Durations v-bind:minutes="minutes"/>',
  methods: { action: action('clicked') },
});
