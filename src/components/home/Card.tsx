import Link from "next/link";
import { Key } from "react";
import CardRow from "./CardRow";

const Card = ({ threads }: { threads: any }) => {
  return (
    <div className="mx-auto mt-4 flex w-11/12 flex-col rounded-2xl border-4 border-slate-700 bg-slate-500 p-3 text-white shadow-lg shadow-black md:w-3/4">
      <h1 className="bold mb-4 text-4xl">Threads</h1>
      {/* <div className="mb-7 h-1 bg-black"></div> */}

      <section className="w-full">
        {threads.map((thread: { node: any }, index: Key | null | undefined) => (
          <CardRow threads={thread} key={index} />
        ))}
      </section>
    </div>
  );
};

export default Card;
