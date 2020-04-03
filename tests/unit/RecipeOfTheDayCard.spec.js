import { shallowMount } from '@vue/test-utils'
import RecipeOfTheDayCard from '@/components/RecipeOfTheDayCard'

describe("RecipeOfTheDayCard.vue", () => {
  const wrapper = shallowMount(RecipeOfTheDayCard, {
    propsData: {
      title: "Low Carb Thai Chicken Curry With Coconut Cauliflower Rice",
      recipeImageUrl: "/chicken.jpg",
      carbs: 55,
      protein: 21,
      fats: 5,
      recipeDurationMinutes: 60,
      energyValue: 320,
      rating: 4.1
    } 
  })
  it('does not include ratings count', () => {
    expect(wrapper.contains('.premium-badge')).toBe(false);
  })
});

