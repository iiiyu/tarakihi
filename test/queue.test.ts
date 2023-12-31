import { test, expect } from "@jest/globals";
import { connection } from "~/redis/connection";
const { Worker } = await import("bullmq");
// import { describe } from "node:test";
// import { TranslateNews } from "~/server/agent/translate";
// const sum = require("./sum");
// import sum from "./sum";

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

test("Run worker", async () => {
  new Worker(
    "importQueue",
    async (job) => {
      const data = job?.data;
      console.log(data);
      console.log("Task executed successfully");
    },
    {
      connection,
      concurrency: 5,
      removeOnComplete: { count: 1000 },
      removeOnFail: { count: 5000 },
    },
  );
  // const result = await TranslateNews({
  //   title: "",
  //   content: "",
  //   originalLanguage: "",
  //   targetLanguage: "",
  // });
  // expect(result).toBe({
  //   title: "",
  //   content: "",
  //   originalLanguage: "",
  //   targetLanguage: "",
  // });
});
