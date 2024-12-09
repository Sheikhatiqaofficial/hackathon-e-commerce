import React from "react";

const Signup = () =>{
return(
<div className="w-full h-[481px] p-[52px_74px_65px_93px] opacity-1 bg-[#F9F9F9]">
  {/* <!-- Inner Container --> */}
  <div className="w-[1373px] h-[364px] mt-[12px] ml-[20px] p-[68px_351px_54px_351px] opacity-1 bg-white">
    {/* <!-- Heading and Paragraph Section --> */}
    <div className="w-[571px] h-[114px] mt-[4px] ml-[31px] gap-[16px] opacity-1">
      {/* <!-- Heading --> */}
      <h1 className="w-[571px] h-[50px] opacity-1 text-[36px] font-[400] leading-[50.4px] text-center text-[#2A254B]">
        Join the club and get the benefits
      </h1>
      {/* <!-- Paragraph --> */}
      <p className="w-[470px] h-[48px] opacity-1 text-[16px] font-[400] leading-[23px] text-center text-[#2A254B] mt-[20] ml-[40]">
        Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
      </p>
    </div>
    
    <div className="relative flex flex-col items-center justify-center px-16 py-14 h-[39] bg-[white] opacity-1">

    {/* <!-- Email Input Section (Row with Input and Button) --> */}
    <div className="flex items-center justify-center mt-6 w-[472px] h-[56px] opacity-1">
        {/* <!-- Frame45 (Email Input Field) --> */}
        <div className="flex items-center justify-start w-[354px] h-[56px] bg-[#F9F9F9] px-6 py-4 opacity-1">
            <input 
                type="email" 
                placeholder="your@email.com"
                className="w-[217px] h-[22px] text-[#2A254B] text-lg font-normal opacity-1 bg-[#F9F9F9] focus:outline-none" 
            />
        </div>

        {/* <!-- Sign Up Button --> */}
        <button 
            className="ml-4 w-[118px] h-[56px] bg-[#2A254B] text-white font-medium text-lg flex items-center justify-center opacity-1"
        >
            Sign up
        </button>
    </div>
</div>

  </div>
</div>

);
};

export default Signup;