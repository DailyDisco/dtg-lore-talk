import Image from "next/image";
import Link from "next/link";
import React from "react";

const MessagesRow = ({ messages }: { messages: any }) => {
  // create function that maps different string titles in a database to a specific image

  return (
    <ul className="mb-7 flex items-center rounded-xl bg-white p-2 text-black sm:space-x-3 xl:space-x-24">
      <Link href={`/user/profile/${messages.userID}`}>
        <li className="">
          <Image
            src="/Cayde.jpg"
            alt="User Profile Pic"
            width={64}
            height={64}
            className="rounded-full"
          />
        </li>
      </Link>
      <Link href={`/threads/${messages.id}`}>
        <li>{messages?.title}</li>
      </Link>
      {/* {console.log(threads, "threads in cardrow")} */}
      <Link href={`/user/profile/${messages.userID}`}>
        <li>{messages?.userID}</li>
      </Link>
      <li>{messages?.views}</li>
      <li>{messages?.replies}</li>
    </ul>
  );
};

export default MessagesRow;
