import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardRow = ({ threads }: { threads: any }) => {
  return (
    <div className=" mb-3 flex items-center rounded-xl bg-white p-3 text-black xl:space-x-24">
      <Link href={`/user/profile/${threads.userID}`}>
        <Image
          src="/Cayde.jpg"
          alt="User Profile Pic"
          width={64}
          height={64}
          className="rounded-full"
        />
      </Link>
      <Link href={`/threads/${threads.id}`}>
        <div className="">{threads?.title}</div>
      </Link>
      {/* {console.log(threads, "threads in cardrow")} */}
      <Link href={`/user/profile/${threads.userID}`}>
        <div>{threads?.userID}</div>
      </Link>
      <div>{threads?.views}</div>
      <div>{threads?.replies}</div>
    </div>
  );
};

export default CardRow;
