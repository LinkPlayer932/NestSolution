// import { TicketIcon } from "lucide-react";
// import React from "react";
// import { CiCircleRemove } from "react-icons/ci";
// import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";

// const Head = () => {
//   return (
//     <div className="container">
//       {/* TOP HEADER */}
//       <div className="bg-gradient-to-r from-red-700 to-gray-700 text-white py-16 md:py-20">
//         <div className="max-w-5xl mx-auto text-center px-5">
//           <h1 className="font-semibold font-sans text-4xl md:text-6xl drop-shadow-lg">
//             Our Pricing
//           </h1>
//           <h3 className="text-md md:text-lg mt-3">Web and SEO Pricing Plan</h3>
//         </div>
//       </div>

//       {/* BREADCRUMB SECTION */}
//       <div className="px-5 py-6">
//         <div className="relative w-full overflow-hidden bg-gradient-to-r from-red-700 to-gray-700 text-white py-2 mb-4">
//           <div className="animate-slide whitespace-nowrap text-white text-sm font-medium">
//             🚀 Special Discount Available — Contact Now! &nbsp; • &nbsp; Best
//             Pricing Plans for SEO & Web Development &nbsp; • &nbsp; Limited Time
//             Offer!
//           </div>
//         </div>
//       </div>

//       <div className="mycontainer px-5 py-6 items-center">
//         <div className="gap-2 text-sm">
//           <a href="/" className="text-red-600 font-medium hover:underline">
//             Home
//           </a>

//           <span className="px-1.5 py-0.5 border border-gray-400 text-gray-400 text-xs rounded-sm">
//             »
//           </span>

//           <span className="text-gray-800 font-medium">Our Pricing</span>
//           <h1 className="text-[40px] text-[#c70c0cd7] text-center font-bold leading-relaxed">
//             WEB DEVELOPMENT PACKAGES
//           </h1>
//         </div>

//         {/* BASIC PLAN */}
//         <div className="flex flex-col bg-gray-100 w-full md:w-1/3  overflow-hidden mt-6">
//           {/* Header */}
//           <div className="bg-gray-800 text-white text-center py-4">
//             <h2 className="font-semibold text-lg">BASIC</h2>
//           </div>

//           {/* Price */}
//           <div className="text-center py-6">
//             <span className="text-gray-600 text-sm">Rs</span>
//             <h1 className="text-[60px] font-bold">25000</h1>
//           </div>

//           {/* Features */}
//           <div className=" text-center px-14 space-y-3 flex-1">
//             <p className="flex gap-2">
//               <FaRegCheckCircle size={20} className="text-green-600 " />
//               Designed Pages: 5–7
//             </p>
//             <div className="h-[1px] w-full items-center bg-gray-300 mt-2 mb-2"></div>
//             <p className="flex gap-2">
//               <FaRegCheckCircle size={20} className="text-green-600 " />
//               Mobile & Tab Responsive
//             </p>
//             <div className="h-[1px] w-full items-center bg-gray-300 mt-2 mb-2"></div>
//             <p className="flex gap-2">
//               <FaRegCheckCircle size={20} className="text-green-600 " />
//               Initial Design Concept:1
//             </p>
//             <div className="h-[1px] w-full items-center bg-gray-300 mt-2 mb-2"></div>
//             <p className="flex gap-2">
//               <FaRegCheckCircle size={20} className="text-green-600 " />
//               Website Contact Form:1
//             </p>
//             <div className="h-[1px] w-full items-center bg-gray-300 mt-2 mb-2"></div>

