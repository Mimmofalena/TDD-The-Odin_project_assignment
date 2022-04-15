import { expect } from "@jest/globals";
import calculator from "../assignment-3/calculator";

test("performs mathematical addition ", () => {
  expect(calculator.add(1, 2)).toBe(3);
});
test("performs mathematical subtraction", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});
test("performs mathematical division", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});
test("performs mathematical multiplication", () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});
