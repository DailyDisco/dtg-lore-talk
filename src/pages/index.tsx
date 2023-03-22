import { ReactElement } from "react";
import Head from "next/head";
// import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import { NextPageWithLayout } from "./page";
import Card from "~/components/home/Card";
import { PrismaClient } from "@prisma/client";

const Home: NextPageWithLayout = ({ threads }: { threads: any }) => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC", title: "asdxi", "description": "asdas" });
  //"Hello from tRPC"
  return (
    <>
      <Head>
        <title>Destiny The Game Lore Talk</title>
        <meta
          name="description"
          content="The place to learn, teach, and discuss Destiny Lore"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <AuthShowcase />
          <Card threads={threads} />
        </section>
      </main>
    </>
  );
};

export default Home;

{
  /* <p className="text-2xl text-white">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p> */
}

// When we set up multiple layouts, we can use this to set the layout for each page by passing it as a property to the page component.

// Home.getLayout = (page: ReactElement) => {
//   return <PrimaryLayout>{page}</PrimaryLayout>;
// };

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <div className="bg-purple-600">
        <button
          className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
          onClick={
            sessionData ? () => void signOut() : () => void signIn("discord")
          }
        >
          {sessionData ? "Sign out" : "Sign in"}
        </button>
      </div>
    </div>
  );
};

// using getStaticProps we will fetch the threads from the database and pass them to the page component as props

// after that we will use the .map function to map the CardRows component with the proper data
// {posts.map((post) => (<CardRow key={post.id} thread={thread.?id} />))}

// do the same for the messages

// getServerSideProps/ getStaticProps / getStaticPaths / ISR incrementally static regeneration
export async function getStaticProps() {
  const prisma = new PrismaClient();
  const threads = (await prisma.threads.findMany()) || [];
  // console.log(threads, "threads return in getStaticProps");

  return {
    props: {
      threads,
    },
  };
}
