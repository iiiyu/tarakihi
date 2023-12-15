import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { testAI } from "~/server/agent/test";

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
});
