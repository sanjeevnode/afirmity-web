import { ChevronRight, HomeIcon } from "lucide-react";
import SectionTwo from "../shared/content/SectionTwo";
import PartnersInWorld from "../shared/content/PartnersInWorld";
import MeetOurExperts from "../shared/content/MeetOurExperts";
import RequestCall from "../shared/content/RequestCall";
import OurProcess from "../shared/content/OurProcess";
const OurServices = () => {
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
          <span className="text-white text-5xl font-bold">Our Services</span>
          <div className="flex justify-center items-center mt-4">
            <HomeIcon className="w-5 h-5 text-white" />
            <span className="text-white font-bold">Home</span>
            <ChevronRight className="w-5 h-5 text-white" />
            <span className="text-white font-bold">Services</span>
          </div>
        </div>
      </div>
      {/* What we do */}
      <SectionTwo />
      {/* our process */}
      <OurProcess />
      {/* Partners in the world */}
      <PartnersInWorld />
      {/* Meet our experts */}
      <MeetOurExperts />
      {/* Request a call */}
      <RequestCall />
      <div className="w-full py-10"></div>
    </div>
  );
};

export default OurServices;
