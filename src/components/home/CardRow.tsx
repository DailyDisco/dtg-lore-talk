import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardRow = ({ threads }: { threads: any }) => {
  return (
    <ul className="row mb-7 flex justify-between bg-white">
      <Link href={`/user/profile/${threads.userID}`}>
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
      <Link href={`/threads/${threads.id}`}>
        <li>{threads?.title}</li>
      </Link>
      {/* {console.log(threads, "threads in cardrow")} */}
      <Link href={`/user/profile/${threads.userID}`}>
        <li>{threads?.userID}</li>
      </Link>
      <li>{threads?.views}</li>
      <li>{threads?.replies}</li>
    </ul>
  );
};

export default CardRow;
