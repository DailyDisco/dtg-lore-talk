import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardRow = ({ threads }: { threads: any }) => {
  return (
    <div className="flex items-center justify-around rounded-xl bg-white p-3 text-black my-2">
      <Link href={`/user/profile/${threads.userID}`} className="min-w-1/5">
        <Image
          src="/Cayde.jpg"
          alt="User Profile Pic"
          width={64}
          height={64}
          className="rounded-full"
        />
      </Link>
      <Link href={`/threads/${threads.id}`} className="min-w-1/5">
        <div className="w-64 xs:w-16 ">{threads?.title}</div>
      </Link>
      {/* {console.log(threads, "threads in cardrow")} */}
      <Link href={`/user/profile/${threads.userID}`} className="min-w-1/5">
        <div className="xs:w-25 w-24">{threads?.userID}</div>
      </Link>
      <div className="hidden min-w-1/5 md:block">{threads?.views}</div>
      <div className="hidden min-w-1/5 md:block">{threads?.replies}</div>
    </div>
  );
};

export default CardRow;
