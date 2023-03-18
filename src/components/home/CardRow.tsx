import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardRow = () => {
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
        <li>Looking for group</li>
      </Link>

      <Link href="/user/profilePage">
        <li>The Traveler</li>
      </Link>

      <li>99</li>

      <li>99</li>
    </ul>
  );
};

export default CardRow;
