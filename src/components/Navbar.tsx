"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

type Props = {};

const Navbar = (props: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkStyles = "text-base capitalize text-chainGreen font-semibold";
  return (
    <div className="md:px-28 md:pt-5 px-4 py-4 sm:px-4">
      <nav className="md:w-2/3 flex flex-row justify-between md:gap-[18rem]">
        <Image src={logo} alt="Chainfundit Logo" width={200} height={40} />

        <ul className="hidden md:flex flex-row gap-5 md:pt-3 font-dmSans">
          <li className={navLinkStyles}>
            <Link href="https://chainfundit.com/start-a-chainfund/">
              Start your own chainFund
            </Link>
          </li>
          <li className={navLinkStyles}>
            <Link href="https://chainfundit.com/mariamolawale/wp-login.php?redirect_to=https%3A%2F%2Fchainfundit.com%2Fmariamolawale">
              Login
            </Link>
          </li>
        </ul>

        <div className="md:hidden flex items-center">
          {!isMobileMenuOpen ? (
            <RxHamburgerMenu
              size={32}
              className="justify-end right-[-5px] cursor-pointer text-chainGreen p-1 border border-chainGreen rounded-md"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            />
          ) : null}
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-0 left-0 w-full h-screen bg-[#222222] text-white font-dmSans px-5 py-3 z-50 flex flex-col gap-5"
        >
          <div className="flex justify-between items-center">
            <div></div>
            <IoMdClose
              size={25}
              className="cursor-pointer text-white mt-1 mr-2"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            />
          </div>

          <ul className="mt-1 flex flex-col gap-3 px-4">
            <li className='text-[#454545] font-dmSans text-2xl font-semibold capitalize'>
              <Link href="https://chainfundit.com/mariamolawale/login/">
                Login
              </Link>
            </li>
            <hr className='border-t border-[#454545]' />
            <li className='text-[#454545] font-dmSans text-2xl font-semibold capitalize'>
              <Link href="https://chainfundit.com/dashboard/">Reports</Link>
            </li>
            <hr className='border-t border-[#454545]' />
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
