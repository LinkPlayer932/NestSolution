import React from "react";

const OurMission = () => {
  const cards = [
    {
      title: "Who we are?",
      text: "Nextsol is a web Development Company. We have successfully served clients worldwide. Web applications and SEO are our primary skills. We have a team of 40+ dedicated professionals for all kinds of Website Designing.",
      radius: "rounded-br-4xl",
    },
    {
      title: "Web Design Company",
      text: "Let us introduce you to our special web design services. We provide Web Solutions to our clients at reasonable charges. We have highly skilled and talented designers with strong web design expertise.",
      radius: "rounded-bl-4xl",
    },
    {
      title: "Boundless Technologies",
      text: "NextSol is a respected brand in Website Designing, Web Applications, SEO, Social Media Marketing, Domain, and Hosting services.",
      radius: "rounded-tr-4xl",
    },
    {
      title: "Our Vision & Values",
      text: "We aspire to become a world leader in advancing businesses through digital means. Customer satisfaction, openness, innovation, teamwork, and growth are our core values.",
      radius: "rounded-tl-4xl",
    },
  ];

  return (
    <div className="mycontainer max-w-6xl mx-auto w-full px-6 py-16">
      {/* HEADING SECTION */}
      <div className="flex flex-col items-center text-center space-y-3 mb-12">
        <h2 className="text-gray-500 text-lg md:text-xl">
          Your Dream. Our Mission.
        </h2>

        <h1 className="text-red-600 text-3xl md:text-5xl font-semibold leading-tight">
          We Believe In Hard Work And Dedication
        </h1>

        <p className="text-gray-700 text-sm md:text-base max-w-3xl">
          We are a full-service digital consultancy equipped to handle the needs 
          of large and complex organizations. Our services are designed to stay 
          focused on client needs, deliver real business value, and turn ideas 
          into powerful results.
        </p>
      </div>

      {/* CARD GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-white shadow-[0px_10px_30px_rgba(0,0,0,0.1)] border border-red-700 rounded-2xl ${card.radius} p-8 md:p-12`}
          >
            <h1 className="text-red-600 text-2xl md:text-[28px] mb-3">
              {card.title}
            </h1>
            <p className="text-gray-700 text-sm md:text-[16px] leading-relaxed">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurMission;
