import { shallowMount } from '@vue/test-utils'
import HeartIcon from '@/components/subcomponents/HeartIcon'

describe("HeartIcon.vue", () => {
  it('shows a full heart when active', () => {
    let wrapper = shallowMount(HeartIcon, {
      propsData: {
        active: true
      } 
    })
    expect(wrapper.contains('.heart-full')).toBe(true);
    expect(wrapper.contains('.heart-empty')).toBe(false);
  })
  it('shows an empty heart when not active', () => {
    let wrapper = shallowMount(HeartIcon, {
      propsData: {
        active: false
      } 
    })
    expect(wrapper.contains('.heart-full')).toBe(false);
    expect(wrapper.contains('.heart-empty')).toBe(true);
  })
  it('shows an empty heart by default', () => {
    let wrapper = shallowMount(HeartIcon, {
      propsData: {
      } 
    })
    expect(wrapper.contains('.heart-full')).toBe(false);
    expect(wrapper.contains('.heart-empty')).toBe(true);
  })
});

