// const { Worker } = await import("bullmq");
import {TestQueueWorkerRunning} from "~/_lib/queue/work";

TestQueueWorkerRunning()

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


//   worker.on('completed', job => {
//     console.log(`${job.id} has completed!`);
//   });

//   worker.on('failed', (job, err) => {
//     console.log(`${job?.id} has failed with ${err.message}`);
//   });

// }


// running();
