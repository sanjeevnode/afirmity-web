import { navLinkItems } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavItems = ({
  scrolled,
  isHome,
}: {
  scrolled: boolean;
  isHome: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ul
      className={`gap-4 min-[1200px]:gap-8 items-center justify-center font-semibold md:text-[16px] hidden min-[996px]:flex ${
        !scrolled ? (isHome ? "min-[1200px]:ml-[300px]" : "mt-0") : "ml-0"
      }`}
    >
      {navLinkItems.map((item) => (
        <li key={item.name}
        onMouseEnter={()=>setIsOpen(true)}
        onMouseLeave={()=>setIsOpen(false)}
        className="relative group cursor-pointer">
          <Link to={item.link} className="flex justify-center items-center ">
            {item.name}
            {item.subLinks && (
              <ChevronDown className="w-5 h-5 ml-1 font-bold" />
            )}
          </Link>
          {item.subLinks && isOpen && (
            <ul className="hidden nav-sublist-shadow   py-6 flex-col absolute group-hover:flex space-y-4 bg-white min-w-[250px]">
              {item.subLinks.map((subItem) => (
                <Link key={subItem.name} to={subItem.link} onClick={()=>setIsOpen(false)}>
                  <li className="cursor-pointer text-black hover:outline px-6">
                    {subItem.name}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
