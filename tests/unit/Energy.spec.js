import { shallowMount } from '@vue/test-utils';
import Energy from '@/components/ui/Energy';

describe('Energy.vue', () => {
  it('Calculates  156 calories as 1907 kJ correctly', () => {
    const calories = 456;
    const kJperCalorie = 4.184;
    let wrapper = shallowMount(Energy, {
      propsData: {
        value: calories,
        units: 'kJ',
      },
    });
    expect(wrapper.find('.value').text()).toEqual(
      (kJperCalorie * calories).toFixed(2)
    );
  });
  it('defaults to Calories', () => {
    let wrapper = shallowMount(Energy, {});
    expect(
      wrapper
        .find('.units')
        .text()
        .includes('Calories')
    ).toBe(true);
  });
});
