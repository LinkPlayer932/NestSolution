import React from "react";

const RiseToTop = () => {
  return (
    <div className="mycontainer px-4 py-10">
      {/* Parent flex — mobile = column, desktop = row */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        {/* LEFT TEXT SECTION */}
        <div className="w-full md:w-1/2 p-2 md:p-6">
          <h4 className="text-[18px] md:text-[20px] text-gray-700">
            Rise to the top
          </h4>

          <h1 className="text-[26px] md:text-[32px] text-red-600 font-semibold mt-4 mb-4">
            Increase Sales
          </h1>

          <p className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed">
            Nextsol focuses on the content and the ranking that content gets
            its customers on different ranking engines. The emphasis on
            excellence results in increase in sales and satisfied clients.
          </p>

          <h1 className="text-[26px] md:text-[32px] text-red-600 font-semibold mt-6 mb-4">
            Best Practices
          </h1>

          <p className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed">
            We here at Nextsol work until our customers are satisfied. Our
            experts rise to develop a website that performs in top searches of
            most search engines.
          </p>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="w-full md:w-1/2 p-2 md:p-6">
          <img
            src="/Bitmap-Copy-3.webp"
            className="w-full h-auto shadow-2xl rounded-tl-3xl rounded-br-3xl"
            alt=""
          />
        </div>

      </div>
    </div>
  );
};

export default RiseToTop;
