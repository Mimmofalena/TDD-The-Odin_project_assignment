import caesarCipher from "../assignment-4/caesarCipher.js";
import { expect } from "@jest/globals";

test("encrypt with a shift key of 1", () => {
  expect(caesarCipher("hello world", 1)).toBe("ifmmp!xpsme");
});
