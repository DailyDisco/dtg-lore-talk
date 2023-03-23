import Link from "next/link";
import CardRow from "./CardRow";

const Card = ({ threads }: { threads: any }) => {
  return (
    <>
      <div className="mx-auto flex w-3/4 flex-col rounded-2xl border-8 border-slate-700 bg-slate-500 p-4 text-white shadow-lg shadow-black">
        <h1 className="bold float-left mb-7  text-4xl ">Threads</h1>
        {/* <div className="mb-7 h-1 bg-black"></div> */}

        <div className="mb-7 flex sm:space-x-7 xl:space-x-24">
          <h3>User</h3>
          <h3>Title</h3>
          <h3>Author</h3>
          <h3>Views</h3>
          <h3>Replies</h3>
        </div>

        <section>
          {threads.map(
            (thread: { node: any }, index: Key | null | undefined) => (
              <CardRow threads={thread} key={index} />
            )
          )}
        </section>
      </div>
    </>
  );
};

export default Card;
