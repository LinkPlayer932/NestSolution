import React from "react";

const MainText = () => {
  return (
    <div className="container mx-auto pt-42 px-5 py-16">
      {/* Main Heading */}
      <h1 className="text-center text-3xl md:text-[42px] font-bold mb-6">
        Get Hired: Find Your Dream Job Here
      </h1>

      {/* Subtitle */}
      <p className="text-center text-[15px] md:text-[16px] leading-7 mb-10">
        Looking for your dream job? You’ve come to the right place. Explore a
        wide range of opportunities that match your skills and passions. <br className="hidden md:block" />
        Whether you're starting out or looking to advance your career, we’re
        here to help you find the perfect fit. Start your journey to success
        today!
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
        <a className="bg-red-500 text-white font-bold text-[16px] md:text-[18px] rounded-lg px-8 py-3 w-full md:w-auto text-center">
          Looking for a Job?
        </a>

        <a className="border border-black text-black font-bold text-[16px] md:text-[18px] rounded-lg px-8 py-3 w-full md:w-auto text-center">
          Looking to hire?
        </a>
      </div>

      {/* Section Title */}
      <h1 className="text-center text-3xl md:text-[42px] font-bold mb-10">
        How It Works
      </h1>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white shadow-[0_10px_40px_rgba(0,0,0,0.12)] rounded-xl p-6 md:p-8 text-center">
          <h3 className="text-[18px] md:text-[20px] font-semibold mb-3">
            Apply
          </h3>
          <p className="text-[15px] md:text-[16px] text-gray-700">
            Submit your application to the jobs that catch your eye. You can
            also save jobs to apply later.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-[0_10px_40px_rgba(0,0,0,0.12)] rounded-xl p-6 md:p-8 text-center">
          <h3 className="text-[18px] md:text-[20px] font-semibold mb-3">
            Interview and Get Hired
          </h3>
          <p className="text-[15px] md:text-[16px] text-gray-700">
            Get ready for interviews with expert advice and helpful resources.
            Boost your confidence and secure the job.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-[0_10px_40px_rgba(0,0,0,0.12)] rounded-xl p-6 md:p-8 text-center">
          <h3 className="text-[18px] md:text-[20px] font-semibold mb-3">
            Start Your Career
          </h3>
          <p className="text-[15px] md:text-[16px] text-gray-700">
            After getting hired, start your new career path with the skills and
            confidence you need to succeed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainText;
