import { shallowMount } from "@vue/test-utils";
import PremiumRecipeCard from "../PremiumRecipeCard.vue";

const wrapper = shallowMount(PremiumRecipeCard);

describe("PremiumRecipeCard", () => {
  it("renders with the correct heading", () => {
    expect(wrapper.text()).toContain("Low Carb Thai Chicken Curry With Coconut Cauliflower Rice");
  });
});
