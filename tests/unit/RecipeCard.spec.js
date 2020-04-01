import { render } from '@testing-library/vue';
import '@testing-library/jest-dom';

import RecipeCard from '@/components/RecipeCard';

import { mockRecipe } from '../mocks';

import { timeConvert, calorieConvert } from '@/utils';

describe('RecipeCard.vue', () => {
  test('title renders properly', () => {
    const { getByTestId } = render(RecipeCard, {
      props: {
        recipe: mockRecipe,
        energyUnits: 'calories',
        testId: 'testRecipe'
      }
    });
    expect(getByTestId('testRecipe__recipe-title')).toHaveTextContent(
      mockRecipe.title
    );
  });

  test('energy-units should determine which unit to display properly', async () => {
    const { getByTestId, updateProps } = render(RecipeCard, {
      props: {
        recipe: mockRecipe,
        energyUnits: 'calories',
        testId: 'testRecipe'
      }
    });
    expect(getByTestId('testRecipe__cals')).toHaveTextContent(
      calorieConvert(mockRecipe.nutrition.calories, 'calories')
    );
    await updateProps({ energyUnits: 'kilojoules' });

    expect(getByTestId('testRecipe__cals')).toHaveTextContent(
      calorieConvert(mockRecipe.nutrition.calories, 'kilojoules')
    );
  });
  test('duration should render properly', () => {
    const { getByTestId } = render(RecipeCard, {
      props: {
        recipe: mockRecipe,
        energyUnits: 'calories',
        testId: 'testRecipe'
      }
    });
    expect(getByTestId('testRecipe__duration')).toHaveTextContent(
      timeConvert(mockRecipe.duration)
    );
  });
});
