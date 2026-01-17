import Link from "next/link";
import React from "react";

const SectionBtn = () => {
  return (
    <Link
      href={"/projects"}
      className=" group inline-flex items-center gap-2 text-neutral-900 "
    >
      <span className=" tracking-widest uppercase text-sm font-medium relative md:flex items-center gap-1 ">
        view all <span className="hidden md:block">projects</span>

        <span className="absolute left-0 -bottom-1 h-px w-full bg-neutral-900 origin-left will-change-transform transform scale-x-0  transition-transform duration-300 group-hover:scale-x-100 "></span>
      </span>
      <span className="material-symbols-outlined text-lg leading-none group-hover:translate-x-1 transition-transform duration-300  ">
        arrow_forward
      </span>
    </Link>
  );
};

export default SectionBtn;
