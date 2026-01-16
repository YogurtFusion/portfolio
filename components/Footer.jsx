import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-[#F3F2EF] pt-20 pb-10 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16 items-start">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full border border-black flex justify-center items-center">
                YG
              </div>
              <span className="font-medium text-lg">Yellow Glow Studios</span>
            </div>
            <p className="text-neutral-600 leading-relaxed text-sm max-w-sm w-full">
              A full-stack web studio crafting digital experiences with
              precision and purpose.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-6">
              Navigation
            </h3>
            <ul className="space-y-4 text-neutral-800 ">
              <li className="hover:text-black transition-colors">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="hover:text-black transition-colors">
                <Link href={"/"}>Projects</Link>
              </li>
              <li className="hover:text-black transition-colors">
                <Link href={"/"}>Services</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider  text-neutral-500 mb-6">
              Services
            </h3>
            <ul className="space-y-4 text-neutral-800">
              <li className=" hover:text-black transition-colors">
                <Link href={"/"}>UI/UX Design</Link>
              </li>
              <li className=" hover:text-black transition-colors">
                <Link href={"/"}>Web Development</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-6">
              Get in Touch
            </h3>
            <Link
              className="text-neutral-800 border-b border-neutral-300 pb-1 hover:border-black transition-colors"
              href={"/"}
            >
              yellowglowstudios@gmail.com
            </Link>
          </div>
        </div>
        <div className="border-t border-neutral-300 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 ">
          <p>&copy; 2026 Yellow Glow Studios. All rights reserved</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              className="hover:text-black transition-colors underline decoration-neutral-300"
              href={"/"}
            >
              LinkedIn
            </Link>
            <Link
              className="hover:text-black transition-colors underline decoration-neutral-300"
              href={"/"}
            >
              Instagram
            </Link>
            <Link
              className="hover:text-black transition-colors underline decoration-neutral-300"
              href={"/"}
            >
              X
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
