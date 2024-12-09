// import React from "react";


// const Collection =()=>{
// return(
// <div className="w-full h-[759px] px-[55px] opacity-1 bg-white">

// {/* Left Image Section */}
// <div className="w-[721px] h-[759px] bg-cover bg-center opacity-1" style={{ backgroundImage: "url('/chair3.jpg')" }}></div>

// {/* Right Section */}
// <div className="relative w-full h-full flex flex-col gap-13 opacity-1">
  
//   {/* Heading */}
//   <div className="w-[281px] h-[89px] absolute top-[40px] left-[40px] gap-[13px] opacity-1">
//     <h1 className="w-[281px] h-[44px] text-[#2A254B] text-[36px] font-normal leading-[44.28px] text-left opacity-1">
//       The Dandy Chair
//     </h1>
//     <div className="w-[59px] h-[32px] text-[#2A254B] text-[24px] font-normal leading-[32.4px] text-left opacity-1">
//       £250
//     </div>
//   </div>

//   {/* Description Section */}
//   <div className="w-[602px] h-[251px] absolute top-[143px] px-0 py-[40px] gap-[16px] opacity-1">
//     <div className="w-[522px] h-[188px] gap-[16px] opacity-1">
//       {/* Description Heading */}
//       <div className="w-[88px] h-[20px] opacity-1">
//         <h2 className="font-clash-display text-[16px] text-[#2A254B]">Description</h2>
//       </div>
      
//       {/* Paragraphs */}
//       <div className="w-[498px] h-[152px] gap-[20px] opacity-1">
//         <p className="font-satoshi text-[16px] text-[#2A254B]">
//           A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
//         </p>
//         <ul className="font-satoshi text-[16px] text-[#2A254B]">
//           <li>Premium material</li>
//           <li>Handmade upholstery</li>
//           <li>Quality timeless classic</li>
//         </ul>
//       </div>
//     </div>
//   </div>

//   {/* Dimensions Section */}
//   <div className="w-[241px] h-[99px] absolute top-[20px] left-[40px] gap-[28px] opacity-1">
//     <h3 className="w-[89px] h-[20px] opacity-1 font-clash-display text-[16px] text-[#2A254B]">Dimensions</h3>

//     <div className="w-[241px] h-[51px] flex gap-[57px] opacity-1">
//       {/* Height Section */}
//       <div className="w-[44px] h-[51px] opacity-1">
//         <p className="w-[43px] h-[17px] font-clash-display text-[14px] text-[#2A254B]">Height</p>
//         <p className="w-[44px] h-[22px] font-satoshi text-[16px] text-[#2A254B]">110cm</p>
//       </div>
      
//       {/* Width Section */}
//       <div className="w-[44px] h-[51px] opacity-1">
//         <p className="w-[43px] h-[17px] font-clash-display text-[14px] text-[#2A254B]">Width</p>
//         <p className="w-[44px] h-[22px] font-satoshi text-[16px] text-[#2A254B]">75cm</p>
//       </div>

//       {/* Depth Section */}
//       <div className="w-[44px] h-[51px] opacity-0">
//         <p className="w-[43px] h-[17px] font-clash-display text-[14px] text-[#2A254B]">Depth</p>
//         <p className="w-[44px] h-[22px] font-satoshi text-[16px] text-[#2A254B]">50cm</p>
//       </div>
//     </div>
//   </div>

//   {/* Add to Cart & Amount Counter Section */}
//   <div className="w-[602px] h-[115px] absolute top-[542px] px-[40px] py-[32px] opacity-1">
//     <div className="flex justify-between items-center">
      
//       {/* Amount Counter Section */}
//       <div className="w-[209px] h-[46px] flex gap-[22px] opacity-1">
//         <div className="w-[65px] h-[20px] font-clash-display text-[16px] text-[#2A254B]">Amount</div>

//         <div className="w-[122px] h-[46px] flex justify-between items-center px-[16px] opacity-1" style={{ backgroundColor: '#F9F9F9' }}>
//           <button className="text-[#CAC6DA] text-[16px]">-</button>
//           <span className="text-[#2A254B] text-[16px]">1</span>
//           <button className="text-[#CAC6DA] text-[16px]">+</button>
//         </div>
//       </div>

//       {/* Add to Cart Button */}
//       <button className="w-[143px] h-[56px] bg-[#2A254B] text-white text-[16px] font-medium leading-[24px] opacity-1">
//         Add to Cart
//       </button>
//     </div>
//   </div>
// </div>
// </div>
// )

