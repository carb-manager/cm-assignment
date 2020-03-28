import { shallowMount } from '@vue/test-utils'
import PremiumRecipeCard from '@/components/PremiumRecipeCard.vue'

describe('PremiumRecipeCard.vue', () => {

  it('component does render', () => {
    const wrapper = shallowMount(PremiumRecipeCard)
    expect(
      wrapper.attributes()['data-test-component']
    ).toBe('PremiumRecipeCard')
  })
})
