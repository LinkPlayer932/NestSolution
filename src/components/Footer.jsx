import React from "react";
import {
  Phone,
  MapPin,
  Mail,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitch,
} from "lucide-react";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });


const Footer = () => {
  return (
    <>
    <div className={`${sora.className} mt-20 bg-black text-white pt-18 pb-4 px-6`} >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LEFT COLUMN */}
        <div className=" px-6">
          <img src="/NExt-sol.png" alt="NextSolutions" className="w-40" />

          <p className="text-sm mt-3 text-gray-300 leading-relaxed">
            Nextsolutions is the best web development and SEO company in Lahore.
          </p>

          <button className="bg-red-700 hover:bg-red-600 px-5 py-2 mt-4 rounded text-sm font-medium">
            Get A Quote
          </button>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">
            {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 bg-gray-700/60 hover:bg-white hover:text-black hover:bg-opacity-500 rounded transition"
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
            {/* Email */}
            <a
              href="mailto:linkplayer932@gmail.com"
              className="flex items-center gap-2 "
            >
              <Mail size={18} className="hover:text-red-500 transition" />
              <p>Email us: linkplayer932@gmail.com</p>
            </a>

            {/* Phone */}
            <a href="tel:+923124369225" className="flex items-center gap-2 ">
              <Phone size={18} className="hover:text-red-500 transition" />
              <p>Call us: +92-3124369225</p>
            </a>

            {/* Address */}
            <a
              href="https://maps.google.com/?q=Office+15,+Floor+6,+Gohar+Center,+Muslim+Town+Lahore"
              target="_blank"
              className="flex items-center gap-2 "
            >
              <MapPin size={18} className="hover:text-red-500 transition" />
              <p>
                Address: Office # 15, Floor 6th, Gohar Center, Muslim Town
                Lahore
              </p>
            </a>

            {/* Website */}
            <a
              href="https://www.nextsol.pk"
              target="_blank"
              className="flex items-center gap-2"
            >
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

          {/* Form */}
          <form className="space-y-3">
            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 rounded text-black text-sm border bg-white outline-none"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-2 rounded text-black text-sm border bg-white outline-none"
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Message"
              className="w-full p-3 h-28 rounded text-black text-sm border bg-white outline-none"
            ></textarea>

            {/* Send Button */}
            <button className="bg-red-700 hover:bg-red-600 px-6 py-2 rounded text-sm font-medium">
              Send
            </button>
          </form>
        </div>
      </div>
          </div>


      {/* Bottom Bar */}
      <div className="w-full bg-red-800 text-center text-white font-bold py-2 rounded-b-2xl">
        All rights reserved © Nextsol.pk
      </div>
      </>
  );
};

export default Footer;
