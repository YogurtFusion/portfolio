import React from "react";

const AboutBtn = () => {
  return (
    <button className=" group inline-flex items-start gap-2 transition-all duration-300 ">
      <span className="relative tracking-[0.01em] ">
        Learn more
        <span className="absolute w-0 h-px -bottom-1 left-0  bg-[#121212] group-hover:w-full transition-all duration-300 "></span>
      </span>
      <span className=" group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300   ">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.25551 8.166L8.16583 3.25568M8.16583 3.25568V6.93842M8.16583 3.25568H4.48309"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
};

export default AboutBtn;
