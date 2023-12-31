import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { testAI } from "~/server/agent/test";
import { importQueue } from "~/redis/queue";
import { z } from "zod";
import { connection } from "~/redis/connection";

export const taskRouter = createTRPCRouter({
  hello: publicProcedure.query(() => {
    return {
      message: "hello world",
    };
  }),
  tryTest: protectedProcedure.query(async () => {
    await testAI();
    return { message: "ok" };
  }),
  addTask: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      const data = {
        message: "This is a sample job " + input.id,
      };

      // console.log(connection);
      // await connection.set("foo", "bar");

      await importQueue.add("someJob", data);
      return { message: "ok" };
    }),
});
