import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-max mx-auto mb-2"
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image className="w-6" src={assets.mail_icon} alt="" />
          vipinsao3@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Vipin Chandra Sao. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0 ">
          <li>
            <a target="_blank" href="#">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="#">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="#">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
