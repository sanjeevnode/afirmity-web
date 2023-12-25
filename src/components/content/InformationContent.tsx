const InformationContent = () => {
  return (
    <div className="w-full h-[80vh]  min-[996px]:h-[85vh] flex justify-center items-center mt-8  relative -z-30 bg-cover overflow-hidden ">
      <div
        className="absolute w-[60%] right-0 top-0 h-full bg-cover bg-center -z-20"
        style={{ backgroundImage: `url(/background1.jpeg)` }}
      ></div>
      <div className="absolute min-[996px]:w-[60%] w-full transform min-[996px]:-skew-x-12 h-full bg-dark   min-[996px]:left-[-8%] top-0 -z-10"></div>
      <div className=" w-full h-full  max-w-6xl flex flex-col px-6  md:px-10  min-[1200px]:px-0  justify-center">
        <div className="flex min-[996px]:w-1/2 w-full  flex-col">
          <span className=" text-3xl md:text-4xl text-white ">
            Be at the forefront of the new innovation
          </span>
          <div className="text-white md:border-l-8 md:pl-8 border-primary flex flex-col gap-8 mt-12">
            <div className="flex  flex-col gap-4">
              <span className="text-2xl text-white font-bold">
                Best Business Consulting
              </span>
              <p className="text-gray-300 w-[80%]">
                Seeing rather her you not esteem men settle genius excuse.
                International Deal say over you age from. Comparison new ham
                melancholy son themselves.
              </p>
            </div>
            <div className="flex  flex-col gap-4">
              <span className="text-2xl text-white font-bold">
                24/7 Customer Support
              </span>
              <p className="text-gray-300 w-[80%]">
                Tohether rather her you not esteem men settle genius excuse.
                Deal say over you age from. Comparison new ham melancholy son.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationContent;
