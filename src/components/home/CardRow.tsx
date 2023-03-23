import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardRow = ({ threads }: { threads: any }) => {
  return (
    <div className=" mb-3 flex items-center rounded-xl bg-white p-3 text-black xl:space-x-24 xs:space-x-3">
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
        <div className="w-64 xs:w-16 ">{threads?.title}</div>
      </Link>
      {/* {console.log(threads, "threads in cardrow")} */}
      <Link href={`/user/profile/${threads.userID}`}>
        <div className="xs:w-25 w-24">{threads?.userID}</div>
      </Link>
      <div className="w-16 xs:w-16">{threads?.views}</div>
      <div className="w-16 xs:w-16">{threads?.replies}</div>
    </div>
  );
};

export default CardRow;
