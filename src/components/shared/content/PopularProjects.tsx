import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../ui/button";
import { useState } from "react";

interface IProject {
  type: string;
  name: string;
  description: string;
  image: string;
}

type TProjectData = IProject[];

interface ISliderItem {
  item: IProject;
  currentIndex: number;
}

const projectData: TProjectData = [
  {
    type: "Strategy",
    name: "Digital Business Planning",
    description:
      " Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son.",
    image: "/project1.jpeg",
  },
  {
    type: "Patnership",
    name: "Business Program Management",
    description:
      " Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son.",
    image: "/project2.jpeg",
  },
];

const PopularProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % projectData.length);
  };
  const handlePrev = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? projectData.length - 1 : currentIndex - 1
    );
  };

  return (
    <div className="w-full flex justify-center  mt-16 relative min-h-screen">
      <div className="inset-0  absolute w-full h-1/2 bg-dark "></div>

      <div className="w-full  max-w-6xl pt-20 px-6  md:px-10  min-[1200px]:px-0 flex flex-col  z-10">
        <div className="w-full flex  justify-between ">
          <div className="flex flex-col  w-full  min-[996px]:w-1/3 ">
            <span className="w-fit text-[20px]  bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
              POPULAR PROJECTS
            </span>
            <span className="text-4xl text-white font-bold mt-4">
              Our most recent Completed Projects
            </span>
          </div>
          <div className=" hidden min-[996px]:block w-1/3  relative">
            <div className="flex justify-between items-center absolute right-0 bottom-0   gap-8">
              <Button
                onClick={handlePrev}
                className=" rounded-full p-2 text-white hover:bg-primary/90 "
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <span className="text-2xl text-white font-bold px-2">
                {" "}
                {currentIndex + 1} / {projectData.length}
              </span>
              <Button
                onClick={handleNext}
                className=" rounded-full p-2 text-white hover:bg-primary/90 r"
              >
                <ChevronRight className="w-6 h-6 " />
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full min-h-[80vh] relative flex overflow-hidden   mt-10 ">
          {projectData.map((item) => {
            return (
              <SliderItem
                item={item}
                currentIndex={currentIndex}
                key={item.name}
              />
            );
          })}
        </div>
        <div className="min-[996px]:hidden flex gap-8 justify-start items-center mt-6">
          <Button onClick={handlePrev} className="rounded-full p-2">
            <ChevronLeft className="w-7 h-7 text-white" />
          </Button>
          <span className="text-2xl text-black font-bold">
            {currentIndex + 1} / {projectData.length}
          </span>

          <Button onClick={handleNext} className="rounded-full p-2">
            <ChevronRight className="w-7 h-7 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PopularProjects;

const SliderItem = ({ item, currentIndex }: ISliderItem) => {
  return (
    <div
      id="projects"
      className={`min-w-full min-h-full relative flex flex-col ${
        currentIndex !== 0 && "transition duration-500 ease-in-out"
      }`}
      style={{
        transform: `translateX(-${currentIndex * 100}%)`,
      }}
    >
      <div className="w-full h-1/2 min-[996px]:w-[55%] min-[996px]:h-[70%] min-[996px]:absolute top-0 left-0">
        <img src={item.image} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="w-full h-1/2 min-[996px]:w-[50%] min-[996px]:h-[70%] bottom-0 right-0 min-[996px]:absolute  border flex flex-col bg-white p-5  md:p-10">
        <span className="text-primary text-xl">{item.type}</span>
        <span className=" text-xl md:text-3xl font-bold text-black mt-2 md:mt-8">
          {item.name}
        </span>

        <p className="w-full leading-6 text-slate-500 mt-2 md:mt-8 text-sm">
          {item.description}
        </p>

        <Button
          variant="outline"
          className="md:text-xl text-black font-bold mt-2 md:mt-8 w-fit hover:bg-primary/90 hover:text-white"
        >
          View Project
        </Button>
      </div>
    </div>
  );
};
