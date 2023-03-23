import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import Footer from "../common/Footer";
import Header from "../common/Header";
import ReusableButton from "../common/ReusableButton";
import Sidebar from "../common/Sidebar";
// import Sidebar from "../common/Sidebar";

// // Interface for the props of the PrimaryLayout component
export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<"div"> {}

// Website title for the <Head> component
const websiteTitle = "DTG Lore Talk";

// The PrimaryLayout component
const PrimaryLayout = ({ children, ...divProps }) => {
  const { data: sessionData } = useSession();
  return (
    <>
      {/* <Head>
        <title>{websiteTitle}</title>
      </Head> */}
      {/* Render the layout */}
      <div {...divProps}>
        {/* Render the navigation bar */}
        <Header />

        <div className="flex">
          {/* change the width of the main contents here */}
          <main
            className="relative mt-7 mb-12 w-full flex-1"
            role="main"
            tabIndex={0}
            aria-label="main content"
          >
            <div className="flex w-full items-center justify-center space-x-3">
              {sessionData && (
                <>
                  <ReusableButton ButtonName={"Messages"} />
                  <ReusableButton ButtonName={"Create a Thread"} />
                </>
              )}
              <div onClick={() => signIn()}>
                {sessionData ? (
                  <ReusableButton ButtonName={"Sign Out"} />
                ) : (
                  <ReusableButton ButtonName={"Sign In"} />
                )}
              </div>
            </div>
            {/* Render the children (content of the layout) */}
            <div className="">{children}</div>
          </main>
          {/* uncomment this to see the a sidebar placeholder */}
          {/* Render the sidebar */}
          {/* <Sidebar /> */}
        </div>
      </div>
    </>
  );
};

export default PrimaryLayout;
