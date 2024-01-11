import { Queue } from "bullmq";

import { connection } from "./connection";
import { TestQueueName } from "./type";

export const importQueue = new Queue("importQueue", {
  connection,
  defaultJobOptions: {
    attempts: 2,
    backoff: {
      type: "exponential",
      delay: 5000,
    },
  },
});


export const translateJobQueue = new Queue("translateJobQueue", {
  connection,
  defaultJobOptions: {
    attempts: 2,
    backoff: {
      type: "exponential",
      delay: 5000,
    },
  },
});

export const testQueue = new Queue(TestQueueName, {
  connection,
  defaultJobOptions: {
    attempts: 2,
    backoff: {
      type: "exponential",
      delay: 5000,
    },
  },
});
