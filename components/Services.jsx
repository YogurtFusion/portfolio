import React from "react";
const Services = () => {
  return (
    <section className="p-12 flex flex-col justify-center  gap-20  border-b border-[#DBDAD6] ">
      <div className="project-head flex justify-between items-center p-6 w-full ">
        <div className="flex flex-col gap-3 w-full">
          <p
            className=""
            style={{
              fontSize: "var(--fs-sub-head)",
              color: "var(--c-sub-head) ",
            }}
          >
            What We Do
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
            OUR
          </h1>
          <h1
            className=""
            style={{
              color: "var(--c-h1) ",
              fontSize: "var(--fs-head)",
              lineHeight: "var(--lh-h1)",
              letterSpacing: "var(--ls-p) ",
            }}
          >
            SERVICES
          </h1>
        </div>
        <div
          className=""
          style={{
            fontSize: "var(--fs-sub-head)",
            lineHeight: "var(--lh-p)",
            letterSpacing: "var(--ls-p)",
            color: "var(--c-p)",
          }}
        ></div>
      </div>
      <div className="Services-body  flex justify-between items-center border-t border-[#DBDAD6] gap-4 p-8">
        <h2
          className="font-light w-full"
          style={{
            fontSize: "var(--fs-h2)",
            letterSpacing: "var(--ls-h2) ",
            lineHeight: "var(--lh-h2)",
            color: "var(--c-h2)",
          }}
        >
          Design
        </h2>
        <p
          className="w-full"
          style={{
            fontSize: "var(--fs-p)",
            letterSpacing: "var(--ls-p)",
            lineHeight: "var(--lh-p) ",
          }}
        >
          UI/UX design for websites and digital products.
        </p>
      </div>
      <div className="Services-body  flex justify-between items-center border-t border-[#DBDAD6] gap-4 p-8">
        <h2
          className="font-light w-full"
          style={{
            fontSize: "var(--fs-h2)",
            letterSpacing: "var(--ls-h2) ",
            lineHeight: "var(--lh-h2)",
            color: "var(--c-h2)",
          }}
        >
          Development
        </h2>
        <p
          className="w-full"
          style={{
            fontSize: "var(--fs-p)",
            letterSpacing: "var(--ls-p)",
            lineHeight: "var(--lh-p) ",
          }}
        >
          Frontend & Backend development using modern frameworks, focused on
          performance and maintainability.
        </p>
      </div>
    </section>
  );
};

export default Services;
