import { shallowMount } from '@vue/test-utils';
import Durations from '@/components/ui/Durations';

describe('Durations.vue', () => {
  it('Calculates  75 minutes correctly', () => {
    let wrapper = shallowMount(Durations, {
      propsData: {
        minutes: 75,
      },
    });
    expect(wrapper.find('.time').text()).toEqual('1 hr 15 min');
  });
});
