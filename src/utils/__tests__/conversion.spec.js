import { convertToKilojoules } from "../conversion";

describe("Conversion tests", () => {
  it("should return 0 when given an invalid number of calories", () => {
    const calories = undefined;
    const expectedResult = 0;

    const result = convertToKilojoules(calories);

    expect(result).toEqual(expectedResult);
  });

  it("should return 33 when number of calories is 8", () => {
    const calories = 8;
    const expectedResult = 33;

    const result = convertToKilojoules(calories);

    expect(result).toEqual(expectedResult);
  });
});
