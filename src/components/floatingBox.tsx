"use client";

import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

const FloatingBox = () => {
  const [isFloating, setIsFloating] = useState(false);
  const [showBreakdown, setShowBreakdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById("parent-container");
      if (!container) return;

      const containerRect = container.getBoundingClientRect();

      if (containerRect.top < 0) {
        setIsFloating(true);
      } else {
        setIsFloating(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-gray-100 shadow-4xl rounded-lg w-[500px] p-5 md:block hidden ${
        isFloating
          ? "fixed top-0 right-10 z-50"
          : "absolute top-[200px] right-10"
      }`}
    >
      {!showBreakdown && (
        <div className="bg-gray-200 shadow-3xl rounded-lg h-fit">
          <div className="bg-gray-100 p-4">
            <Progress value={1.3} />
          </div>
          <div className="px-10 flex flex-row justify-between font-dmSans text-center">
            <div className="py-5">
              <p className="text-xl font-semibold text-[#424242]">₦130,000</p>
              <span className="text-lg text-[#565656] font-semibold">
                raised
              </span>
            </div>

            <div className="border-x border-x-gray-300 py-5 px-2">
              <p className="text-xl font-semibold text-[#424242]">2</p>
              <span className="text-lg text-[#565656] font-semibold">
                donations
              </span>
            </div>

            <div className="py-5">
              <p className="text-xl font-semibold text-[#424242]">
                ₦10,000,000
              </p>
              <span className="text-lg text-[#565656] font-semibold">goal</span>
            </div>
          </div>
        </div>
      )}

      {/* Progress Breakdown */}
      {showBreakdown && (
        <div className="bg-gray-200 shadow-3xl rounded-lg h-fit">
          <div className="bg-gray-100 p-4">
            <ProgressBar />
          </div>

          {/* Donations Breakdown */}
          <div className="px-10 h-fit flex flex-row justify-between font-dmSans text-center">
            <div className="py-5">
            <p className="text-lg font-medium text-[#424242]">Currency</p>
              <p className="text-xl font-semibold text-[#16A34A]">NGN</p>
              <p className="text-xl font-semibold text-[#FF0000]">USD</p>
              <p className="text-xl font-semibold text-[#0000FF]">GBP</p>
            </div>

            <div className="border-x border-x-gray-300 py-5 px-8">
            <p className="text-lg font-medium text-[#424242]">Donations</p>
              <p className="text-xl font-semibold text-[#424242]">1</p>
              <p className="text-xl font-semibold text-[#424242]">0</p>
              <p className="text-xl font-semibold text-[#424242]">1</p>
            </div>

            <div className="py-5">
            <p className="text-lg font-medium text-[#424242]">Amount</p>
              <p className="text-xl font-semibold text-[#424242]">₦105,000</p>
              <p className="text-xl font-semibold text-[#424242]">$0.00</p>
              <p className="text-xl font-semibold text-[#424242]">£11.97</p>
            </div>
          </div>
        </div>
      )}

      <div className="pt-8 flex flex-row gap-5 font-source text-lg font-bold">
        <Link
          href={
            "https://chainfundit.com/mariamolawale/donations/save-mariam-from-cancer/"
          }
          className="text-center w-[130px] text-chainGreen py-2 hover:bg-white border-2 bg-xanthous border-chainGreen rounded-lg shadow-5xl"
        >
          Donate
        </Link>
        <Link
          href={
            "https://chainfundit.com/mariamolawale/save-mariam-from-cancer/#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjIzMzYiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
          }
          className="text-center w-[130px] text-chainGreen py-2 hover:bg-white border-2 bg-[#FFDE59] border-chainGreen rounded-lg shadow-5xl"
        >
          Share
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm hover:shadow-lg p-3 mt-7 border font-futura">
        <div className="flex flex-row justify-between">
          <p className="text-lg text-black font-medium">Anonymous</p>
          <p className="text-xs text-[#525252]">September 6, 2023</p>
        </div>

        <div className="flex flex-row justify-between">
          <p className="font-dmSans text-[#00160a] text-base font-medium">
            Amount Donated
          </p>
          <p className="text-xl text-[#219653] font-extrabold font-dmSans">
            ₦ 25,000.00
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-row justify-between gap-3 font-bold text-base font-dmSans text-center">
        <button
          onClick={() => setShowBreakdown((prev) => !prev)}
          className="w-[90px] shadow-5xl py-2 font-bold text-base font-dmSans text-chainGreen hover:text-white bg-white hover:bg-chainGreen border-2 border-chainGreen rounded-lg outline-none"
        >
          {showBreakdown ? "Close" : "View All"}
        </button>
        <Link
          href={"https://chainfund.it/#"}
          className="w-[118px] shadow-5xl py-2 border-2 border-chainGreen rounded-lg bg-chainGreen hover:bg-white text-white font-semibold font-dmSans hover:text-chainGreen"
        >
          Donate NGN
        </Link>
        <Link
          href={"https://chainfund.it/3PsRcTg"}
          className="w-[118px] shadow-5xl py-2 border-2 border-chainGreen rounded-lg bg-chainGreen hover:bg-white text-white hover:text-chainGreen"
        >
          Donate GBP
        </Link>
        <Link
          href={"https://chainfund.it/45FuyN0"}
          className="w-[118px] shadow-5xl py-2 border-2 border-chainGreen rounded-lg bg-chainGreen hover:bg-white text-white hover:text-chainGreen"
        >
          Donate USD
        </Link>
      </div>
    </div>
  );
};

export default FloatingBox;
