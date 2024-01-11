import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { importQueue, testQueue } from "~/_lib/queue/queue";
import { z } from "zod";
import { type BasicJob, TestQueueName } from "~/_lib/queue/type";

export const taskRouter = createTRPCRouter({
  hello: publicProcedure.input(z.object({text: z.string()})).query(({input}) => {
    console.log(input)
    return {
      message: "hello world, ${input.text}}",
    };
  }),
  addTestTask: protectedProcedure
  .input(z.object({ id: z.string() }))
  .mutation(async ({ input , ctx}) => {
    const testJob : BasicJob = {
      queueName: TestQueueName,
      data: {
        articleId: input.id,
      }
    }
    const job = await  testQueue.add(testJob.queueName, testJob.data);
    return await ctx.db.task.create({
      data: {
        jobId: job?.id??"",
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        data: testJob.data,
        description: "This is a test job " + input.id,
        createdBy: { connect: { id: ctx.session.user.id } },
      },
    });
  }),
  addTask: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      const data = {
        message: "This is a sample job " + input.id,
      };

      console.log(ctx)
      // console.log(connection);
      // await connection.set("foo", "bar");

      await importQueue.add("someJob", data);
      return { message: "ok" };
    }),
});
