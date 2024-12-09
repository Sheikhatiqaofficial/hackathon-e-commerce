import React from "react";
import Image from "next/image";

const Feature = () =>{
return(
   <div className="w-[1440px] h-[355px] bg-white opacity-1 ml-[65]">
  {/* Top Line Text */}
  <div className="w-[576px] h-[94px] mt-[65px] mx-auto opacity-1">
    <h3 className="text-[#2A254B] text-[30px] font-normal leading-[33.6px] text-left ml-[155]">
      What makes our brand different
    </h3>
  </div>

  {/* Cards Row */}
  <div className="flex justify-between mt-[30px]">

    {/* Feature Card 1 */}
    <div className="w-[270px] h-[124px] opacity-1 ml-[90]">
      {/* Truck Icon */}
      <div className="w-[24px] h-[24px] p-[4.5px 1.5px 3px 1.5px] opacity-1">
        <Image
          src="/truck.jpg"
          alt="Truck Icon"
          width={21}
          height={16.5}
          className="w-[21px] h-[16.5px] top-[4.5px] left-[1.5px] opacity-1"
        />
      </div>
      {/* Heading & Paragraph Section */}
      <div className="w-[270px] h-[84px] gap-[8px] opacity-1">
        <h4 className="text-[#2A254B] text-[20px] font-normal leading-[28px] mt-[15]">
          Next day as standard
        </h4>
        <p className="text-[#2A254B] text-[16px] font-normal leading-[24px] mt-[12]">
          Order before 3pm and get your order the next day as standard
        </p>
      </div>
    </div>

    {/* Feature Card 2 */}
    <div className="w-[266px] h-[124px] opacity-1">
      {/* Check Icon */}
      <div className="w-[24px] h-[24px] p-[1.5px] opacity-1">
        <Image
          src="/check.jpg"
          alt="Check Icon"
          width={21}
          height={21}
          className="w-[21px] h-[21px] top-[1.5px] left-[1.5px] opacity-1"
        />
      </div>
      {/* Heading & Paragraph Section */}
      <div className="w-[266px] h-[84px] gap-[8px] opacity-1">
        <h4 className="text-[#2A254B] text-[20px] font-normal leading-[28px] mt-[15]">
          Made by true artisans
        </h4>
        <p className="text-[#2A254B] text-[16px] font-normal leading-[24px] mt-[12]">
          Handmade crafted goods made with real passion and craftsmanship
        </p>
      </div>
    </div>

    {/* Feature Card 3 */}
    <div className="w-[235px] h-[124px] opacity-1">
      {/* Purchase Icon */}
      <div className="w-[24px] h-[24px] p-[4.5px 1.5px 4.5px 1.5px] opacity-1">
        <Image
          src="/shop.jpg"
          alt="Purchase Icon"
          width={21}
          height={15}
          className="w-[21px] h-[15px] top-[4.5px] left-[1.5px] opacity-1"
        />
      </div>
      {/* Heading & Paragraph Section */}
      <div className="w-[265px] h-[84px] gap-[8px] opacity-1">
        <h4 className="text-[#2A254B] text-[20px] font-normal leading-[28px] mt-[15]">
          Unbeatable prices
        </h4>
        <p className="text-[#2A254B] text-[16px] font-normal leading-[24px] mt-[12]">
          For our materials and quality, you wont find better prices anywhere
        </p>
      </div>
    </div>

    {/* Feature Card 4 */}
    <div className="w-[265px] h-[124px] opacity-1">
      {/* Sprout Icon */}
      <div className="w-[24px] h-[24px] p-[1.5px 3px 1.08px 4.5px] opacity-1">
        <Image
          src="/sprout.jpg"
          alt="Sprout Icon"
          width={16.5}
          height={21.42}
          className="w-[16.5px] h-[21.42px] top-[1.5px] left-[4.5px] opacity-1"
        />
      </div>
      {/* Heading & Paragraph Section */}
      <div className="w-[265px] h-[87px] gap-[11px] opacity-1">
        <h4 className="text-[#2A254B] text-[20px] font-normal leading-[28px] mt-[15]">
          Recycled packaging
        </h4>
        <p className="text-[#2A254B] text-[16px] font-normal leading-[24px] mt-[12]">
          We use 100% recycled packaging to ensure our footprint is manageable
        </p>
      </div>
    </div>
  </div>
</div>
)
}
export default Feature;