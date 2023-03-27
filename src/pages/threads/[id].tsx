// import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { useRouter } from 'next/router'
import { api } from "~/utils/api";
import type { GetStaticProps, NextPage } from "next";
// import { generateSSGHelper } from "~/server/helpers/ssgHelper";

// {singleThread}: {singleThread: any}
const viewThread: NextPage<{ postId: string }> = ({ postId }) => {
    const { data } = api.example.getThread.useQuery(postId)

    if(!data) return <div>404</div>

    return (
        <>
        <main className="">
            <section className="p-4">
                <div className="flex justify-between items-center p-4">
                    <Link href={"/"} className="px-3 py-2 border-2 rounded-lg">Return</Link>
                    <span className="uppercase text-lg font-semibold">{data.userID}</span>
                </div>
                <div>
                    <h2 className="text-2xl">{data.title}</h2>
                </div>
                <div>
                    <p className="py-3">{data.body}</p>
                </div>
                <div className="text-end">
                    <div className="flex justify-end">
                        <div className="w-fit px-4 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <circle cx="12" cy="12" r="2" />
                                <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                            </svg>
                            <span className="ml-1">{data.views}</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <button className="mx-1">upvote</button>
                    <span className="mx-1">|</span>
                    <button className="mx-1">downvote</button>
                    <span className="mx-1">|</span>
                    <div className="mx-1">
                        <span>{data.votes}</span>
                    </div>
                </div>

            </section>
        </main>
        </>
    );
};

export const getStaticPaths = () => {
    return { paths: [], fallback: "blocking" };
}

import { createProxySSGHelpers } from '@trpc/react-query/ssg';
import { appRouter } from '~/server/api/root';
import { prisma } from '~/server/db';
import superjson from "superjson"

export const getStaticProps: GetStaticProps = async (context) => {
    const ssg = createProxySSGHelpers({
        router: appRouter,
        ctx: { prisma, userId: null },
        transformer: superjson, // optional - adds superjson serialization
    });

    const postId = context.params?.id

    if (typeof postId !== "string") throw new Error("no id");

    await ssg.example.getThread.prefetch({postId})

    return {
        props: {
            trpcState: ssg.dehydrate(),
            postId: postId
        },
    }
}


export default viewThread;
