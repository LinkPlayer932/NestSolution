// import React from "react";

// const OurVision = () => {
//   return (
//     <div className="max-w-5xl mx-auto space-y-6 text-center">
//       <div className="bg-[#fae4e5] rounded-xl p-10">
//         <h1 className="text-[36px] text-[#000000d7] text-center font-bold leading-relaxed">
//           Our Client's
//         </h1>

//         <div className="flex items-center overflow-hidden justify-between gap-4 pt-2">
//           <img src="unnamed-2-e1598017595248.png" alt="" />
//           <img src="cropped-themtimpex-1-1-e1598015975500.png" alt="" />
//           <img src="bulletinhub-logo-1-1-e1598015957561.png" alt="" />
//           <img src="allpurposelogo-e1598015912708.png" alt="" />
//         </div>
//       </div>
//         {" "}
//         {/* FULL BACKGROUND */}
//         <div className="mycontainer px-6 flex flex-col md:flex-row items-center justify-between gap-12">
//           {/* LEFT CONTENT */}
//           <img src="/seo.png" alt="" />
//           {/* RIGHT CONTENT */}
//           <div className="flex flex-col gap-4 ">
//             <div className=" bg-black text-white px-6 py-6 rounded-xl shadow-lg border border-red-400">
//               <h1 className="text-center text-[22px]">Our Mission</h1>
//               <p className=" text-center text-[13px] mt-2">
//                 Our Mission is to provide quality and cost-effective services of
//                 web solutions. In other words, website designing and web
//                 development services start with Nextsol to build a high-quality
//                 brand in an online environment. Similarly, in addition to great
//                 service, we also wish for it to be cost-effective.
//               </p>
//             </div>

//             <div className=" bg-black text-white px-6 py-6 rounded-xl shadow-lg border border-red-400">
//               <h1 className="text-center text-[22px]">Expert Team</h1>
//               <p className=" text-center text-[13px] mt-2">
//                 We at Next Solutions give wings to your business. In addition,
//                 we have a team of experts who after sharing your online business
//                 plans with advising us. How to operate and in which direction,
//                 However, that’s not all, we create your projects too and after
//                 that provide its maintenance as well.
//               </p>
//             </div>

//             <div className=" bg-black text-white px-6 py-6 rounded-xl shadow-lg border border-red-400">
//               <h1 className="text-center text-[22px]">Our Values</h1>
//               <p className=" text-center text-[13px] mt-2">
//                 We will make your business easy to anywhere in the era of the
//                 E-commerce industry however that’s not all, in addition, we also
//                 believe that as a part Next Solutions global leadership and
//                 experience in the industry you will be rewarded with outstanding
//                 too and fundamentally strengthen results.
//               </p>
//             </div>
//           </div>
//         </div>
//     </div>
//   );
// };

// export default OurVision;
import React from "react";

const OurVision = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">

      {/* TOP LOGO SECTION */}
      <div className="bg-[#fae4e5] rounded-xl p-10 text-center mb-16">
        <h1 className="text-[36px] font-bold text-black mb-6">Our Client's</h1>

        <div className="flex items-center justify-center gap-6 flex-wrap">
          <img src="unnamed-2-e1598017595248.png" className="h-12" />
          <img src="cropped-themtimpex-1-1-e1598015975500.png" className="h-12" />
          <img src="bulletinhub-logo-1-1-e1598015957561.png" className="h-12" />
          <img src="allpurposelogo-e1598015912708.png" className="h-12" />
        </div>
      </div>

      {/* MAIN SECTION */}
      <h1 className="text-center text-[36px] font-bold mb-10">
        Discover Our Mission
      </h1>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row items-stretch gap-8">

        {/* Card 1 */}
        <div className="bg-white shadow-xl shadow-red-100 rounded-xl p-8 border border-red-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex-1">
          <h2 className="text-[22px] font-semibold mb-2">Empowering Futures</h2>
          <p className="text-[15px] text-gray-700 leading-6">
            We aim to empower individuals by providing the tools and
            opportunities they need to achieve their career goals and thrive
            in their chosen fields.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-xl shadow-red-100 rounded-xl p-8 border border-red-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex-1">
          <h2 className="text-[22px] font-semibold mb-2">Creating Connections</h2>
          <p className="text-[15px] text-gray-700 leading-6">
            Our mission is to bridge the gap between talent and opportunity,
            connecting people with the right jobs that align with their skills
            and passions.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-xl shadow-red-100 rounded-xl p-8 border border-red-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex-1">
          <h2 className="text-[22px] font-semibold mb-2">Inspiring Growth</h2>
          <p className="text-[15px] text-gray-700 leading-6">
            We are committed to fostering personal and professional growth,
            helping individuals reach their full potential through continuous
            learning and development.
          </p>
        </div>

      </div>
    </div>
  );
};

export default OurVision;
