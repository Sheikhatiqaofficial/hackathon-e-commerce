import React from "react";
import Image from "next/image";


const Footer = () => {
return(
<footer className="bg-[#2A254B] w-full h-[380px] opacity-1 mt-[50]">
      {/* Upper Footer Section */}
      <div className="flex justify-between items-start px-[82px] pt-[58px] gap-[12px]">
        {/* Column 1: Menu */}
        <div className="flex flex-col gap-[12px] w-[108px] h-[175px] opacity-1">
          <p className="text-white font-display text-[16px] font-normal leading-[19.68px]">Menu</p>
          <p className="text-white font-satoshi text-[14px] font-normal leading-[18.9px]">New arrivals</p>
          <p className="text-white font-satoshi text-[14px] font-normal leading-[18.9px]">Best sellers</p>
          <p className="text-white font-satoshi text-[14px] font-normal leading-[18.9px]">Recently viewed</p>
          <p className="text-white font-satoshi text-[14px] font-normal leading-[18.9px]">Popular this week</p>
          <p className="text-white font-satoshi text-[14px] font-normal leading-[18.9px]">All products</p>
        </div>

        {/* Column 2: Categories */}
        <div className="flex flex-col gap-[12px] w-[84px] h-[206px] opacity-1">
          <p className="text-white font-display text-[16px] font-normal leading-[19.68px]">Categories</p>
          <p className="text-white font-satoshi text-[14px] font-normal leading-[18.9px]">Crockery</p>
          <p className="text-white font-satoshi text-[14px] font-normal leading-[18.9px]">Furniture</p>
          <p className="text-white font-satoshi text-[14px] font-normal leading-[18.9px]">Homeware</p>
          <p className="text-white font-satoshi text-[14px] font-normal leading-[18.9px]">Plant pots</p>
          <p className="text-white font-satoshi text-[14px] font-normal leading-[18.9px]">Chairs</p>
        </div>

        {/* Column 3: Our Company */}
        <div className="flex flex-col gap-[12px] w-[105px] opacity-1">
          <p className="text-white font-display text-[16px] font-normal leading-[19.68px]">Our Company</p>
          <p className="text-white font-satoshi text-[14px] font-normal leading-[18.9px]">About us</p>
          <p className="text-white font-satoshi text-[14px] font-normal leading-[18.9px]">Vacancies</p>
          <p className="text-white font-satoshi text-[14px] font-normal leading-[18.9px]">Contact us</p>
          <p className="text-white font-satoshi text-[14px] font-normal leading-[18.9px]">Privacy</p>
          <p className="text-white font-satoshi text-[14px] font-normal leading-[18.9px]">Returns policy</p>
        </div>

        {/* Right Section: Join Mailing List */}
        <div className="flex flex-col items-start justify-start opacity-1">
          <p className="text-white font-display text-[19px] font-normal leading-[19.68px]">Join our mailing list</p>
          <div className="flex items-center justify-center mt-6 w-[472px] h-[56px] opacity-1  space-x-1">
            {/* Email Input Field */}
            <div className="flex items-center justify-start w-[354px] h-[56px] bg-[#FFFFFF26] px-6 py-4 opacity-1">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-[217px] h-[22px] text-[white] text-lg font-normal opacity-1 bg-[#FFFFFF26] focus:outline-none"
              />
            </div>

            {/* Sign Up Button */}
            <button
              className="ml-4 w-[118px] h-[56px] bg-[white] text-[#2A254B] font-medium text-lg flex items-center justify-center opacity-1"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Divider Line Between Upper Footer and Bottom */}
      <div className="w-[1277px] h-[0px] mx-auto border-t border-solid border-[#4E4D93] opacity-1"></div>

      {/* Bottom Footer Section */}
      <div className="flex justify-between items-center px-[82px] pt-16 pb-4 opacity-1">
        {/* Left: Copyright */}
        <p className="text-white text-[18px] font-normal">Copyright 2022 Avion LTD</p>

        {/* Right: Social Links */}
        <div className="flex gap-6 items-center opacity-1">
          <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} className="opacity-1" />
          <Image src="/facebook.png" alt="Facebook" width={24} height={24} className="opacity-1" />
          <Image src="/instagram.png" alt="Instagram" width={24} height={24} className="opacity-1" />
          <Image src="/skype.png" alt="Skype" width={24} height={24} className="opacity-1" />
          <Image src="/twitter.png" alt="Twitter" width={24} height={24} className="opacity-1" />
          <Image src="/pintrest.png" alt="Pinterest" width={24} height={24} className="opacity-1" />
        </div>
      </div>
    </footer>
);
};
export default Footer;