import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="  bg-(--nav-bg) fixed top-6 left-0 right-0 z-50 backdrop-blur-xl shadow-sm rounded-full h-16 max-w-6xl w-full mx-auto flex justify-between items-center px-6">
      <div className="logo flex justify-center items-center gap-2 52 ">
        <div className="logo-img">
          <img
            className="w-9 h-9  rounded-full object-fill "
            src="./logo/logo-svg.svg"
            alt="logo-img"
          />
        </div>
        <p className=" logo-text">Yellow Glow Studios</p>
      </div>
      <ul className="flex items-center justify-between gap-8 ">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/"}>Services</Link>
        </li>
        <li>
          <Link href={"/"}>About Us</Link>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;
