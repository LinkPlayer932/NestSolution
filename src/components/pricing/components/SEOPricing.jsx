import React from "react";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";

const SEOPricing = () => {
  const pricingPlans = [
    {
      title: "BASIC",
      price: "15000",
      monthly: "Monthly",
      features: [
        { text: "     5 Keywords", ok: true },
        { text: " 9 Pages Content", ok: true },
        { text: " Keyword Research", ok: true },
        { text: " Headings H1, H2, H3", ok: true },
        { text: " On page SEO", ok: true },
        { text: " 3 Directory Submission", ok: true },
        { text: " Website Audit", ok: true },
        { text: " 24/7 Support", ok: false },
        { text: " Weekly Report", ok: true },
        { text: "Optimize the site", ok: true },
        { text: " Robots.txt file", ok: true },
        { text: " google search console", ok: true },
        { text: "  3 Social media Posting", ok: true },
        { text: " 2 Guest Posting", ok: true },
        { text: "  Site speed", ok: false },
        { text: " Google Analytics", ok: false },
        { text: " schema.org", ok: false },
        { text: "  sitemap.xml", ok: false },
      ],
    },
    
    {
      title: "STANDARD",
      price: "25000",
      monthly: "Monthly",
      features: [
        { text: " 15 Keywords", ok: true },
        { text: " 15 Pages Content", ok: true },
        { text: " Keyword Research", ok: true },
        { text: " Headings H1, H2, H3", ok: true },
        { text: " On page SEO", ok: true },
        { text: " 6 Directory Submission", ok: true },
        { text: " Website Audit", ok: true },
        { text: " 24/7 Support", ok: true },
        { text: " Weekly Report", ok: true },
        { text: "Optimize the site", ok: true },
        { text: " Robots.txt file", ok: true },
        { text: " google search console", ok: true },
        { text: "  6 Social media Posting", ok: true },
        { text: " 6 Guest Posting", ok: true },
        { text: "  Site speed", ok: true },
        { text: " Google Analytics", ok: false },
        { text: " schema.org", ok: false },
        { text: "  sitemap.xml", ok: false },
      ],
    },
    {
      title: "PLATINUM",
      price: "40000",
      monthly: "Monthly",
      features: [
        { text: " 30 Keywords", ok: true },
        { text: "20 Pages Content", ok: true },
        { text: " Keyword Research", ok: true },
        { text: " Headings H1, H2, H3", ok: true },
        { text: " On page SEO", ok: true },
        { text: " 15 Directory Submission", ok: true },
        { text: " Website Audit", ok: true },
        { text: " 24/7 Support", ok: true },
        { text: " Weekly Report", ok: true },
        { text: "Optimize the site", ok: true },
        { text: " Robots.txt file", ok: true },
        { text: " google search console", ok: true },
        { text: "  6 Social media Posting", ok: true },
        { text: " 6 Guest Posting", ok: true },
        { text: "  Site speed", ok: true },
        { text: " Google Analytics", ok: true },
        { text: " schema.org", ok: true },
        { text: "  sitemap.xml", ok: true },
      ],
    },
  ];
  return (
    <div className="w-full ">
      <h1 className="text-[26px] md:text-[40px] text-[#c70c0cd7] text-center font-bold leading-relaxed mt-2">
        SEO PACKAGES
      </h1>
      <div className="mycontainer  px-5 py-6 items-center flex flex-col md:flex-row gap-4 md:gap-6 mt-6">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col bg-gray-100 w-full md:w-1/3 overflow-hidden shadow-xl rounded-lg"
          >
            {/* Header */}
            <div className="bg-gray-800 text-white text-center py-3 md:py-4">
              <h2 className="font-semibold text-base md:text-lg">
                {plan.title}
              </h2>
            </div>

            {/* Price */}
            <div className="text-center py-5 md:py-6">
              <span className="text-gray-600 text-xs md:text-sm">Rs</span>
              <h1 className="text-[34px] md:text-[60px] font-bold leading-tight">
                {plan.price}
              </h1>
              {plan.monthly && (
                <p className="text-gray-600 text-sm mt-1">{plan.monthly}</p>
              )}
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
  );
};

export default SEOPricing;
