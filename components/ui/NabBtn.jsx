import Link from "next/link";
import React from "react";

const NavBtn = () => {
  return (
    <a
      href="mailto:yellowglowstudios@gmail.com?subject=Website%20project%20inquiry&body=Hi%20Yellow%20Glow%20Studios,%0D%0A%0D%0AI’m%20interested%20in%20a%20website%20for%20my%20business.%0D%0A%0D%0AHere%20are%20a%20few%20quick%20details:%0D%0A•%20Business%20type:%0D%0A•%20Timeline:%0D%0A•%20Budget%20range%20(optional):%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you.%0D%0A%0D%0AThanks,"
      className="group relative inline-flex items-center uppercase rounded-full  bg-neutral-900 text-neutral-50 px-5 py-2.5  text-xs font-medium tracking-wide transition-all duration-300 ease-out hover:translate-y-[-1px] hover:shadow-md active:translate-y-0 "
    >
      <span>Start project</span>
      <span className="absolute h-[1px] w-[70%] -translate-x-1/2 scale-x-0 group-hover:scale-x-100 origin-center left-1/2 right-0 bottom-2 bg-neutral-50 transform transition-transform will-change-transform duration-300  pointer-events-none "></span>
    </a>
  );
};

export default NavBtn;
