import Image from "next/image";
import Link from "next/link";
import React from "react";

const MessagesRow = () => {
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
            <li>The Traveler</li>
          </Link>
          <Link href="/user/profilePage">
            <li>This is the description for the post...</li>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default MessagesRow;
