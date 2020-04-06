import { shallowMount } from '@vue/test-utils';
import Favorite from '@/components/ui/Favorite';

describe('Favorite.vue', () => {
  it('Has green favorite icon', () => {
    let wrapper = shallowMount(Favorite, {
      propsData: {
        isFavorite: true,
      },
    });
    expect(wrapper.contains('img.favorited')).toBe(true);
  });
  it('Has empty favorite icon', () => {
    let wrapper = shallowMount(Favorite, {
      propsData: {
        isFavorite: false,
      },
    });
    expect(wrapper.contains('img.not-favorited')).toBe(true);
  });
});
