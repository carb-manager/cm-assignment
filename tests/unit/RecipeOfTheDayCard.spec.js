import { shallowMount } from '@vue/test-utils'
import RecipeOfTheDayCard from '@/components/RecipeOfTheDayCard'

describe("RecipeOfTheDayCard.vue", () => {
  const wrapper = shallowMount(RecipeOfTheDayCard, {
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
  it('does not include clock icon', () => {
  })
  it('does not include cals icon', () => {
  })
  it('does not include ratings count', () => {
    expect(wrapper.findAll('.recipe-heart').length).toEqual(1)
  })
});

