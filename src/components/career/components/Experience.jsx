"use client";
import React, { useEffect, useState } from "react";

const StatsSection = () => {
  const [companies, setCompanies] = useState(0);
  const [applications, setApplications] = useState(0);
  const [jobs, setJobs] = useState(0);
  const [members, setMembers] = useState(0);

  // Smooth Counter Function
  const animateValue = (setter, end, duration = 3000) => {
    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setter(end);
      } else {
        setter(Math.floor(start));
      }
    }, 16);
  };

  useEffect(() => {
    animateValue(setCompanies, 148);
    animateValue(setApplications, 218);
    animateValue(setJobs, 150);
    animateValue(setMembers, 640);
  }, []);

  return (
    <section className="container mx-auto md:px-20 px-8 py-14">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">
        Revolutionizing the Job Search Experience
      </h2>

      <p className="text-gray-600 leading-relaxed mb-8 w-full md:w-1/2 text-sm md:text-base">
        Experience a new era in job searching with our cutting-edge platform.
        We're revolutionizing the process by offering advanced tools and
        personalized recommendations...
      </p>

      {/* COUNTERS */}
      <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12 mt-6 font-bold text-3xl text-red-600">

        <div className="text-center w-[45%] md:w-auto">
          <span className="text-3xl md:text-4xl">{companies}+</span>
          <p className="text-gray-700 text-xs md:text-base font-normal mt-1">
            Companies
          </p>
        </div>

        <div className="text-center w-[45%] md:w-auto">
          <span className="text-3xl md:text-4xl">{applications}+</span>
          <p className="text-gray-700 text-xs md:text-base font-normal mt-1">
            Applications
          </p>
        </div>

        <div className="text-center w-[45%] md:w-auto">
          <span className="text-3xl md:text-4xl">{jobs}+</span>
          <p className="text-gray-700 text-xs md:text-base font-normal mt-1">
            Job Posted
          </p>
        </div>

        <div className="text-center w-[45%] md:w-auto">
          <span className="text-3xl md:text-4xl">{members}+</span>
          <p className="text-gray-700 text-xs md:text-base font-normal mt-1">
            Member
          </p>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
