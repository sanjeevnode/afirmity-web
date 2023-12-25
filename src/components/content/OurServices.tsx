const OurServices = () => {
  return (
    <div className="w-full flex justify-center items-center mt-16">
      <div className="w-full max-w-6xl flex flex-col px-6  md:px-10  min-[1200px]:px-0  py-20">
        <div className="flex w-full flex-col justify-center items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
            OUR PROCESS
          </span>
          <span className="mt-4 md:text-4xl text-4xl font-bold">
            Steps of Recruitment
          </span>
          <span className="mt-4 md:text-4xl text-4xl font-bold">
            Work Process
          </span>
          <div className="flex gap-4 mt-4">
            <span className="w-4 bg-red-500 h-[2px]"></span>
            <span className="w-[80px] bg-red-500 h-[2px]"></span>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 min-[996px]:grid-cols-3  gap-8 justify-items-center mt-10">
          <div className="px-4 flex flex-col justify-center items-center gap-6">
            <div
              className=" w-[300px] h-[300px] rounded-full bg-cover bg-center overflow-hidden flex justify-center items-end"
              style={{ backgroundImage: `url(/our-process1.jpeg)` }}
            >
              <span className="text-[80px] font-bold text-stroke">01</span>
            </div>
            <span className="text-2xl font-bold w-full text-center">
              Differentiate from the competition
            </span>
            <span className="w-full border"></span>
            <span className="w-full text-slate-500  text-center">
              Capitalize on low hanging fruit to identify a ballpark value
              added.
            </span>
          </div>
          <div className="px-4 flex flex-col justify-center items-center gap-6">
            <div
              className=" w-[300px] h-[300px] rounded-full bg-cover bg-center overflow-hidden flex justify-center items-end"
              style={{ backgroundImage: `url(/our-process2.jpeg)` }}
            >
              <span className="text-[80px] font-bold text-stroke">02</span>
            </div>
            <span className="text-2xl font-bold w-full text-center">
              Target the right people effectively
            </span>
            <span className="w-full border"></span>
            <span className="w-full text-slate-500  text-center">
              Override the digital divide with additional clickthroughs from
              DevOps.
            </span>
          </div>
          <div className="px-4 flex flex-col justify-center items-center gap-6">
            <div
              className=" w-[300px] h-[300px] rounded-full bg-cover bg-center overflow-hidden flex justify-center items-end"
              style={{ backgroundImage: `url(/our-process3.jpeg)` }}
            >
              <span className="text-[80px] font-bold text-stroke">03</span>
            </div>
            <span className="text-2xl font-bold w-full text-center">
              Communicate your story consistently
            </span>
            <span className="w-full border"></span>
            <span className="w-full text-slate-500  text-center">
              Nanotechnology immersion along the information highway will close
              loop.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
