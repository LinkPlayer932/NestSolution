import React from "react";
import Image from "next/image";

const WhyChoose = () => {
  return (
    <div className="w-full py-4 px-6">
      {/* HEADING */}
      <h1 className="text-[36px] text-[#c70c0cd7] text-center font-bold leading-relaxed">
        Why Choose Nextsol for Web Development in Lahore
      </h1>

      {/* PARAGRAPHS CONTAINER */}
      <div className="max-w-5xl mx-auto mt-6 space-y-6 text-center">
        <p className="text-[16px] text-black leading-relaxed">
          At <span className="font-bold">Nextsol</span> we provide professional
          web development services in Lahore for businesses searching for
          trusted experts near me. As a leading web development agency and firm,
          our team builds everything from simple business websites to advanced
          e-commerce platforms using the latest tools and SEO-friendly designs.
          Choosing Nextsol as your local web development company means faster
          communication, custom solutions, and reliable support to help your
          business grow online.
        </p>
      </div>

      {/* Our Clients */}

      {/* PARAGRAPHS CONTAINER */}
      <div className="max-w-5xl mx-auto mt-10 space-y-6 text-center">
        <h1 className="text-[23px] md:text-[35px] text-[#c70c0cd7] text-center font-bold leading-relaxed">
          OUR CLIENTS
        </h1>
        <p className="text-[16px] text-black leading-relaxed">
          In conclusion we work with clients as a partner and similarly are
          intrigued by exciting and challenging projects, but we also appreciate
          the dynamic exchange of experiences and interests therefore, if you
          are searching for a stunning web development company in Lahore that
          you want to develop, look no further because we are the right partner
          for you. For us above all are you. One of our prestigious clients gave
          us the title of the “Best Web Development And SEO Company”.
        </p>

        <div className="flex items-center overflow-hidden justify-between gap-10 pt-6">
          <img src="unnamed-2-e1598017595248.png" alt="" />
          <img src="cropped-themtimpex-1-1-e1598015975500.png" alt="" />
          <img src="bulletinhub-logo-1-1-e1598015957561.png" alt="" />
          <img src="allpurposelogo-e1598015912708.png" alt="" />
        </div>
        <div className="mt-16">
          <a
            className="w-fit px-6 py-2 text-[15px] rounded font-semibold text-white bg-red-800 hover:bg-black  transition"
            href="/ourportfolio"
          >
            <span className="text-[16px]">See Our Case Studies</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
