import React from "react";
import { BiLogoTelegram } from "react-icons/bi";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { IoLogoMedium } from "react-icons/io5";

const Header = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#003366]  to-[#5A9BD5] py-2">
        <div className="w-10/12 mx-auto">
          <div className="flex justify-between items-center py-1 text-white">
            <div className="flex gap-4">
              <IoLogoMedium className="text-lg cursor-pointer" />
              <FaXTwitter className="text-lg cursor-pointer" />
              <FaInstagram className="text-lg cursor-pointer" />
              <BiLogoTelegram className="text-lg cursor-pointer" />
            </div>
            <div className="flex gap-4">
              <p>About Us</p>-<p>Our Story</p>-<p>Project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
