import Link from "next/link";
import MessagesRow from "./MessagesRow";

const MessagesCard = ({ messages }: { messages: any }) => {
  return (
    <>
      <div className="mx-auto mt-5 flex w-3/4 flex-col rounded-2xl border-8 border-slate-700 bg-slate-500  p-4 text-white shadow-lg shadow-black">
        <h1 className="bold float-left mb-7  text-4xl ">Threads</h1>
        {/* <div className="mb-7 h-1 bg-black"></div> */}

        <ul className="mb-7 flex sm:space-x-7 xl:space-x-24">
          <li>User</li>
          <li>Title</li>
          <li>Author</li>
          <li>Views</li>
          <li>Replies</li>
        </ul>

        <section>
          {messages?.map(
            (message: { node: any }, index: Key | null | undefined) => (
              <MessagesRow messages={message} key={index} />
            )
          )}
        </section>
      </div>
    </>
  );
};

export default MessagesCard;
