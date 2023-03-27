import { z } from "zod";

import { TRPCError } from "@trpc/server";

import {
    createTRPCRouter,
    publicProcedure,
    protectedProcedure,
} from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
    upvoteThread: publicProcedure
        .input(z.string())
        .mutation(async ({ input: data, ctx }) => {
            const upvotedThread = await ctx.prisma.threads.update({
                where: {
                    id: data,
                },
                data: {
                    votes: {
                        increment: 1,
                    },
                },
            });
            return upvotedThread;
        }),
    downvoteThread: publicProcedure
        .input(z.string())
        .mutation(async ({ input: data, ctx }) => {
            const downvotedThread = await ctx.prisma.threads.update({
                where: {
                    id: data,
                },
                data: {
                    votes: {
                        increment: -1,
                    },
                },
            });
            return downvotedThread;
        }),
    hello: publicProcedure
        .input(z.object({ text: z.string() }))
        .query(({ input }) => {
            return {
                greeting: `Hello ${input.text}`,
            };
        }),
    deleteThread: publicProcedure
        .input(z.string())
        .mutation(async ({ input: data, ctx }) => {
            const deletedThread = await ctx.prisma.threads.delete({
                where: {
                    id: data,
                },
            });
            return deletedThread;
        }),
    createThread: publicProcedure
        .input(
            z.object({
                title: z.string(),
                body: z.string(),
                // image: z.string(),
                userID: z.string(),
                category: z.string(),
                views: z.number(),
                replies: z.number(),
                votes: z.number(),
            })
        )
        .mutation(async ({ input, ctx }) => {
            const newThread = ctx.prisma.threads.create({
                data: {
                    title: input.title,
                    body: input.body,
                    // image: input.image,
                    userID: input.userID,
                    category: input.category,
                    views: input.views,
                    replies: input.replies,
                    votes: 0,
                },
            });
            return newThread;
        }),

    getThread: publicProcedure
        .query(async ({ input, ctx }) => {
            const post = await ctx.prisma.threads.findFirst({
                where: {
                    id: input
                }
            })
            if(!post) throw new TRPCError({ code: "NOT_FOUND" })
            return post
    }), 

  getAll: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.example.findMany();
    }),

    getSecretMessage: protectedProcedure.query(() => {
        return "you can now see this secret message!";
    }),
});
