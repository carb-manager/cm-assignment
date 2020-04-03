import { shallowMount } from '@vue/test-utils'
import MacroDots from '@/components/subcomponents/MacroDots'

describe("MacroDots.vue", () => {
  it('shows macros in the correct order, carbs, protein, fats', () => {
    let wrapper = shallowMount(MacroDots, {
      propsData: {
      } 
    })
    expect(wrapper.findAll('.macro-dots span').at(0).classes()).toContain('macro-dot--carbs')
    expect(wrapper.findAll('.macro-dots span').at(1).classes()).toContain('macro-dot--protein')
    expect(wrapper.findAll('.macro-dots span').at(2).classes()).toContain('macro-dot--fats')
  })
});

