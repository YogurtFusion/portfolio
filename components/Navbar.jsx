import React from "react";
import Link from "next/link";
import NavBtn from "./ui/NabBtn";

const Navbar = () => {
  return (
    <nav className="  bg-(--nav-bg)  fixed top-6 left-0 right-0 z-50 backdrop-blur-md shadow-sm rounded-full h-16 md:max-w-6xl max-w-xl  w-full mx-auto flex justify-between items-center px-6 border border-neutral-200 ">
      {/* logo */}
      <div className=" flex  items-center gap-3 ">
        <div className=" flex items-center justify-center text-xs font-serif w-8 h-8 rounded-full border border-black  ">
          YG
        </div>
        {/* logo-text */}
        <span className="  font-light  tracking-tight hidden md:block text-lg ">
          Yellow Glow Studios
        </span>
      </div>
      <ul className="flex items-center justify-between gap-8  text-sm font-medium text-neutral-600">
        <li>
          <Link href={"/"} className="hover:text-black transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href={"#services"} className="hover:text-black transition-colors">
            Services
          </Link>
        </li>
        <li className="hidden md:block">
          <Link href={"#about"} className="hover:text-black transition-colors">
            About Us
          </Link>
        </li>
        <li>
          <NavBtn />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
