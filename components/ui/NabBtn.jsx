import Link from "next/link";
import React from "react";

const NavBtn = () => {
  return (
   <Link href={"/"} className="group relative inline-flex items-center uppercase rounded-full  bg-neutral-900 text-neutral-50 px-5 py-2.5  text-xs font-medium tracking-wide transition-all duration-300 ease-out hover:translate-y-[-1px] hover:shadow-md active:translate-y-0 ">
    <span>
    Start project
    </span>
    <span className="absolute h-[1px] w-[70%] -translate-x-1/2 scale-x-0 group-hover:scale-x-100 origin-center left-1/2 right-0 bottom-2 bg-neutral-50 transform transition-transform will-change-transform duration-300  pointer-events-none "></span>
   </Link>
  );
};

export default NavBtn;
