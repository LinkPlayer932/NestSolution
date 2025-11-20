import { Database, DatabaseBackup, Orbit, PlaneIcon } from "lucide-react";
import React from "react";
import { DiCodepen } from "react-icons/di";
import { FaLaptopCode } from "react-icons/fa";
import { SiAntdesign, SiCompilerexplorer, SiTestrail } from "react-icons/si";

const WorkLifeCycle = () => {
  return (
    <div className="mycontainer mx-auto px-6 w-full mt-20">
      <h1 className="text-[40px] text-center  text-[#c70c0cd7] font-bold leading-relaxed">
        Website Development Life Cycle
      </h1>

      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-in-out forwards;
          }
        `}
      </style>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-20">
        {/* CARD 1 */}
        <div className="text-center rounded-xl border border-red-700 px-6 py-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-200 animate-fadeInUp">
          <Database size={26} className="text-black mb-3" />
          <h6 className="text-[20px] font-semibold text-red-700 mb-2">
            Gathering Information
          </h6>
          <p className="text-black text-[14px] leading-relaxed">
            First, we gain information and gather requirements from our clients
            to produce max output according to customer satisfaction.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="text-center rounded-xl border border-red-700 px-6 py-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-200 animate-fadeInUp">
          <Orbit size={26} className="text-black mb-3" />
          <h6 className="text-[20px] text-red-700 font-semibold mb-2">
            Planning & Strategy
          </h6>
          <p className="text-black text-[14px] leading-relaxed">
            At this stage of web development, our team creates the data
            according to a customer to give an opportunity to check what the
            entire look of the site looks like. Based on information and
            requirements, our team brainstormed to plan a process to progress
            the site.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="text-center rounded-xl border border-red-700 px-6 py-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-200 animate-fadeInUp">
          <SiAntdesign size={26} className="text-blackmb-3" />
          <h6 className="text-[20px] text-red-700 font-semibold mb-2">Design</h6>
          <p className="text-black text-[14px] leading-relaxed">
            During this phase, the design is shaped for the website. All the
            visual content like images, photos videos, and all other content is
            prepared.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="text-center rounded-xl border border-red-700 px-6 py-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-200 animate-fadeInUp">
          <SiCompilerexplorer size={26} className="text-black mb-3" />
          <h6 className="text-[20px] text-red-700 font-semibold mb-2">
            Content writing and compiling
          </h6>
          <p className="text-black text-[14px] leading-relaxed">
            Compiling sometimes overlaps with other creating phases of a website
            but this role can’t be underestimated. At this step, it’s very
            important to write each aspect of the website very clearly to
            communicate with the audience.
          </p>
        </div>

        {/* CARD 5 */}
        <div className="text-center rounded-xl border border-red-700 px-6 py-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-200 animate-fadeInUp">
          <FaLaptopCode size={26} className="text-black mb-3" />
          <h6 className="text-[20px] text-red-700 font-semibold mb-2">Coding</h6>
          <p className="text-black text-[14px] leading-relaxed">
            At this step, you finally start developing the website. Graphical
            representation has been designed during the previous stages should
            be used to create an actual website.
          </p>
        </div>

        {/* CARD 6 */}
        <div className="text-center rounded-xl border border-red-700 px-6 py-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-200 animate-fadeInUp">
          <SiTestrail size={26} className="text-black mb-3" />
          <h6 className="text-[20px] text-red-700  font-semibold mb-2">Testing</h6>
          <p className="text-black text-[14px] leading-relaxed">
            Finally, after the website has been completely built and developed.
            Now it’s time to check and test its every function for attaining our
            maximum results.
          </p>
        </div>

        {/* CARD 7 */}
 
        <div className="text-center rounded-xl border border-red-700 px-6 py-6 flex flex-col items-center md:col-start-2 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-200 animate-fadeInUp">
          <DiCodepen size={26} className="text-black mb-3" />
          <h6 className="text-[20px] text-red-700 font-semibold mb-2">Launching</h6>
          <p className="text-black text-[14px] leading-relaxed">
            Lastly, the web application has to be launched for users so that
            they can interact with and update us about the feedback.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkLifeCycle;
