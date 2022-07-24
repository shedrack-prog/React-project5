import React, { useEffect, useState } from "react";

import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineCloseSquare } from "react-icons/ai";
// MdProductionQuantityLimits products
// MdOutlineBrandingWatermark branding
// MdWeb web design
// FiFacebook face book
// AiOutlineInstagram intsagram
// FiTwitter twitter
// AiOutlineLinkedin linked in

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);

    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div
      className={`flex items-center justify-center p-4 h-[80px]
    z-20  text-[#c9c7c6] fixed w-full top-0 right-0 left-0 ${
      scroll && "bg-black"
    } transition duration-500`}
    >
      <div className=" flex items-center justify-between w-[90%] ">
        <h1 className="text-2xl ">Logo.</h1>

        {/* desktop view */}
        <div className="hidden md:flex gap-2 items-center justify-center">
          <ul className="flex gap-3 uppercase">
            {["home", "about", "services", "projects", "testimonials"].map(
              (item) => (
                <li className="">
                  <a className="" href={`#${item}`}>
                    {item}
                  </a>
                  <div className="" />
                </li>
              )
            )}
          </ul>
        </div>
        <a
          className="hover:bg-white hover:text-black hover:border-none 
          trasnition duration-500 hidden md:block px-4 py-3 bg-transparent border-2 border-solid border-gray-400 rounded-xl ml-6 mr-0"
          href="#"
        >
          Download CV
        </a>
        <AiOutlineBars
          size={28}
          onClick={() => setOpen(true)}
          className="cursor-pointer md:hidden"
        />
        {/* mobile responsiveness */}
        {open && (
          <ul
            className=" flex gap-3 flex-col h-[330px] w-[100vw] top-0 right-0 left-0 z-30 
          bg-gray-200 absolute items-center justify-center rounded-bl-xl rounded-br-xl pt-3 md:hidden
           transition duration-500"
          >
            <AiOutlineCloseSquare
              size={28}
              className="fixed right-6 top-6 text-black cursor-pointer"
              onClick={() => setOpen(false)}
            />
            {[
              "home",
              "about",
              "skills",
              "services",
              "projects",

              "testimonials",
            ].map((item) => (
              <li
                onClick={() => setOpen(false)}
                className="uppercase text-lg group flex cursor-pointer flex-col-reverse gap-[2px] items-center justify-center text-black"
              >
                <a className="" href={`#${item}`}>
                  {item}
                </a>
                {/* <div className="h-2 w-2 rounded-full bg-transparent bg-green-500 " /> */}
              </li>
            ))}

            <a
              onClick={() => setOpen(false)}
              className="px-5 py-4 bg-black rounded-xl w-[80%] text-center text-lg "
              href="#"
            >
              Download CV
            </a>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
