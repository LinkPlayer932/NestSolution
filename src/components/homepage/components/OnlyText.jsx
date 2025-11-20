import React from "react";

const OnlyText = () => {
  return (
    <div className="w-full py-10 px-6">
      {/* HEADING */}
      <h1 className="text-[36px] text-center font-bold leading-relaxed">
        Web <span className="text-[#c8272c]">Development & Designing</span>{" "}
        Company in Lahore
      </h1>

      {/* PARAGRAPHS CONTAINER */}
      <div className="max-w-5xl mx-auto mt-8 space-y-6 text-center">
        <p className="text-[16px] text-black leading-relaxed">
          Next Solutions is recognized as one of the top 10 web development
          companies in Lahore, with over 10 years of experience. We specialize
          in developing both custom and dynamic websites using PHP, ASP.NET, and
          popular CMS platforms such as WordPress and Joomla. Our goal is to
          deliver simple, effective, and cost-efficient solutions that match
          your business needs.
        </p>

        <p className="text-[16px] text-black leading-relaxed">
          Whether you need a straightforward business website or a complex
          e-commerce platform, we recommend the best frameworks and technologies
          tailored to your goals. We build your online presence on flexible,
          modular platforms that connect you to leading online marketplaces in
          your target area.
        </p>

        <p className="text-[16px] text-black leading-relaxed">
          In addition, we make much online software that is running in
          high-level rank and has outclassed performance. In addition to
          overcoming the logistics challenge, we also provide a long chain
          market online.
        </p>
      </div>
    </div>
  );
};

export default OnlyText;
