import { PiCertificate } from "react-icons/pi";
import { BsGlobe2 } from "react-icons/bs";
const Content = () => {
  return (
    <>
      {" "}
      <div className="w-full flex justify-center items-center mt-16 ">
        <div className="w-full  max-w-6xl px-6  md:px-10 min-[1200px]:px-0">
          {/* Feel Valued and rewarded */}

          <div className="w-full flex max-[996px]:flex-col max-[996px]:gap-12  relative ">
            <div className=" flex flex-col gap-8 w-full min-[996px]:w-1/2  justify-center ">
              <span className=" text-2xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                FEEL VALUED & REWARDED
              </span>
              <h1 className="text-black font-bold text-4xl">
                Finance Consulting for Challenging Times
              </h1>
              <p className="text-slate-500 text-sm leading-7 pr-4">
                We work to understand your issues and are driven to ask better
                questions in the pursuit of making work. Me contained explained
                my education. Vulgar as hearts by garret. Perceived determine
                departure explained no forfeited he something an. Contrasted
                dissimilar get joy you instrument out reasonably. Again keep.
              </p>
              <div className="flex gap-6">
                <div className="flex flex-col gap-2 pr-6 border-r">
                  <span className="text-2xl font-bold ">Richard Garrett</span>
                  <span className="font-semibold text-slate-500">
                    {" "}
                    CEO & Founder
                  </span>
                </div>
                <img src="/signature.png" alt="" className="w-[40%]" />
              </div>
            </div>

            <div className="w-full min-[996px]:w-1/2  flex max-[996px]:flex-col max-[996px]:gap-6    min-[996px]:justify-end mb-16">
              <img
                src="/feel-reward.jpeg"
                alt=""
                className=" w-full min-[996px]:w-[80%] object-cover"
              />

              <div className="min-[996px]:absolute bottom-0  left-[50%] min-[996px]: p-10 flex flex-col md:flex-row md:justify-between  min-[996px]:flex-col  bg-black">
                <div className="flex justify-center items-center gap-6 max-md:border-b min-[996px]:border-b  border-slate-400 py-4">
                  <PiCertificate className="w-12 h-12 text-red-500" />
                  <div className="flex flex-col">
                    <span className="text-6xl text-white">98%</span>
                    <span className="font-bold text-slate-400">
                      Consulting Success
                    </span>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-6  border-slate-400 py-4  md:border-none min-[996px]:border-b  ">
                  <BsGlobe2 className="w-12 h-12 text-red-500" />
                  <div className="flex flex-col">
                    <span className="text-6xl text-white">120+</span>
                    <span className="font-bold text-slate-400">
                      Worldwide Client
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* What do we do */}
      <div className="w-full flex justify-center items-center mt-16 bg-[#f7f7f7]">
        <div className="w-full max-w-6xl flex flex-col min-[996px]:flex-row gap-20  py-20 px-6  md:px-10 min-[1200px]:px-0  ">
          <div className=" w-full lg:w-2/5 card-shadow flex flex-col gap-6 p-10 bg-white">
            <span className=" w-fit text-2xl font-bold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
              WHAT WE DO
            </span>
            <h1 className="text-black font-bold text-4xl">
              Excellent service and support for you
            </h1>

            <div className="w-full flex flex-col gap-6 py-8">
              <div className="bg-black w-full rounded-md px-8 py-2 flex justify-between items-center">
                <img src="/portfolio.png" alt="" className="w-12 h-12" />

                <span className="text-white font-bold">
                  Consulting Services
                </span>
              </div>

              <div className="border-2 w-full rounded-md px-8 py-2 flex justify-between items-center">
                <img src="/megaphone.png" alt="" className="w-12 h-12" />

                <span className="text-black font-bold">Marketing Services</span>
              </div>

              <div className="border-2 w-full rounded-md px-8 py-2 flex justify-between items-center">
                <img src="/save-money.png" alt="" className="w-12 h-12" />

                <span className="text-black font-bold">Banking Services</span>
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-3/5 max-md:px-6">
            <div className=" shadow-sm max-[996px]:bg-white p-8 flex flex-col gap-4  ">
              <img src="/save-money-hand.png" alt="" className="w-14 h-14" />

              <span className="text-[20px] text-black font-bold hover:text-red-500 cursor-pointer">
                Investment Marketing
              </span>
              <p className="text-gray-500 text-sm">
                Prevailed always tolerably discourse and loser assurance
                creatively coin applauded more uncommonly. Him everything
                trouble
              </p>
            </div>

            <div className=" shadow-sm max-[996px]:bg-white p-8 flex flex-col gap-4  ">
              <img src="/career.png" alt="" className="w-14 h-14" />

              <span className="text-[20px] text-black font-bold hover:text-red-500 cursor-pointer">
                Markets Research
              </span>
              <p className="text-gray-500 text-sm">
                Prevailed always tolerably discourse and loser assurance
                creatively coin applauded more uncommonly. Him everything
                trouble
              </p>
            </div>

            <div className=" shadow-sm max-[996px]:bg-white p-8 flex flex-col gap-4  ">
              <img src="/group.png" alt="" className="w-14 h-14" />

              <span className="text-[20px] text-black font-bold hover:text-red-500 cursor-pointer">
                Consultancy & Advice
              </span>
              <p className="text-gray-500 text-sm">
                Prevailed always tolerably discourse and loser assurance
                creatively coin applauded more uncommonly. Him everything
                trouble
              </p>
            </div>

            <div className=" shadow-sm max-[996px]:bg-white p-8 flex flex-col gap-4  ">
              <img src="/business.png" alt="" className="w-14 h-14" />

              <span className="text-[20px] text-black font-bold hover:text-red-500 cursor-pointer">
                Business Planning
              </span>
              <p className="text-gray-500 text-sm">
                Prevailed always tolerably discourse and loser assurance
                creatively coin applauded more uncommonly. Him everything
                trouble
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Our Services */}
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
                Nanotechnology immersion along the information highway will
                close loop.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Information */}
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
      {/* Partners In World */}
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
    </>
  );
};

export default Content;
