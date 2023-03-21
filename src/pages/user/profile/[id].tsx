import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import { useEffect } from "react";
import Card from "~/components/home/Card";
import CardRow from "~/components/home/CardRow";

// don't let user use this till they're logged in
const profilePage = ({ threads, user }: { threads: any; user: any }) => {
  useEffect(() => {
    console.log(threads, "threads return in getStaticProps");
    console.log(threads.userID, "threads.userID return in getStaticProps");
    console.log(user, "user return in getStaticProps");
    console.log(user.bio, "user.bio return in getStaticProps");
  }, []);

  return (
    <>
      <main>
        <section className="h-128 mb-7">
          <Image
            src="/Cayde.jpg"
            alt="Profile Picture"
            width={512}
            height={512}
            className="mb-5 rounded-lg"
          />
          <div className="float">
            <p>{user[0].bio}</p>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl">Threads</h2>
          {/* <CardRow threads={threads} /> */}
          <Card threads={threads} />
        </section>
      </main>
    </>
  );
};

export default profilePage;

export const getStaticPaths = async () => {
  const prisma = new PrismaClient();
  const threads = (await prisma.threads.findMany()) || [];
  // console.log(threads, "threads return in getStaticPaths");

  const paths = threads.map((thread) => ({
    params: { id: thread.userID },
  }));

  return { paths, fallback: false };
};

export async function getStaticProps({ params }: { params: any }) {
  const prisma = new PrismaClient();
  const threads =
    (await prisma.threads.findMany({
      where: { userID: params.id },
    })) || [];
  const user = (await prisma.user.findMany()) || [];

  return {
    props: {
      threads,
      user,
    },
  };
}
