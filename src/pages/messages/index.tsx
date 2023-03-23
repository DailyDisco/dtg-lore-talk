import { PrismaClient } from "@prisma/client";
import MessagesCard from "~/components/messages/MessagesCard";

// don't let user use this till they're logged in
const messagesHome = ({ messages }: { messages: any }) => {
  console.log(messages, "messages in messages home");
  return (
    <>
      <MessagesCard messages={messages} />
    </>
  );
};

export default messagesHome;

// export const getStaticPaths = async () => {
//   const prisma = new PrismaClient();
//   const messages = (await prisma.messages.findMany()) || [];
//   // console.log(threads, "threads return in getStaticPaths");

//   const paths = messages.map((message) => ({
//     params: { id: message.userID },
//   }));

//   return { paths, fallback: false };
// };

export const getStaticProps = async ({ params }: { params: any }) => {
  const prisma = new PrismaClient();
  const messages =
    (await prisma.messages.findMany({
      where: { userID: "GroupWork" },
    })) || [];

  return {
    props: {
      messages,
    },
  };
};
