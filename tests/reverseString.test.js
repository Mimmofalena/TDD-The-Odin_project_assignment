import reverseString from "../assignment-2/reverseString";
import { expect } from "@jest/globals";
test("returns a string reversed", () => {
  expect(reverseString("ciao")).toBe("oaic");
});
