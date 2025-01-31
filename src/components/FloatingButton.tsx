import React, { useState, useEffect } from "react";
import Link from "next/link";
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
import { FaFacebook } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { RxLinkedinLogo } from "react-icons/rx";
import CopyButton from "@/components/Copy";
import { IoMdClose } from "react-icons/io";

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
      className={`md:hidden flex flex-row justify-between text-center px-4 my-7 ${
        isFloating
          ? "fixed -top-4 z-50 flex flex-row justify-between gap-14"
          : "absolute  top-[670px] flex flex-row justify-between gap-14"
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
          <AlertDialogFooter className="py-5 bg-chainGreen"></AlertDialogFooter>
        </AlertDialog>

    </div>
  );
};

export default FloatingButton;
