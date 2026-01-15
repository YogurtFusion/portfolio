import React from "react";
import SectionBtn from "./ui/SectionBtn";
import ProjectLargeCard from "./ui/PtLargeCard";
import ProjectSmallCardTop from "./ui/ptSmallCardT";
import ProjectSmallCardBottom from "./ui/ptSmallCardB";

const Projects = () => {
  return (
    <section
      className="p-12 w-full max-w-336 mx-auto "
      style={{ background: "var(--c-project-bg)" }}
    >
      <div className="project-head flex justify-between items-end p-6  ">
        <div className="flex flex-col gap-3 ">
          <p
            className=""
            style={{
              fontSize: "var(--fs-sub-head)",
              color: "var(--c-sub-head) ",
            }}
          >
            Selected work
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
            Projects we're
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
            proud of
          </h1>
        </div>
        <SectionBtn />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
       
          <ProjectLargeCard />
     
        
        <div className="right-col flex flex-col gap-6 h-full ">
         
            <ProjectSmallCardTop />
          
          
            <ProjectSmallCardBottom />
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
