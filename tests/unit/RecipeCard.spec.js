import { render } from '@testing-library/vue';
import '@testing-library/jest-dom';

import RecipeCard from '@/components/RecipeCard';

import { mockRecipe } from '../mocks';

describe('RecipeCard.vue', () => {
  test('title renders properly', async () => {
    const { container } = render(RecipeCard, {
      props: {
        recipe: mockRecipe,
      },
    });
    expect(container.firstChild).toHaveTextContent(mockRecipe.title);
  });

  test.todo('title should truncated after 2 lines');
  test.todo('energy-units should determine which unit to display properly');
  test.todo('rating count should display properly');
  test.todo('start count should display properly');
  test.todo('duration should render properly');
  test.todo('nutrition information should display properly');
});