//             <p className="flex gap-2">
//               <FaRegCheckCircle size={20} className="text-green-600 " />
//               Social Media Integration
//             </p>
//             <div className="h-[1px] w-full items-center bg-gray-300 mt-2 mb-2"></div>
//             <p className="flex gap-2">
//               <FaRegCheckCircle size={20} className="text-green-600 " />
//               Design Revision :1
//             </p>
//             <div className="h-[1px] w-full items-center bg-gray-300 mt-2 mb-2"></div>
//             <p className="flex gap-2">
//               <FaRegCheckCircle size={20} className="text-green-600 " />
//               Less Load time
//             </p>
//             <div className="h-[1px] w-full items-center bg-gray-300 mt-2 mb-2"></div>
//             <p className="flex gap-2">
//               <FaRegTimesCircle size={20} className="text-red-600 " />
//               Keyword Research
//             </p>
//             <div className="h-[1px] w-full items-center bg-gray-300 mt-2 mb-2"></div>
//             <p className="flex gap-2">
//               <FaRegTimesCircle size={20} className="text-red-600 " />
//               SEO Friendly
//             </p>
//             <div className="h-[1px] w-full items-center bg-gray-300 mt-2 mb-2"></div>
//             <p className="flex gap-2">
//               <FaRegTimesCircle size={20} className="text-red-600 " />
//               Payment Gateway
//             </p>
//             <div className="h-[1px] w-full items-center bg-gray-300 mt-2 mb-2"></div>
//             <p className="flex gap-2">
//               <FaRegTimesCircle size={20} className="text-red-600 " />
//               Cross Browser Compatible
//             </p>
//           </div>

//           {/* Button */}
//           <div className="text-center py-6">
//             <button className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition">
//               ORDER NOW
//             </button>
//           </div>

//         </div>
       
//       </div>
//     </div>
//   );
// };

// export default Head;


// import React from "react";
// import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";

// const Head = () => {
//   // ===========================
//   // PRICING DATA
//   // ===========================
//   const pricingPlans = [
//     {
//       title: "BASIC",
//       price: "25000",
//       features: [
//         { text: "Designed Pages: 5–7", ok: true },
//         { text: "Mobile & Tab Responsive", ok: true },
//         { text: "Initial Design Concept: 1", ok: true },
//         { text: "Website Contact Form: 1", ok: true },
//         { text: "Social Media Integration", ok: true },
//         { text: "Design Revision: 1", ok: true },
//         { text: "Less Load Time", ok: true },
//         { text: "Keyword Research", ok: false },
//         { text: "SEO Friendly", ok: false },
//         { text: "Payment Gateway", ok: false },
//         { text: "Cross Browser Compatible", ok: false },
//       ],
//     },

//     {
//       title: "STANDARD",
//       price: "35000",
//       features: [
//         { text: "Designed Pages: 7–10", ok: true },
//         { text: "Mobile & Tab Responsive", ok: true },
//         { text: "Initial Design Concepts: 1", ok: true },
//         { text: "Website Contact Form: 1", ok: true },
//         { text: "Social Media Integration", ok: true },
//         { text: "Design Revision: 1", ok: true },
//         { text: "Less Load Time", ok: true },
//         { text: "Keyword Research", ok: true },
//         { text: "SEO Friendly", ok: true },
//         { text: "Payment Gateway", ok: false },
//         { text: "Cross Browser Compatible", ok: false },
//       ],
//     },

//     {
//       title: "PLATINUM",
//       price: "60000",
//       features: [
//         { text: "Design Pages (Unlimited)", ok: true },
//         { text: "Mobile & Tab Responsive", ok: true },
//         { text: "Initial Design Concept: All", ok: true },
//         { text: "Website Contact Form: All", ok: true },
//         { text: "Social Media Integration", ok: true },
//         { text: "Design Revision: All", ok: true },
//         { text: "Less Load Time", ok: true },
//         { text: "Keyword Research", ok: true },
//         { text: "SEO Friendly", ok: true },
//         { text: "Payment Gateway", ok: true },
//         { text: "Cross Browser Compatible", ok: true },
//       ],
//     },
//   ];

//   return (
//     <div className="w-full">
//       {/* ===================== TOP HEADER ===================== */}
//       <div className="bg-gradient-to-r from-red-700 to-gray-700 text-white py-16 md:py-20">
//         <div className="max-w-5xl mx-auto text-center px-5">
//           <h1 className="font-semibold font-sans text-4xl md:text-6xl drop-shadow-lg">
//             Our Pricing
//           </h1>
//           <h3 className="text-md md:text-lg mt-3">
//             Web and SEO Pricing Plan
//           </h3>
//         </div>
//       </div>

