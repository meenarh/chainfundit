import React from "react";
import Link from "next/link";

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
        <Link
          href={
            "https://chainfundit.com/mariamolawale/save-mariam-from-cancer/#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjIzMzYiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
          }
          className="text-center md:w-[180px] w-[300px] text-lg font-semibold font-dmSans text-chainGreen py-2 hover:bg-white border-2 bg-[#FFDE59] border-chainGreen rounded-lg shadow-5xl"
        >
          Share
        </Link>
      </div>

      <p className="text-2xl font-dmSans font-bold mt-10">Words of Support</p>
      <span className="font-dmSans text-sm text-chainGreen font-semibold">Only donations with comments are displayed here.</span>
    </div>
    </div>
  );
};

export default Updates;
