import Link from "next/link";
import CardRow from "./CardRow";

const Card = ({ threads }: { threads: any }) => {
  return (
    <div className="rounded-2xl border-4 border-slate-700 bg-slate-500 p-4 text-white shadow-lg shadow-black flex flex-col mx-4 mt-4">
      <h1 className="bold text-4xl mb-4">Threads</h1>
      {/* <div className="mb-7 h-1 bg-black"></div> */}

      <div className="flex text-lg justify-around mb-2">
        <h3>User</h3>
        <h3>Title</h3>
        <h3>Author</h3>
        <h3 className="hidden md:block">Views</h3>
        <h3 className="hidden md:block">Replies</h3>
      </div>

      <section className="w-full">
        {threads.map((thread: { node: any }, index: Key | null | undefined) => (
          <CardRow threads={thread} key={index} />
        ))}
      </section>
    </div>
  );
};

export default Card;
