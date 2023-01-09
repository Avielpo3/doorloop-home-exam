import { shuffleWords } from "./helper";

describe("shuffleWords", () => {
  it("should not modify the original array", () => {
    const originalArr = ["a", "b", "c"];
    const shuffledArr = shuffleWords(originalArr);

    expect(originalArr).toEqual(["a", "b", "c"]);
    expect(shuffledArr).not.toEqual(originalArr);
  });

  it("should return an array with the same length as the original array", () => {
    const originalArr = ["a", "b", "c"];
    const shuffledArr = shuffleWords(originalArr);

    expect(shuffledArr).toHaveLength(originalArr.length);
  });
});
