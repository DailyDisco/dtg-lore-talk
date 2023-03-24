import Link from "next/link";

const Sidebar = () => {
  return (
    
    <div className="hidden md:block w-2/6 border-4 rounded-lg p-4 h-[70vh]">
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
    
  );
};

export default Sidebar;
