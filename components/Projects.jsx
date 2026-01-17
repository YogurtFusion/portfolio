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
      <div className="project-head flex flex-col md:flex-row justify-between items-end p-6  ">
        <div className="flex flex-col gap-3 ">
          <p
            className="text-base text-neutral-600"
          >
            Selected work
          </p>
          <h1>

          <span
            className="text-5xl  md:text-6xl text-neutral-900 tracking-wide leading-tight">
            Projects we're
          </span>
          <br className="" />
          <span
            className="text-5xl  md:text-6xl text-neutral-900 tracking-wide leading-tight">
            proud of
          </span>
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
