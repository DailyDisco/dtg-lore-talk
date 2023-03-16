import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //     const body = document.querySelector('body')
  //     const sideMobile = document.getElementById('side-bar')
  //     function initializeMenu(){

  //     }
  //     initializeMenu()
  //     return
  // }, [])

  //   function openMenuMobile() {
  //     if (isOpen) {
  //       body.classList.remove("overflow-y-hidden");
  //       sideMobile.classList.remove("translate-x-0");
  //       sideMobile.classList.add("translate-x-[-100%]");
  //       setIsOpen(true);
  //     } else {
  //       body.classList.add("overflow-y-hidden");
  //       sideMobile.classList.remove("translate-x-[-100%]");
  //       sideMobile.classList.add("translate-x-0");
  //       setIsOpen(false);
  //     }
  //   }

  return (
    <>
      <header className="bg-[#202020] text-white">
        <nav className="p-4">
          <div className="relative w-full">
            <div className="absolute w-full text-center">
              <h2 className="text-3xl font-bold">DTG Lore Talk</h2>
            </div>
          </div>
          <button className="">
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
        </nav>
      </header>
      <section
        id="side-bar"
        className="side-bar fixed z-50 h-full w-5/6 translate-x-[-100%] shadow-xl transition md:shadow-none lg:hidden"
      >
        <ul className="font-lora h-full w-full overflow-y-scroll bg-white p-6 text-lg text-[#202020] md:w-1/2 md:shadow-xl">
          <Link className="" href="/">
            <li className="my-5 w-full border-b-2 pb-3 font-semibold">
              <span className="">Home</span>
            </li>
          </Link>
          <a className="" href="/shop">
            <li className="my-5 w-full border-b-2 pb-3 font-semibold">
              <span className="">Shop</span>
            </li>
          </a>
        </ul>
      </section>
    </>
  );
};

export default Header;