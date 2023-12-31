import { test, expect } from "@jest/globals";
import { describe } from "node:test";
import { TranslateNews } from "~/server/agent/translate";
// const sum = require("./sum");
// import sum from "./sum";

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

test("translate news", async () => {
  const result = await TranslateNews({
    title: "",
    content: "",
    originalLanguage: "",
    targetLanguage: "",
  });
  expect(result).toBe({
    title: "",
    content: "",
    originalLanguage: "",
    targetLanguage: "",
  });
});
