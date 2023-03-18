import MessagesRow from "~/components/common/MessagesRow";

// don't let user use this till they're logged in
const messagesHome = () => {
  return (
    <>
      <h1 className="mb-7 text-center text-2xl">Messages</h1>
      <MessagesRow />
      <MessagesRow />
      <MessagesRow />
      <MessagesRow />
      <MessagesRow />
    </>
  );
};

export default messagesHome;