//       {/* ===================== BREADCRUMB ===================== */}
//       <div className="px-5 py-6">
//         <div className="relative w-full overflow-hidden bg-gradient-to-r from-red-700 to-gray-700 text-white py-2 mb-4">
//           <div className="animate-slide whitespace-nowrap text-white text-sm font-medium">
//             🚀 Special Discount Available — Contact Now! &nbsp; • &nbsp; Best
//             Pricing Plans for SEO & Web Development &nbsp; • &nbsp; Limited Time Offer!
//           </div>
//         </div>
//       </div>

//       {/* ===================== PAGE TITLE ===================== */}
//       <div className="mycontainer px-5 py-6 items-center">
//         <div className="gap-2 text-sm">
//           <a href="/" className="text-red-600 font-medium hover:underline">
//             Home
//           </a>

//           <span className="px-1.5 py-0.5 border border-gray-400 text-gray-400 text-xs rounded-sm">
//             »
//           </span>

//           <span className="text-gray-800 font-medium">Our Pricing</span>

//           <h1 className="text-[40px] text-[#c70c0cd7] text-center font-bold leading-relaxed">
//             WEB DEVELOPMENT PACKAGES
//           </h1>
//         </div>

//         {/* ===================== PRICING CARDS VIA MAP ===================== */}
//         <div className="flex flex-col md:flex-row gap-6 mt-6">
//           {pricingPlans.map((plan, index) => (
//             <div
//               key={index}
//               className="flex flex-col bg-gray-100 w-full md:w-1/3 overflow-hidden shadow"
//             >
//               {/* Header */}
//               <div className="bg-gray-800 text-white text-center py-4">
//                 <h2 className="font-semibold text-lg">{plan.title}</h2>
//               </div>

//               {/* Price */}
//               <div className="text-center py-6">
//                 <span className="text-gray-600 text-sm">Rs</span>
//                 <h1 className="text-[60px] font-bold">{plan.price}</h1>
//               </div>

//               {/* Features */}
//               <div className="text-center px-14 space-y-3 flex-1">
//                 {plan.features.map((f, i) => (
//                   <React.Fragment key={i}>
//                     <p className="flex gap-2 items-center">
//                       {f.ok ? (
//                         <FaRegCheckCircle
//                           size={20}
//                           className="text-green-600"
//                         />
//                       ) : (
//                         <FaRegTimesCircle
//                           size={20}
//                           className="text-red-600"
//                         />
//                       )}
//                       {f.text}
//                     </p>

//                     {/* Divider */}
//                     <div className="h-[1px] w-full bg-gray-300"></div>
//                   </React.Fragment>
//                 ))}
//               </div>

//               {/* Button */}
//               <div className="text-center py-6">
//                 <button className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition">
//                   ORDER NOW
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Head;

import React from "react";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";

