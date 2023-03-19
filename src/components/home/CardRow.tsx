import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardRow = ({ threads }: { threads: any }) => {
  return (
    <ul className="row b mb-7 flex justify-between bg-slate-400">
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

      <Link href="">
        <li>{threads?.title}</li>
      </Link>
      {/* {console.log(threads, "threads in cardrow")} */}
      <Link href="/user/profilePage">
        <li>{threads?.userID}</li>
      </Link>

      <li>{threads?.views}</li>

      <li>{threads?.replies}</li>
    </ul>
  );
};

export default CardRow;
