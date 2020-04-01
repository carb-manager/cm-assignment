import { render } from '@testing-library/vue';
import '@testing-library/jest-dom';

import IconWithLabel from '@/components/IconWithLabel';

describe('IconWithLabel.vue', () => {
  test('label renders properly', async () => {
    const { container } = render(IconWithLabel, {
      props: {
        label: 'Test label',
        testId: 'testFavorite'
      }
    });
    expect(container.firstChild).toHaveTextContent('Test label');
  });
});
