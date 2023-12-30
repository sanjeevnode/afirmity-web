import { latestProjectList } from "@/lib/utils";
import { ChevronRight, HomeIcon } from "lucide-react";

const LatestProjects = () => {
  const leftLatestProjects = latestProjectList.slice(
    0,
    latestProjectList.length / 2
  );
  const rightLatestProjects = latestProjectList.slice(
    latestProjectList.length / 2
  );
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
          <span className="text-white text-5xl font-bold">Latest Projects</span>
          <div className="flex justify-center items-center mt-4">
            <HomeIcon className="w-5 h-5 text-white" />
            <span className="text-white font-bold">Home</span>
            <ChevronRight className="w-5 h-5 text-white" />
            <span className="text-white font-bold">Projects</span>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-6xl flex flex-col py-20 px-6  md:px-10  min-[1200px]:px-0  ">
          {/* grid */}

          <div className=" w-full flex flex-col md:flex-row gap-10">
            {/* Left side */}

            <div className="w-full md:w-1/2 flex flex-col gap-10 justify-center items-center">
              {leftLatestProjects.map((project, index) => {
                return (
                  <DisplayProject
                    key={index}
                    project={project}
                    index={index}
                    side="left"
                  />
                );
              })}
            </div>

            {/* Right side */}

            <div className="w-full md:w-1/2 flex flex-col gap-8 justify-center items-center">
              {rightLatestProjects.map((project, index) => {
                return (
                  <DisplayProject
                    key={index}
                    project={project}
                    index={index}
                    side="right"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProjects;

const DisplayProject = ({
  project,
  index,
  side,
}: {
  project: (typeof latestProjectList)[0];
  index: number;
  side: "left" | "right";
}) => {
  return (
    <div
      className={`w-full rounded-3xl overflow-hidden group cursor-pointer  relative ${
        side === "left"
          ? (index + 1) % 2 == 0
            ? "h-[330px]  md:h-[450px]"
            : "h-[495px]  md:h-[675px]"
          : (index + 1) % 2 == 0
          ? "h-[495px]  md:h-[675px]"
          : "h-[330px]  md:h-[450px]"
      } `}
    >
      <img
        src={project.img}
        alt=""
        className="absolute group-hover:scale-125 transition-all duration-500 aspect-video  w-full h-full"
      />
      <div className="absolute w-full h-full z-10 flex p-8 justify-end items-end">
        <div className="hidden group-hover:flex shadow-sm flex-col  w-full p-8 rounded-3xl bg-white  gap-2">
          <span className="text-slate-500">{project.category}</span>
          <span className="text-black font-bold  md:text-xl hover:text-primary">
            {project.title}
          </span>
        </div>
      </div>
    </div>
  );
};
