import React from "react";

const CostofWeb = () => {
  return (
    <div className="w-full py-4 px-6">
      {/* HEADING */}
      <h1 className="text-[36px] text-[#c70c0cd7] text-center font-bold leading-relaxed">
        Cost of Web Development​
      </h1>

      {/* PARAGRAPHS CONTAINER */}
      <div className="max-w-5xl mx-auto mt-8 space-y-6 text-center">
        <p className="text-[16px] text-black leading-relaxed">
          The price of web development in Pakistan typically ranges from PKR
          30,000 to over PKR 1,000,000, depending on the project complexity,
          design requirements, and website type. For example, basic business
          websites usually cost between PKR 30,000 and PKR 100,000, while custom
          web applications, dynamic websites, and e-commerce stores with
          advanced features like payment gateways, admin panels, and responsive
          design can be much more expensive.
        </p>

        <p className="text-[16px] text-black leading-relaxed">
          Businesses looking for a professional website should consider factors
          such as UI/UX design, SEO optimization, and mobile responsiveness, as
          these elements directly influence both the cost and performance of the
          website.
        </p>

        <a
          className="w-fit px-6 py-2 text-[15px] rounded font-semibold text-white bg-red-800 hover:bg-black  transition"
          href="/"
        >
          <span className="text-[16px]">Check Packages</span>
        </a>

      </div>
    </div>
  );
};

export default CostofWeb;
