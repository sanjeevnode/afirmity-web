import { useEffect, useState } from "react";
import { Button } from "../../ui/button";
import { AlignRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavItems from "./NavItems";
import { useLocation } from "react-router-dom";
import MobileNavItems from "./MobileNavItems";

const NavBar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
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
  }, [scrolled, pathname]);

  return (
    <>
      {/* Big-Left Icon */}

      <div
        className={`absolute top-0 left-0 w-[45%] h-[120px] ${
          !isHome && "hidden"
        } `}
      >
        <div
          className={`${
            scrolled
              ? "hidden"
              : "relative w-auto  h-full max-[1200px]:hidden mr-6"
          }`}
        >
          <div className="absolute flex justify-center items-center  top-0 left-0 w-[45%] h-[120px] bg-white z-[20]">
            <img src="/affirmity.svg" alt="" className="h-[60px] w-[200px]" />
          </div>
          <div className="absolute top-0 left-5 w-[45%] h-[120px] bg-white z-10 transform skew-x-12"></div>
          <div className="absolute -top-3 left-8 w-[45%] h-[120px] bg-slate-200 z-[5] transform skew-x-12"></div>
        </div>
      </div>

      <nav
        className={`fixed w-full flex justify-center    py-5 max-[1200px]:bg-white text-black  max-md:mt-0 transition-all  duration-300 z-40  ${
          scrolled
            ? "mt-0 bg-white text-black shadow-md"
            : isHome
            ? " mt-10 min-[1200px]:text-white"
            : "mt-10 bg-white text-black shadow-md"
        }
        `}
      >
        {/* Logo */}
        <div className="max-w-6xl flex justify-between items-center  w-full px-6 md:px-10  min-[1200px]:px-0 ">
          <div
            className={`max-[1200px]:flex ${
              scrolled ? "flex visible" : isHome && "hidden"
            }`}
          >
            <img src="/affirmity.svg" alt="" className="h-[60px] w-[200px]" />
          </div>

          {/* Menu */}
          <NavItems scrolled={scrolled} isHome={isHome} />

          <Button className="min-[996px]:py-6 min-[996px]:px-8 text-white font-semibold hidden min-[996px]:flex">
            Get Consultant
          </Button>

          {/* Mobile menu */}

          <div className="min-[996px]:hidden">
            <Sheet>
              <SheetTrigger>
                <AlignRight className="w-12 h-12 text-black" />
              </SheetTrigger>
              <SheetContent className="bg-white flex flex-col gap-6 overflow-y-auto">
                <div className="flex flex-col">
                  <img src="/logo.png" alt="" className="h-[60px] w-[200px]" />
                  <span className="w-full bg-slate-300 h-[1px] mt-4" />
                </div>
                <MobileNavItems />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
