import { shallowMount } from '@vue/test-utils'
import PremiumRecipeCard from '@/components/PremiumRecipeCard'

describe("PremiumRecipeCard.vue", () => {
  const wrapper = shallowMount(PremiumRecipeCard, {
    propsData: {
      title: "Low Carb Thai Chicken Curry With Coconut Cauliflower Rice",
      recipeImageUrl: "/chicken.jpg",
      favorite: true,
      carbs: 55,
      protein: 21,
      fats: 5,
      recipeDurationMinutes: 60,
      energyValue: 320,
      rating: 3.2,
      ratingsCount: 221
    } 
  })
  it('render title', () => {
    expect(wrapper.find('.recipe-title').text()).toBe("Low Carb Thai Chicken Curry With Coconut Cauliflower Rice");
  })
  it('has a premium badge', () => {
    expect(wrapper.contains('.premium-badge')).toBe(true);
  })
});

