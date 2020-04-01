import { render } from '@testing-library/vue';
import '@testing-library/jest-dom';

import RecipeNutrition from '@/components/RecipeNutrition';

import { mockRecipe } from '../mocks';

describe('RecipeNutrition.vue', () => {
  test('nutrition information should display properly', async () => {
    const { getByTestId } = render(RecipeNutrition, {
      props: {
        nutrition: mockRecipe.nutrition,
        testId: 'testNutrition'
      }
    });
    expect(getByTestId('testNutrition__carbs')).toHaveTextContent(
      `${mockRecipe.nutrition.carbs}g`
    );
    expect(getByTestId('testNutrition__protein')).toHaveTextContent(
      `${mockRecipe.nutrition.protein}g`
    );
    expect(getByTestId('testNutrition__fats')).toHaveTextContent(
      `${mockRecipe.nutrition.fats}g`
    );
  });
});
