import React from "react";

const SectionBtn = () => {
  return (
    <button className=" group inline-flex items-center gap-2 text-[#121212] ">
      <span className=" tracking-widest uppercase text-sm font-medium relative ">
        view all projects
        <span className="absolute left-0 -bottom-1 h-px w-full bg-[#121212] origin-left will-change-transform transform scale-x-0  transition-transform duration-300 group-hover:scale-x-100 "></span>
      </span>
      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform duration-300  ">
        arrow_forward
      </span>
    </button>
  );
};

export default SectionBtn;
