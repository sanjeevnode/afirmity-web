import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { AlignRight } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      {/* Big-Left Icon */}

      <div className="absolute top-0 left-0 w-[380px] h-[120px]">
        <div
          className={`${
            scrolled
              ? "hidden"
              : "relative w-auto  h-full max-[1200px]:hidden mr-6"
          }`}
        >
          <div className="absolute flex justify-center items-center  top-0 left-0 w-[360px] h-[120px] bg-white z-[20]">
            <img src="/logo.png" alt="" className="h-[60px] w-[200px]" />
          </div>
          <div className="absolute top-0 left-5 w-[360px] h-[120px] bg-white z-10 transform skew-x-12"></div>
          <div className="absolute -top-3 left-8 w-[360px] h-[120px] bg-slate-200 transform skew-x-12"></div>
        </div>
      </div>

      <nav
        className={`fixed w-full flex justify-center    py-2 max-[1200px]:bg-white text-black  max-md:mt-0 transition-all  duration-300 z-[9999]  ${
          scrolled
            ? "mt-0 bg-white text-black shadow-md"
            : " mt-10 min-[1200px]:text-white"
        }`}
      >
        {/* Logo */}
        <div className="max-w-6xl flex justify-between items-center  w-full px-6 md:px-10  min-[1200px]:px-0 ">
          <div
            className={`max-[1200px]:flex ${
              scrolled ? "flex visible" : "hidden"
            }`}
          >
            <img src="/logo.png" alt="" className="h-[60px] w-[200px]" />
          </div>

          {/* Menu */}

          <ul
            className={` gap-6 items-center justify-center font-semibold text-[16px] hidden md:flex ${
              !scrolled ? "min-[1200px]:ml-[300px]" : "ml-0"
            }`}
          >
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
          </ul>

          <Button className="py-6 px-8 text-white font-semibold hidden md:flex">
            Get Consultant
          </Button>

          {/* Mobile menu */}

          <div className="md:hidden">
            <AlignRight className="w-12 h-12 text-black" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
