import React from "react";
import Image from "next/image";
import Link from "next/link";



const Herosection = () =>{
return(
    <section className="relative w-full h-[704px] bg-white p-[60px_80px] opacity-1">
    {/* Container */}
    <div className="relative w-[1380px] h-[584px] top-[5px] left-[16px]">
      <div className="flex justify-between items-center h-full">
        {/* Left Section (Top Content + Bottom Para) */}
        <div className="w-[913px] h-[584px] flex flex-col justify-between bg-[#2A254B]">
          {/* Top Content Section */}
          <div className="w-[513] h-[387px] gap-[40px] top-[60] left-[60] ml-[105px] mt-[80px]">
            {/* Paragraph */}
            <p
              className="text-white font-clash-display text-[40px] font-normal leading-[44.8px] mb-4"
             
            >
              The furniture brand for the future, with timeless designs
            </p>

            {/* Button */}
            <Link href="/link">
            <button
              className="bg-[#F9F9F926] text-white text-[16px] font-medium py-[18px] px-[20px] w-[200px] h-[66px] mt-[50] "
            >
              View collection
            </button>
            </Link>
          </div>

          {/* Bottom Para Section */}
          <p
            className="text-white font-satoshi text-[18px] font-normal leading-[30px] w-[610px] h-[150px] ml-205"
          >
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors, and a beautiful way to
            display things digitally using modern web technologies.
          </p>
        </div>

        {/* Right Section (Image) */}
        <div className="relative w-[520px] h-[584px] opacity-1">
          <Image
            src="/chair.jpg"  // Image in the public folder
            alt="Chair"
            width={520}
            height={584}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);
};
export default Herosection;