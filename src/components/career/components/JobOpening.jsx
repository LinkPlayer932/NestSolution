import React from "react";
import { Phone } from "lucide-react";

const JobOpening = () => {
  return (
    <div className="mycontainer mx-auto px-4 py-10">
      {/* 2 COLUMN LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">
        {/* LEFT COLUMN */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Browse Our Latest Job Openings
          </h1>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          <p className="text-gray-600 text-[15px] leading-relaxed">
            Check out our most recent job listings to find the perfect
            opportunity that matches your skills and interests. Start exploring
            today and take the next step in your career!
          </p>
        </div>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {/* Card 1 */}
        <div className="bg-white shadow-xl border rounded-xl p-6 flex flex-col gap-4">
          {/* Job Type + Salary */}
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900">Full Time</h2>
            <p className="text-gray-600 text-sm mt-1">Rs: 35k – 50k</p>
          </div>

          {/* Job Title */}
          <h2 className="text-[20px] font-bold text-gray-900">SEO Expert</h2>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700 mt-2">
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-red-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2C6.686 2 4 4.686 4 8c0 4.418 6 10 6 10s6-5.582 6-10c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
              Lahore
            </span>

            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 10a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10z"
                  clipRule="evenodd"
                />
              </svg>
              Exp. 2.5 years
            </span>

            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a2 2 0 00-2 2v3H6l4 4 4-4h-2V4a2 2 0 00-2-2z" />
                <path d="M4 15a2 2 0 002 2h8a2 2 0 002-2v-3H4v3z" />
              </svg>
              Office based
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            <button className="bg-red-600 text-white text-sm font-semibold rounded px-4 py-2">
              Branding
            </button>
            <button className="border border-black text-black text-sm font-semibold rounded px-4 py-2">
              Advertising
            </button>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm leading-relaxed">
            We are hiring a skilled SEO Expert to join our team, drive our
            Digital growth by improving our online visibility and our Website
            ranking. As an SEO Expert, you will play a key role in shaping our
            online presence, leveraging the latest SEO strategies to connect
            with our audience and boost organic traffic. Join us to lead our SEO
            efforts and contribute to our company’s success!
          </p>

          {/* Apply Button */}
          <a
            href="#"
            className="mt-2 text-red-600 font-semibold underline hover:text-red-800 transition"
          >
            Apply Now →
          </a>
        </div>

        <div className="bg-white shadow-xl border rounded-xl p-6 flex flex-col gap-4">
          {/* Job Type + Salary */}
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900">Part Time</h2>
            <p className="text-gray-600 text-sm mt-1">Rs: 25k – 30k</p>
          </div>

          {/* Job Title */}
          <h2 className="text-[20px] font-bold text-gray-900">
            Content Writer
          </h2>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700 mt-2">
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-red-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2C6.686 2 4 4.686 4 8c0 4.418 6 10 6 10s6-5.582 6-10c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
              Lahore
            </span>

            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 10a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10z"
                  clipRule="evenodd"
                />
              </svg>
              Exp. 1 years
            </span>

            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a2 2 0 00-2 2v3H6l4 4 4-4h-2V4a2 2 0 00-2-2z" />
                <path d="M4 15a2 2 0 002 2h8a2 2 0 002-2v-3H4v3z" />
              </svg>
              Office based & Remort Job
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            <button className="bg-red-600 text-white text-sm font-semibold rounded px-4 py-2">
              Branding
            </button>
            <button className="border border-black text-black text-sm font-semibold rounded px-4 py-2">
              Advertising
            </button>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm leading-relaxed">
            We are seeking a creative and skilled Content Writer to join our
            team. In this role, you will craft engaging, informative, and
            original content that connect with our audience and enhances our
            online presence. This is an exciting opportunity to grow in a
            collaborative, innovative environment. Join us to create content
            that connects and inspires!
          </p>

          {/* Apply Button */}
          <a
            href="#"
            className="mt-2 text-red-600 font-semibold underline hover:text-red-800 transition"
          >
            Apply Now →
          </a>
        </div>

        <div className="bg-white shadow-xl border rounded-xl p-6 flex flex-col gap-4">
          {/* Job Type + Salary */}
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900">Part Time</h2>
            <p className="text-gray-600 text-sm mt-1">Rs: 35k</p>
          </div>

          {/* Job Title */}
          <h2 className="text-[20px] font-bold text-gray-900">
            Graphic Designer
          </h2>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700 mt-2">
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-red-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2C6.686 2 4 4.686 4 8c0 4.418 6 10 6 10s6-5.582 6-10c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
              Lahore
            </span>

            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 10a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10z"
                  clipRule="evenodd"
                />
              </svg>
              Exp. 2 years
            </span>

            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a2 2 0 00-2 2v3H6l4 4 4-4h-2V4a2 2 0 00-2-2z" />
                <path d="M4 15a2 2 0 002 2h8a2 2 0 002-2v-3H4v3z" />
              </svg>
              Office based
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            <button className="bg-red-600 text-white text-sm font-semibold rounded px-4 py-2">
              Branding
            </button>
            <button className="border border-black text-black text-sm font-semibold rounded px-4 py-2">
              Advertising
            </button>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm leading-relaxed">
            We are seeking a talented Graphic Designer to shape our brand’s
            visual identity across digital and print media. You’ll create
            engaging designs for social media, website visuals, and marketing
            materials, working closely with our team to deliver impactful
            visuals. If you’re passionate about design and detail-oriented, join
            us to make a creative impact!
          </p>

          {/* Apply Button */}
          <a
            href="#"
            className="mt-2 text-red-600 font-semibold underline hover:text-red-800 transition"
          >
            Apply Now →
          </a>
        </div>

        <div className="bg-white shadow-xl border rounded-xl p-6 flex flex-col gap-4">
          {/* Job Type + Salary */}
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900">Part Time</h2>
            <p className="text-gray-600 text-sm mt-1">Rs: 25k – 30k</p>
          </div>

          {/* Job Title */}
          <h2 className="text-[20px] font-bold text-gray-900">
            WordPress + PHP Developer
          </h2>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700 mt-2">
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-red-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2C6.686 2 4 4.686 4 8c0 4.418 6 10 6 10s6-5.582 6-10c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
              Lahore
            </span>

            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 10a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10z"
                  clipRule="evenodd"
                />
              </svg>
              Exp. 1 years
            </span>

            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a2 2 0 00-2 2v3H6l4 4 4-4h-2V4a2 2 0 00-2-2z" />
                <path d="M4 15a2 2 0 002 2h8a2 2 0 002-2v-3H4v3z" />
              </svg>
              Office based
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            <button className="bg-red-600 text-white text-sm font-semibold rounded px-4 py-2">
              Branding
            </button>
            <button className="border border-black text-black text-sm font-semibold rounded px-4 py-2">
              Advertising
            </button>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm leading-relaxed">
            We are looking for an experienced WordPress + PHP Developer to join
            our team and enhance our website’s functionality and performance. In
            this role, you’ll develop and customize WordPress themes and
            plugins, optimize site performance, and collaborate with our design
            and content teams to deliver seamless user experiences. If you have
            strong PHP skills and a passion for creating high-quality,
            responsive websites, we’d love to have you on board!
          </p>

          {/* Apply Button */}
          <a
            href="#"
            className="mt-2 text-red-600 font-semibold underline hover:text-red-800 transition"
          >
            Apply Now →
          </a>
        </div>

        <div className="bg-white shadow-xl border rounded-xl p-6 flex flex-col gap-4">
          {/* Job Type + Salary */}
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900">Full Time</h2>
            <p className="text-gray-600 text-sm mt-1">Rs: 30k-60k</p>
          </div>

          {/* Job Title */}
          <h2 className="text-[20px] font-bold text-gray-900">
            Personal Assistant
          </h2>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700 mt-2">
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-red-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2C6.686 2 4 4.686 4 8c0 4.418 6 10 6 10s6-5.582 6-10c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
              Lahore
            </span>

            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 10a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10z"
                  clipRule="evenodd"
                />
              </svg>
              Exp. 2 years
            </span>

            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a2 2 0 00-2 2v3H6l4 4 4-4h-2V4a2 2 0 00-2-2z" />
                <path d="M4 15a2 2 0 002 2h8a2 2 0 002-2v-3H4v3z" />
              </svg>
              Office based
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            <button className="bg-red-600 text-white text-sm font-semibold rounded px-4 py-2">
              Branding
            </button>
            <button className="border border-black text-black text-sm font-semibold rounded px-4 py-2">
              Advertising
            </button>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm leading-relaxed">
            We are seeking a reliable and organized Personal Assistant to
            support our team with day-to-day tasks and streamline operations. In
            this role, you’ll manage schedules, handle communications,
            coordinate meetings, and assist with various administrative duties.
            If you’re detail-oriented, proactive, and skilled at multitasking,
            join us to help drive efficiency and keep our team running smoothly!
          </p>

          {/* Apply Button */}
          <a
            href="#"
            className="mt-2 text-red-600 font-semibold underline hover:text-red-800 transition"
          >
            Apply Now →
          </a>
        </div>
      </div>

<div className="w-full flex justify-center mt-10">
  <a
    href="tel:+923435743690"
    className="flex items-center bg-red-600 text-white font-semibold text-[22px] py-2 px-8 rounded-md"
  >
    +92 343-5743690
  </a>
</div>


    </div>
  );
};

export default JobOpening;
