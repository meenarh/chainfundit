import React from "react";
import Link from "next/link";
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
import { Button } from "@/components/ui/button";
import { IoMdClose } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { RxLinkedinLogo } from "react-icons/rx";
import CopyButton from "@/components/Copy";

type Props = {};

const Updates = (props: Props) => {
  return (
    <div className="px-5 md:w-[60%] w-full">
      <div className="mt-10 py-8 border-t border-black">
      <h4 className="text-2xl font-semibold text-[#222222] font-source">
        Additional Information
      </h4>
      <h4 className="text-2xl font-semibold text-[#222222] font-source my-10 py-8 border-y border-black">
        Updates
      </h4>

      <div className="bg-[#F8F8F8] p-7 font-dmSans text-chainGreen text-sm font-semibold flex flex-col gap-5">
        <p>
          Chainfundit is a multi-currency fundraising platform for registered
          charities, as well as individuals with life and medical emergencies.
        </p>

        <p>
          The above fundraiser has been verified by our team. As an
          organization, we take proactive steps to ensure that campaigns
          promoted on our platform and all our social channels are genuine
          needs. Where possible, donations are transferred directly to the
          institutions rather than to the individuals in a bid to provide
          comfort that the funds raised will be used for the intended campaign
          objectives. We provide post-fundraising updates, share success stories
          of campaigns and make same available to the community of donors for
          transparency and accountability where possible.
        </p>

        <p>
          Campaign organisers and donors should note that the progress bar in
          each Fundraising Campaign will be updated from time to time (where
          applicable) to reflect the donations raised on the platform, donations
          raised on other fundraising platforms by the Campaign Organisers
          and/or any other combined effort towards the Fundraising Campaign.
        </p>
      </div>

      <div className="mt-10 py-10 pl-6 flex md:flex-row flex-col md:gap-10 gap-5 border-y border-black md:justify-start justify-center">
        <Link
          href={
            "https://chainfundit.com/mariamolawale/donations/save-mariam-from-cancer/"
          }
          className="text-center md:w-[180px] w-[300px] text-lg font-semibold font-dmSans text-chainGreen py-2 hover:bg-white border-2 bg-xanthous border-chainGreen rounded-lg shadow-5xl"
        >
          Donate
        </Link>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="text-center md:w-[180px] w-[300px] h-12 text-lg font-semibold font-dmSans text-chainGreen py-4 hover:bg-white border-2 bg-[#FFDE59] border-chainGreen rounded-lg shadow-5xl">
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

      <p className="text-2xl font-dmSans font-bold mt-10">Words of Support</p>
      <span className="font-dmSans text-sm text-chainGreen font-semibold">Only donations with comments are displayed here.</span>
    </div>
    </div>
  );
};

export default Updates;
