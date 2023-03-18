import Link from "next/link";
import CardRow from "./CardRow";

const Card = () => {
  return (
    <>
      <main className="flex w-full max-w-full flex-col rounded-2xl border-4 border-blue-400 bg-white p-4">
        <h1 className="mb-7 text-center text-2xl uppercase">Threads</h1>
        <div className="mb-7 h-1 bg-black"></div>
        <section className="mb-7">
          <ul className="row flex justify-between">
            <li>User</li>

            <li>Title</li>

            <li>Author</li>

            <li>Views</li>

            <li>Replies</li>
          </ul>
        </section>
        <section>
          <CardRow />
          <CardRow />
          <CardRow />
          <CardRow />
          <CardRow />
          <CardRow />
          <CardRow />
          <CardRow />
          <CardRow />
        </section>
      </main>
    </>
  );
};

export default Card;
