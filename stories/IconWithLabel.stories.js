import { withKnobs, text } from '@storybook/addon-knobs';

import IconWithLabel from '../src/components/IconWithLabel.vue';

export default {
  title: 'IconWithLabel',
  component: IconWithLabel,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { IconWithLabel },
  props: {
    icon: { default: text('icon', 'cals') },
    label: { default: text('label', 'Label text') }
  },
  template: `<IconWithLabel :icon="icon" :label="label"/>`
});
