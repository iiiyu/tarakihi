import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";
import { importQueue } from "~/redis/queue";
import { z } from "zod";

export const taskRouter = createTRPCRouter({
  hello: publicProcedure.query(() => {
    return {
      message: "hello world",
    };
  }),
  addTask: publicProcedure
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
