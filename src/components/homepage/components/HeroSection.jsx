// import React from "react";
// import Image from "next/image";

// const HeroSection = () => {
//   return (
//     <div className="w-full flex items-center justify-between bg-white pt-32 pb-20">
//       <div className="container mx-auto px-6 flex flex-cols-1 md:flex-cols-2 gap-10 items-center">
//         <div className="text-left ">
//           <p className="text-gray-600 font-semibold mt-20">
//             Welcome to Next Solutions
//           </p>

//           <h1 className="text-4xl md:text-5xl font-bold mt-4 text-white">
//             The Best Web Development Company in Lahore
//           </h1>

//           <p className="text-gray-600 mt-4">
//             We are a leading web development company in Lahore, offering a wide
//             range of services to meet your needs. Our team of experienced
//             professionals is dedicated to delivering high-quality solutions that
//             exceed your expectations.
//           </p>

//           <button className=" hover:bg-gray-100 bg-red-800 px-5 py-2 mt-6 rounded text-sm font-medium">
//             Get A Quote
//           </button>
//         </div>

//         {/* RIGHT CONTENT */}
//         <div>
//           <img
//             src="/Screenshot-2025-09-24-203921-1024x652.png"
//             alt="hero"
//             className="w-full"
//           />
//         </div>
//       </div>
//       <div>
//         <img src="logostriphome-1.png" alt="" />
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
    <div className="font-poppins w-full bg-white pt-42 pb-16 p-6">
      <div
        className="mycontainer px-6 flex flex-col md:flex-row sm:gap-10 items-center justify-between gap-12"
      >
                <div className="w-full md:w-1/2 flex justify-center min-w-[200px]">
          <img
            src="/screenshot-2025-09-24-203921-1024x652.png"
            alt="hero"
            className="w-full md:w-3/4 object-cover"
          />
        </div>
        {/* LEFT CONTENT */}
        <div className="max-w-xl text-left mt-10 md:mt-0">
          <p className="text-gray-700 text-[18px] font-bold">
            Welcome to Next Solutions
          </p>

          <h1 className="text-[30px] md:text-[40px] font-extrabold mt-4 text-black leading-tight">
            WEB DESIGNING{" "}
            <span className="text-red-700">COMPANY IN LAHORE</span>
          </h1>

          <p className="text-black mt-4 text-[16px] leading-relaxed">
            Boost your business with Nextsol. Our team of expert web designers
            delivers high-quality services that make your brand stand out. We
            are dedicated to strengthening your online presence with creative,
            modern, and impactful designs.
          </p>

          <div className="flex items-center gap-4 mt-6">
            <button className="bg-red-800 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium  text-[16px] shadow">
              Get a Quote
            </button>

            <button className="border border-gray-400 hover:bg-red-700 hover:text-white px-6 py-3 rounded-lg text-[16px] font-medium">
              Book a Call
            </button>
          </div>

          {/* LOGO STRIP */}
          <div className="flex items-center gap-6 mt-10 flex-wrap">
            <img
              src="/logostriphome-1.png"
              alt=""
              className="h-[40px] w-full"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
      </div>
    </div>
  );
};

export default HeroSection;
