import { render } from "@testing-library/vue";
import PremiumRecipeCard from "../PremiumRecipeCard.vue";

describe("PremiumRecipeCard", () => {
  it("renders correctly when only required props are passed", () => {
    // Arrange
    const title = "Low Carb Thai Chicken Curry With Coconut Cauliflower Rice";
    const image = "http://foo.com/image.jpg";

    // Act
    const { getByText, getByAltText, queryAllByAltText } = render(PremiumRecipeCard, {
      props: {
        title,
        image
      }
    });

    // Assert
    getByText(title);
    getByAltText(title);
    getByAltText("Like this");
    getByText("0 ratings");
    expect(queryAllByAltText("Unfilled star")).toHaveLength(5);
  });

  it("renders correctly all props are passed", () => {
    const title = "Low Carb Thai Chicken Curry With Coconut Cauliflower Rice";
    const image = "http://foo.com/image.jpg";
    const preparationTime = "24 min";
    const calories = "489 calories";
    const carbs = "20g";
    const protein = "16g";
    const fats = "6g";
    const ratings = 200;
    const stars = 3;
    const isPremium = true;
    const isHearted = true;

    const { getByText, getByAltText, queryAllByAltText } = render(PremiumRecipeCard, {
      props: {
        title,
        image,
        preparationTime,
        calories,
        carbs,
        protein,
        fats,
        ratings,
        stars,
        isPremium,
        isHearted
      }
    });

    getByText(title);
    getByAltText(title);
    getByAltText("You liked this");
    getByText(preparationTime);
    getByText(calories);
    getByText(carbs);
    getByText(protein);
    getByText(fats);
    getByText(`${ratings} ratings`);
    getByText("Premium Recipe");
    expect(queryAllByAltText("Filled star")).toHaveLength(3);
    expect(queryAllByAltText("Unfilled star")).toHaveLength(2);
  });
});