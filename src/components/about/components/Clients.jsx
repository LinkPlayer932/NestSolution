import React from "react";
import Image from "next/image";

const WhyChoose = () => {
  return (
    <div className="w-full py-12 px-6">
      {/* TEXT SECTION */}
      <div className="max-w-5xl mx-auto text-center space-y-4">
        
        <h1 className="text-[16px] text-gray-700">Meet OUR CLIENTS</h1>

        <h1 className="text-[32px] md:text-[40px] text-red-700 font-bold">
          OUR CLIENTS
        </h1>

        <p className="text-[15px] md:text-[16px] text-gray-900 max-w-3xl mx-auto leading-relaxed">
          It is based on a few powerful and pragmatic principles tested and 
          refined over many years of consulting and research. We “listen and 
          partner,” rather than “analyze.”
        </p>
      </div>

      {/* LOGOS SECTION */}
      <div className="max-w-5xl mx-auto mt-10">
        <div
          className="
            flex items-center justify-between gap-8 
            overflow-x-auto scrollbar-hide 
            py-4 px-2
          "
        >
          {/* LOGO 1 */}
          <Image
            src="/unnamed-2-e1598017595248.png"
            width={150}
            height={80}
            alt="client logo"
            className="object-contain w-[120px] md:w-[150px]"
          />

          {/* LOGO 2 */}
          <Image
            src="/cropped-themtimpex-1-1-e1598015975500.png"
            width={150}
            height={80}
            alt="client logo"
            className="object-contain w-[120px] md:w-[150px]"
          />

          {/* LOGO 3 */}
          <Image
            src="/bulletinhub-logo-1-1-e1598015957561.png"
            width={150}
            height={80}
            alt="client logo"
            className="object-contain w-[120px] md:w-[150px]"
          />

          {/* LOGO 4 */}
          <Image
            src="/allpurposelogo-e1598015912708.png"
            width={150}
            height={80}
            alt="client logo"
            className="object-contain w-[120px] md:w-[150px]"
          />
        </div>
      </div>

      {/* BUTTON */}
      <div className="text-center mt-12">
        <a
          href="/ourportfolio"
          className="
            inline-block px-6 py-3 
            bg-red-800 text-white font-semibold text-[15px] md:text-[16px] 
            rounded 
            hover:bg-black transition
          "
        >
          See Our Case Studies
        </a>
      </div>
    </div>
  );
};

export default WhyChoose;
