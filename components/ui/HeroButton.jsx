import React from "react";

const HeroButton = () => {
  return (
    <button
      className=" group flex gap-2  rounded-full py-3 px-6 m-4  shadow-[0px_8px_30px_rgba(0,0,0,0.12)]  hover:shadow-[0px_12px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-px "
      style={{ fontSize: "var(--fs-links) ", background: "var(--c-btn-bg)" }}
    >
      see live sites
      <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1 hover:-translate-y-px ">
        arrow_forward
      </span>
    </button>
  );
};

export default HeroButton;
