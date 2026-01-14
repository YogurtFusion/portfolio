import React from "react";

const SectionBtn = () => {
  return (
    <button className=" group inline-flex items-center gap-2 text-[#121212] ">
      <span className="tracking-[0.01em] relative ">
        view all project
        <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#121212] transition-all duration-300 group-hover:w-full "></span>
      </span>
      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform duration-300  ">
        arrow_forward
      </span>
    </button>
  );
};

export default SectionBtn;
