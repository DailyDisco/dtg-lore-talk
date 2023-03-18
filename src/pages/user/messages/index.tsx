import MessagesCard from "~/components/messages/MessagesCard";

// don't let user use this till they're logged in
const messagesHome = () => {
  return (
    <>
      <MessagesCard />
    </>
  );
};

export default messagesHome;
