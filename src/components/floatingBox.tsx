"use client";

import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { RxLinkedinLogo } from "react-icons/rx";
import CopyButton from "@/components/Copy";
import { IoMdClose } from "react-icons/io";

const FloatingBox = () => {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById("parent-container");
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
      className={`bg-gray-100 shadow-4xl rounded-lg w-[500px] p-5 md:block hidden ${
        isFloating
          ? "fixed top-0 right-10 z-50"
          : "absolute top-[200px] right-10"
      }`}
    >
      <div className="bg-gray-200 shadow-3xl rounded-lg h-fit">
        <div className="bg-gray-100 p-4">
          <Progress value={1.3} />
        </div>
        <div className="px-10 flex flex-row justify-between font-dmSans text-center">
          <div className="py-5">
            <p className="text-xl font-semibold text-[#424242]">₦130,000</p>
            <span className="text-lg text-[#565656] font-semibold">raised</span>
          </div>

          <div className="border-x border-x-gray-300 py-5 px-2">
            <p className="text-xl font-semibold text-[#424242]">2</p>
            <span className="text-lg text-[#565656] font-semibold">
              donations
            </span>
          </div>

          <div className="py-5">
            <p className="text-xl font-semibold text-[#424242]">₦10,000,000</p>
            <span className="text-lg text-[#565656] font-semibold">goal</span>
          </div>
        </div>
      </div>

      {/* Donate & Share Buttons with Alert Dialog */}
      <div className="pt-8 flex flex-row gap-5 font-source text-lg font-bold">
        {/* Donate Button */}
        <Link
          href={
            "https://chainfundit.com/mariamolawale/donations/save-mariam-from-cancer/"
          }
          className="text-center w-[130px] text-chainGreen py-2 hover:bg-white border-2 bg-xanthous border-chainGreen rounded-lg shadow-5xl"
        >
          Donate
        </Link>

        {/* Share Button */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="text-center w-[130px] h-12 text-lg font-bold text-chainGreen py-4 hover:bg-white border-2 bg-[#FFDE59] border-chainGreen rounded-lg shadow-5xl">
              Share
            </Button>
          </AlertDialogTrigger>
          <AlertDialogHeader>
            <AlertDialogTitle></AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogContent className="md:w-[600px] w-[350px] h-fit px-6 py-5 text-center items-center">
            <AlertDialogCancel className="border-none shadow-none justify-start w-10 text-center items-center">
              <IoMdClose size={30} color="#104901" />
            </AlertDialogCancel>
            <div className="flex flex-col gap-3">
              <h3 className="font-dmSans text-3xl font-semibold text-chainGreen">
                Be kind, share this campaign
              </h3>
              <p className="font-dmSans text-base font-normal text-[#676767] uppercase">
                Campaigns shared on social media tend to get <br />3 times more
                help!
              </p>
            </div>
            <div className="flex flex-row justify-center gap-5 border-y border-black py-5">
              <Link
                href={
                  "https://www.facebook.com/share_channel/?type=reshare&link=https://chainfundit.com/mariamolawale/save-mariam-from-cancer/&app_id=966242223397117&source_surface=external_reshare&display&hashtag"
                }
              >
                <FaFacebook color="#1877F2" size={28} />
              </Link>
              <Link
                href={
                  "https://x.com/intent/tweet?text=This%20fundraising%20campaign%20has%20been%20set%20up%20to%20help%20Mariam%20and%20her%20family%20to%20alleviate%20the%20overwhelming%20financial%20stress%20that%20has%20arisen%20as%20a%20result%20of%20these%20unfortunate%20circumstances.%20https://chainfundit.com/mariamolawale/save-mariam-from-cancer/"
                }
              >
                <IoLogoTwitter color="#1DA1F2" size={28} />
              </Link>
              <Link
                href={
                  "https://api.whatsapp.com/send?text=*ChainFundIt%20%E2%80%94%20Save%20Mariam%20from%20Cancer*%0AThis%20fundraising%20campaign%20has%20been%20set%20up%20to%20help%20Mariam%20and%20her%20family%20to%20alleviate%20the%20overwhelming%20financial%20stress%20that%20has%20arisen%20as%20a%20result%20of%20these%20unfortunate%20circumstances.%0Ahttps://chainfundit.com/mariamolawale/save-mariam-from-cancer/"
                }
              >
                <IoLogoWhatsapp color="#25D366" size={28} />
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/shareArticle?mini=true&url=https://chainfundit.com/mariamolawale/save-mariam-from-cancer/&title=ChainFundIt%20%E2%80%94%20Save%20Mariam%20from%20Cancer&summary=This%20fundraising%20campaign%20has%20been%20set%20up%20to%20help%20Mariam%20and%20her%20family%20to%20alleviate%20the%20overwhelming%20financial%20stress%20that%20has%20arisen%20as%20a%20result%20of%20these%20unfortunate%20circumstances.&source=https://chainfundit.com/mariamolawale/save-mariam-from-cancer/"
                }
              >
                <RxLinkedinLogo color="#0A66C2" size={28} />
              </Link>
            </div>

            <p className="text-left text-lg font-bold font-dmSans text-chainGreen">
              Copy link
            </p>

            <div className="w-[300px] mx-auto">
              <p className="border p-5 mb-3">
                https://chainfund.it/save-mariam
              </p>
              <CopyButton text={"Copy"} />
            </div>
          </AlertDialogContent>
           
        </AlertDialog>
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
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="w-[90px] h-12 shadow-5xl py-2 font-bold text-base font-dmSans text-chainGreen hover:text-white bg-white hover:bg-chainGreen border-2 border-chainGreen rounded-lg outline-none">
              View All
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="md:w-[600px] w-[350px] h-fit px-6 py-3 text-center items-center">
            <AlertDialogCancel className="border-none shadow-none justify-start w-10 text-center items-center">
              <IoMdClose size={30} color="#104901" />
            </AlertDialogCancel>
            <AlertDialogHeader>
              <AlertDialogTitle>
                <h2 className="font-dmSans font-bold text-2xl text-chainGreen text-center">
                  Recent Donations
                </h2>
              </AlertDialogTitle>
            </AlertDialogHeader>
            <div className="items-center mt-4">
              <Link
                href={
                  "https://chainfundit.com/mariamolawale/donations/save-mariam-from-cancer/"
                }
                className="text-center text-xl font-bold w-fit text-chainGreen px-6 py-4 hover:bg-white border-2 bg-xanthous border-chainGreen rounded-lg shadow-5xl"
              >
                Donate Now
              </Link>
            </div>

            <div>
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
                    ₦ 80,000.00
                  </p>
                </div>
              </div>
            </div>
          </AlertDialogContent>
        </AlertDialog>
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
