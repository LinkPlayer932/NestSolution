"use client";
import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

/* MEGA DROPDOWN */
const MegaDropdown = ({ title, items }) => {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(null);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => {
        setOpen(false);
        setSubOpen(null);
      }}
    >
      <a
        href={items[0]?.href || "#"}
        className="flex items-center gap-1 hover:text-red-500 transition"
      >
        {title} <ChevronDown size={14} />
      </a>

      {open && (
        <div className="absolute top-full left-0 mt-3 bg-white shadow-2xl border border-gray-200 rounded-lg w-72 py-3 px-3 z-50">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => item.submenu && setSubOpen(index)}
              onMouseLeave={() => item.submenu && setSubOpen(null)}
            >
              <a
                href={item.href || "#"}
                className="flex justify-between items-center px-2 py-2 hover:bg-gray-100 text-black"
              >
                {item.label}
                {item.submenu && <ChevronDown size={12} />}
              </a>

              {item.submenu && subOpen === index && (
                <div className="absolute top-0 left-full ml-2 bg-white border shadow-xl rounded w-56 py-2 px-2 z-50">
                  {item.submenu.map((sub, i) => (
                    <a
                      key={i}
                      href={sub.href}
                      className="block px-3 py-2 hover:bg-gray-100 text-sm text-black"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white md:bg-black text-black md:text-white shadow-md mb-10 py-4 md:px-4 md:py-4 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-20">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/NExt-sol.png" className="hidden md:block w-56" />
          <img src="/new-logo.png" className="block md:hidden w-48" />
        </div>

        {/* Desktop Menu */}
        <div
          className={`${sora.className} hidden md:flex items-center space-x-10 text-[15px] font-normal`}
        >
          <a href="/" className="hover:text-red-500 text-red-500 transition">
            Home
          </a>

          <MegaDropdown
            title="About"
            items={[
              { label: "About", href: "/about" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Pricing", href: "/pricing" },
            ]}
          />

          <MegaDropdown
            title="Services"
            items={[
              { label: "Services", href: "/services" },
              {
                label: "Web Development Services",
                href: "/services/web-development",
              },
              {
                label: "Website Designing",
                submenu: [
                  { label: "Corporate Web Design", href: "#" },
                  { label: "Personal Website", href: "#" },
                ],
              },
              {
                label: "Search Engine Optimization",
                submenu: [
                  { label: "On-Page SEO", href: "#" },
                  { label: "Off-Page SEO", href: "#" },
                ],
              },
              { label: "Social Media Marketing", href: "#" },
              { label: "PPC Management", href: "#" },
            ]}
          />

          <MegaDropdown
            title="SEO"
            items={[
              { label: "SEO Services Lahore", href: "/seo/seoserviceslahore" },
              { label: "Local SEO", href: "/seo/localseo" },
              { label: "Local Citations", href: "/seo/localcitations" },
            ]}
          />

          <a href="/career" className="hover:text-red-500 transition">
            Career
          </a>
          <a href="/contact" className="hover:text-red-500 transition">
            Contact Us
          </a>
          <a href="/blog" className="hover:text-red-500 transition">
            Blog
          </a>
        </div>

        {/* Desktop CTA */}

        <a
          href="tel:+923124369225"
          className="hidden md:block bg-red-700 hover:bg-white hover:text-black text-white font-semibold px-4 py-5 rounded shadow transition"
        >
          Book Your Free Strategy Call
        </a>

        {/* Mobile Toggle */}
        <button
          className=" text-red-700 md:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white text-black px-6 py-6 space-y-4 border-t border-gray-200 max-h-[80vh] overflow-y-auto">
          <a href="/" className="block hover:text-red-600">
            Home
          </a>

          <details>
            <summary className="cursor-pointer py-2 hover:text-red-600">
              About
            </summary>
            <div className="ml-4 space-y-2">
              <a href="/about">About</a>
              <a href="/portfolio">Portfolio</a>
              <a href="/pricing">Pricing</a>
            </div>
          </details>

          <details>
            <summary className="cursor-pointer py-2 hover:text-red-600">
              Services
            </summary>
            <div className="ml-4 space-y-2">
              <a href="/services">Services</a>
              <a href="/services/web-development">Web Development</a>
              <a href="#">SEO</a>
            </div>
          </details>

          <details>
            <summary className="cursor-pointer py-2 hover:text-red-600">
              SEO
            </summary>
            <div className="ml-4 space-y-2">
              <a href="/seo/seoserviceslahore">SEO Services Lahore</a>
              <a href="/seo/localseo">Local SEO</a>
              <a href="/seo/localcitations">Local Citations</a>
            </div>
          </details>

          <a href="/career" className="block hover:text-red-600">
            Career
          </a>
          <a href="/contact" className="block hover:text-red-600">
            Contact Us
          </a>

          <a
            href="tel:+923124369225"
            className="block bg-red-700 text-white text-center py-3 rounded-md mt-4"
          >
            Book Your Free Strategy Call
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
