import { render } from "@testing-library/vue";
import PremiumBadge from "../PremiumBadge.vue";

describe("PremiumBadge", () => {
  it("renders the premium badge", () => {
    // Arrange
    const text = "Premium Recipe";

    // Act
    const { getByText } = render(PremiumBadge);

    // Assert
    getByText(text);
  });
});
