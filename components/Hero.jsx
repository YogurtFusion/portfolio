import React from "react";

const Hero = () => {
  return (
    <section className="hero min-h-screen flex justify-between items-center mt-24  ">
        <div className="flex  items-end justify-between  w-full">
      <div
        className="hero-head flex flex-col items-start justify-center mx-8  rounded-3xl  "
        style={{
          fontSize: "var(--fs-hero-h1) ",
          lineHeight: "var(--lh-h1 )  ",
          letterSpacing: "var(--ls-h1) "
        }}
      >
        <h1 className=" text-[#1E1E1E] ">YELLOW </h1>
        <h1 className="text-[#E6C35A] ">GLOW </h1>
        <h1 className="text-[#1e1e1ecc] ">STUDIOS</h1>
      </div>
      <div className="hero-text flex flex-col items-end justify-center w-96 mb-8 px-4 py-2 rounded-3xl   " style={{
        color: "var(--c-hero-p)",
        fontSize: "var(--fs-hero-p) ",
        letterSpacing: "var(--ls-p) ",
        lineHeight: "var(--lh-p) "
      }} >
        Websites for restaurants that value speed, clarity, and customers.
      </div>
      </div>
    </section>
  );
};

export default Hero;
