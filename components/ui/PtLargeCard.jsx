import React from "react";

const ProjectLargeCard = () => {
  return (
    <div className="flex flex-col  ">
      <div className=" bg-[#D9CFA6] w-full aspect-[4/5] flex flex-1  items-center justify-center md:max-h-[40rem] md:h-full relative group ">
        <span className="font-serif italic text-3xl text-[#B1A988] ">
          
          Lumina
        </span>
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-medium text-neutral-900 ">Lumina</h3>
        <p className="text-sm text-neutral-600 ">Brand & Web</p>
      </div>
    </div>
  );
};

export default ProjectLargeCard;
