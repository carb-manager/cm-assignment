import { shallowMount } from '@vue/test-utils'
import RecipeDuration from '@/components/subcomponents/RecipeDuration'

describe("RecipeDuration.vue", () => {
  it('correctly calculates 132 minutes as 2h 12m', () => {
    let wrapper = shallowMount(RecipeDuration, {
      propsData: {
        minutes: 132
      } 
    })
    expect(wrapper.find('.recipe-duration').text()).toBe('2h 12m');
  })
});

