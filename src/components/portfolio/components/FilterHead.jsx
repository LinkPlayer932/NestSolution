"use client";
import React from "react";

const FilterHead = () => {
  return (
    <div className="relative w-full pt-42 py-20 px-4 flex flex-col items-center justify-center text-center md:pt-48 overflow-hidden">
      {/* 🔥 BACKGROUND IMAGE + OVERLAY */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/Favicon.png')" }}
      >
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      {/* CONTENT (always on top) */}
      <div className="relative max-w-3xl z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black px-4 py-1 rounded">
          Our <span className="text-red-700">Portfolio</span>
        </h1>

        <p className="mt-3 text-black text-lg md:text-xl font-medium bg-white/70 px-4 py-1 rounded">
          Grow Your Online Business With Nextsol
        </p>

        {/* FORM */}
        <div className="mt-6 w-full max-w-xl space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full border border-black bg-white px-3 py-2 rounded"
            />

            <input
              type="text"
              placeholder="Enter your TEL NO"
              className="w-full border border-black bg-white px-3 py-2 rounded"
            />
          </div>

          <input
            type="text"
            placeholder="Enter Your Message"
            className="w-full border border-black bg-white px-3 py-2 rounded"
          />

          <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800">
            GET Free PROPOSAL
          </button>
        </div>

        {/* BREADCRUMB */}
        <div className="gap-2 text-sm mt-8">
          <a href="/" className="text-red-600 font-medium hover:underline">
            Home
          </a>

          <span className="px-1.5 py-0.5 border border-gray-400 text-gray-400 text-xs rounded-sm">
            »
          </span>

          <span className="text-gray-800 font-medium">Portfolio</span>
        </div>
      </div>
    </div>
  );
};

export default FilterHead;
