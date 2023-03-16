import Head from "next/head";
import Footer from "../common/Footer";
import Header from "../common/Header";

// // Interface for the props of the PrimaryLayout component
// export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<"div"> {
//   justify?: "items-center" | "items-start";
// }

// Website title for the <Head> component
const websiteTitle = "DTG Lore Talk";

// The PrimaryLayout component
const PrimaryLayout = ({ children, justify = "items-center", ...divProps }) => {
  return (
    <>
      {/* The PrimaryLayout component */}
      <Head>
        <title>{websiteTitle}</title>
      </Head>
      {/* Render the layout */}
      <div
        {...divProps}
        // className={`bg-image flex min-h-screen flex-col ${justify}`}
      >
        {/* Render the navigation bar */}
        <Header />
        {/* Render the children (content of the layout) */}
        <main
          //   className="flex-1 px-5"
          role="main"
          tabIndex={0}
          aria-label="main content"
        >
          {children}
        </main>
        {/* <div className="m-auto" /> */}
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
