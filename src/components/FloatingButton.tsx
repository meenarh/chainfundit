import React, { useState, useEffect } from "react";
import Link from "next/link";

type Props = {};

const FloatingButton = (props: Props) => {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
   const handleScroll = () => {
     const container = document.querySelector(".parent-container"); 
     if (!container) return;
 
     const containerRect = container.getBoundingClientRect(); 
 
     setIsFloating(containerRect.top < 0); 
   };
 
   window.addEventListener("scroll", handleScroll);
 
   return () => {
     window.removeEventListener("scroll", handleScroll);
   };
 }, []);

  return (
    <div
      className={`md:hidden flex flex-row justify-between px-8 ${
        isFloating
          ? "fixed top-0 z-50 flex flex-row justify-between gap-24"
          : "absolute sm:top-[850px] top-[750px] flex flex-row justify-between gap-24 sm:gap-28 my-12"
      }`}
    >
      <Link
        href={
          "https://chainfundit.com/mariamolawale/donations/save-mariam-from-cancer/"
        }
        className="text-center w-[130px] text-lg font-semibold font-dmSans text-chainGreen py-2 hover:bg-white border-2 bg-xanthous border-chainGreen rounded-lg shadow-5xl"
      >
        Donate
      </Link>
      <Link
        href={
          "https://chainfundit.com/mariamolawale/save-mariam-from-cancer/#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjIzMzYiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
        }
        className="text-center w-[130px] text-lg font-semibold font-dmSans text-chainGreen py-2 hover:bg-white border-2 bg-[#FFDE59] border-chainGreen rounded-lg shadow-5xl"
      >
        Share
      </Link>
    </div>
  );
};

export default FloatingButton;
