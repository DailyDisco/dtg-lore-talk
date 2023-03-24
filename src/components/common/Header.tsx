import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    function openMenuMobile(){
        setIsOpen(!isOpen)
    }

    return (
        <>
            <header className="bg-[#202020] text-white">
                <nav className="p-4 flex justify-evenly">
                    <div className="w-1/5 sm:w-1/3"></div>
                    <div className="w-3/5 sm:w-1/3 text-center">
                        <Link className="" href={"/"}>
                            <h2 className="text-3xl font-bold">DTG Lore Talk</h2>
                        </Link>
                    </div>
                    <div className="w-1/5 sm:w-1/3 flex justify-end items-center">
                        <Link className="mr-4 underline" href={"/login"}>Sign-In</Link>
                        <button onClick={ openMenuMobile } className="md:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-user"
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="#FFFFFF"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx="12" cy="7" r="4" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>
            <section
                id="side-bar"
                className={`side-bar fixed z-50 h-full w-5/6 translate-x-[120%] shadow-xl transition md:shadow-none ${isOpen ? 'translate-x-[20%]' : ''} md:hidden`}
            >
                <ul className="font-lora h-full w-full overflow-y-hidden bg-white p-6 text-lg text-[#202020] md:w-1/2 md:shadow-xl">
                    <Link className="" href="/">
                        <li className="my-5 w-full border-b-2 pb-3 font-semibold">
                            <span className="">Home</span>
                        </li>
                    </Link>
                    <Link className="" href="/">
                        <li className="my-5 w-full border-b-2 pb-3 font-semibold">
                            <span className="">My Profile</span>
                        </li>
                    </Link>
                    <Link className="" href="/">
                        <li className="my-5 w-full border-b-2 pb-3 font-semibold">
                            <span className="">Create A Thread</span>
                        </li>
                    </Link>
                    
                </ul>
            </section>
        </>
    );
};

export default Header;
