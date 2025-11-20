import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Bulbenko Construction",
      desc1:
        "Website Created by Nextsol. A site that provides construction facilities like rebuilt and refurbished buildings in both commercial and residential areas. Easy access to Bulbenko services.",
      desc2:
        "You’re really good at what you do. Whether you’re a private contractor or run a large construction company, your final product beats the competition every time. But you still need a strong online presence to bring clients and quality leads.",
      image: "/nextsol-web-services.webp",
    },

    {
      image: "/nextsol-web-design.webp",
      title: "REALITY SPACES",
      desc1:
        "It bases on the real state that provides the best home on customer budget offer you best and good home services on your demand land where you can meet state advisor for best solution of land see home map videos and pictures of updated homes.",
    },

    {
      title: "ALVAR KARTiNG",
      desc1:
        "Alvar site is nicely-created by nextslo site provides online booking for car racing given the prices to the winner. Provide the packages like hour Deal full deal giving the map where users want to race. You can book a race for your car.",
      image: "/nextsol-website-desing.webp",
    },

    {
      title: "Premier Business Technology",
      desc1:
        "This is the website for printer-related services. We have created the service pages for each service type like Printer rental service, printer repair service. We used WordPress premium theme for this website. We customized each section and molded it according to clients’ requirements. We put some features like, SEO friendly, Speed Optimized, Premium Builders, Call to Action, Email functioning. Oddy Okojie is very happy with our this work, if you also want to make stunning website like this then sim0ly contact us.",
      image: "/reality-space.jpg",
    },
  ];

  return (
    <div className="w-full pt-24">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-red-700 to-gray-700 text-white  py-16 md:py-20">
        <div className="max-w-5xl mx-auto text-center px-5">
          <h1 className="font-semibold text-4xl md:text-6xl">Our Portfolio</h1>
          <h3 className="text-lg md:text-xl mt-3">ALL POSTS, DESIGN, INSPIRATION</h3>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-5 py-6">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-sm">
          <a href="/" className="text-red-600 font-medium">Home</a>
          <span className="px-1.5 py-0.5 border border-gray-400 text-gray-400 text-xs rounded-sm">»</span>
          <span className="text-gray-800 font-medium">Our Portfolio</span>
        </div>

        {/* PROJECTS LIST */}
        <div className="space-y-20 py-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-between gap-10
              ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              {/* TEXT SECTION */}
              <div className="bg-white rounded p-6 w-full md:w-1/2 ">
                <h1 className="text-red-600 uppercase text-[32px] md:text-[40px] font-semibold leading-tight">
                  {project.title}
                </h1>

                <p className="text-black text-[16px] md:text-[18px] mt-6">
                  {project.desc1}
                </p>

                <p className="text-gray-700 text-[15px] md:text-[16px] mt-4 leading-relaxed">
                  {project.desc2}
                </p>
              </div>

              {/* IMAGE SECTION */}
              <div className="bg-white rounded w-full md:w-1/2 p-4 shadow-md">
                <img
                  className="shadow-xl rounded w-full object-cover"
                  src={project.image}
                  alt={project.title}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;
