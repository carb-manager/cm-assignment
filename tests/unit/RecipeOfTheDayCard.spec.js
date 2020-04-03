import { shallowMount } from '@vue/test-utils'
import PremiumRecipeCard from '@/components/PremiumRecipeCard'

describe("PremiumRecipeCard.vue", () => {
  it('renders a list of stars with class `active` equal to prop.grade', () => {
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
    expect(wrapper.findAll('.recipe-heart').length).toEqual(1)
  })
});

