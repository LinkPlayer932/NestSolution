// "use client";
// import React from "react";

// const ContactSimple = () => {
//   return (
//     <div className="w-full py-10 px-6">
//       <div className="max-w-5xl mx-auto">
//         {/* Heading */}
//         <div className="w-full text-center mb-10 bg-gradient-to-r from-red-700 to-gray-700 p-4 md:p-10 rounded-2xl">
//           <h1 className="text-3xl font-bold text-white">Contact Us</h1>
//           <p className="text-white mt-2">
//             Feel free to reach out — we’d love to hear from you.
//           </p>
//         </div>

//         {/* 2 Column Layout */}
//         <div className="flex flex-cols-1 md:flex-cols-2 gap-10">
//           <div className="w-full p-4 md:p-10 rounded-2xl">
//             <div className="flex items-center gap-2 text-sm">
//               <a href="/">Home</a>
//               <div className=" px-1.5 py-1 border border-gray-400 text-gray-400 text-[12px] rounded-sm text-xs">»</div>
//               <span className="text-gray-800 font-medium">Contact Us</span>
//             </div>

//             <p className="mt-6 text-gray-700">
//               Call Us, Write Us, or Knock on Our Door
//             </p>
//             <h3 className="text-[24px] md:text-[32px] text-red-600 font-bold mb-2">
//               We Would Be Happy To Meet You And Learn All About Your Business
//             </h3>
//             <p className="mt-6 text-gray-700">
//               Office # 15, Floor 6th, Gohar Center , Muslim Town Lahore
//             </p>
//             <p className="text-gray-500 font-medium mt-6">Sunday: Closed</p>
//             <p className="text-gray-500 font-medium mt-6">Monday - Thursday: 9AM - 7PM</p>
//             <p className="text-gray-500 font-medium mt-6">Friday: 9AM - 5PM</p>
//           </div>

//           {/* Right Side: Simple Form */}
//           <div className="w-full  bg-white shadow-xl items-end shadow-gray-400 p-4 md:p-10 rounded-2xl">
//             <h3 className="text-[24px] md:text-[32px] text-red-700 font-bold mb-2">
//               Experience Real Results
//             </h3>

//             <p className="mb-8 text-gray-700">
//               Partner with Nextsol Agency and scale your business.
//             </p>

//             <form className="w-full space-y-4">
//               {/* Row 1 */}
//               <div className="flex flex-cols-1 sm:flex-cols-1 md:grid-cols-2 gap-3">
//                 <input
//                   type="text"
//                   placeholder="First Name"
//                   className="rounded border border-gray-200 px-2 py-2 w-full"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   className="rounded border border-gray-200 px-2 py-2 w-full"
//                 />
//               </div>

//               {/* Row 2 */}
//               <div className="flex flex-cols-1 sm:flex-cols-1 md:grid-cols-2 gap-3">
//                 <input
//                   type="text"
//                   placeholder="Company & Organization"
//                   className="rounded border border-gray-200 px-2 py-2 w-full"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Website"
//                   className="rounded border border-gray-200 px-2 py-2 w-full"
//                 />
//               </div>

//               {/* Row 3 */}
//               <div className="flex flex-cols-1 sm:flex-cols-1 md:grid-cols-2 gap-3">
//                 <input
//                   type="text"
//                   placeholder="Email"
//                   className="rounded border border-gray-200 px-2 py-2 w-full"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Phone Number"
//                   className="rounded border border-gray-200 px-2 py-2 w-full"
//                 />
//               </div>

//               <input
//                 type="text"
//                 placeholder="How did you hear about Nextsol?"
//                 className="border border-gray-200 px-2 py-2 w-full rounded"
//               />

//               {/* CHECKBOXES */}
//               <div className="space-y-1 text-sm text-gray-800">
//                 <p className="mb-1 font-medium">
//                   What services can we provide you?
//                 </p>

//                 {[
//                   "SEO",
//                   "Social Media Ads",
//                   "Reputation / Reviews",
//                   "Photography / Video",
//                   "Email Marketing",
//                 ].map((service, i) => (
//                   <label key={i} className="flex items-center gap-2">
//                     <input type="checkbox" className="w-4 h-4" />
//                     {service}
//                   </label>
//                 ))}
//               </div>

//               <textarea
//                 placeholder="Tell us about your business"
//                 className="w-full p-3 h-28 rounded border border-gray-200 text-sm outline-none"
//               />
//               <div className="w-48 h-10 bg-gray-200 border flex items-center justify-center text-xs text-gray-600">
//                 reCAPTCHA
//               </div>

//               <button className="w-full bg-red-700 hover:bg-red-600 py-3 rounded-lg text-white font-semibold text-sm">
//                 Send My Free Proposal
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSimple;

"use client";
import React, { useState } from "react";

