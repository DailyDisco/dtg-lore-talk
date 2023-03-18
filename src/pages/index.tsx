import { ReactElement } from "react";
import Link from "next/link";
import Head from "next/head";
// import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import { NextPageWithLayout } from "./page";
import PrimaryLayout from "../components/layouts/PrimaryLayout";
import Card from "~/components/common/Card";

const Home: NextPageWithLayout = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

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
      <main className="">
        <section className="">
          <Card />
        </section>
      </main>
      {/* <p className="text-2xl text-white">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p> */}
    </>
  );
};

export default Home;

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
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
