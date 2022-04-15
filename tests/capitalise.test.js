import { expect } from "@jest/globals";
import capitalise from "../assignment-1/capitalise";

test("Make first letter uppercase", () => {
  expect(capitalise("hello world")).toBe("Hello world");
});