const ContactSimple = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // handle text inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle checkbox for services
  const handleServiceChange = (e) => {
    const { value, checked } = e.target;

    setFormData((prev) => {
      const updated = new Set(prev.services || []);
      checked ? updated.add(value) : updated.delete(value);
      return { ...prev, services: Array.from(updated) };
    });
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      setSuccessMessage("✅ Message sent successfully! We will contact you soon.");

      setFormData({});
      setTimeout(() => setLoading(false), 2000);
    } catch (err) {
      console.error(err);
      setSuccessMessage("❌ Something went wrong, please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full pt-24 py-10 px-6">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] text-center mb-10 bg-gradient-to-r from-red-700 to-gray-700 p-6 md:p-10 rounded-none">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Contact Us
          </h1>
          <p className="text-white mt-4 text-lg md:text-xl">
            Feel free to reach out — we’d love to hear from you.
          </p>
        </div>

        {/* TWO COLUMNS */}
        <div className="flex flex-col md:flex-row gap-10">

          {/* LEFT INFO */}
          <div className="w-full p-4 md:p-10 rounded-2xl">
            <div className="flex items-center gap-2 text-sm">
              <a href="/" className="text-pink-600 font-medium">Home</a>
              <div className="px-1.5 py-1 border border-gray-400 text-gray-400 text-[12px] rounded-sm">»</div>
              <span className="text-gray-800 font-medium">Contact Us</span>
            </div>

            <p className="mt-6 text-gray-700">Call Us, Write Us, or Knock on Our Door</p>

            <h3 className="text-[24px] md:text-[32px] text-red-600 font-bold mb-2">
              We Would Be Happy To Meet You And Learn All About Your Business
            </h3>

            <p className="mt-6 text-gray-700">
              Office # 15, Floor 6th, Gohar Center, Muslim Town Lahore
            </p>

            <p className="text-gray-500 font-medium mt-6">Sunday: Closed</p>
            <p className="text-gray-500 font-medium mt-6">Monday - Thursday: 9AM - 7PM</p>
            <p className="text-gray-500 font-medium mt-6">Friday: 9AM - 5PM</p>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full bg-white shadow-xl shadow-gray-300 p-4 md:p-10 rounded-2xl">
            <h3 className="text-[24px] md:text-[32px] text-red-700 font-bold mb-2">
              Experience Real Results
            </h3>

            <p className="mb-8 text-gray-700">
              Partner with Nextsol Agency and scale your business.
            </p>

            <form className="w-full space-y-4" onSubmit={handleSubmit}>
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input name="firstName" onChange={handleChange} type="text" placeholder="First Name" className="rounded border border-gray-200 px-2 py-2 w-full" />
                <input name="lastName" onChange={handleChange} type="text" placeholder="Last Name" className="rounded border border-gray-200 px-2 py-2 w-full" />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input name="company" onChange={handleChange} type="text" placeholder="Company & Organization" className="rounded border border-gray-200 px-2 py-2 w-full" />
                <input name="website" onChange={handleChange} type="text" placeholder="Website" className="rounded border border-gray-200 px-2 py-2 w-full" />
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input name="email" onChange={handleChange} type="text" placeholder="Email" className="rounded border border-gray-200 px-2 py-2 w-full" />
                <input name="phone" onChange={handleChange} type="text" placeholder="Phone Number" className="rounded border border-gray-200 px-2 py-2 w-full" />
              </div>

              <input name="hearAbout" onChange={handleChange} type="text" placeholder="How did you hear about Nextsol?" className="border border-gray-200 px-2 py-2 w-full rounded" />

              {/* SERVICES CHECKBOX SECTION */}
              <div>
                <p className="font-semibold mb-2">What services can we provide you?</p>

                <div className="flex flex-col gap-2 text-sm">
                  {[
                    "SEO",
                    "Social Media Ads",
                    "Reputation / Reviews",
                    "Photography / Video",
                    "Email Marketing",
                  ].map((service) => (
                    <label key={service} className="flex items-center gap-2">
                      <input type="checkbox" value={service} onChange={handleServiceChange} />
                      {service}
                    </label>
                  ))}
                </div>
              </div>

              <textarea name="message" onChange={handleChange} placeholder="Tell us about your business" className="w-full p-3 h-28 rounded border border-gray-200 text-sm outline-none" />

              <div className="w-48 h-20 bg-gray-200 border flex items-center justify-center text-xs text-gray-600">
                reCAPTCHA
              </div>

              <button className="w-full bg-red-700 hover:bg-red-600 py-3 rounded-lg text-white font-semibold text-sm">
                {loading ? "Sending..." : "Send My Free Proposal"}
              </button>

              {successMessage && <p className="mt-2 text-green-600 font-medium text-sm">{successMessage}</p>}

              <p>
                In a hurry? Give us a call now at{" "}
                <span className="font-semibold">03435743690</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSimple;
