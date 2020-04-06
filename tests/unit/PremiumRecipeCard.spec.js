import { shallowMount } from '@vue/test-utils';
import PremiumRecipeCard from '@/components/PremiumRecipeCard';

describe('PremiumRecipeCard.vue', () => {
  const wrapper = shallowMount(PremiumRecipeCard, {
    propsData: {
      title: 'Low Carb Thai Chicken Curry With Coconut Cauliflower Rice',
      pictureFilename: 'thai-chicken-curry.svg',
      isFavorite: true,
      isPremium: true,
      rating: 3.2,
      ratingsCount: 221,
      energyValue: 320,
      energyUnit: 'Calories',
      carbs: 55,
      protein: 21,
      fats: 5,
      durationsInMinutes: 60,
    },
  });
  it('Render correct title', () => {
    expect(wrapper.find('.body .title').text()).toBe(
      'Low Carb Thai Chicken Curry With Coconut Cauliflower Rice'
    );
  });
  it('Has a premium badge', () => {
    expect(wrapper.contains('.badge')).toBe(true);
  });
});
