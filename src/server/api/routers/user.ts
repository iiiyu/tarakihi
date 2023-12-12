import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  checkAuthorizedBySession: publicProcedure
    .input(z.object({ sessionToken: z.string() }))
    .query(async ({ input, ctx }) => {
      const session = await ctx.db.session.findFirst({
        where: { sessionToken: input.sessionToken },
      });

      if (session && session.expires > new Date()) {
        return { auth: true };
      } else {
        return { auth: false };
      }
    }),
});
