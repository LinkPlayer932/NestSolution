// "use client";
// import React from "react";

// const From = () => {
//   return (
//     <div className="container flex flex-col lg:flex-row items-start justify-center gap-12 p-20">

//       {/* LEFT SIDE – FAQ + IMAGE */}
//       <div className="w-full lg:w-1/2">
//         <h2 className="text-4xl font-bold text-red-700 mb-6">FAQ's</h2>


//         {/* IMAGE BELOW FAQ */}
//         <div className="mt-10">
//           <img
//             src="/SEO-articles.png" // Replace your image path
//             className="w-80"
//             alt=""
//           />
//         </div>
//       </div>

//       {/* RIGHT SIDE – FORM */}
//       <div className="w-full lg:w-1/2 bg-white shadow-xl shadow-gray-400 p-10 rounded-2xl">
//         <h3 className="text-[32px] text-red-700 font-bold mb-2">
//           Experience Real Results
//         </h3>

//         <p className="mb-8 text-gray-700">
//           Partner with Nextsol Agency and scale your business.
//         </p>

//         {/* FORM */}
//         <form className="space-y-4">

//           {/* Row 1 */}
//           <div className="grid grid-cols-2 gap-3">
//             <input type="text" placeholder="First Name" className="input rounded border border-gray-200 px-2" />
//             <input type="text" placeholder="Last Name" className="input rounded border border-gray-200 px-2" />
//           </div>

//           {/* Row 2 */}
//           <div className="grid grid-cols-2 gap-3">
//             <input
//               type="text"
//               placeholder="Company & Organization"
//               className="input rounded border border-gray-200 px-2"
//             />
//             <input type="text" placeholder="Website" className="input rounded border border-gray-200 px-2" />
//           </div>

//           {/* Row 3 */}
//           <div className="grid grid-cols-2 gap-3">
//             <input type="text" placeholder="Email" className="input rounded border border-gray-200 px-2" />
//             <input type="text" placeholder="Phone Number" className="input rounded border border-gray-200 px-2" />
//           </div>

//           {/* Full Row */}
//           <input
//             type="text"
//             placeholder="How did you hear about Nextsol?"
//             className="input border border-gray-200 px-2"
//           />

//           {/* CHECKBOXES */}
//           <div className="space-y-1 text-sm text-gray-800">
//             <p className="mb-1 font-medium">
//               What services can we provide you?
//             </p>

//             {[
//               "SEO",
//               "Social Media Ads",
//               "Reputation / Reviews",
//               "Photography / Video",
//               "Email Marketing",
//             ].map((service, i) => (
//               <label key={i} className="flex items-center gap-2">
//                 <input type="checkbox" className="w-4 h-4" />
//                 {service}
//               </label>
//             ))}
//           </div>

//           {/* MESSAGE */}
//           <textarea
//             placeholder="Tell us about your business"
//             className="w-full p-3 h-28 rounded border border-gray-200  text-sm outline-none"
//           ></textarea>

//           {/* RECAPTCHA BOX */}
//           <div className="w-48 h-20 bg-gray-200 border flex items-center justify-center text-xs text-gray-600">
//             reCAPTCHA
//           </div>

//           {/* BUTTON */}
//           <button className="w-full bg-red-700 hover:bg-red-600 py-3 rounded-lg text-white font-semibold text-sm">
//             Send My Free Proposal
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default From;
"use client";
import React, { useState } from "react";

const From = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    { q: "What services does Nextsol Agency provide?", a: "We provide SEO, Social Media Ads, Website Development, Email Marketing, and more." },
    { q: "How long does it take to see SEO results?", a: "Generally, businesses start seeing improvements within 3–6 months depending on competition." },
    { q: "Do you offer custom marketing plans?", a: "Yes, we create tailored strategies based on your goals and industry." },
    { q: "Can I book a free consultation?", a: "Yes, fill out the form and our team will contact you shortly." },
  ];

  return (
    <div className="container flex flex-col lg:flex-row items-start justify-center gap-12 p-5 md:p-10 lg:p-20">

      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">FAQ's</h2>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="border border-gray-300 rounded-lg">
              <button
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                className="w-full text-left px-4 py-3 flex justify-between items-center"
              >
                <span className="font-medium">{item.q}</span>
                <span className="text-red-700 text-xl">
                  {openFAQ === i ? "-" : "+"}
                </span>
              </button>

              {openFAQ === i && (
                <div className="px-4 pb-4 text-gray-700">{item.a}</div>
              )}
            </div>
          ))}
        </div>

        {/* RESPONSIVE IMAGE */}
        <div className="mt-10 flex justify-center lg:justify-start">
          <img src="/SEO-articles.png" className="w-full max-w-[250px]" alt="" />
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="w-full lg:w-1/2 bg-white shadow-xl shadow-gray-400 p-6 md:p-10 rounded-2xl">
        <h3 className="text-[24px] md:text-[32px] text-red-700 font-bold mb-2">
          Experience Real Results
        </h3>

        <p className="mb-8 text-gray-700">Partner with Nextsol Agency and scale your business.</p>

        <form className="w-full space-y-4">

          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3">
            <input type="text" placeholder="First Name" className="rounded border border-gray-200 px-2 py-2 w-full" />
            <input type="text" placeholder="Last Name" className="rounded border border-gray-200 px-2 py-2 w-full" />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3">
            <input type="text" placeholder="Company & Organization" className="rounded border border-gray-200 px-2 py-2 w-full" />
            <input type="text" placeholder="Website" className="rounded border border-gray-200 px-2 py-2 w-full" />
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3">
            <input type="text" placeholder="Email" className="rounded border border-gray-200 px-2 py-2 w-full" />
            <input type="text" placeholder="Phone Number" className="rounded border border-gray-200 px-2 py-2 w-full" />
          </div>

          <input type="text" placeholder="How did you hear about Nextsol?" className="border border-gray-200 px-2 py-2 w-full rounded" />

          {/* CHECKBOXES */}
          <div className="space-y-1 text-sm text-gray-800">
            <p className="mb-1 font-medium">What services can we provide you?</p>

            {["SEO", "Social Media Ads", "Reputation / Reviews", "Photography / Video", "Email Marketing"].map((service, i) => (
              <label key={i} className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                {service}
              </label>
            ))}
          </div>

          <textarea placeholder="Tell us about your business" className="w-full p-3 h-28 rounded border border-gray-200 text-sm outline-none" />

          <div className="w-48 h-20 bg-gray-200 border flex items-center justify-center text-xs text-gray-600">
            reCAPTCHA
          </div>

          <button className="w-full bg-red-700 hover:bg-red-600 py-3 rounded-lg text-white font-semibold text-sm">
            Send My Free Proposal
          </button>
        </form>
      </div>
    </div>
  );
};

export default From;
