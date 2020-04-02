import { shallowMount } from '@vue/test-utils'
import StarRating from '@/components/subcomponents/StarRating'

describe("StarRating.vue", () => {
  it('renders a list of stars with class `star-gold` equal to rating', () => {
    let wrapper = shallowMount(StarRating, {
      propsData: {
        rating: 3
      } 
    })
    expect(wrapper.findAll('.star-gold').length).toEqual(3);
    expect(wrapper.findAll('.star-grey').length).toEqual(2);
  })
  it('Rounds a rating of 3.45 up to 3.5 stars', () => {
    let wrapper = shallowMount(StarRating, {
      propsData: {
        rating: 3.45
      } 
    })
    expect(wrapper.findAll('.star-gold').length).toEqual(3);
    expect(wrapper.findAll('.star-half').length).toEqual(1);
    expect(wrapper.findAll('.star-grey').length).toEqual(1);
  })
  it('Rounds a rating of 3.51 down to 3.5 stars', () => {
    let wrapper = shallowMount(StarRating, {
      propsData: {
        rating: 3.51
      } 
    })
    expect(wrapper.findAll('.star-gold').length).toEqual(3);
    expect(wrapper.findAll('.star-half').length).toEqual(1);
    expect(wrapper.findAll('.star-grey').length).toEqual(1);
  })
  it('Invalid rating of 423 should render as 5 stars', () => {
    let wrapper = shallowMount(StarRating, {
      propsData: {
        rating: 423
      } 
    })
    expect(wrapper.findAll('.star-gold').length).toEqual(5);
    expect(wrapper.findAll('.star-half').length).toEqual(0);
    expect(wrapper.findAll('.star-grey').length).toEqual(0);
  })
  it('Invalid rating of -2 should render as 0 stars', () => {
    let wrapper = shallowMount(StarRating, {
      propsData: {
        rating: -2
      } 
    })
    expect(wrapper.findAll('.star-gold').length).toEqual(0);
    expect(wrapper.findAll('.star-half').length).toEqual(0);
    expect(wrapper.findAll('.star-grey').length).toEqual(5);
  })
  it('By default, show 0 stars', () => {
    let wrapper = shallowMount(StarRating, {
      propsData: {
      } 
    })
    expect(wrapper.findAll('.star-grey').length).toEqual(5);
  })
  it('Show 222 ratings count', () => {
    let wrapper = shallowMount(StarRating, {
      propsData: {
        ratingsCount: 222,
        showRatingsCount: true
      } 
    })
    expect(parseInt(wrapper.find('.ratings-count').text())).toEqual(222);
  })
  it('By default, show 0 stars', () => {
    let wrapper = shallowMount(StarRating, {
      propsData: {
      } 
    })
    expect(wrapper.findAll('.star-grey').length).toEqual(5);
  })
  it('By default, do not show ratings count', () => {
    let wrapper = shallowMount(StarRating, {
      propsData: {} 
    })
    expect(wrapper.contains('.ratings-count')).toBe(false);
  })
});

