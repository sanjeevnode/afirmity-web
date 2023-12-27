import { Button } from "../../ui/button";

const RequestCall = () => {
  return (
    <div className="w-full flex justify-center items-center mt-16 min-h-[50vh] relative">
      <img
        src="/background1.jpeg"
        alt=""
        className=" absolute w-full h-full grayscale object-cover filter brightness-100"
      />
      <div className="absolute w-full h-full bg-[#4108089d]"></div>
      <div
        className="w-full  max-w-6xl  px-6  md:px-10  min-[1200px]:px-0  py-20 z-10 flex gap-8 
      md:flex-row md:justify-between items-center flex-col justify-center "
      >
        <div className="w-full min-[996px]:w-1/2 flex flex-col justify-center items-center">
          <span className="text-2xl md:text-4xl text-white font-bold w-full text-center  min-[996px]:w-[90%]">
            Looking for a First-Class Business Consultant?
          </span>

          <Button className="rounded-full bg-white text-black text-[20px]  w-fit md:px-16 md:py-7 px-8 py-4  mt-6 md:mt-10 hover:text-white">
            Request a Call
          </Button>
        </div>

        <div className=" max-md:w-full  md:hidden min-[996px]:flex w-1/2  flex-col md:border-l  pl-6">
          <div className="flex flex-col md:flex-row  gap-8 justify-center items-center">
            <img src="/handshake.png" alt="" className="w-24 h-24" />

            <div className="flex flex-col justify-center md:items-start items-center">
              <span className="text-6xl text-white">500+</span>
              <span className="text-white mt-3">
                Business advices given over 30 years
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 justify-center   items-center mt-6">
            <img src="/employee.png" alt="" className="w-24 h-24" />

            <div className="flex flex-col justify-center md:items-start items-center">
              <span className="text-6xl text-white">30+</span>
              <span className="text-white mt-3">
                Business Excellence awards achieved
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestCall;
