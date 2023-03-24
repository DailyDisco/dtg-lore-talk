import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import Footer from "../common/Footer";
import Header from "../common/Header";
import ReusableButton from "../common/ReusableButton";
import Link from "next/link";
// import Sidebar from "../common/Sidebar";
// import Sidebar from "../common/Sidebar";

// Interface for the props of the PrimaryLayout component
export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<"div"> { }

// Website title for the <Head> component
const websiteTitle = "DTG Lore Talk";

// The PrimaryLayout component
const PrimaryLayout = ({ children, ...divProps }: { children: any }) => {
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

                <div className="flex p-4 justify-evenly items-center h-full">
                    {/* change the width of the main contents here */}
                    <main
                        className="relative mt-7 mb-12 w-full md:w-4/5 flex-1"
                        role="main"
                        tabIndex={0}
                        aria-label="main content"
                    >
                        <div className="flex w-full items-center justify-center space-x-3 px-5 ">
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
                    <div className="hidden lg:block w-2/6 border-4 rounded-lg p-4 h-full">
                        <div className="text-center py-2">
                            <h2 className="font-bold text-xl text-black">Recent Threads</h2>
                        </div>
                        <ul>
                            <li className="flex justify-between p-2 rounded-lg border-2 my-1">
                                <span>Post Title</span>
                                <span>0 Comments</span>
                            </li>
                            <li className="flex justify-between p-2 rounded-lg border-2 my-1">
                                <span>Post Title</span>
                                <span>0 Comments</span>
                            </li>
                            <li className="flex justify-between p-2 rounded-lg border-2 my-1">
                                <span>Post Title</span>
                                <span>0 Comments</span>
                            </li>
                        </ul>
                        <div className="w-full h-[4px] bg-[#ebebeb] rounded-lg my-8"></div>
                        <ul className="flex my-4 flex-wrap justify-center">
                            <li className="w-2/5 my-2 mx-2">
                                <Link href="/" className="border-2 rounded-lg py-2 w-full block text-center">Home</Link>
                            </li>
                            <li className="w-2/5 my-2 mx-2">
                                <Link href="/" className="border-2 rounded-lg py-2 w-full block text-center">My Profile</Link>
                            </li>
                            <li className="w-1/2 my-2">
                                <Link href="/" className="border-2 rounded-lg py-2 w-full block text-center">Create a Thread</Link>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default PrimaryLayout;
