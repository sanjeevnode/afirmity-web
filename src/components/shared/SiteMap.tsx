import {
  BookText,
  ChevronRight,
  File,
  FileText,
  FolderDot,
  HomeIcon,
  Phone,
  ScrollText,
} from "lucide-react";
import { GrServices, GrDocumentConfig } from "react-icons/gr";
import { Link } from "react-router-dom";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";
import { BsPatchQuestion } from "react-icons/bs";
import { PiPathFill } from "react-icons/pi";

const SiteMap = () => {
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
          <span className="text-white text-5xl font-bold">Sitemap</span>
          <div className="flex justify-center items-center mt-4">
            <HomeIcon className="w-5 h-5 text-white" />
            <span className="text-white font-bold">Home</span>
            <ChevronRight className="w-5 h-5 text-white" />
            <span className="text-white font-bold"> Sitemap</span>
          </div>
        </div>
      </div>
      {/* start */}
      <div className="w-full flex justify-center items-center ">
        <div className="w-full max-w-6xl flex flex-col min-[996px]:py-20 py-16  px-6  md:px-10  min-[1200px]:px-0 ">
          {/* content */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 min-[996px]:grid-cols-4 gap-8 justify-items-center ">
            <div className="w-full items-center flex flex-col gap-6 ">
              <Link
                to="/"
                className="w-full flex gap-4 justify-center items-center  border border-black  rounded-lg  py-3 group cursor-pointer "
              >
                <HomeIcon className="w-6 h-6 text-black group-hover:text-primary" />
                <span className="text-black font-bold group-hover:text-primary">
                  HOME
                </span>
              </Link>
              <Link
                to="/blog"
                className="w-full flex gap-4 justify-center items-center  border border-black  rounded-lg  py-3 group cursor-pointer "
              >
                <ScrollText className="w-6 h-6 text-black group-hover:text-primary" />
                <span className="text-black font-bold group-hover:text-primary">
                  BLOG
                </span>
              </Link>
              <Link
                to="/contact"
                className="w-full flex gap-4 justify-center items-center  border border-black  rounded-lg  py-3 group cursor-pointer "
              >
                <Phone className="w-6 h-6 text-black group-hover:text-primary" />
                <span className="text-black font-bold group-hover:text-primary">
                  CONTACT
                </span>
              </Link>
            </div>
            {/* second column */}
            <div className="w-full items-center flex flex-col  ">
              <Link
                to="/projects/latest-projects"
                className="w-full flex gap-4 justify-center items-center  border border-black  rounded-lg  py-3 group cursor-pointer "
              >
                <FolderDot className="w-6 h-6 text-black group-hover:text-primary" />
                <span className="text-black font-bold group-hover:text-primary">
                  PROJECTS
                </span>
              </Link>
              {/* sub links */}
              <div className="w-full flex flex-col pl-4">
                {/* Latest Projects */}
                <div className="w-full border-l-2 border-black py-6 flex gap-6 items-center justify-center">
                  <div className="flex justify-center items-center w-full">
                    <span className="w-6 h-[2px] bg-black"></span>
                    <Link
                      to="/projects/latest-projects"
                      className="w-full flex gap-2 justify-start items-center  group cursor-pointer "
                    >
                      <File className="w-6 h-6 text-black group-hover:text-primary" />
                      <span className="text-black font-bold group-hover:text-primary">
                        Latest Projects
                      </span>
                    </Link>
                  </div>
                </div>
                {/* Project details */}
                <div className="w-full border-l-2 border-black py-4 flex gap-4 items-center justify-center ">
                  <div className="flex justify-center items-center w-full">
                    <span className="w-6 h-[2px] bg-black"></span>
                    <Link
                      to="/projects/project-details"
                      className="w-full flex gap-2 justify-start items-center  group cursor-pointer "
                    >
                      <FileText className="w-6 h-6 text-black group-hover:text-primary" />
                      <span className="text-black font-bold group-hover:text-primary">
                        Project Details
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Third column */}
            <div className="w-full items-center flex flex-col  ">
              <Link
                to="/services/our-services"
                className="w-full flex gap-4 justify-center items-center  border border-black  rounded-lg  py-3 group cursor-pointer "
              >
                <GrServices className="w-6 h-6 text-black group-hover:text-primary" />
                <span className="text-black font-bold group-hover:text-primary">
                  SERVICES
                </span>
              </Link>
              {/* sub links */}
              <div className="w-full flex flex-col pl-4">
                {/*Our Services */}
                <div className="w-full border-l-2 border-black py-6 flex gap-6 items-center justify-center">
                  <div className="flex justify-center items-center w-full">
                    <span className="w-6 h-[2px] bg-black"></span>
                    <Link
                      to="/services/our-services"
                      className="w-full flex gap-2 justify-start items-center  group cursor-pointer "
                    >
                      <MdMiscellaneousServices className="w-6 h-6 text-black group-hover:text-primary" />
                      <span className="text-black font-bold group-hover:text-primary">
                        Our Services
                      </span>
                    </Link>
                  </div>
                </div>
                {/* Services details */}
                <div className="w-full border-l-2 border-black py-4 flex gap-4 items-center justify-center ">
                  <div className="flex justify-center items-center w-full">
                    <span className="w-6 h-[2px] bg-black"></span>
                    <Link
                      to="/services/service-details"
                      className="w-full flex gap-2 justify-start items-center  group cursor-pointer "
                    >
                      <GrDocumentConfig className="w-6 h-6 text-black group-hover:text-primary" />
                      <span className="text-black font-bold group-hover:text-primary">
                        Service Details
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Fourth Column */}
            <div className="w-full items-center flex flex-col  ">
              <div className="w-full flex gap-4 justify-center items-center  border border-black  rounded-lg  py-3 group cursor-pointer ">
                <BookText className="w-6 h-6 text-black group-hover:text-primary" />
                <span className="text-black font-bold group-hover:text-primary">
                  PAGES
                </span>
              </div>
              {/* sub links */}
              <div className="w-full flex flex-col pl-4">
                {/* About Us */}
                <div className="w-full border-l-2 border-black py-6 flex gap-6 items-center justify-center">
                  <div className="flex justify-center items-center w-full">
                    <span className="w-6 h-[2px] bg-black"></span>
                    <Link
                      to="/pages/about"
                      className="w-full flex gap-2 justify-start items-center  group cursor-pointer "
                    >
                      <IoIosInformationCircleOutline className="w-6 h-6 text-black group-hover:text-primary" />
                      <span className="text-black font-bold group-hover:text-primary">
                        About Us
                      </span>
                    </Link>
                  </div>
                </div>
                {/* Team*/}
                <div className="w-full border-l-2 border-black py-4 flex gap-4 items-center justify-center ">
                  <div className="flex justify-center items-center w-full">
                    <span className="w-6 h-[2px] bg-black"></span>
                    <Link
                      to="/pages/team"
                      className="w-full flex gap-2 justify-start items-center  group cursor-pointer "
                    >
                      <IoPeopleSharp className="w-6 h-6 text-black group-hover:text-primary" />
                      <span className="text-black font-bold group-hover:text-primary">
                        Team
                      </span>
                    </Link>
                  </div>
                </div>
                {/* Team Details */}
                <div className="w-full border-l-2 border-black py-4 flex gap-4 items-center justify-center ">
                  <div className="flex justify-center items-center w-full">
                    <span className="w-6 h-[2px] bg-black"></span>
                    <Link
                      to="/pages/team-details"
                      className="w-full flex gap-2 justify-start items-center  group cursor-pointer "
                    >
                      <RiTeamLine className="w-6 h-6 text-black group-hover:text-primary" />
                      <span className="text-black font-bold group-hover:text-primary">
                        Team Details
                      </span>
                    </Link>
                  </div>
                </div>
                {/* FAQ */}
                <div className="w-full border-l-2 border-black py-4 flex gap-4 items-center justify-center ">
                  <div className="flex justify-center items-center w-full">
                    <span className="w-6 h-[2px] bg-black"></span>
                    <Link
                      to="/pages/faq"
                      className="w-full flex gap-2 justify-start items-center  group cursor-pointer "
                    >
                      <BsPatchQuestion className="w-6 h-6 text-black group-hover:text-primary" />
                      <span className="text-black font-bold group-hover:text-primary">
                        FAQ
                      </span>
                    </Link>
                  </div>
                </div>

                {/* sitemap */}
                <div className="w-full border-l-2 border-black py-4 flex gap-4 items-center justify-center ">
                  <div className="flex justify-center items-center w-full">
                    <span className="w-6 h-[2px] bg-black"></span>
                    <Link
                      to="/sitemap"
                      className="w-full flex gap-2 justify-start items-center  group cursor-pointer "
                    >
                      <PiPathFill className="w-6 h-6 text-black group-hover:text-primary" />
                      <span className="text-black font-bold group-hover:text-primary">
                        Sitemap
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteMap;
