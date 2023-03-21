import Link from "next/link";
import CardRow from "./CardRow";

const Card = ({ threads }: { threads: any }) => {
  return (
    <>
      <main className="flex w-full max-w-full flex-col rounded-2xl border-4 border-blue-700 bg-slate-400 p-4 shadow-lg shadow-black">
        <h1 className="mb-7 text-center text-2xl uppercase">Threads</h1>
        <div className="mb-7 h-1 bg-black"></div>
        <section className="mb-7">
          <ul className="row flex justify-around">
            <li>User</li>
            <li>Title</li>
            <li>Author</li>
            <li>Views</li>
            <li>Replies</li>
          </ul>
        </section>
        <section>
          {threads.map(
            (thread: { node: any }, index: Key | null | undefined) => (
              <CardRow threads={thread} key={index} />
            )
          )}
        </section>
      </main>
    </>
  );
};

export default Card;
