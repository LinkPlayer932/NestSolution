"use client";
import React from "react";

const data = [
  {
    image: "/1.webp",
    title: "+280% Monthly Visits — Cosmo Solaris",
    category: "Solar",
    country: "United States",
    tags: ["SEO", "International"],
  },
  {
    image: "/2.png",
    title: "+250% Monthly Visits — Secret Glamer",
    category: "Ecommerce Store",
    country: "Pakistan",
    tags: ["Web Dev", "SEO"],
  },
  {
    image: "/6.png",
    title: "Prime Medical Revenue — Your Trusted Partner",
    category: "Medical Billing",
    country: "United States",
    tags: ["SEO", "Content"],
  },
  {
    image: "/4.webp",
    title: "+310% Monthly Visits — Sybrid MD",
    category: "HealthCare",
    country: "United States",
    tags: ["SEO", "Web DEV"],
  },
  {
    image: "/5.webp",
    title: "Scafa.pk — Your Trusted Partner in Culinary Excellence",
    category: "Ecommerce Store",
    country: "Pakistan",
    tags: ["Web Development", "SEO"],
  },
  {
    image: "/3.webp",
    title: "Arsons Pharma — Website Developed by Nextsol",
    category: "Medical Billing",
    country: "United States",
    tags: ["SEO", "Content"],
  },
];

const Projects = () => {
  return (
    <div className="mycontainer px-4 md:px-10 py-10">

      {/* ---------------- FILTER BAR ---------------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 bg-gray-200 rounded-lg p-3 gap-4">
        <select className="border bg-white p-3 rounded-lg w-full">
          <option>All Locations</option>
          <option>United States</option>
          <option>Pakistan</option>
        </select>

        <select className="border bg-white p-3 rounded-lg w-full">
          <option>All Industries</option>
          <option>Solar</option>
          <option>Ecommerce</option>
          <option>HealthCare</option>
        </select>

        <select className="border bg-white p-3 rounded-lg w-full">
          <option>All Services</option>
          <option>SEO</option>
          <option>Development</option>
        </select>
      </div>

      <div className="flex justify-end mt-4">
        <button className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition">
          Clear filters
        </button>
      </div>

      {/* ---------------- RESULT COUNT ---------------- */}
      <p className="mt-3 text-gray-700 text-sm">{data.length} results</p>

      {/* ---------------- GRID ---------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">

        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 
                       transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl
                       opacity-0 animate-fadeIn"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-44 object-cover transition-all duration-300 hover:brightness-90"
            />

            {/* CONTENT */}
            <div className="p-5">
              <h2 className="font-bold text-lg mb-1">{item.title}</h2>

              <p className="text-gray-600 text-sm mb-3">
                {item.category} • {item.country}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-gray-100 rounded-full border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Projects;
