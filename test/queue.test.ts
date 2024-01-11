import { test, expect } from "@jest/globals";
import { Queue } from "bullmq";
import { connection } from "~/_lib/queue/connection";
import { importQueue } from "~/_lib/queue/queue";
const { Worker } = await import("bullmq");
// import { describe } from "node:test";
// import { TranslateNews } from "~/server/agent/translate";
// const sum = require("./sum");
// import sum from "./sum";

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test("Run worker", async () => {
//   new Worker(
//     "importQueue",
//     async (job) => {
//       const data = job?.data;
//       console.log(data);
//       console.log("Task executed successfully");
//     },
//     {
//       connection,
//       concurrency: 5,
//       removeOnComplete: { count: 1000 },
//       removeOnFail: { count: 5000 },
//     },
//   );
//   // const result = await TranslateNews({
//   //   title: "",
//   //   content: "",
//   //   originalLanguage: "",
//   //   targetLanguage: "",
//   // });
//   // expect(result).toBe({
//   //   title: "",
//   //   content: "",
//   //   originalLanguage: "",
//   //   targetLanguage: "",
//   // });
// });

test("Obliterate queue", async () => {
  // const queue = new Queue("importQueue", { connection });
  // await importQueue.obliterate();

  // const deletedJobIds = await importQueue.clean(60000, 1000, 'paused')
  // console.log(deletedJobIds);

  const counts = await importQueue.getJobCounts("active", "completed", "failed", "delayed", "paused", "waiting");
  console.log(counts);

}, 1000000);
