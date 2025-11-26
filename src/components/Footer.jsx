// import React from "react";
// import {
//   Phone,
//   MapPin,
//   Mail,
//   Globe,
//   Facebook,
//   Instagram,
//   Linkedin,
//   Youtube,
//   Twitch,
//   Github,
// } from "lucide-react";
// import { Sora } from "next/font/google";

// const sora = Sora({ subsets: ["latin"] });

// const Footer = () => {
//   return (
//     <>
//       <div
//         className={`${sora.className} mt-20 bg-black text-white pt-18 pb-4 px-6`}
//       >
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
//           {/* LEFT COLUMN */}
//           <div className=" px-6">
//             <img src="/NExt-sol.png" alt="NextSolutions" className="w-40" />

//             <p className="text-sm mt-3 text-gray-300 leading-relaxed">
//               Nextsolutions is the best web development and SEO company in
//               Lahore.
//             </p>

//             <button className="bg-red-700 hover:bg-red-600 px-5 py-2 mt-4 rounded text-sm font-medium">
//               Get A Quote
//             </button>

//             {/* Social Icons */}
//             <div className="flex items-center gap-4 mt-6">
//               {[Facebook, Instagram, Youtube, Linkedin, Github].map(
//                 (Icon, i) => (
//                   <a
//                     key={i}
//                     href="#"
//                     className="p-2 bg-gray-700/60 hover:bg-white hover:text-black hover:bg-opacity-500 rounded transition"
//                   >
//                     <Icon size={18} />
//                   </a>
//                 )
//               )}
//             </div>
//           </div>

//           {/* MIDDLE COLUMN */}
//           <div>
//             <h3 className="uppercase text-base font-semibold tracking-wider mb-4">
//               VISIT US
//             </h3>

//             <div className="space-y-3 text-sm">
//               {/* Email */}
//               <a
//                 href="mailto:linkplayer932@gmail.com"
//                 className="flex items-center gap-2 "
//               >
//                 <Mail size={18} className="hover:text-red-500 transition" />
//                 <p>Email us: linkplayer932@gmail.com</p>
//               </a>

//               {/* Phone */}
//               <a href="tel:+923124369225" className="flex items-center gap-2 ">
//                 <Phone size={18} className="hover:text-red-500 transition" />
//                 <p>Call us: +92-3124369225</p>
//               </a>

//               {/* Address */}
//               <a
//                 href="https://maps.google.com/?q=Office+15,+Floor+6,+Gohar+Center,+Muslim+Town+Lahore"
//                 target="_blank"
//                 className="flex items-center gap-2 "
//               >
//                 <MapPin size={18} className="hover:text-red-500 transition" />
//                 <p>
//                   Address: Office # 15, Floor 6th, Gohar Center, Muslim Town
//                   Lahore
//                 </p>
//               </a>

//               {/* Website */}
//               <a
//                 href="https://www.nextsol.pk"
//                 target="_blank"
//                 className="flex items-center gap-2"
//               >
//                 <Globe size={18} className="hover:text-red-500 transition" />
//                 <p>www.nextsol.pk</p>
//               </a>
//             </div>
//           </div>

//           {/* RIGHT COLUMN - CONTACT FORM */}
//           <div>
//             <h3 className="uppercase text-base text-white font-semibold tracking-wider mb-4">
//               CONTACT US
//             </h3>

//             {/* Form */}
//             <form className="space-y-3">
//               {/* Row 1 */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                 <input
//                   name="fullName"
//                   onChange={handleChange}
//                   type="text"
//                   placeholder="First Name"
//                   className="rounded border border-gray-200 px-2 py-2 w-full"
//                 />
//                 <input
//                   name="email"
//                   onChange={handleChange}
//                   type="text"
//                   placeholder="Last Name"
//                   className="rounded border border-gray-200 px-2 py-2 w-full"
//                 />
//               </div>

