import React from "react";
import Image from "next/image";
const cardData = [
  {
    title: "Sudo folio",
    desc: "Portfolio",
    img: "/images/kali-mockup.png",
  },
];
const ProjectSmallCardTop = () => {
  return (
    <div className="flex flex-col flex-1">
     {cardData.map((data, index) =>(

       <div className=" flex flex-col w-full" key={index}>
        <div className=" relative bg-[#E8E7E3] flex-1 w-full flex items-center justify-center min-h-[20rem] overflow-hidden  ">
         <Image
                 src={data.img}
                 alt={data.title}
                 fill//
                 className="object-cover"
                 sizes="(max-width: 768px) 100vw, 50vw "
                 />
          {/* <span className="font-serif italic text-3xl text-[#92918F] ">
            
          </span> */}
        </div>
        <div className="mt-3">
          <h3 className="text-lg font-medium text-neutral-900 ">{data.title} </h3>
          <p className="text-sm text-neutral-600 "> {data.desc} </p>
        </div>
      </div>
      ))}
    </div>
  );
};

export default ProjectSmallCardTop;
