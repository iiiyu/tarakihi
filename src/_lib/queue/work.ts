import { TaskStatus } from "@prisma/client";
import { connection } from "~/_lib/queue/connection";

import { updateTaskStatusWithJobId } from "../task/task";
import { handleBasicJob } from "./job";
import { TestQueueName } from "./type";

const { Worker } = await import("bullmq");

export const TestQueueWorkerRunning = () => {
  const worker = new Worker(
    TestQueueName,
    async (job) => {
      handleBasicJob(job);
      return Promise.resolve();
    },
    {
      connection,
      concurrency: 5,
      removeOnComplete: { count: 1000 },
      removeOnFail: { count: 5000 },
    },
  );

  worker.on("completed", (job) => {
    // update task status
    void (async () => {
      await updateTaskStatusWithJobId(job?.id, TaskStatus.COMPLETED);
    })();
    console.log(`${job.id} has completed!`);
  });

  worker.on("failed", (job, err) => {
    // update task status
    void (async () => {
      await updateTaskStatusWithJobId(job?.id, TaskStatus.FAILED);
    })();
    console.log(`${job?.id} has failed with ${err.message}`);
  });
};

// const running = async () => {
//   const worker = new Worker(
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

// worker.on('completed', job => {
//   console.log(`${job.id} has completed!`);
// });

// worker.on('failed', (job, err) => {
//   console.log(`${job?.id} has failed with ${err.message}`);
// });

// }

// running();
