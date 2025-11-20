import React from "react";

const Designing = () => {
  return (
    <div className="w-full bg-[#ececec] py-10 p-4">
      {" "}
      {/* FULL BACKGROUND */}
      <div className="mycontainer px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* LEFT CONTENT */}
        <div className="max-w-xl text-left mt-10 md:mt-0 ">
          <h1 className="text-[30px] md:text-[40px] font-extrabold mt-4 text-black leading-tight">
            <span className="text-red-700">Best Web Designing</span> in Lahore
          </h1>

          <p className="text-black mt-4 text-sm leading-relaxed">
            We create professional websites all over the world. Nextsol
            specialize in PHP, Html5, Bootstrap, CSS3, jQuery, JavaScript. We
            also provide Graphic Logo Design, CMS Development, Ecommerce
            Development, WordPress, Payment Gateway Integration. Development of
            mobile applications, online shopping store, web portal, and web
            applications. Professional SEO / SEM consulting services (on-page /
            off-page). Hire a web designer and developer in Pakistan. Developing
            well-designed and attractive websites is the basis of our business.
            We care about planning, designing, developing, and marketing, so
            likewise you get all your required essentials under one roof.
          </p>

          <div className="flex items-center gap-4 mt-6">
            <button className="bg-red-800 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium text-[16px] shadow">
              Get a Quote
            </button>

            <button className="border border-red-400 shadow hover:bg-red-800 hover:text-white px-6 py-3 rounded-lg text-[16px] font-medium">
              Book a Call
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-4 ">
          <div className=" bg-black text-white px-6 py-6 rounded-xl shadow-lg border border-red-400">
            <h1 className="text-center text-[22px]">Our Mission</h1>
            <p className=" text-center text-[13px] mt-2">
              Our Mission is to provide quality and cost-effective services of
              web solutions. In other words, website designing and web
              development services start with Nextsol to build a high-quality
              brand in an online environment. Similarly, in addition to great
              service, we also wish for it to be cost-effective.
            </p>
          </div>

          <div className=" bg-black text-white px-6 py-6 rounded-xl shadow-lg border border-red-400">
            <h1 className="text-center text-[22px]">Expert Team</h1>
            <p className=" text-center text-[13px] mt-2">
              We at Next Solutions give wings to your business. In addition, we
              have a team of experts who after sharing your online business
              plans with advising us. How to operate and in which direction,
              However, that’s not all, we create your projects too and after
              that provide its maintenance as well.
            </p>
          </div>

          <div className=" bg-black text-white px-6 py-6 rounded-xl shadow-lg border border-red-400">
            <h1 className="text-center text-[22px]">Our Values</h1>
            <p className=" text-center text-[13px] mt-2">
              We will make your business easy to anywhere in the era of the
              E-commerce industry however that’s not all, in addition, we also
              believe that as a part Next Solutions global leadership and
              experience in the industry you will be rewarded with outstanding
              too and fundamentally strengthen results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Designing;
