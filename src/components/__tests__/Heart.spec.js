import { render } from "@testing-library/vue";
import Heart from "../Heart.vue";

describe("Heart", () => {
  it("renders the heart", () => {
    // Arrange

    // Act
    const { getByAltText } = render(Heart);

    // Assert
    getByAltText("Like this");
  });

  it("renders the heart liked", () => {
    // Arrange
    const isHearted = true;

    // Act
    const { getByAltText } = render(Heart, {
      props: {
        isHearted
      }
    });

    // Assert
    getByAltText("You liked this");
  });
});
