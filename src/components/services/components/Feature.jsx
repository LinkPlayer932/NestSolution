"use client";
import React from "react";

const AmazingTeam = () => {
  const services = [
    {
      title: "Social Media​​ Marketing",
      describe:
        "Social media marketing, or SMM, is a form of internet marketing that involves creating and sharing content on social media networks",
      button: "Learn More",
    },
    {
      title: "Search Engine Optimization (SEO)",
      describe:
        "The goal of Best SEO services in Lahore to determine the keywords that customers will use to search features.",
      button: "Learn More",
    },
    {
      title: "Pay-per-click",
      describe:
        "Our online marketing use their immense experience to change businesses from different countries to get traffic.",
      button: "Learn More",
    },
    {
      title: "Digital Marketing​​",
      describe:
        "With our approach to Digital Marketing, our methods (for instance CPA) continue to be proven in a continuously challenging marketplace by delivering what we promise.",
      button: "Learn More",
    },
    {
      title: "Web Design​ing",
      describe:
        "Nextsol.pk is a reliable and trustworthy name in the world of web development and have helped a number of brands in designing and developing their websites",
      button: "Learn More",
    },
    {
      title: "CMS (Content Management System)",
      describe:
        "Nextsol.pk works hard to create practical and business generating solutions for its clients. Our portfolio is the place where we feel extremely proud of.",
      button: "Learn More",
    },
    {
      title: "Graphic Design​​",
      describe:
        "Nextsol.pk Get in touch now to get a Logo Design, Print Materials Design, or Digital Graphics Design. We can also help you with your Website Design.",
      button: "Learn More",
    },
    {
      title: "​Web Development",
      describe:
        "Boost your business with Nextsol Solution. Nextsol Solution best Web development and SEO company prepare their best to “Bell the Cat” with their expert Web designers.",
      button: "Learn More",
    },
    {
      title: "Strategy​​",
      describe:
        "The goal of Best SEO to determine the keywords that customers will use to search for your products or features. However, it manages the company’s upper limit.",
      button: "Learn More",
    },
  ];

  return (
    <div className="mycontainer mx-auto w-full px-4 py-10 md:py-16">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
        {services.map((item, index) => (
          <div
            key={index}
            className="
              bg-white shadow-2xl shadow-gray-300 border border-red-400 
              rounded-xl p-10 md:p-10 rounded-bl-4xl
              transition-all duration-300
              hover:shadow-xl hover:-translate-y-2
              opacity-0 animate-fadeIn
            "
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            <h3 className="text-red-600 text-lg mb-4 font-semibold">
              {item.title}
            </h3>

            <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed">
              {item.describe}
            </p>

            <a
              className="text-white font-medium bg-red-700 px-5 py-2 rounded-full hover:underline inline-block"
              href="/"
            >
              {item.button}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmazingTeam;
