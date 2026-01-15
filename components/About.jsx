import React from "react";
import AboutBtn from "./ui/AboutBtn";
const approachData = [
  {
    week: "week1",
    title: "Discovery & Strategy",
    desription:
      "We start by understanding your business goals, user needs, and technical constraints.",
  },
  {
    week: "week2",
    title: "Design & Prototyping",
    desription:
      "We design, test, and refine until the solution feels right and works seamlessly",
  },
  {
    week: "week3",
    title: "Build & Launch",
    desription:
      "We build with clean code, deploy with confidence, and support you beyond launch.",
  },
];
const About = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2  gap-8 p-12 mx-auto max-w-336 border-b border-[#BFBFBF] ">
      {/* i wannated to write 1344 but vs code  is giving me warning and suggest to write in 336 so ingore the width  */}
      <div className="left flex flex-col justify-center gap-8 p-6">
        <div className="flex flex-col gap-3 p-6">
          <p
            className=" uppercase tracking-widest "
            style={{
              fontSize: "var(--fs-sub-head)",
              color: "var(--c-sub-head) ",
            }}
          >
            Who are we
          </p>
          <h1
            className=""
            style={{
              color: "var(--c-h1) ",
              fontSize: "var(--fs-head)",
              lineHeight: "var(--lh-h1)",
              letterSpacing: "var(--ls-p) ",
            }}
          >
            About Us
          </h1>
        </div>
        <div className="flex flex-col justify-center gap-10 p-6">
          <p
            className=""
            style={{
              color: "var(--c-h2) ",
              fontSize: "var(--fs-p) ",
              letterSpacing: "var(--ls-p) ",
              lineHeight: "var(--lh-p) ",
            }}
          >
            Yellow Glow Studios is a small, focused team of designers and
            developers who believe great work comes from deep understanding and
            thoughtful execution
          </p>
          <p
            className=""
            style={{
              color: "var(--c-p) ",
              fontSize: "var(--fs-p) ",
              letterSpacing: "var(--ls-p) ",
              lineHeight: "var(--lh-p) ",
            }}
          >
            Every project receives our full attention. We don't take on more
            than we can handle with care.
          </p>
        </div>
        <div className="p-6">
          <AboutBtn />
        </div>
      </div>
      <div className=" abt-right p-8 flex flex-col border-l border-[#BFBFBF] ">
        <div className="right-head flex flex-col gap-3 py-6 px-8">
          <p
            className=" uppercase tracking-widest "
            style={{
              fontSize: "var(--fs-sub-head)",
              color: "var(--c-sub-head) ",
            }}
          >
            Our Approach
          </p>
          <h3
            className=" text-[#121212] "
            style={{
              fontSize: "var(--fs-h3) ",
              lineHeight: "var(--lh-p) ",
              letterSpacing: "var(--lh-p) "

            }}
          >
            We start with strategy, move through design, and finish with
            flawless execution. No handoffs, no miscommunication
          </h3>
        </div>
        {approachData.map((about, index)=> (
  <div key={index} className="right-body py-6 px-8 flex flex-col justify-center gap-6">
            <div className="flex flex-col justify-center gap-3">

              <p
            className=" uppercase tracking-widest "
            style={{
                fontSize: "var(--fs-sub-head)",
                color: "var(--c-sub-head) ",
            }}
            >
            {about.week}
          </p>
          <h2 className="text-[#121212] text-xl tracking-[0.2px] leading-[110%] w-32" >
            {about.title}
          </h2>
              </div>

          <p>{about.desription} </p>
        </div>
        ))}
      
      </div>
    </section>
  );
};

export default About;
