import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaTiktok } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import paystack from '@/assets/paystack.png'
import stripe from '@/assets/stripe.svg'
import visa from '@/assets/visa.png'
import mastercard from '@/assets/mastercard.png'
import amex from '@/assets/amex.png'
import apple from '@/assets/apple.png'

type Props = {};

const Footer = (props: Props) => {

  const paymentMethods = [paystack, stripe, visa, mastercard, amex, apple]

  return (
    <div className="mt-10 mb-8 bg-[#f8f8f8] md:pt-24 pt-16 pb-8">
      <div className="flex md:flex-row flex-col justify-between md:gap-24 gap-8 md:px-36 px-6">
        <div className="md:w-1/4 w-full flex flex-col gap-3">
          <p className="text-[#222222] font-semibold text-4xl font-dmSans">
            The New, Fun and Rewarding Way to Crowdfund.
          </p>
          <ul className="flex flex-col gap-1">
            <Link href="tel:+442038380360" legacyBehavior>
              <a className="text-[#454545] font-dmSans text-lg hover:underline">
                +44 20 3838 0360
              </a>
            </Link>
            <Link href="mailto:campaigns@chainfundit.com" legacyBehavior>
              <a className="text-[#454545] font-dmSans uppercase text-lg hover:underline">
                campaigns@chainfundit.com
              </a>
            </Link>
          </ul>

          <ul className="flex flex-row gap-2 justify-center md:justify-start">
            <li className="bg-[#3b5998] rounded-sm w-12 h-12 p-3 text-white hover:text-chainGreen cursor-pointer">
              <Link href={"https://facebook.com/chainfundit10/"}>
                <FaFacebook size={24} />
              </Link>
            </li>
            <li className="bg-[#1DA1F2] rounded-sm w-12 h-12 p-3 text-white hover:text-chainGreen cursor-pointer">
              <Link href={"https://twitter.com/chainfundit/"}>
                <IoLogoTwitter size={24} />
              </Link>
            </li>
            <li className="bg-[#517fa4] rounded-sm w-12 h-12 p-3 text-white hover:text-chainGreen cursor-pointer">
              <Link href={"https://instagram.com/chainfundit/"}>
                <FaInstagramSquare size={24} />
              </Link>
            </li>
            <li className="bg-[#FF3333] rounded-sm w-12 h-12 p-3 text-white hover:text-chainGreen cursor-pointer">
              <Link href={"https://youtube.com/@chainfundit/"}>
                <FaYoutube size={24} />
              </Link>
            </li>
            <li className="bg-[#4875B4] rounded-sm w-12 h-12 p-3 text-white hover:text-chainGreen cursor-pointer">
              <Link href={"https://linkedin.com/company/chainfundit"}>
                <RxLinkedinLogo size={24} />
              </Link>
            </li>
            <li className="bg-[#69C9D0] rounded-sm w-12 h-12 p-3 text-white hover:text-chainGreen cursor-pointer">
              <Link href={"https://tiktok.com/@chainfundit"}>
                <FaTiktok size={24} />
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:w-1/4 w-full flex flex-col gap-3">
          <h4 className="font-dmSans text-[#353535] text-2xl font-semibold">
            ChainFund for
          </h4>
          <ul className="font-dmSans text-[#454545] text-lg font-medium">
            <li className="hover:underline">
              <Link href={"https://chainfundit.com/campaigns/#medical"}>
                Medical Emergencies
              </Link>
            </li>
            <li className="hover:underline">
              <Link href={"https://chainfundit.com/campaigns/#business"}>
                Business
              </Link>
            </li>
            <li className="hover:underline">
              <Link href={"https://chainfundit.com/campaigns/#memorials"}>
                Memorials
              </Link>
            </li>
            <li className="hover:underline">
              <Link href={"https://chainfundit.com/campaigns/#events"}>
                Events & Weddings
              </Link>
            </li>
            <li className="hover:underline">
              <Link href={"https://chainfundit.com/campaigns/#education"}>
                Education
              </Link>
            </li>
            <li className="hover:underline">
              <Link href={"https://chainfundit.com/campaigns/#Sports"}>
                Sports
              </Link>
            </li>
            <li className="hover:underline">
              <Link href={"https://chainfundit.com/campaigns/#charity"}>
                Charity
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:w-1/4 w-full flex flex-col gap-3">
          <h4 className="font-dmSans text-[#353535] text-2xl font-semibold">
            Discover
          </h4>
          <ul className="font-dmSans text-[#454545] text-lg font-medium">
            <li className="hover:underline">
              <Link href={"https://chainfundit.com/about-us/"}>About Us</Link>
            </li>
            <li className="hover:underline">
              <Link href={"https://chainfundit.com/how-chainfundit-works/"}>
                How Chainfundit Works
              </Link>
            </li>
            <li className="hover:underline">
              <Link href={"https://chainfundit.com/join-the-chain-reaction/"}>
                Join the Chain Reaction
              </Link>
            </li>
            <li className="hover:underline">
              <Link href={"https://chainfundit.com/work-at-chainfundit/"}>
                Careers
              </Link>
            </li>
            <li className="hover:underline">
              <Link href={"https://chainfundit.com/#"}>Success Stories</Link>
            </li>
            <li className="hover:underline">
              <Link href={"https://chainfundit.com/pricing"}>Pricing</Link>
            </li>
            <li className="hover:underline">
              <Link href={"https://chainfundit.com/blog"}>Blog</Link>
            </li>
          </ul>
        </div>

        <div className="md:w-1/4 w-full flex flex-col gap-3">
          <h4 className="font-dmSans text-[#353535] text-2xl font-semibold">
            Resources
          </h4>
          <ul className="font-dmSans text-[#454545] text-lg font-medium">
            <li className="hover:underline">
              <Link href={"https://chainfundit.com/privacy-policy/"}>
                Privacy Policy
              </Link>
            </li>
            <li className="hover:underline">
              <Link href={"https://chainfundit.com/terms-conditions/"}>
                Terms and Conditions
              </Link>
            </li>
            <li className="hover:underline">
              <Link
                href={
                  "https://chainfundit.com/chainfundit-ambassador-agreement/"
                }
              >
                Ambassador Agreement
              </Link>
            </li>
            <li className="hover:underline">
              <Link href={"https://chainfundit.com/fundraising-tips/"}>
                Fundraising Tips
              </Link>
            </li>
            <li className="hover:underline">
              <Link href={"https://chainfundit.com/fundraising-ideas/"}>
                Fundraising Ideas
              </Link>
            </li>
            <li className="hover:underline">
              <Link href={"https://chainfundit.com/contact-us/"}>
                Contact Us
              </Link>
            </li>
            <li className="hover:underline">
              <Link href={"https://chainfundit.com/disclaimer/"}>
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-t border-t-gray-200 mt-12" />

      <div className="flex md:flex-row flex-col gap-5 md:justify-between text-center md:px-36 px-5 mt-8">
        <p className="font-dmSans text-chainGreen text-lg font-medium">
          © 2025 Mariam Olawale — a ChainFundIt microsite.
        </p>

        <div className="flex flex-row gap-1">
        <FaLock className="mt-3" />
        <p className="font-roboto mt-2 text-sm md:text-base">Secured by</p>
        {
          paymentMethods.map((method, index) => (
            <Image key={index} src={method} alt="payment method" className="w-12 h-10" width={100} height={100} />
          ))
        }
        </div>


      </div>
    </div>
  );
};

export default Footer;