const Head = () => {
  const pricingPlans = [
    {
      title: "BASIC",
      price: "25000",
      features: [
        { text: "Designed Pages: 5–7", ok: true },
        { text: "Mobile & Tab Responsive", ok: true },
        { text: "Initial Design Concept: 1", ok: true },
        { text: "Website Contact Form: 1", ok: true },
        { text: "Social Media Integration", ok: true },
        { text: "Design Revision: 1", ok: true },
        { text: "Less Load Time", ok: true },
        { text: "Keyword Research", ok: false },
        { text: "SEO Friendly", ok: false },
        { text: "Payment Gateway", ok: false },
        { text: "Cross Browser Compatible", ok: false },
      ],
    },
    {
      title: "STANDARD",
      price: "35000",
      features: [
        { text: "Designed Pages: 7–10", ok: true },
        { text: "Mobile & Tab Responsive", ok: true },
        { text: "Initial Design Concepts: 1", ok: true },
        { text: "Website Contact Form: 1", ok: true },
        { text: "Social Media Integration", ok: true },
        { text: "Design Revision: 1", ok: true },
        { text: "Less Load Time", ok: true },
        { text: "Keyword Research", ok: true },
        { text: "SEO Friendly", ok: true },
        { text: "Payment Gateway", ok: false },
        { text: "Cross Browser Compatible", ok: false },
      ],
    },
    {
      title: "PLATINUM",
      price: "60000",
      features: [
        { text: "Design Pages (Unlimited)", ok: true },
        { text: "Mobile & Tab Responsive", ok: true },
        { text: "Initial Design Concept: All", ok: true },
        { text: "Website Contact Form: All", ok: true },
        { text: "Social Media Integration", ok: true },
        { text: "Design Revision: All", ok: true },
        { text: "Less Load Time", ok: true },
        { text: "Keyword Research", ok: true },
        { text: "SEO Friendly", ok: true },
        { text: "Payment Gateway", ok: true },
        { text: "Cross Browser Compatible", ok: true },
      ],
    },
  ];

  return (
    <div className="w-full pt-24">
      {/* ===================== TOP HEADER ===================== */}
      <div className="bg-gradient-to-r from-red-700 to-gray-700 text-white py-14 md:py-20">
        <div className="max-w-5xl mx-auto text-center px-5">
          <h1 className="font-semibold font-sans text-3xl md:text-6xl drop-shadow-lg">
            Our Pricing
          </h1>
          <h3 className="text-sm md:text-lg mt-3">
            Web and SEO Pricing Plan
          </h3>
        </div>
      </div>


      <div className="px-5 py-6">
        <div className="relative w-full overflow-hidden bg-gradient-to-r from-red-700 to-gray-700 text-white py-2 mb-4">
          <div className="animate-slide whitespace-nowrap text-white text-xs md:text-sm font-medium">
            🚀 Special Discount Available — Contact Now! &nbsp; • &nbsp; Best
            Pricing Plans for SEO & Web Development &nbsp; • &nbsp; Limited Time Offer!
          </div>
        </div>
      </div>


      <div className="mycontainer px-5 py-6 items-center">
        <div className="gap-2 text-sm">
          <a href="/" className="text-red-600 font-medium hover:underline">
            Home
          </a>

          <span className="px-1.5 py-0.5 border border-gray-400 text-gray-400 text-xs rounded-sm">»</span>

          <span className="text-gray-800 font-medium">Our Pricing</span>

          <h1 className="text-[26px] md:text-[40px] text-[#c70c0cd7] text-center font-bold leading-relaxed mt-2">
            WEB DEVELOPMENT PACKAGES
          </h1>
        </div>


        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col bg-gray-100 w-full md:w-1/3 overflow-hidden shadow rounded-lg"
            >
              {/* Header */}
              <div className="bg-gray-800 text-white text-center py-3 md:py-4">
                <h2 className="font-semibold text-base md:text-lg">{plan.title}</h2>
              </div>

              {/* Price */}
              <div className="text-center py-5 md:py-6">
                <span className="text-gray-600 text-xs md:text-sm">Rs</span>
                <h1 className="text-[34px] md:text-[60px] font-bold leading-tight">
                  {plan.price}
                </h1>
              </div>

              {/* Features */}
              <div className="text-left px-6 md:px-12 space-y-3 flex-1">
                {plan.features.map((f, i) => (
                  <React.Fragment key={i}>
                    <p className="flex gap-2 items-center text-sm md:text-base">
                      {f.ok ? (
                        <FaRegCheckCircle size={18} className="text-green-600" />
                      ) : (
                        <FaRegTimesCircle size={18} className="text-red-600" />
                      )}
                      {f.text}
                    </p>
                    <div className="h-[1px] w-full bg-gray-300"></div>
                  </React.Fragment>
                ))}
              </div>

              {/* Button */}
              <div className="text-center py-4 md:py-6">
                <button className="bg-red-600 text-white py-2 px-5 md:px-6 rounded-full hover:bg-red-700 transition text-sm md:text-base">
                  ORDER NOW
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Head;
