import { ChevronRight, HomeIcon } from "lucide-react";

const Error = () => {
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
          <span className="text-white text-5xl font-bold">Error</span>
          <div className="flex justify-center items-center mt-4">
            <HomeIcon className="w-5 h-5 text-white" />
            <span className="text-white font-bold">Home</span>
            <ChevronRight className="w-5 h-5 text-white" />
            <span className="text-white font-bold"> Error</span>
          </div>
        </div>
      </div>
      {/* Content */}

      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-6xl flex flex-col pt-20 px-6  md:px-10  min-[1200px]:px-0 justify-center items-center ">
          <span className="text-[120px] font-bold text-slate-400">404</span>
        </div>
      </div>
    </div>
  );
};

export default Error;
