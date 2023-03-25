import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Footer from "../common/Footer";
import Header from "../common/Header";
import ReusableButton from "../common/ReusableButton";
import Link from "next/link";
// import Sidebar from "../common/Sidebar";
// import Sidebar from "../common/Sidebar";

// Interface for the props of the PrimaryLayout component
export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<"div"> {}

// The PrimaryLayout component
const PrimaryLayout = ({ children, ...divProps }: { children: any }) => {
  const { data: sessionData } = useSession();
  return (
    <>
      {/* Render the layout */}
      <div {...divProps}>
        {/* Render the navigation bar */}
        <Header />
        <div className="flex h-full p-1">
          {/* change the width of the main contents here */}
          <main
            className="relative mt-7 mb-12 w-full flex-1 md:w-4/5"
            role="main"
            tabIndex={0}
            aria-label="main content"
          >
            <div className="flex w-full items-center justify-center space-x-3 px-5 ">
              {sessionData && (
                <>
                  {/* <ReusableButton ButtonName={"Messages"} /> */}
                  <ReusableButton ButtonName={"Create a Thread"} />
                </>
              )}
              <div>
                {sessionData ? (
                  <div onClick={() => signIn()}>
                    <ReusableButton ButtonName={"Sign Out"} />
                  </div>
                ) : (
                  <div onClick={() => signOut()}>
                    <ReusableButton ButtonName={"Sign In"} />
                  </div>
                )}
              </div>
            </div>
            {/* Render the children (content of the layout) */}
            {children}
          </main>
          {/* uncomment this to see the a sidebar placeholder */}
          {/* Render the sidebar */}
          <div className="hidden h-full w-2/6 rounded-lg border-4 p-4 lg:block">
            <div className="py-2 text-center">
              <h2 className="text-xl font-bold text-black">Recent Threads</h2>
            </div>
            <ul>
              <li className="my-1 flex justify-between rounded-lg border-2 p-2">
                <span>Post Title</span>
                <span>0 Comments</span>
              </li>
              <li className="my-1 flex justify-between rounded-lg border-2 p-2">
                <span>Post Title</span>
                <span>0 Comments</span>
              </li>
              <li className="my-1 flex justify-between rounded-lg border-2 p-2">
                <span>Post Title</span>
                <span>0 Comments</span>
              </li>
            </ul>
            <div className="my-8 h-[4px] w-full rounded-lg bg-[#ebebeb]"></div>
            <ul className="my-4 flex flex-wrap justify-center">
              <li className="my-2 mx-2 w-2/5">
                <Link
                  href="/"
                  className="block w-full rounded-lg border-2 py-2 text-center"
                >
                  Home
                </Link>
              </li>
              <li className="my-2 mx-2 w-2/5">
                <Link
                  href="/"
                  className="block w-full rounded-lg border-2 py-2 text-center"
                >
                  My Profile
                </Link>
              </li>
              <li className="my-2 w-1/2">
                <Link
                  href="/"
                  className="block w-full rounded-lg border-2 py-2 text-center"
                >
                  Create a Thread
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrimaryLayout;
