import HeroImage from "../../../public/Hero.jpg";

const Hero = () => {
  return (
    <div
      className="w-full h-[420px] md:h-screen max-md:pt-10  bg-cover bg-center flex justify-center items-center "
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="max-w-6xl  flex   min-[1200px]:justify-end px-6 md:px-10  min-[1200px]:px-0 justify-start items-center h-full  w-full">
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <span className="md:text-[20px] text-[18px]  text-white">
            Meet Consulting
          </span>
          <span className="md:text-6xl  text-3xl text-white font-bold">
            Financial Analysis Developing Meeting.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
