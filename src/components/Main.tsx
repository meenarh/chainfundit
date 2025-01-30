"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

import logo from "@/assets/white-06.png";
import mariam from "@/assets/mariam.jpeg";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { HiPhone } from "react-icons/hi2";
import { LiaLinkSolid } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";
import FloatingBox from "./floatingBox";
import { IoMdPricetags } from "react-icons/io";
import { FaCalendar } from "react-icons/fa";
import { TbClockHour4 } from "react-icons/tb";
import FloatingButton from "./FloatingButton";

type Props = {};

const Main = (props: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="px-2 mt-2">
      <h1 className="font-roboto font-semibold text-4xl md:ml-5">
        Save Mariam from Cancer
      </h1>

      <div
        id="parent-container"
        className="flex flex-row gap-2 md:my-14 my-8 overflow-hidden w-full"
      >
        <div className="flex-1 md:w-[60%] w-full">
          <div className="bg-xanthous rounded-t-lg md:pt-14 pt-7 md:pb-7 pb-3 md:px-14 px-4 w-full">
            <div className="flex flex-row justify-between">
              <div>
                <h1 className="text-chainGreen font-source font-black uppercase md:text-6xl text-4xl">
                  donation <br /> <span className="ml-3">needed!</span>
                </h1>
                <p className="bg-white font-roboto text-xs text-center text-chainGreen md:w-fit w-[200px] md:px-5 px-2 mt-2">
                  Donate a little, empower many
                </p>
              </div>
              <div>
                <Image
                  src={logo}
                  alt="Chainfundit Logo"
                  className="mt-2"
                  width={200}
                  height={40}
                />
              </div>
            </div>

            <p className="m-4 font-bold text-white md:text-2xl text-xl">
              Save Mariam from <br /> Cancer
            </p>

            <div className="flex flex-row">
              <div className="border-t-2 border-chainGreen md:w-[250px] w-[150px] mt-2 py-1">
                <p className="text-white md:text-2xl text-base font-bold md:ml-6 ml-2">
                  Wema Bank
                </p>
                <p className="md:text-3xl text-lg font-bold text-chainGreen font-source md:ml-4 ml-1">
                  8283603167
                </p>
                <p className="font-bold md:text-lg text-xs text-white md:ml-6 ml-2">
                  Chainfundit/Save <br /> Mariam from Cancer
                </p>
                <div className="border-t-2 border-chainGreen md:w-[250px] w-[150px] mt-2"></div>
              </div>

              <div className="md:-mt-8 -mt-3">
                <Image
                  src={mariam}
                  alt="Mariam"
                  width={400}
                  height={90}
                  className="md:border-[14px] border-[8px] border-white"
                />
              </div>
            </div>

            <ul className="flex flex-col gap-2">
              <li className="flex flex-row gap-3 text-chainGreen md:text-xl text-sm font-dmSans">
                <FaInstagram
                  color="#ECB22E"
                  className="bg-white p-1 rounded-full w-[22px] h-[22px] md:w-[30px] md:h-[30px] sm:w-[15px] sm:h-[15px]"
                />
                chainfundit
              </li>
              <li className="flex flex-row gap-3 text-chainGreen md:text-xl text-sm font-dmSans">
                <BsTwitter
                  color="#ECB22E"
                  size={30}
                  className="bg-white p-1 rounded-full w-[22px] h-[22px] md:w-[30px] md:h-[30px] sm:w-[15px] sm:h-[15px]"
                />
                chainfundit
              </li>
              <li className="flex flex-row gap-3 text-chainGreen md:text-xl text-sm font-dmSans">
                <HiPhone
                  color="#ECB22E"
                  size={30}
                  className="bg-white p-1 rounded-full w-[22px] h-[22px] md:w-[30px] md:h-[30px] sm:w-[15px] sm:h-[15px]"
                />
                09087482360
              </li>
            </ul>
          </div>

          <div className="md:px-10 px-4 flex flex-row justify-between py-2">
            <Link
              href={"chainfundit.com"}
              className="flex flex-row md:gap-3 gap-1.5 text-chainGreen md:text-xl text-sm"
            >
              <LiaLinkSolid
                className="bg-chainGreen p-1 rounded-full w-[22px] h-[22px] md:w-[30px] md:h-[30px]"
                color="#FFFFFF"
                size={30}
              />
              chainfundit.com
            </Link>

            <ul className="flex flex-row md:gap-3 gap-1 mx-2 text-chainGreen">
              <li>
                <FaFacebookF
                  className="bg-chainGreen p-1 rounded-full w-[18px] h-[18px] md:w-[30px] md:h-[30px]"
                  color="#FFFFFF"
                  size={30}
                />
              </li>
              <li>
                <BsTwitter
                  className="bg-chainGreen p-1 rounded-full w-[18px] h-[18px] md:w-[30px] md:h-[30px]"
                  color="#FFFFFF"
                  size={30}
                />
              </li>
              <li>
                <FaInstagram
                  className="bg-chainGreen p-1 rounded-full w-[18px] h-[18px] md:w-[30px] md:h-[30px]"
                  color="#FFFFFF"
                  size={30}
                />
              </li>
              <li className="ml-3 text-sm md:text-lg">Chainfundit</li>
            </ul>
          </div>

          <div className="parent-container">
          <FloatingButton />
          </div>
          

          <div className="md:hidden block bg-gray-100 shadow-3xl rounded-lg h-[136px] mt-24 mx-1">
            <div className="bg-white p-4">
              <Progress value={1.3} />
            </div>

            <div className="px-5 flex flex-row justify-between font-dmSans text-center">
              <div className="py-6 pr-2">
                <p className="text-xl font-medium text-[#424242]">₦130,000</p>
                <span className="text-lg text-[#565656] font-medium">
                  raised
                </span>
              </div>

              <div className="border-x border-x-gray-200 py-6 px-[6px]">
                <p className="text-xl font-medium text-[#424242]">2</p>
                <span className="text-lg text-[#565656] font-medium">
                  donations
                </span>
              </div>

              <div className="py-6 px-1">
                <p className="text-xl font-medium text-[#424242]">
                  ₦10,000,000
                </p>
                <span className="text-lg text-[#565656] font-medium">goal</span>
              </div>
            </div>
          </div>

          <div className="md:hidden flex flex-row justify-between gap-3 px-4 my-10 text-center">
            <Link
              href={"https://chainfund.it/#"}
              className="md:w-[138px] w-[100px] md:text-base text-xs shadow-5xl p-2 border-2 border-chainGreen rounded-lg bg-chainGreen hover:bg-white text-white font-semibold font-dmSans hover:text-chainGreen"
            >
              Donate NGN
            </Link>
            <Link
              href={"https://chainfund.it/3PsRcTg"}
              className="md:w-[138px] w-[100px] md:text-base text-xs shadow-5xl p-2 border-2 border-chainGreen rounded-lg bg-chainGreen hover:bg-white text-white font-semibold font-dmSans hover:text-chainGreen"
            >
              Donate GBP
            </Link>
            <Link
              href={"https://chainfund.it/45FuyN0"}
              className="md:w-[138px] w-[100px] md:text-base text-xs shadow-5xl p-2 border-2 border-chainGreen rounded-lg bg-chainGreen hover:bg-white text-white font-semibold font-dmSans hover:text-chainGreen"
            >
              Donate USD
            </Link>
          </div>

          <div className="flex md:flex-row flex-col gap-10 md:justify-between my-5">
            <div className="flex flex-row justify-between">
              <p className="flex flex-row justify-between gap-10 font-normal text-lg text-[#575757] uppercase font-dmSans">
                Organised by:
                <span className="text-2xl text-[#222222] font-semibold font-roboto capitalize">
                  Mariam Olawale
                </span>
              </p>
            </div>

            <div className="flex flex-row justify-between">
              <p className="flex flex-row justify-between gap-16 font-normal text-lg text-[#575757] uppercase font-dmSans">
                Category:
                <Link
                  href={"https://chainfundit.com/mariamolawale/tag/ng-medical/"}
                  className="text-2xl text-chainGreen font-semibold font-roboto capitalize flex flex-row gap-2"
                >
                  <IoMdPricetags
                    className="-rotate-90 mt-1 md:ml-0 ml-2"
                    color="#104901"
                  />
                  Medical
                </Link>
              </p>
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-5 justify-between border-y border-black md:pl-5 md:pr-16 py-8 md:items-center">
            <p className="uppercase font-dmSans text-base text-[#676767]">
              want to wish her a speedy recovery?
            </p>
            <Link
              href={
                "https://chainfundit.com/mariamolawale/donations/save-mariam-from-cancer/"
              }
              className="px-4 py-2  w-[200px] font-bold text-base text-center font-dmSans text-chainGreen hover:text-white bg-white hover:bg-chainGreen border-2 border-chainGreen rounded-lg shadow-5xl"
            >
              Make a Donation!
            </Link>
          </div>

          <div className="flex flex-row gap-6 pl-5 py-8 border-b border-black">
            <p className="uppercase font-dmSans text-base text-[#676767]">
              Created On:
            </p>
            <span className="flex flex-row gap-2 text-chainGreen hover:text-springGreen text-lg font-dmSans font-medium">
              <FaCalendar className="mt-1" size={16} color="#104901" />
              September 5, 2023
            </span>
            <span className="md:flex flex-row gap-2 text-chainGreen text-lg font-dmSans font-medium hidden">
              <TbClockHour4 className="mt-1" size={16} color="#104901" />
              5:51 pm
            </span>
          </div>

          <div className="md:hidden flex flex-col gap-8 py-8 border-b border-black">
            <h3 className="text-black text-3xl font-bold font-dmSans">
              Recent Donations
            </h3>
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg p-3 border font-futura">
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

            <Link
              href={
                "https://chainfundit.com/mariamolawale/save-mariam-from-cancer/#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjIzNDAiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
              }
              className="w-[130px] shadow-5xl py-3  font-bold text-center text-base font-dmSans text-chainGreen hover:text-white bg-white hover:bg-chainGreen border-2 border-chainGreen rounded-lg"
            >
              View All
            </Link>
          </div>

          <div className="flex flex-col gap-8 text-[19px] font-dmSans text-chainGreen font-medium pt-10 pb-5">
            <p>
              Hello friends, <br />
              We all need help from time to time.
            </p>

            <p>
              Mariam Olaitan Abike Olawale is a hardworking mother of three
              wonderful children. Though from an indigent background and despite
              the challenges life has thrown her way, Mariam is an industrious
              woman who has dedicated her life to raising her children well with
              hopes of a better lot in life for them.
            </p>

            <p>
              Unfortunately, life recently dealt Mariam a devastating blow when
              she was diagnosed with Stage 3 Invasive Carcinoma (Ductal/NST) of
              the breast. The news came as a rude shock and has understandably
              caused great fear for her fate. Prior to this awful diagnosis, she
              worked as a housekeeper for an elderly lady, however, this cruel
              disease has severely impacted her ability to work and care for her
              children, adding an enormous financial and mental burden to an
              already challenging journey.
            </p>

            {isExpanded && (
              <div>
                <p>
                  At present, her treatment options are still being developed
                  but an immediate double mastectomy has been recommended with
                  subsequent treatment planning to be determined following the
                  outcome of an ImmunoHistoChemistry test.
                </p>

                <p>
                  This fundraising campaign has been set up to help Mariam and
                  her family to alleviate the overwhelming financial stress that
                  has arisen as a result of these unfortunate circumstances. By
                  joining hands and contributing to this fundraising campaign,
                  we can help shift her focus from financial worries to fighting
                  her illness with every ounce of strength she possesses. The
                  funds raised will provide critical support in offsetting
                  mounting medical expenses and general expenses pertaining to
                  the children to ensure that they remained cared for whilst
                  their mother fights this battle.
                </p>

                <p>
                  We implore you to help us save the life of this amazing
                  mother. Whoever you are, your contribution – no matter the
                  size – will directly and significantly improve the lives of
                  Mariam and her children. Let us come together to give her the
                  courage and support she needs for the challenging journey
                  ahead.
                </p>

                <p>
                  We thank you for your generosity and support. Please share
                  this message far and wide. May we all find kindness in our
                  time of need.
                </p>
              </div>
            )}

            <div className="ml-2">
              <motion.button
                className="w-[120px] px-3 py-2 rounded-lg border-2 border-dotted hover:border-dashed border-black hover:border hover:border-chainGreen text-sm bg-chainGreen text-white hover:bg-white hover:text-chainGreen font-semibold md:mt-4 mt-2 cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
                whileHover={{ scale: [1, 1.1, 1] }} // In and out bounce effect
                transition={{
                  repeat: Infinity,
                  duration: 0.4,
                  ease: "easeInOut",
                }}
              >
                {isExpanded ? "Read Less" : "Read More"}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Floating Box */}
        <div className="flex-2 md:w-[40%] hidden md:block">
          <FloatingBox />
        </div>
      </div>
    </div>
  );
};

export default Main;
