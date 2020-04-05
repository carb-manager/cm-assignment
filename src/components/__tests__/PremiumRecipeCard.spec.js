import { render } from "@testing-library/vue";
import PremiumRecipeCard from "../PremiumRecipeCard.vue";

describe("PremiumRecipeCard", () => {
  it("renders with the correct heading", () => {
    // Arrange
    const title = "Low Carb Thai Chicken Curry With Coconut Cauliflower Rice";

    // Act
    const { getByText } = render(PremiumRecipeCard, {
      props: {
        title
      }
    });

    // Assert
    getByText(title);
  });
});
