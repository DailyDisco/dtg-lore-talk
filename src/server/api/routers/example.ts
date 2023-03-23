import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  createThread: publicProcedure
    .input(
      z.object({
        title: z.string(),
        body: z.string(),
        image: z.string(),
        userID: z.string(),
        category: z.string(),
        views: z.number(),
        replies: z.number(),
      })
    )
    .mutation(({ input, ctx }) => {
      const newThread = ctx.prisma.threads.create({
        data: {
          title: "Test Title",
          body: "Test Body",
          image: "https://picsum.photos/200",
          userID: "GroupWork",
          category: "testCategory",
          views: 0,
          replies: 0,
        },
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
