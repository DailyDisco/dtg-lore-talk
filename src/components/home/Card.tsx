import Link from "next/link";
import { Key, useState } from "react";
import CardRow from "./CardRow";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

const Card = ({ threads }: { threads: any }) => {
  const pathname = usePathname();
  const [catFilter, setCatFilter] = useState("");
  console.log(threads, "threads");
  const { data: sessionData } = useSession();
  const handleCatFilter = (cat: string) => {
    setCatFilter(cat);
    console.log(catFilter, "catFilter");
  };

  if (
    catFilter == "Lore-Discussion" ||
    catFilter == "Off-Topic" ||
    catFilter == "Looking-for-Group"
  ) {
    threads = threads.filter((thread: any) => thread.category === catFilter);
  } else if (catFilter == "All") {
    threads = threads;
  }

  return (
    <div className="mx-auto mt-4 flex flex-col rounded-2xl border-8 border-slate-700 bg-slate-500 p-3 text-white shadow-lg shadow-black w-11/12 md:w-10/12">
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

          {/* category buttons */}
          <div className="mb-1 flex-1 space-x-1 space-y-1">
            <button
              onClick={() => handleCatFilter("All")}
              className="rounded bg-slate-700 py-2 px-4 font-bold text-white hover:bg-slate-600"
            >
              All
            </button>
            <button
              onClick={() => handleCatFilter("Lore-Discussion")}
              className="rounded bg-slate-700 py-2 px-4 font-bold text-white hover:bg-slate-600"
            >
              Lore Discussion
            </button>

            <button
              onClick={() => handleCatFilter("Off-Topic")}
              className="rounded bg-slate-700 py-2 px-4 font-bold text-white hover:bg-slate-600"
            >
              Off-Topic
            </button>

            <button
              onClick={() => handleCatFilter("Looking-for-Group")}
              className="rounded bg-slate-700 py-2 px-4 font-bold text-white hover:bg-slate-600"
            >
              Looking for Group
            </button>
            <div className="hidden space-x-1 space-y-1">
              <Link href="/messages">
                <button className="rounded bg-slate-700 py-2 px-4 font-bold text-white hover:bg-slate-600">
                  Messages
                </button>
              </Link>
              <Link href="/threads/createThread">
                <button className="rounded bg-slate-700 py-2 px-4 font-bold text-white hover:bg-slate-600">
                  Create a Thread
                </button>
              </Link>
              {sessionData ? (
                <button
                  onClick={() => signOut()}
                  className="rounded bg-slate-700 py-2 px-4 font-bold text-white hover:bg-slate-600"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => signIn()}
                  className="rounded bg-slate-700 py-2 px-4 font-bold text-white hover:bg-slate-600"
                >
                  Login
                </button>
              )}
            </div>
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
