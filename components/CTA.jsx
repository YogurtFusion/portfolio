import React from "react";
import CtaBtn from "./ui/CtaBtn";

const CTA = () => {
  return (
    <section className=" w-full px-6 py-20 md:p-24 bg-[#FDFCF8] ">
      <div className="w-7xl mx-auto flex flex-col items-start gap-12 md:gap-16 ">
        <div className="flex flex-col gap-4 ">
        <p className="text-sm font-medium  text-neutral-400 tracking-wider uppercase" >Ready to start?</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.9] text-[#121212] " >LET'S BUILD SOMETHING <br /> GREAT. </h1>
        </div>

        <p className=" text-xl md:text-2xl text-neutral-700 leading-relaxed max-w-2xl ">
          Tell us about your project. <br className="hidden md:block" /> We'll get back to you within 24 hours.
        </p>
        <CtaBtn/>       
      </div>
    </section>
  );
};

export default CTA;
