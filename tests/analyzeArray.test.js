import analyzeArray from "../assignment-5/analyzeArray.js";
import { expect } from "@jest/globals";

test("analyze has following properties min, max, average, length", () => {
  expect(analyzeArray([1, 2, 3])).toEqual({
    min: 1,
    max: 3,
    length: 3,
    average: 2,
  });
});
