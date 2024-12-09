import React from "react";
import Image from "next/image";

const Ceramic = () => {
    return(
        <div className="w-[1440px] h-[671px] bg-white opacity-1 ml-[50]">
  {/* Heading Section */}
  <div className="w-[297px] h-[39px] mt-[80px] ml-[75px] opacity-1">
    <h3 className="text-[#2A254B] text-[35px] font-normal leading-[39.36px] text-left">
      New Ceramics
    </h3>
  </div>

  {/* Image Grid */}
  <div className="flex justify-between mt-[42px] gap-[24px] flex-wrap ml-[70]">
    {/* Image 1 */}
    <div className="w-[305px] h-[462px] opacity-1">
      <div className="w-[305px] h-[375px] opacity-1">
        <Image
          src="/chair.jpg"
          alt="The Dandy chair"
          width={305}
          height={375}
          className="w-[305px] h-[375px] opacity-1"
        />
      </div>
      {/* Image Details */}
      <div className="w-[154px] h-[63px] gap-[8px] opacity-1">
        <h4 className="text-[#2A254B] text-[20px] font-normal leading-[28px] mt-[25]">
          The Dandy chair
        </h4>
        <p className="text-[#2A254B] text-[18px] font-normal leading-[27px] mt-[15]">
          £250
        </p>
      </div>
    </div>

    {/* Image 2 */}
    <div className="w-[305px] h-[462px] opacity-1">
      <div className="w-[305px] h-[375px] opacity-1">
        <Image
          src="/vases.jpg"
          alt="Rustic Vase Set"
          width={305}
          height={375}
          className="w-[305px] h-[375px] opacity-1"
        />
      </div>
      {/* Image Details */}
      <div className="w-[154px] h-[63px] gap-[8px] opacity-1">
        <h4 className="text-[#2A254B] text-[20px] font-normal leading-[28px] mt-[25]">
          Rustic Vase Set
        </h4>
        <p className="text-[#2A254B] text-[18px] font-normal leading-[27px] mt-[15]">
          £150
        </p>
      </div>
    </div>

    {/* Image 3 */}
    <div className="w-[305px] h-[462px] opacity-1">
      <div className="w-[305px] h-[375px] opacity-1">
        <Image
          src="/grayvase.jpg"
          alt="The Silky Vase"
          width={305}
          height={375}
          className="w-[305px] h-[375px] opacity-1"
        />
      </div>
      {/* Image Details */}
      <div className="w-[154px] h-[63px] gap-[8px] opacity-1">
        <h4 className="text-[#2A254B] text-[20px] font-normal leading-[28px] mt-[25]">
          The Silky Vase
        </h4>
        <p className="text-[#2A254B] text-[18px] font-normal leading-[27px] mt-[15]">
          £150
        </p>
      </div>
    </div>

    {/* Image 4 */}
    <div className="w-[305px] h-[462px] opacity-1">
      <div className="w-[305px] h-[375px] opacity-1">
        <Image
          src="/lamp.jpg"
          alt="The Lucky Lamp"
          width={305}
          height={375}
          className="w-[305px] h-[375px] opacity-1"
        />
      </div>
      {/* Image Details */}
      <div className="w-[154px] h-[63px] gap-[8px] opacity-1">
        <h4 className="text-[#2A254B] text-[20px] font-normal leading-[28px] mt-[25]">
          The Lucky Lamp
        </h4>
        <p className="text-[#2A254B] text-[18px] font-normal leading-[27px] mt-[15]">
          £399
        </p>
      </div>
    </div>
  </div>

  {/* View Collection Button */}
  <div className="w-[170px] h-[56px] mt-[52px] mx-auto bg-[#F9F9F9] text-center opacity-1">

    <button className="w-[170px] h-[56px] p-[16px 32px] text-[#2A254B] text-[16px] font-normal leading-[24px]">
      View Collection
    </button>
  </div>
</div>

    );
};
export default Ceramic;