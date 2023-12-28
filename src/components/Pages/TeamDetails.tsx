import { ChevronRight, HomeIcon, Share2 } from "lucide-react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa6";

import { Button } from "../ui/button";

const TeamDetails = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center ">
      <div
        className="min-w-full w-full h-[60vh] bg-center bg-cover flex justify-center items-center relative"
        style={{
          backgroundImage: "url(/text-image.jpeg)",
          backgroundSize: "cover",
        }}
      >
        {/* Top Image */}
        <div className="absolute inset-0 w-full h-full bg-black/40" />
        <div className="flex flex-col z-[5]">
          <span className="text-white text-5xl font-bold">Team Details</span>
          <div className="flex justify-center items-center mt-4">
            <HomeIcon className="w-5 h-5 text-white" />
            <span className="text-white font-bold">Home</span>
            <ChevronRight className="w-5 h-5 text-white" />
            <span className="text-white font-bold"> Team</span>
          </div>
        </div>
      </div>
      {/* Content */}

      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-6xl flex flex-col pt-20 px-6  md:px-10  min-[1200px]:px-0  ">
          {/* Team Member Description */}
          <div className="w-full flex flex-col gap-10 min-[996px]:flex-row justify-center items-center">
            <img
              src="/team-expert2.jpeg"
              alt=""
              className="min-[996px]:w-1/3 w-full h-[80%] rounded-xl"
            />
            <div className=" min-[996px]:w-2/3 w-full flex flex-col">
              <span className="text-4xl text-black font-bold">
                Lucas Breath
              </span>
              <span className="text-primary mt-4">SENIOR SEO ANALYST</span>
              <p className="text-slate-500 w-full mt-4">
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation is on the runway
                heading towards a streamlined cloud solution. User generated
                content in real-time will have multiple touchpoints for
                offshoring house in never fruit up. Pasture imagine my garrets.
              </p>
              <hr className="mt-4" />

              <p className="flex gap-2 mt-4">
                <span className="text-black font-bold">Email:</span>
                <span className="text-black">support@digital.com</span>
              </p>
              <p className="flex gap-2 mt-4">
                <span className="text-black font-bold">Phone:</span>
                <span className="text-black">+44-20-738-978</span>
              </p>
              <div className="flex w-full gap-4 justify-start items-center mt-4">
                <Button className="bg-black text-white hover:bg-primary rounded-full p-6">
                  Contact Me
                </Button>
                <div className="rounded-full p-3 bg-white team-details-share-shadow">
                  <Share2 className="w-4 h-4 text-primary" />
                </div>
                <div className="rounded-full p-3 bg-white team-details-share-shadow">
                  <FaFacebookF className="w-4 h-4 text-primary" />
                </div>
                <div className="rounded-full p-3 bg-white team-details-share-shadow">
                  <FaTwitter className="w-4 h-4 text-primary" />
                </div>
                <div className="rounded-full p-3 bg-white team-details-share-shadow">
                  <FaYoutube className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* Team Member Skills */}

          <div className="w-full flex flex-col gap-8  min-[996px]:gap-20 min-[996px]:flex-row mt-16 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full min-[996px]:w-1/2  gap-8 ">
              {/* Education */}
              <div className="w-full   flex flex-col justify-start gap-8">
                <span className="text-3xl font-bold text-black">Education</span>
                <ul className=" list-none border-l border-black flex flex-col pl-6 gap-6">
                  {/* Residential College */}
                  <li className="flex flex-col gap-4 relative">
                    <span className="absolute left-[-33px] top-[4px] h-4 w-4 border-2 border-primary rounded-full bg-white" />
                    <span className="text-xl font-bold text-black">
                      Residential College
                    </span>
                    <span className="text-black">BA Honours - Biology</span>
                    <span className="text-slate-500">2004 - 2008</span>
                  </li>
                  {/* University of Iowa */}
                  <li className="flex flex-col gap-4 relative">
                    <span className="absolute left-[-33px] top-[4px] h-4 w-4 border-2 border-primary rounded-full bg-white" />
                    <span className="text-xl font-bold text-black">
                      University of Iowa
                    </span>
                    <span className="text-black">
                      Master's degree - Economics
                    </span>
                    <span className="text-slate-500">2009 - 2012</span>
                  </li>
                </ul>
              </div>
              {/* Experience */}
              <div className="w-full   flex flex-col justify-start gap-8">
                <span className="text-3xl font-bold text-black">
                  Experience
                </span>
                <ul className=" list-none border-l border-black flex flex-col pl-6 gap-6">
                  {/* Product Manager */}
                  <li className="flex flex-col gap-4 relative">
                    <span className="absolute left-[-33px] top-[4px] h-4 w-4 border-2 border-primary rounded-full bg-white" />
                    <span className="text-xl font-bold text-black">
                      Product Manager
                    </span>
                    <span className="text-black">Pran RFL Company</span>
                    <span className="text-slate-500">31 Aug, 2013</span>
                  </li>
                  {/* Senior Marketing */}
                  <li className="flex flex-col gap-4 relative">
                    <span className="absolute left-[-33px] top-[4px] h-4 w-4 border-2 border-primary rounded-full bg-white" />
                    <span className="text-xl font-bold text-black">
                      Senior Marketing
                    </span>
                    <span className="text-black">
                      Masuring Technology Company
                    </span>
                    <span className="text-slate-500">12 Dec 2018</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Personal Skills */}
            <div className=" w-full min-[996px]:w-1/2 flex flex-col justify-start gap-8">
              <span className="text-3xl font-bold text-black">
                Personal Skills
              </span>

              <div className="w-[89%] flex flex-col gap-4">
                <div className="w-full flex justify-between text-black font-bold">
                  <span>Programming Language</span>
                  <span>89%</span>
                </div>
                <span className="bg-gradient-to-r from-blue-500 to-primary w-full h-2 rounded-full" />
              </div>

              <div className="w-[95%] flex flex-col gap-4">
                <div className="w-full flex justify-between text-black font-bold">
                  <span>Backend Development</span>
                  <span>95%</span>
                </div>
                <span className="bg-gradient-to-r from-blue-500 to-primary w-full h-2 rounded-full" />
              </div>

              <div className="w-[89%] flex flex-col gap-4">
                <div className="w-full flex justify-between text-black font-bold">
                  <span>Product Design</span>
                  <span>80%</span>
                </div>
                <span className="bg-gradient-to-r from-blue-500 to-primary w-full h-2 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
