import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ArrowRightOnRectangleIcon,
  ChatBubbleLeftIcon,
  EyeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

const CardRow = ({ threads }: { threads: any }) => {
  return (
    <div className="my-2 flex items-center justify-around rounded-xl bg-white p-3 text-black">
      <div className="-ml-3 flex items-center">
        <div className="flex items-center">
          <Link
            href={`/user/profile/${threads.userID}`}
            className="min-w-1/5 mx-auto text-center"
          >
            <UserIcon className="mx-auto" height={24} width={24} />
            <div className="xs:w-25 w-24">{threads?.userID}</div>
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
        <ArrowRightOnRectangleIcon className="mx-2" height={16} width={16} />
        <Link href={`/threads/${threads.id}`} className="min-w-1/5">
          <div className="xs:w-16 w-64 ">{threads?.title}</div>
        </Link>
      </div>
      <div className="flex items-center">
        <EyeIcon className="mx-2" height={16} width={16} />
        <div className="min-w-1/5 hidden md:block">{threads?.views}</div>
      </div>
      <div className="flex items-center">
        <ChatBubbleLeftIcon className="mx-2" height={16} width={16} />
        <div className="min-w-1/5 hidden md:block">{threads?.replies}</div>
      </div>
    </div>
  );
};

export default CardRow;
