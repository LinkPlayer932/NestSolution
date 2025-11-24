// import React from "react";
// import Image from "next/image";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   weight: ["400", "500", "600", "700"],
//   subsets: ["latin"],
// });

// const HeroSection = () => {
//   return (
//     <div className="mycontainer mx-auto font-poppins bg-white pt-34  pb-10 p-6">
//       <div className=" px-6 flex flex-col md:flex-row sm:gap-10 items-center justify-between gap-12">
//         {/* LEFT CONTENT */}
//         <div className="max-w-xl text-left mt-6 md:mt-0">
//           <p className="text-black text-[16px] font-bold">
//             Welcome to Next Solutions
//           </p>
//           <h1 className="text-[22px] md:text-[40px] font-poppins font-extrabold mt-2 text-black leading-tight">
//             WEB DESIGNING{" "}
//             <span className="text-red-700">COMPANY LAHORE</span>
//           </h1>

//           <p className="text-black mt-4 text-[16px] leading-relaxed">
//             Boost your business with Nextsol. Our team of expert web designers
//             delivers high-quality services that make your brand stand out. We
//             are dedicated to strengthening your online presence with creative,
//             modern, and impactful designs.
//           </p>

//           <div className="flex items-center gap-4 mt-6">
//             <button className="bg-red-800 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium  text-[16px] shadow">
//               Get a Quote
//             </button>

//             <button className="border border-gray-400 hover:bg-red-700 hover:text-white px-6 py-3 rounded-lg text-[16px] font-medium">
//               Book a Call
//             </button>
//           </div>

//           {/* LOGO STRIP */}
//           <div className="flex items-center gap-6 mt-10 flex-wrap">
//             <img
//               src="/logostriphome-1.png"
//               alt=""
//               className="h-[40px] w-full"
//             />
//           </div>
//         </div>

//         {/* RIGHT CONTENT */}
//                 <div className="w-full md:w-1/2 flex justify-center min-w-[200px]">
//           <img
//             src="/Laptopscreenshot.png"
//             alt=""
//             className="w-full md:w-3/4 object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const HeroSection = () => {
  return (
    <div className=" mx-auto font-poppins bg-white pt-28 md:pt-48 pb-10 p-4 md:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-10">

        {/* LEFT CONTENT */}
        <div className={`${poppins.className} w-full max-w-xl text-left mt-6 md:mt-0`}>
          <p className="text-black text-[16px] font-bold">
            Welcome to Next Solutions
          </p>

          <h1 className="text-[26px] sm:text-[32px] md:text-[40px] font-extrabold mt-6 text-black leading-tight">
            WEB DESIGNING{" "}
            <span className="text-red-700">COMPANY LAHORE</span>
          </h1>

          <p className="text-black mt-4 text-[15px] sm:text-[16px] leading-relaxed">
            Boost your business with Nextsol. Our team of expert web designers
            delivers high-quality services that make your brand stand out. We
            are dedicated to strengthening your online presence with creative,
            modern, and impactful designs.
          </p>

          <div className="flex items-center gap-4 mt-6">
            <a href="/" className="bg-red-800 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium text-[12px] sm:text-[16px] shadow"><span>Get a Quote</span></a>

            <a href="/" className="border border-red-800 hover:bg-red-700 hover:text-white px-6 py-3 rounded-lg text-[12px] sm:text-[16px] font-medium">
               <span>Book a Call</span>
            </a >
          </div>

          {/* LOGO STRIP */}
          <div className="flex items-center gap-6 mt-10 flex-wrap">
            <img
              src="/logostriphome-1.png"
              alt=""
              className="h-[100px] w-full object-contain"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/Laptopscreenshot.png"
            alt=""
            className="w-[100%] sm:w-[80%] md:w-[90%] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
