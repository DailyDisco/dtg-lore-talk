import { UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MessagesRow = ({ messages }: { messages: any }) => {
  // create function that maps different string titles in a database to a specific image

  return (
    <div className="my-2 flex items-center justify-around rounded-xl bg-white p-3 text-black">
      <div className="-ml-3 flex items-center">
        <div className="flex items-center">
          <Link
            href={`/user/profile/${messages.userID}`}
            className="min-w-1/5 mx-auto text-center"
          >
            <UserIcon className="mx-auto" height={24} width={24} />
            <div className="xs:w-24 w-24">{messages?.userID}</div>
          </Link>
        </div>
        <div className="ml-3 flex items-center">
          <Link href={`/user/profile/${messages.userID}`} className="min-w-1/5">
            <Image
              src="/Cayde.jpg"
              alt="User Profile Pic"
              width={96}
              height={96}
              className="hidden rounded-md md:inline-block"
            />
          </Link>
        </div>
      </div>
      <Link href={`/threads/${messages.id}`}>
        <div>Last Message</div>
      </Link>
      <Link href={`/threads/${messages.id}`}>
        <div>Unread Messages</div>
      </Link>
    </div>
  );
};

export default MessagesRow;
