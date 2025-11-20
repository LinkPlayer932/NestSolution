import { Database, DatabaseBackup, Orbit, PlaneIcon } from "lucide-react";
import React from "react";
import { DiCodepen } from "react-icons/di";
import { FaLaptopCode } from "react-icons/fa";
import { SiAntdesign, SiCompilerexplorer, SiTestrail } from "react-icons/si";

const DevelopmentServices = () => {
  return (
    <div className="mycontainer mx-auto px-6 w-full mt-20">
      <h1 className="text-[40px] text-center  text-[#c70c0cd7] font-bold leading-relaxed mt-16">
        Website Development Services
      </h1>
      <p className="text-[16px] text-center  text-[#000000] font-normal leading-relaxed">
        The world is moving fast and it’s the era of website development. In
        other words, the web is a vast and unlimited source of information and
        competition for those who understand it, however, to win at this race
        people require web development and search engine optimization (SEO). Our
        company is one of the rising best web development , Web designing and
        SEO based company.
      </p>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-20">
        {/* CARD 1 */}
        <div className="flex flex-col border border-red-500 rounded-2xl p-8 shadow-sm bg-white w-full">
          {/* ICON + TEXT IN ROW (LEFT → RIGHT) */}
          <div className="flex items-start gap-4 flex-col md:flex-row">
            {/* ICON */}
            <img src="/global-business.png" alt="" />

            {/* TEXT */}
            <div>
              <h3 className="text-[20px] font-bold text-red-600 mb-2">
                Logo Designing
              </h3>

              <p className="text-[14px] text-black leading-relaxed mb-4">
                Get cheap logo design services. Hire a graphic designer for a
                professional online logo design service, graphic design services
                and graphic design service provider. All this but that's not all
                you can also get much more here.​
              </p>

              <a
                className="w-fit px-6 py-2 border border-black rounded-full text-[15px] hover:bg-black hover:text-white transition inline-block"
                href="/learnmore"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="border border-red-500 rounded-2xl p-8 shadow-sm bg-white w-full">
          <div className="flex items-start gap-4 flex-col md:flex-row">

            <img src="/web-page.png" alt="" />

            <div>
              <h3 className="text-[20px] font-bold text-red-600 mb-2">
                Web Development
              </h3>

              <p className="text-[14px] text-black leading-relaxed mb-4">
                This company ranks as one of the best web development and SEO.
                As a result of our efforts, it invites customers to return to
                your site multiple times. We never work on the notion that the
                Web configuration services simply be configured.
              </p>

              <a
                className="w-fit px-6 py-2 border border-black rounded-full text-[15px] hover:bg-black hover:text-white transition inline-block"
                href="/learnmore"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="border border-red-500 rounded-2xl p-8 shadow-sm bg-white w-full">
          <div className="flex items-start gap-4 flex-col md:flex-row">

            <img src="/web-management.png" alt="" />

            <div>
              <h3 className="text-[20px] font-bold text-red-600 mb-2">
                Web Design
              </h3>

              <p className="text-[14px] text-black leading-relaxed mb-4">
                Our team build your online website effectively using latest Web
                designing techniques and as a result, it draws customers to your
                site multiple times because we are one of the best web designing
                companies that provides quality solutions.​
              </p>

              <a
                className="w-fit px-6 py-2 border border-black rounded-full text-[15px] hover:bg-black hover:text-white transition inline-block"
                href="/learnmore"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="border border-red-500 rounded-2xl p-8 shadow-sm bg-white w-full">
          <div className="flex items-start gap-4 flex-col md:flex-row">

            <img src="/web-page.png" alt="" />

            <div>
              <h3 className="text-[20px] font-bold text-red-600 mb-2">PPC</h3>

              <p className="text-[14px] text-black leading-relaxed mb-4">
                Get business leads with PPC campaigns? We organize your campaign
                to attract the right customers and use effective keyword
                targeting. Nextsol's working to find keywords that can help your
                gain success without spending too much of your budget, We are
                looking at competition and other factors yet, make sure you can
                reach your full potential.
              </p>

              <a
                className="w-fit px-6 py-2 border border-black rounded-full text-[15px] hover:bg-black hover:text-white transition inline-block"
                href="/learnmore"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>

        {/* CARD 5 */}
        <div className="border border-red-500 rounded-2xl p-8 shadow-sm bg-white w-full">
          <div className="flex items-start gap-4 flex-col md:flex-row">

            <img src="/seo.png" alt="" />

            <div>
              <h3 className="text-[20px] font-bold text-red-600 mb-2">SEO</h3>

              <p className="text-[14px] text-black leading-relaxed mb-4">
                Our creative leaders and an expert SEO team will provide all the
                services that you need and because Nextsol is a trusted company
                that can provide you with the best SEO services, Whatever the
                topic of your site, our team of expert analysts and SEO
                consultants can create compelling and innovative strategies to
                help improve your search rankings.
              </p>

              <a
                className="w-fit px-6 py-2 border border-black rounded-full text-[15px] hover:bg-black hover:text-white transition inline-block"
                href="/learnmore"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>

        {/* CARD 6 */}
        <div className="border border-red-500 rounded-2xl p-8 shadow-sm bg-white w-full">
          <div className="flex items-start gap-4 flex-col md:flex-row">

            <img src="/web-page.png" alt="" />

            <div>
              <h3 className="text-[20px] font-bold text-red-600 mb-2">
                Digital Marketing
              </h3>

              <p className="text-[14px] text-black leading-relaxed mb-4">
                The NextSol is the Best web development and SEO services
                introduced digital marketing in view of the growing
                participation of people in today's world. Digital means the
                Internet and marketing mean that through digital marketing. We
                attract people's attention in many ways to level up their
                business with effective solutions.
              </p>

              <a
                className="w-fit px-6 py-2 border border-black rounded-full text-[15px] hover:bg-black hover:text-white transition inline-block"
                href="/learnmore"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DevelopmentServices;
