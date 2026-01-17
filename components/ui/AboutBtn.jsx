import Link from "next/link";
import React from "react";

const AboutBtn = () => {
  return (
    <Link href={"/projects"} className=" group inline-flex items-center gap-2 transition-all duration-300 ">
      <span className="relative text-sm uppercase tracking-widest font-medium">
        Learn more
        <span className="absolute w-full h-px -bottom-1 origin-left transform scale-x-0 left-0  bg-[#121212] group-hover:scale-x-100 will-change-transform transition-transform duration-300 "></span>
      </span>
      <span className=" group-hover:-translate-y-1 group-hover:translate-x-1 transform transition-transform duration-300   ">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.25551 8.166L8.16583 3.25568M8.16583 3.25568V6.93842M8.16583 3.25568H4.48309"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
};

export default AboutBtn;


// const AboutBtn = () => {
//   return (
//     <button className="group inline-flex items-center gap-2 relative">
//       <span className="relative text-sm uppercase tracking-widest font-medium">
//         Learn more
//         {/* Animated Underline */}
//         <span className="absolute left-0 -bottom-1 w-full h-px bg-black origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
//       </span>
      
//       {/* Arrow Icon with Slide Animation */}
//       <span className="transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
//         <svg
//           width="12"
//           height="12"
//           viewBox="0 0 12 12"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M3.25551 8.166L8.16583 3.25568M8.16583 3.25568V6.93842M8.16583 3.25568H4.48309"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </span>
//     </button>
//   );
// };

// export default AboutBtn;