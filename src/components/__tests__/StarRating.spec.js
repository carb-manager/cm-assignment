import { render } from "@testing-library/vue";
import StarRating from "../StarRating.vue";

describe("StarRating", () => {
  it("renders with 3 stars and 200 ratings", () => {
    // Arrange
    const stars = 3;
    const ratings = 200;

    // Act
    const { getByText, queryAllByAltText } = render(StarRating, {
      props: {
        stars,
        ratings
      }
    });

    // Assert
    getByText(`${ratings} ratings`);
    expect(queryAllByAltText("Filled star")).toHaveLength(3);
    expect(queryAllByAltText("Unfilled star")).toHaveLength(2);
  });
});
