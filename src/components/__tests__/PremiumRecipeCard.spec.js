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
    const preparationTime = 24;
    const calories = 489;
    const carbs = 20;
    const protein = 16;
    const fats = 6;
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
    getByText(`${preparationTime} min`);
    getByText(`${calories} calories`);
    getByText(`${carbs}g`);
    getByText(`${protein}g`);
    getByText(`${fats}g`);
    getByText(`${ratings} ratings`);
    getByText("Premium Recipe");
    expect(queryAllByAltText("Filled star")).toHaveLength(3);
    expect(queryAllByAltText("Unfilled star")).toHaveLength(2);
  });

  it("renders time in correct format when more than 60 minutes", () => {
    const title = "Low Carb Thai Chicken Curry With Coconut Cauliflower Rice";
    const image = "http://foo.com/image.jpg";
    const preparationTime = 61;

    const { getByText } = render(PremiumRecipeCard, {
      props: {
        title,
        image,
        preparationTime
      }
    });

    // Assert
    getByText("1 hr 1 min");
  });
});
