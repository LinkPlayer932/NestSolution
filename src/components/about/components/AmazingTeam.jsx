import React from "react";

const AmazingTeam = () => {
  const teamMembers = [
    { name: "Timothy Powell", role: "Creative Director" },
    { name: "Jennie Ryan", role: "Art Director" },
    { name: "Rod Mikey", role: "SEO Specialist" },
    { name: "Susan Poore", role: "Digital Consultant" },
    { name: "Lisa R.", role: "Boone PPC Ninja" },
    { name: "Edward Smith", role: "Strategy Dreamer" },
    { name: "Nichole Reed", role: "Senior Designer" },
    { name: "Jennie Stone", role: "Social Media" },
    { name: "Kiara", role: "Foster Head of Content" },
  ];

  return (
    <div className="mycontainer mx-auto w-full px-4 py-10 md:py-16">
      
      {/* Heading Section */}
      <div className="flex flex-col items-center text-center space-y-2 mb-10">
        <h2 className="text-gray-500 text-lg">Meet our Amazing Team</h2>
        <h1 className="text-red-600 text-3xl md:text-5xl font-semibold leading-tight">
          The Faces Behind our Success
        </h1>
        <p className="text-gray-700 text-sm md:text-base max-w-2xl">
          We Couldn’t Do It Without Them
        </p>
      </div>

      {/* Team Cards */}
      <div className="
        container mx-auto 
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        gap-6 md:gap-10
      ">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="
              bg-white shadow-[0px_10px_30px_rgba(0,0,0,0.12)]
              rounded-2xl py-6 px-8 text-center
              transition duration-300 hover:shadow-xl border border-red-700 hover:-translate-y-1
            "
          >
            <h1 className="text-red-600 text-lg font-medium">
              {member.name}
            </h1>
            <p className="text-gray-700 text-sm md:text-base">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmazingTeam;
