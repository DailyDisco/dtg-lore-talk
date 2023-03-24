import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ArrowDownCircleIcon,
  ArrowRightOnRectangleIcon,
  ArrowUpCircleIcon,
  ChatBubbleLeftIcon,
  EyeIcon,
  TrashIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { prisma } from "~/server/db";
import { api } from "~/utils/api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const CardRow = ({ threads }: { threads: any }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const deleteThread = api.example.deleteThread.useMutation();
  const upvoteThread = api.example.upvoteThread.useMutation();
  const downvoteThread = api.example.downvoteThread.useMutation();

  async function handleUpvote() {
    await upvoteThread.mutateAsync(threads.id);
    router.reload();
  }

  async function handleDownvote() {
    await downvoteThread.mutateAsync(threads.id);
    router.reload();
  }

  async function handleDelete() {
    await deleteThread.mutateAsync(threads.id);
    router.reload();
  }
  return (
    <div className="my-2 flex items-center justify-around rounded-xl bg-white p-3 text-black">
      <div className="-ml-3 flex items-center">
        <div className="flex items-center">
          <Link
            href={`/user/profile/${threads.userID}`}
            className="min-w-1/5 mx-auto text-center"
          >
            <UserIcon className="mx-auto" height={24} width={24} />
            <div className="xs:w-24 w-24">{threads?.userID}</div>
          </Link>
        </div>
        <div className="ml-3 flex items-center">
          <Link href={`/user/profile/${threads.userID}`} className="min-w-1/5">
            <Image
              src="/Cayde.jpg"
              alt="User Profile Pic"
              width={96}
              height={96}
              className="rounded-md"
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        <ArrowRightOnRectangleIcon className="mx-2" height={20} width={20} />
        <Link href={`/threads/${threads.id}`} className="min-w-1/5">
          <div className="xs:w-16 w-64 text-4xl ">{threads?.title}</div>
        </Link>
      </div>
      <div className="flex items-center">
        <EyeIcon className="mx-2" height={20} width={20} />
        <div className="min-w-1/5 hidden text-4xl md:block">
          {threads?.views}
        </div>
      </div>
      <div className="flex items-center">
        <ChatBubbleLeftIcon className="mx-2" height={20} width={20} />
        <div className="min-w-1/5 hidden text-4xl md:block">
          {threads?.replies}
        </div>
      </div>
      <div className="flex items-center">
        <div className="col mx-2 flex-1">
          <button onClick={() => handleUpvote()}>
            <ArrowUpCircleIcon height={20} width={20} />
          </button>
          <button onClick={() => handleDownvote()}>
            <ArrowDownCircleIcon height={20} width={20} />
          </button>
        </div>
        <div className="text-4xl">{threads?.votes}</div>
      </div>
      {/* display the delete option only if you are the user who posted it */}
      {console.log(threads?.userID, "threads.userID")}
      {session?.user.name === threads.userID && (
        <div>
          <button onClick={() => handleDelete()}>
            <TrashIcon className="mx-2" height={20} width={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default CardRow;
