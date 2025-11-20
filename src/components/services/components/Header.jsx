import React from "react";

const Header = () => {
  return (
    <div className="w-full pt-24">
      <div className="bg-gradient-to-r from-red-700 to-gray-700 text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto text-center px-5">
          <h1 className="font-semibold text-4xl md:text-6xl">Services</h1>
          <h3 className="text-lg md:text-xl mt-3">
            Web development and seo services
          </h3>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-5 py-6">
        <div className="flex items-center gap-2 text-sm">
          <a href="/" className="text-red-600 font-medium">
            Home
          </a>
          <span className="px-1.5 py-0.5 border border-gray-400 text-gray-400 text-xs rounded-sm">
            »
          </span>
          <span className="text-gray-800 font-medium">About Us</span>
        </div>
      </div>
      <div className="flex flex-col items-center text-center space-y-2 mt-2 mb-10">
        <h2 className="text-gray-500 text-lg">
          A Step-By-Step Roadmap To Success
        </h2>
        <h1 className="text-red-600 text-3xl md:text-5xl font-semibold leading-tight">
          Custom Web Design
        </h1>
        <p className="text-gray-700 text-[16px] text-start md:text-base max-w-2xl">
          There are structured websites that only incarcerate pre-designed web
          pages. And then there are those who can be created using custom
          options. There’s nothing wrong with the first type but we specialize
          in custom web and seo services.
        </p>
      </div>
    </div>
  );
};

export default Header;
