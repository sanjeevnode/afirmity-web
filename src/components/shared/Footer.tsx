import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div
      className="w-full flex justify-center items-center  bg-dark"
      id="contact"
    >
      <div className="w-full max-w-6xl py-20   px-6  md:px-10 min-[1200px]:px-0 grid grid-cols-1 md:grid-cols-2 min-[996px]:grid-cols-4 justify-items-start gap-10 ">
        <div className="flex flex-col items-start p-1 gap-4 ">
          <img src="/affirmity.svg" alt="" className="h-[60px] w-[200px]" />
          <p className="text-slate-300 ">
            Excellence decisively nay man twins impression maximum contrasted
            remarkably is perfect.
          </p>
          <span className="text-white mt-2 text-xl">OPENING HOURS</span>
          <div className="flex gap-2 justify-between items-center text-slate-300">
            <span>Monday - Friday : </span>

            <span className="w-4 h-[1px] bg-slate-500"></span>

            <span>10AM - 7PM </span>
          </div>
          <div className="flex gap-2 justify-between items-center text-slate-300">
            <span>Sunday : </span>

            <span className="w-20 h-[1px] bg-slate-500"></span>

            <span>10AM - 2PM </span>
          </div>
        </div>

        <div className="flex flex-col items-start  p-1 gap-4 ">
          <span className="text-white  text-xl font-bold ">Our Company</span>
          <a href="/" className="text-slate-300 cursor-pointer">
            Company Profile
          </a>
          <a href="/" className="text-slate-300 cursor-pointer">
            Help Center
          </a>
          <a href="/" className="text-slate-300 cursor-pointer">
            Career
          </a>
          <a href="/" className="text-slate-300 cursor-pointer">
            Plans & Pricing
          </a>
          <a href="/" className="text-slate-300 cursor-pointer">
            Contact
          </a>
        </div>

        <div className="flex flex-col items-start  p-1 gap-4 ">
          <span className="text-white  text-xl font-bold ">Our Services</span>
          <a href="/" className="text-slate-300 cursor-pointer">
            Management
          </a>
          <a href="/" className="text-slate-300 cursor-pointer">
            Investment
          </a>
          <a href="/" className="text-slate-300 cursor-pointer">
            Buisness Planning
          </a>
          <a href="/" className="text-slate-300 cursor-pointer">
            Financial Advices
          </a>
          <a href="/" className="text-slate-300 cursor-pointer">
            Tax Strategy
          </a>
          <a href="/" className="text-slate-300 cursor-pointer">
            Insurance
          </a>
        </div>

        <div className="flex flex-col items-start  p-1 gap-4 ">
          <span className="text-white  text-xl font-bold ">News Corner</span>
          <span className="text-slate-300">
            Join our subscribers list to get the latest news and special offers.
          </span>
          <form action="/" className="w-full flex flex-col">
            <input
              type="text"
              required
              placeholder=" Your email"
              className="w-full h-12 bg-[#f6f6f6d4]  px-4"
            />
            <Button className="w-full rounded-none mt-5">Subscribe</Button>
          </form>

          <div className="flex gap-5 justify-center items-center w-full">
            <Facebook className="w-8 h-8 text-white" />
            <Youtube className="w-8 h-8 text-white" />
            <Linkedin className="w-8 h-8 text-white" />
            <Twitter className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
