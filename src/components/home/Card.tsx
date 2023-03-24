import Link from "next/link";
import { Key, useState } from "react";
import CardRow from "./CardRow";
import { usePathname } from "next/navigation";

const Card = ({ threads }: { threads: any }) => {
  const pathname = usePathname();
  const [catFilter, setCatFilter] = useState("all");

  return (
    <div className="mx-auto mt-4 flex w-11/12 flex-col rounded-2xl border-8 border-slate-700 bg-slate-500 p-3 text-white shadow-lg shadow-black md:w-3/4">
      <h1 className="bold mb-4 text-4xl">Threads</h1>
      {pathname === "/" && (
        <div>
          {/* search bar */}
          <div className="mb-4 flex w-64 items-center justify-center">
            <input
              type="text"
              className="w-full rounded bg-slate-700 py-2 px-4 font-bold text-white"
              placeholder="Search"
            />
          </div>
          <div className="flex space-x-1">
            <Link href="/">
              <button className="rounded bg-slate-700 py-2 px-4 font-bold text-white hover:bg-slate-600">
                Lore Discussion
              </button>
            </Link>

            <Link href="/">
              <button className="rounded bg-slate-700 py-2 px-4 font-bold text-white hover:bg-slate-600">
                Off-Topic
              </button>
            </Link>
            <Link href="/">
              <button className="rounded bg-slate-700 py-2 px-4 font-bold text-white hover:bg-slate-600">
                Looking for Group
              </button>
            </Link>
            {/* <Link href="/">
              <button className="rounded bg-slate-700 py-2 px-4 font-bold text-white hover:bg-slate-600">
                Messages
              </button>
            </Link> */}

            {/* <Link href="/">
              <button className="rounded bg-slate-700 py-2 px-4 font-bold text-white hover:bg-slate-600">
                Create a Thread
              </button>
            </Link> */}
          </div>
        </div>
      )}
      <section className="w-full">
        {threads.map((thread: { node: any }, index: Key | null | undefined) => (
          <CardRow threads={thread} key={index} />
        ))}
      </section>
    </div>
  );
};

export default Card;
