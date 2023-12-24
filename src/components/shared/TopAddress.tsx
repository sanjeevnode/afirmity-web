import { MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa6";

const TopAddress = () => {
  return (
    <div className="hidden md:flex w-full justify-center items-center   bg-dark text-white border-b ">
      <div className="flex md:justify-center min-[996px]:justify-between    max-w-6xl py-2 w-full px-6 md:px-10  min-[1200px]:px-0 ">
        <div className=" min-[1200px]:ml-[300px] flex gap-8 items-center justify-center">
          <div className="  flex gap-2 items-center justify-center">
            <MapPin className="w-6 h-6 text-primary" />
            <span className="text-white font-[18px]">
              70240 Avenue of the Moon, California
            </span>
          </div>

          <div className="flex gap-2 items-center justify-center">
            <Phone className="w-6 h-6 text-primary" />
            <span className="text-white font-[18px]">+4412552</span>
          </div>
        </div>

        <div className="md:hidden   min-[996px]:flex gap-8 items-center justify-center  ">
          <FaFacebookF className="w-5 h-5" />
          <FaTwitter className="w-5 h-5" />
          <FaYoutube className="w-5 h-5" />
          <FaLinkedin className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default TopAddress;