// }
// export default Collection;
import React from "react";

const Collection = () => {
  return (
    <div className="w-full h-[759px] px-[55px] opacity-1 bg-white flex flex-row mt-[65]">
      {/* Left Image Section */}
      <div
        className="w-[1421px] h-[759px] bg-cover bg-center opacity-1"
        style={{ backgroundImage: "url('/chair3.jpg')" }}
      ></div>

      {/* Right Section */}
      <div className="relative w-full h-full flex flex-col gap-13 opacity-1">
        {/* Heading */}
        <div className="w-[281px] h-[89px] absolute top-[70px] left-[100px] gap-[13px] opacity-1">
          <h1 className="w-[281px] h-[44px] text-[#2A254B] text-[36px] font-normal leading-[44.28px] text-left opacity-1">
            The Dandy Chair
          </h1>
          <div className="w-[59px] h-[32px] text-[#2A254B] text-[24px] font-normal leading-[32.4px] text-left opacity-1">
            £250
          </div>
        </div>

        {/* Description Section */}
        <div className="w-[602px] h-[251px] absolute top-[143px] px-[100px] py-[40px] gap-[16px] opacity-1">
          <div className="w-[522px] h-[188px] gap-[16px] opacity-1">
            {/* Description Heading */}
            <div className="w-[88px] h-[20px] opacity-1">
              <h2 className="font-clash-display text-[19px] text-[#2A254B]">Description</h2>
            </div>

            {/* Paragraphs */}
            <div className="w-[498px] h-[152px] gap-[20px] opacity-1">
              <p className="font-satoshi text-[16px] text-[#2A254B] mt-[25]">
                A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
              </p>
              <ul className="font-satoshi text-[16px] text-[#2A254B] mt-[25] px-[20]">
                <li> ◼️ Premium material</li>
                <li> ◼️ Handmade upholstery</li>
                <li> ◼️ Quality timeless classic</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dimensions Section */}
        <div className="w-[241px] h-[99px] absolute top-[420px] left-[100px] gap-[28px] opacity-1">
          <h3 className="w-[89px] h-[20px] opacity-1 font-clash-display text-[18px] text-[#2A254B]">Dimensions</h3>

          <div className="w-[241px] h-[51px] flex gap-[57px] opacity-1 mt-[25]">
            {/* Height Section */}
            <div className="w-[44px] h-[51px] opacity-1">
              <p className="w-[43px] h-[17px] font-clash-display text-[14px] text-[#2A254B]">Height</p>
              <p className="w-[44px] h-[22px] font-satoshi text-[16px] text-[#2A254B] mt-3">110cm</p>
            </div>

            {/* Width Section */}
            <div className="w-[44px] h-[51px] opacity-1">
              <p className="w-[43px] h-[17px] font-clash-display text-[14px] text-[#2A254B]">Width</p>
              <p className="w-[44px] h-[22px] font-satoshi text-[16px] text-[#2A254B] mt-3">75cm</p>
            </div>

            {/* Depth Section */}
            <div className="w-[44px] h-[51px] opacity-1">
              <p className="w-[43px] h-[17px] font-clash-display text-[14px] text-[#2A254B]">Depth</p>
              <p className="w-[44px] h-[22px] font-satoshi text-[16px] text-[#2A254B]">50cm</p>
            </div>
          </div>
        </div>

        {/* Add to Cart & Amount Counter Section */}
        <div className="w-[602px] h-[115px] absolute top-[542px] px-[105px] py-[32px] opacity-1">
          <div className="flex justify-between items-center">

            {/* Amount Counter Section */}
            <div className="w-[209px] h-[46px] flex gap-[22px] opacity-1">
              <div className="w-[65px] h-[20px] font-clash-display text-[18px] text-[#2A254B] mt-[8]">Amount</div>

              <div className="w-[122px] h-[46px] flex justify-between items-center px-[16px] opacity-1" style={{ backgroundColor: '#F9F9F9' }}>
                <button className="text-[#CAC6DA] text-[16px]">-</button>
                <span className="text-[#2A254B] text-[16px]">1</span>
                <button className="text-[#CAC6DA] text-[16px]">+</button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-[143px] h-[56px] bg-[#2A254B] text-white text-[16px] font-medium leading-[24px] opacity-1">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>



  );
}

export default Collection;
