import { ChevronRight, HomeIcon } from "lucide-react";
import SectionOne from "../shared/content/SectionOne";
import OurServices from "../shared/content/OurServices";
import PartnersInWorld from "../shared/content/PartnersInWorld";
import MeetOurExperts from "../shared/content/MeetOurExperts";
import Reviews from "../shared/content/Reviews";

const AboutUs = () => {
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
          <span className="text-white text-5xl font-bold">About Us</span>
          <div className="flex justify-center items-center mt-4">
            <HomeIcon className="w-5 h-5 text-white" />
            <span className="text-white font-bold">Home</span>
            <ChevronRight className="w-5 h-5 text-white" />
            <span className="text-white font-bold"> About</span>
          </div>
        </div>
      </div>
      {/* Content */}
      {/* Section one */}
      <SectionOne />

      {/* Our processes */}
      <OurServices />

      {/* Partners In world */}
      <PartnersInWorld />

      {/* Team Members */}
      <MeetOurExperts />

      {/* Reviews */}

      <Reviews />
    </div>
  );
};

export default AboutUs;
