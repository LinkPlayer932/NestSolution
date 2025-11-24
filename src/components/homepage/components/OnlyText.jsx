import React from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const OnlyText = () => {
  return (
    <div className="mx-auto py-10 px-6">
      {/* HEADING */}
      <h1 className={`${poppins.className} text-[23px] md:text-[35px] text-center font-bold leading-relaxed`}>
        <span className="font-bold">Web</span> <span className="text-[#c8272c] font-bold">Development & Designing</span>{" "}
         <span className="font-bold">Company in Lahore</span>
      </h1>

      {/* PARAGRAPHS CONTAINER */}
      <div className="max-w-5xl mx-auto mt-8 space-y-6 text-left md:text-center ">
        <p className="text-[18px] text-black leading-relaxed">
          Next Solutions is recognized as one of the top 10 web development
          companies in Lahore, with over 10 years of experience. We specialize
          in developing both custom and dynamic websites using PHP, ASP.NET, and
          popular CMS platforms such as WordPress and Joomla. Our goal is to
          deliver simple, effective, and cost-efficient solutions that match
          your business needs.
        </p>

        <p className="text-[18px] text-black leading-relaxed">
          Whether you need a straightforward business website or a complex
          e-commerce platform, we recommend the best frameworks and technologies
          tailored to your goals. We build your online presence on flexible,
          modular platforms that connect you to leading online marketplaces in
          your target area.
        </p>

        <p className="text-[18px] text-black leading-relaxed">
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