//               {/* Message */}
//               <textarea
//                 name="message"
//                 onChange={handleChange}
//                 placeholder="Tell us about your business"
//                 className="w-full p-3 h-28 rounded border border-gray-200 text-sm outline-none"
//               />

//               {/* Send Button */}
//               <button className="bg-red-700 hover:bg-red-600 px-6 py-2 rounded text-sm font-medium">
//                 Send
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="w-full bg-red-800 text-center text-white font-bold py-2 rounded-b-2xl">
//         All rights reserved © Nextsol.pk
//       </div>
//     </>
//   );
// };

// export default Footer;

"use client";
import React, { useState } from "react";
import {
  Phone,
  MapPin,
  Mail,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Github,
} from "lucide-react";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

const Footer = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess("Message sent successfully!");
        setForm({ fullName: "", email: "", message: "" });
      }
    } catch (err) {
      console.log("ERROR:", err);
      setSuccess("Something went wrong!");
    }
  };

  return (
    <>
      <div className={`${sora.className} mt-20 bg-black text-white pt-18 pb-4 px-6`}>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* LEFT COLUMN */}
          <div className="px-6">
            <img src="/NExt-sol.png" alt="NextSolutions" className="w-40" />
            <p className="text-sm mt-3 text-gray-300 leading-relaxed">
              Nextsolutions is the best web development and SEO company in Lahore.
            </p>
            <button className="bg-red-700 hover:bg-red-600 px-5 py-2 mt-4 rounded text-sm font-medium">
              Get A Quote
            </button>

            <div className="flex items-center gap-4 mt-6">
              {[Facebook, Instagram, Youtube, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 bg-gray-700/60 hover:bg-white hover:text-black rounded transition"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* MIDDLE COLUMN */}
          <div>
            <h3 className="uppercase text-base font-semibold tracking-wider mb-4">
              VISIT US
            </h3>

            <div className="space-y-3 text-sm">
              <a href="mailto:linkplayer932@gmail.com" className="flex items-center gap-2">
                <Mail size={18} className="hover:text-red-500 transition" />
                <p>Email us: linkplayer932@gmail.com</p>
              </a>
              <a href="tel:+923124369225" className="flex items-center gap-2">
                <Phone size={18} className="hover:text-red-500 transition" />
                <p>Call us: +92-3124369225</p>
              </a>
              <a
                href="https://maps.google.com/?q=Office+15,+Floor+6,+Gohar+Center,+Muslim+Town+Lahore"
                target="_blank"
                className="flex items-center gap-2"
              >
                <MapPin size={18} className="hover:text-red-500 transition" />
                <p>Office # 15, Floor 6th, Gohar Center, Muslim Town Lahore</p>
              </a>
              <a href="https://www.nextsol.pk" target="_blank" className="flex items-center gap-2">
                <Globe size={18} className="hover:text-red-500 transition" />
                <p>www.nextsol.pk</p>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN - CONTACT FORM */}
          <div>
            <h3 className="uppercase text-base text-white font-semibold tracking-wider mb-4">
              CONTACT US
            </h3>

            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  type="text"
                  placeholder="First Name"
                  className="rounded border border-gray-200 px-2 py-2 w-full"
                  required
                />
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  className="rounded border border-gray-200 px-2 py-2 w-full"
                  required
                />
              </div>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your business"
                className="w-full p-3 h-28 rounded border border-gray-200 text-sm outline-none"
                required
              />

              {success && (
                <p className="text-green-400 font-medium">{success}</p>
              )}

              <button
                type="submit"
                className="bg-red-700 hover:bg-red-600 px-6 py-2 rounded text-sm font-medium"
              >
                Send
              </button>
            </form>
          </div>

        </div>
      </div>

      <div className="w-full bg-red-800 text-center text-white font-bold py-2 rounded-b-2xl">
        All rights reserved © Nextsol.pk
      </div>
    </>
  );
};

export default Footer;
