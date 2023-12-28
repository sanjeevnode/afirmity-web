import { ChevronRight, HomeIcon, SendIcon } from "lucide-react";
import { FaMapMarkerAlt, FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import { Button } from "../ui/button";

const ContactUs = () => {
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
          <span className="text-white  text-5xl font-bold">Contact Us</span>
          <div className="flex justify-center items-center mt-4">
            <HomeIcon className="w-5 h-5 text-white" />
            <span className="text-white  font-bold">Home</span>
            <ChevronRight className="w-5 h-5 text-white" />
            <span className="text-white font-bold"> Contact</span>
          </div>
        </div>
      </div>
      {/* Content */}

      <div className="w-full flex justify-center items-center ">
        <div className="w-full max-w-6xl flex flex-col min-[996px]:py-24 py-16  px-6  md:px-10  min-[1200px]:px-0 ">
          {/* contact */}
          <div className="w-full flex flex-col min-[996px]:flex-row gap-9 justify-center items-center">
            {/* contact inforation */}
            <div className="w-full min-[996px]:w-1/2 flex flex-col items-start">
              <span className="text-3xl text-black font-bold">
                Contact Information
              </span>
              <span className="w-full text-slate-500 mt-3 pr-6">
                Plan upon yet way get cold spot its week. Almost do am or limits
                hearts. Resolve parties but why she shewing.
              </span>
              <div className="flex flex-col gap-8 mt-10 items-start">
                {/* Hotline */}
                <div className="flex gap-4 justify-center items-center">
                  <div className="p-5 rounded-full bg-primary">
                    <FaPhoneAlt className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col gap-1 justify-center items-start">
                    <span className="text-xl font-bold font-sans text-black">
                      Hotline
                    </span>
                    <span className="text-black">+431456787</span>
                  </div>
                </div>

                {/* Loacation */}
                <div className="flex gap-4 justify-center items-center">
                  <div className="p-5 rounded-full bg-blue-500">
                    <FaMapMarkerAlt className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col gap-1 justify-center items-start">
                    <span className="text-xl font-bold font-sans text-black">
                      Our Location
                    </span>
                    <span className="text-slate-500">
                      55 Main Street, The Grand Avenue 2nd Block,
                      <br /> New York City
                    </span>
                  </div>
                </div>

                {/* Mail */}
                <div className="flex gap-4 justify-center items-center">
                  <div className="p-5 rounded-full bg-black">
                    <FaMailBulk className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col gap-1 justify-center items-start">
                    <span className="text-xl font-bold font-sans text-black">
                      Official Email
                    </span>
                    <span className="text-black">info@agrul.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}

            <div className="w-full min-[996px]:w-1/2 flex flex-col items-start contact-form-shadow  rounded-md p-16">
              <span className="text-xl  bg-gradient-to-r from-blue-500 to-primary bg-clip-text text-transparent">
                HAVE QUESTIONS ?
              </span>
              <span className="text-black font-bold text-4xl mt-3">
                Send us a Massage
              </span>

              <form className="w-full flex-col flex gap-4 mt-4">
                <input
                  type="text"
                  className="w-full outline-none py-4  border-b-2 border-slate-300  focus:border-blue-400"
                  placeholder="Name"
                  required
                />
                <div className="w-full grid grid-cols-2 gap-5">
                  <input
                    type="email"
                    className="w-full outline-none py-4  border-b-2 border-slate-300  focus:border-blue-400"
                    placeholder="Email*"
                    required
                  />
                  <input
                    type="text"
                    className="w-full outline-none py-4  border-b-2 border-slate-300  focus:border-blue-400"
                    placeholder="Phone"
                  />
                </div>

                <textarea
                  className="w-full outline-none py-4 resize-none overflow-y-auto border-b-2 border-slate-300  focus:border-blue-400"
                  placeholder="Tell us about Project*"
                  required
                  rows={4}
                />

                <Button className="w-1/2 flex justify-center  items-center py-6  ">
                  <span className="flex text-white md:text-[18px] justify-center  items-center">
                    <SendIcon className=" w-4 h-4  md:w-5 md:h-5" />
                    Get In Touch
                  </span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[70vh]">
        <iframe
          width="100%"
          height="100%"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Bhopal+(Affirmity)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/population/">Population Estimator map</a>
        </iframe>
      </div>
    </div>
  );
};

export default ContactUs;
