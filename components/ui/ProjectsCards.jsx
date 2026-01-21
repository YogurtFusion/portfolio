import React from "react";
import Link from "next/link";
import Image from "next/image";
// const projects = [
//   {
//     id: 1,

//     title: "Buzzi",

//     category: "Social Media Platform",

//     year: "2025",

//     description:
//       "A refined shopping experience for sustainable home goods. Redefining how users interact with eco-friendly products.",

//     tags: ["Brand Identity", "Web Design", "Development"],

//     image: "/images/buzii-thubnail.png",
//     link: "https://buzzi.co.in"
//   },

//   {
//     id: 2,

//     title: "Sudo Folio",

//     category: "Portfolio",

//     year: "2025",

//     description:
//       "Real-time trading dashboard for modern investors. Focusing on speed, clarity, and data visualization.",

//     tags: ["UI/UX", "Frontend", "React"],

//     image: "/images/kali-thumbnail.png",
//     link:"https://kali-pru9.vercel.app/"
//   },

//   {
//     id: 3,

//     title: "Lighthouse Cafe",

//     category: "Cafe",

//     year: "2025",

//     description:
//       "A minimal portfolio for a high-end architecture firm based in Tokyo.",

//     tags: ["WebGL", "Minimalism", "GSAP"],

//     image: "/images/lightHouse-thubnail.png",
//     link: "https://lighthouse-cafe.vercel.app/"
//   },
// ];
const projects = [
  {
    id: 1,
    title: "Buzzi",
    category: "Social Community Platform",
    year: "2025",
    description:
      "A calm, friendly social platform interface focused on clarity, approachability, and everyday interactions — designed to feel lightweight, human, and easy to use..",
    tags: ["Social Experience", "Gamification", "UI Engineering"],
    image: "/images/buzii-thubnail.png",
    link: "https://buzzi.co.in",
  },

  {
    id: 2,
    title: "Sudo Folio",
    category: "Interactive Portfolio",
    year: "2025",
    description:
      "A developer portfolio reimagined as a fully functional desktop OS. This immersive interface blends technical prowess with creative design, showcasing code in its native habitat.",
    tags: ["System Design", "OS Simulation", "Creative Dev"],
    image: "/images/kali-thumbnail.png",
    link: "https://kali-pru9.vercel.app/",
  },

  {
    id: 3,
    title: "Lighthouse Cafe",
    category: "Hospitality & Brand",
    year: "2025",
    description:
      "A warm, atmospheric cafe website concept focused on mood, comfort, and first impressions — translating an interior experience into a digital one..",
    tags: ["Hospitality", "Visual Identity", "UX Design"],
    image: "/images/lightHouse-thubnail.png",
    link: "https://lighthouse-cafe.vercel.app/",
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
            <div className=" relative aspect-[4/3] bg-neutral-200 rounded-sm overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw "
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex items-center  gap-2 text-xs font-medium text-neutral-400 mb-6 uppercase tracking-wider">
              <span>{project.category} </span>

              <span>•</span>

              <span>{project.year} </span>
            </div>

            <h2 className="text-4xl  md:text-5xl text-neutral-900 mb-6 font-serif tracking-tight">
              {" "}
              {project.title}{" "}
            </h2>

            <p className="text-neutral-600  mb-8 leading-relaxed text-base">
              {project.description}
            </p>

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

            <Link
              href={project.link}
              className=" relative group text-sm font-medium text-neutral-800  pb-1 hover:text-neutral-900 transition-colors"
            >
              View Project
              <span className=" absolute w-full h-px scale-x-0 group-hover:scale-x-100  left-0 bottom-[-1px] bg-neutral-700  origin-left transform transition-all duration-300 ease-out will-change-transform "></span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsCards;
