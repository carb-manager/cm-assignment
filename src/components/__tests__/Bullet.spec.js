import { render } from "@testing-library/vue";
import Bullet from "../Bullet.vue";

describe("Bullet", () => {
  it("renders the bullet", () => {
    // Arrange
    const icon = "http://foo.com/foo/icon.svg";
    const alt = "I am alt text";
    const text = "I am a bullet";
    const spacing = "medium";

    // Act
    const { getByText, getByAltText, getByTestId } = render(Bullet, {
      props: {
        icon,
        alt,
        text,
        spacing
      }
    });

    // Assert
    expect(getByTestId("bullet-image")).toHaveProperty("src", icon);
    getByAltText(alt);
    getByText(text);
  });
});
