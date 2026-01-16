import React from "react";

const projects = [
  {
    id: 1,

    title: "Lumina",

    category: "E-commerce",

    year: "2024",

    description:
      "A refined shopping experience for sustainable home goods. Redefining how users interact with eco-friendly products.",

    tags: ["Brand Identity", "Web Design", "Development"],

    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop", // Placeholder image
  },

  {
    id: 2,

    title: "Apex Finance",

    category: "Fintech",

    year: "2023",

    description:
      "Real-time trading dashboard for modern investors. Focusing on speed, clarity, and data visualization.",

    tags: ["UI/UX", "Frontend", "React"],

    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },

  {
    id: 3,

    title: "Mono Arch",

    category: "Architecture",

    year: "2024",

    description:
      "A minimal portfolio for a high-end architecture firm based in Tokyo.",

    tags: ["WebGL", "Minimalism", "GSAP"],

    image:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
  },
];

const ProjectsCards = () => {
  return (
    <div className="flex flex-col gap-32">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`flex flex-col  gap-12 items-center ${
            index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div className="w-full md:w-1/2 ">
            <div className="aspect-[4/3] bg-neutral-200 rounded-sm overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex items-center  gap-2 text-xs font-medium text-neutral-400 mb-6 uppercase tracking-wider">
              <span>{project.category} </span>

              <span>•</span>

              <span>{project.year} </span>
            </div>

            <h2 className="text-4xl  md:text-5xl text-neutral-900 mb-6 font-serif tracking-tight"> {project.title} </h2>

            <p className="text-neutral-600  mb-8 leading-relaxed text-base">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-10">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className=" px-3 py-1 text-xs  bg-neutral-100 border-neutral-200 font-medium text-neutral-600 pb-1 hover:text-gray-600 transition-colors  rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button className=" relative group text-sm font-medium text-neutral-800  pb-1 hover:text-neutral-900 transition-colors">
              View Project
              <span className=" absolute w-full h-px scale-x-0 group-hover:scale-x-100  left-0 bottom-[-1px] bg-neutral-700  origin-left transform transition-all duration-300 ease-out will-change-transform "></span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsCards;
