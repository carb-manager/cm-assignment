import { render } from '@testing-library/vue';
import '@testing-library/jest-dom';

import FavoriteHeart from '@/components/FavoriteHeart';

describe('FavoriteHeart.vue', () => {
  test('isActive renders properly', async () => {
    const { getByTestId, updateProps } = render(FavoriteHeart, {
      props: {
        isActive: true,
        testId: 'testFavorite'
      }
    });
    expect(getByTestId('testFavorite__heart-filled')).toBeVisible();

    await updateProps({ isActive: false });

    expect(getByTestId('testFavorite__heart-empty')).toBeVisible();
  });
});
