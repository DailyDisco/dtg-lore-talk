import Link from "next/link";
import { Key } from "react";
import MessagesRow from "./MessagesRow";

const MessagesCard = ({ messages }: { messages: any }) => {
  return (
    <>
      <div className="mx-auto mt-4 flex w-11/12 flex-col rounded-2xl border-8 border-slate-700 bg-slate-500 p-3 text-white shadow-lg shadow-black md:w-3/4">
        <h1 className="bold float-left mb-7  text-4xl ">Threads</h1>
        {/* <div className="mb-7 h-1 bg-black"></div> */}
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
