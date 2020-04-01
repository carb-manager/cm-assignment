import { render } from '@testing-library/vue';
import '@testing-library/jest-dom';

import StarRating from '@/components/StarRating';

describe('StarRating.vue', () => {
  test('rating count should display properly', () => {
    const { getByTestId } = render(StarRating, {
      props: {
        rating: {
          count: 200,
          star: 3.5
        },
        testId: 'testRating'
      }
    });
    expect(getByTestId('testRating__count')).toHaveTextContent(`200 ratings`);
  });
});
