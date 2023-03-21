import MessagesRow from "./MessagesRow";

const MessagesCard = ({ messages }: { messages: any }) => {
  return (
    <>
      <main className="flex w-full max-w-full flex-col rounded-2xl border-4 border-blue-400 bg-white p-4">
        <h1 className="mb-7 text-center text-2xl uppercase">Messages</h1>
        <div className="mb-7 h-1 bg-black"></div>
        <section className="mb-7">
          <ul className="row flex justify-between">
            <li>From:</li>
          </ul>
        </section>
        <section>
          {messages.map(
            (message: { node: any }, index: Key | null | undefined) => (
              <MessagesRow messages={message} key={index} />
            )
          )}
        </section>
      </main>
    </>
  );
};

export default MessagesCard;
