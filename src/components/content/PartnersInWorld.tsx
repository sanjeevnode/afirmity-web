const PartnersInWorld = () => {
  return (
    <div className="w-full flex justify-center items-center mt-16">
      <div className="w-full  max-w-6xl px-6  md:px-10 min-[1200px]:px-0  flex flex-col min-[996px]:flex-row gap-10">
        <div className="min-[996px]:w-1/3 w-full flex justify-center items-center flex-col  relative ">
          <div
            style={{ backgroundImage: `url(/map.png)` }}
            className="w-full bg-no-repeat bg-center text-center"
          >
            <span
              className="text-[250px] text-transparent bg-clip-text bg-cover bg-center font-bold"
              style={{ backgroundImage: `url(/text-image.jpeg)` }}
            >
              80
            </span>
          </div>
          <span className="w-full text-2xl font-bold absolute bottom-0 text-center">
            Partners in world wide
          </span>
        </div>
        <div className="min-[996px]:w-2/3 w-full flex justify-center items-center ">
          <div className="grid md:grid-cols-3 grid-cols-2 ">
            <img
              src="/walmart.png"
              alt=""
              className="p-6  outline outline-gray-200  min-[996px]:border-r min-[996px]:outline-none w-[150px] h-[90px]"
            />
            <img
              src="/slack.png"
              alt=""
              className="p-6  outline outline-gray-200  min-[996px]:border-r min-[996px]:outline-none w-[150px] h-[90px]"
            />
            <img
              src="/qlik.png"
              alt=""
              className="p-6  outline outline-gray-200  min-[996px]:outline-none w-[150px] h-[90px]"
            />
            <img
              src="/paysafe.png"
              alt=""
              className="p-6  outline outline-gray-200  min-[996px]:border-r min-[996px]:outline-none w-[150px] h-[90px]"
            />
            <img
              src="/mollie.png"
              alt=""
              className="p-6  outline outline-gray-200  min-[996px]:border-r min-[996px]:outline-none w-[150px] h-[90px]"
            />
            <img
              src="/envanto.png"
              alt=""
              className="p-6  outline outline-gray-200   min-[996px]:outline-none w-[150px] h-[90px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersInWorld;
