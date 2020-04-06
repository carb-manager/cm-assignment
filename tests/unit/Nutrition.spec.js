import { shallowMount } from '@vue/test-utils';
import Nutrition from '@/components/ui/Nutrition';

describe('Nutrition.vue', () => {
  it('Display correct nutrition data', () => {
    let wrapper = shallowMount(Nutrition, {
      propsData: {
        carbs: 12,
        protein: 7,
        fats: 5,
      },
    });
    expect(wrapper.find('.carbs span').text()).toEqual('12g');
    expect(wrapper.find('.protein span').text()).toEqual('7g');
    expect(wrapper.find('.fats span').text()).toEqual('5g');
  });
});
