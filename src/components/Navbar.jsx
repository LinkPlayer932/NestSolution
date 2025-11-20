"use client";
import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

/* 🔥 MEGA DROPDOWN — title is now clickable link */
const MegaDropdown = ({ title, items }) => {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(null);
  const [closeTimer, setCloseTimer] = useState(null);

  const handleMouseLeave = () => {
    const timer = setTimeout(() => {
      setOpen(false);
      setSubOpen(null);
    }, 1000);
    setCloseTimer(timer);
  };

  const handleMouseEnter = () => {
    if (closeTimer) clearTimeout(closeTimer);
    setOpen(true);
  };

  return (
    <div className="relative" onMouseLeave={handleMouseLeave}>
      {/* ⭐ TITLE NOW A LINK */}
      <a
        href={items[0]?.href || "#"}
        className="flex items-center gap-1 hover:text-red-500 transition"
        onMouseEnter={handleMouseEnter}
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
                className="flex justify-between items-center px-2 py-2 hover:bg-gray-100 cursor-pointer text-black"
              >
                {item.label}
                {item.submenu && (
                  <ChevronDown size={12} className="opacity-70" />
                )}
              </a>

              {/* Right Submenu */}
              {item.submenu && subOpen === index && (
                <div className="absolute top-0 left-full ml-2 bg-white border shadow-xl rounded-lg w-56 py-2 px-2 z-50">
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
    <nav className="fixed w-full shadow-lg bg-white text-black md:bg-black md:text-white transition mb-20 p-4 z-50">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo */}
        <div>
          <img src="/NExt-sol.png" className="hidden md:block w-48" />
          <img src="/new-logo.png" className="block md:hidden w-28" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-[15px] font-medium">
          <a href="/" className="hover:text-red-500 transition">
            Home
          </a>

          {/* About */}
          <MegaDropdown
            title="About"
            items={[
              { label: "About", href: "/about" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Pricing", href: "/pricing" },
            ]}
          />

          {/* Services */}
          <MegaDropdown
            title="Services"
            items={[
              { label: "Services", href: "/services" },
              { label: "Web Development Services", href: "/services/web-development" },
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

          {/* SEO */}
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
        </div>

        {/* CTA Button */}
        <button className="hidden md:block bg-red-700 hover:bg-red-600 text-white rounded-xl px-6 py-2 shadow-md transition">
          Book Your Free Strategy Call
        </button>

        {/* Mobile Toggle */}
        <button
          className="md:flex text-black md:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white text-black px-6 py-5 space-y-4 border-t border-gray-300 max-h-[80vh] overflow-y-auto">
          <a href="/" className="block hover:text-red-600">
            Home
          </a>

          {/* About */}
          <details>
            <summary className="cursor-pointer hover:text-red-600">
              About
            </summary>

            <div className="ml-4 mt-2 space-y-2 flex flex-col">
              <a href="/about" className="block">
                About
              </a>
              <a href="/portfolio" className="block">
                Portfolio
              </a>
              <a href="/pricing" className="block">
                Pricing
              </a>
            </div>
          </details>

          {/* Services */}
          <details>
            <summary className="cursor-pointer hover:text-red-600">
              Services
            </summary>

            <div className="ml-4 mt-2 space-y-2 flex flex-col">
              <a href="#" className="block">
                Website Designing
              </a>
              <a href="/services/web-dev" className="block">
                Web Development
              </a>
              <a href="#" className="block">
                SEO
              </a>
            </div>
          </details>

          {/* SEO */}
          <details>
            <summary className="cursor-pointer hover:text-red-600">SEO</summary>

            <div className="ml-4 mt-2 space-y-2 flex flex-col">
              <a href="/seo/seoserviceslahore" className="block">
                SEO Services Lahore
              </a>
              <a href="/seo/localseo" className="block">
                Local SEO
              </a>
              <a href="/seo/localcitations" className="block">
                Local Citations
              </a>
            </div>
          </details>

          <a href="/career" className="block hover:text-red-600">
            Career
          </a>

          <a href="/contact" className="block hover:text-red-600">
            Contact Us
          </a>

          <button className="w-full bg-red-700 hover:bg-red-600 text-white rounded-xs px-4 py-2 mt-3 shadow-md">
            Book Your Free Strategy Call
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
