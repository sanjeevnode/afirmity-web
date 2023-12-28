import { PiCertificate } from "react-icons/pi";
import { BsGlobe2 } from "react-icons/bs";
const SectionOne = () => {
  return (
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
              questions in the pursuit of making work. Me contained explained my
              education. Vulgar as hearts by garret. Perceived determine
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

            <div className="min-[996px]:absolute bottom-0  left-[50%] min-[996px]: p-8 flex flex-col md:flex-row md:justify-between  min-[996px]:flex-col  bg-black">
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
  );
};

export default SectionOne;
