import { connection } from "~/redis/connection";
export const register = async () => {
  console.log("Registering instrumentation");
  //This if statement is important, read here: https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { Worker } = await import("bullmq");
    /**
    This is a simple redis connection using ioredis that looks like this:
    import Redis from "ioredis";

    const connection = new Redis(env.REDIS_URL);
    */
    // const { connection } = await import("./route/to/your/connection");
    // import Redis from "ioredis";
    // const connection = new Redis(env.REDIS_URL);

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
  }
};
