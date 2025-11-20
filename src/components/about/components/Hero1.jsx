import React from "react";

const Hero1 = () => {
  return (
    <div className="w-full pt-24">

      {/* TOP BANNER */}
      <div className="bg-gradient-to-r from-red-700 to-gray-700 text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto text-center px-5">
          <h1 className="font-semibold text-4xl md:text-6xl">About Us</h1>
          <h3 className="text-lg md:text-xl mt-3">
            Behind the Scenes at Beyond.
          </h3>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="max-w-5xl mx-auto px-5 py-6">
        <div className="flex items-center gap-2 text-sm">
          <a href="/" className="text-red-600 font-medium">Home</a>
          <span className="px-1.5 py-0.5 border border-gray-400 text-gray-400 text-xs rounded-sm">
            »
          </span>
          <span className="text-gray-800 font-medium">About Us</span>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="mycontainer max-w-6xl mx-auto px-5 py-12">

        {/* 3 Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* LEFT COLUMN */}
          <div>
            <h2 className="text-red-600 text-3xl font-semibold mb-3">
              We Are Beyond
            </h2>
            <p className="text-gray-700 leading-relaxed text-[15px]">
              Our proprietary approach drives engaged and cost-effective
              traffic. Nextsol can work with all goals that make sense for
              your business. Nextsol is our performing marketing-focus
              service matching the right audience to your content.
            </p>
          </div>

          {/* MIDDLE COLUMN */}
          <div>
            <h2 className="text-red-600 text-3xl font-semibold mb-3">
              Digital Lovers
            </h2>
            <p className="text-gray-700 leading-relaxed text-[15px]">
              Whether you are looking for an internet company to improve your
              search ranking, redesign your website for a marketing strategy—
              our expert and customized plans are the perfect team.
            </p>
          </div>

          {/* RIGHT BLACK BOX — SAMPLE OPERATION STYLE */}
          <div className="bg-white h-full rounded-xl     p-8 flex items-center justify-center">
            
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="mt-8">
          <a
            href="/contact"
            className="inline-block bg-red-600 text-white px-10 py-3 rounded-full text-lg font-medium shadow-md hover:bg-red-700 transition"
          >
            Contact Us →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
