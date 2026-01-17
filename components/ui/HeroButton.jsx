import Link from "next/link";
import React from "react";

const HeroButton = () => {
  return (
    <Link href={"/"} className=" group flex items-center justify-center gap-2  rounded-full w-full sm:w-auto py-3.5 px-8 m-4  shadow-[0px_8px_30px_rgba(0,0,0,0.12)]  hover:shadow-[0px_12px_40px_rgba(0,0,0,0.18)] transition-all ease-in-out duration-300 hover:-translate-y-px text-base font-semibold capitalize bg-neutral-50 text-neutral-900 active:scale-[0.98] active:shadow-sm">
      see live sites
      <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1 text-xl ">
        arrow_forward
      </span>
    </Link>
  );
};

export default HeroButton;
