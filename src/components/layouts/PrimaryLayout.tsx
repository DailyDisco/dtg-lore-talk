import Head from "next/head";
import Footer from "../common/Footer";
import Header from "../common/Header";
import ReusableButton from "../common/ReusableButton";
// import Sidebar from "../common/Sidebar";

// // Interface for the props of the PrimaryLayout component
export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<"div"> {}

// Website title for the <Head> component
const websiteTitle = "DTG Lore Talk";

// The PrimaryLayout component
const PrimaryLayout = ({ children, ...divProps }) => {
  return (
    <>
      <Head>
        <title>{websiteTitle}</title>
      </Head>
      {/* Render the layout */}
      <div {...divProps}>
        {/* Render the navigation bar */}
        <Header />
        <ReusableButton ButtonName={"Messages"} />
        <div className="flex h-screen justify-between">
          {/* change the width of the main contents here */}
          <main
            className="mt-24 ml-24 w-8/12"
            role="main"
            tabIndex={0}
            aria-label="main content"
          >
            {/* Render the children (content of the layout) */}
            {children}
          </main>

          {/* uncomment this to see the a sidebar placeholder */}
          {/* Render the sidebar */}
          {/* <div className="w-1/3 bg-slate-500">
            <Sidebar />
          </div> */}
        </div>

        {/* Render the footer */}
        <div className="h-16 flex-row bg-black text-white">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PrimaryLayout;
