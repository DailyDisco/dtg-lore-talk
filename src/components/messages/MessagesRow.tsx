import Image from "next/image";
import Link from "next/link";
import React from "react";

const MessagesRow = ({ messages }: { messages: any }) => {
  return (
    <div>
      <ul className="row w mb-7 flex bg-slate-400">
        <Link href="/user/profilePage">
          <li>
            <Image
              src="/Cayde.jpg"
              alt="User Profile Pic"
              width={64}
              height={64}
              className="rounded-full"
            />
          </li>
        </Link>
        <div className="ml-7">
          <Link href="/user/profilePage">
            <li>{messages.userID}</li>
          </Link>
          <Link href="/user/profilePage">
            <li>{messages.body}</li>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default MessagesRow;
