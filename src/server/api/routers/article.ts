import next from "next";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const articleRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        title: z.string().min(1),
        content: z.string().min(1),
        language: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.article.create({
        data: {
          title: input.title,
          content: input.content,
          language: input.language,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  infiniteArticles: protectedProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.string().nullish(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const limit = input.limit ?? 50;
      const { cursor } = input;
      const items = await ctx.db.article.findMany({
        take: limit + 1,
        where: {
          createdBy: { id: ctx.session.user.id },
          originalArticleId: null,
        },
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: { id: "desc" },
      });
      const total = await ctx.db.article.count({
        where: {
          createdBy: { id: ctx.session.user.id },
          originalArticleId: null,
        },
      });
      let nextCursor: typeof cursor | null = null;
      if (items.length > limit) {
        const nextItem = items.pop();
        nextCursor = nextItem?.id ?? null;
      }
      return {
        items,
        nextCursor,
        total,
      };
    }),

  getArticlesByUser: protectedProcedure
    .input(
      z.object({
        page: z.number().min(1).max(100).nullish(),
        limit: z.number().min(1).max(100).nullish(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const page = input.page ?? 1;
      const limit = input.limit ?? 50;
      const skip = (page - 1) * limit;
      const articles = await ctx.db.article.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        where: {
          createdBy: { id: ctx.session.user.id },
          originalArticleId: null,
        },
      });
      const total = await ctx.db.article.count({
        where: {
          createdBy: { id: ctx.session.user.id },
          originalArticleId: null,
        },
      });
      return {
        articles: articles,
        total,
      };
    }),

  // getLatest: protectedProcedure.query(({ ctx }) => {
  //   return ctx.db.post.findFirst({
  //     orderBy: { createdAt: "desc" },
  //     where: { createdBy: { id: ctx.session.user.id } },
  //   });
  // }),

  // getSecretMessage: protectedProcedure.query(() => {
  //   return "you can now see this secret message!";
  // }),
});
