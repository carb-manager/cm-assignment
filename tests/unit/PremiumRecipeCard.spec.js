import { shallowMount } from '@vue/test-utils'
import PremiumRecipeCard from '@/components/PremiumRecipeCard.vue'

describe('PremiumRecipeCard.vue', () => {

  it('component does render', () => {
    const wrapper = shallowMount(PremiumRecipeCard)
    expect(wrapper.attributes('class')).toBe('prc')

    // Cover
    expect(wrapper.find('.prc__cover').exists()).toBe(true)
    expect(wrapper.find('.prc__img').exists()).toBe(true)
    expect(wrapper.find('.prc__favorite').exists()).toBe(true)
    expect(wrapper.find('.prc__tag').exists()).toBe(true)

    // Info
    expect(wrapper.find('.prc__info').exists()).toBe(true)
    expect(wrapper.find('.prc__header').exists()).toBe(true)
    expect(wrapper.find('.prc__ratings').exists()).toBe(true)
    expect(wrapper.find('.prc__duration').exists()).toBe(true)
    expect(wrapper.find('.prc__burn').exists()).toBe(true)
    expect(wrapper.find('.prc__macros').exists()).toBe(true)
  })
})
