import { shallowMount } from '@vue/test-utils'
import EnergyUnit from '@/components/subcomponents/EnergyUnit'

describe("EnergyUnit.vue", () => {
  it('correctly calculates 316 calories as 1322 kJ', () => {
    const calories = 316;
    const kJperCalorie = 4.184;
    let wrapper = shallowMount(EnergyUnit, {
      propsData: {
        value: calories,
        unit: "kJ"
      } 
    })
    expect(parseInt(wrapper.find('.energy-unit').text())).toEqual(Math.round(kJperCalorie * calories));
  })
  it('defaults to Calories', () => {
    let wrapper = shallowMount(EnergyUnit, {})
    expect(wrapper.find('.energy-unit').text().includes('Calories')).toBe(true);
  })
});

