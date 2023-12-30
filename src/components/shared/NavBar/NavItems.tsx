import { navLinkItems } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const NavItems = ({
  scrolled,
  isHome,
}: {
  scrolled: boolean;
  isHome: boolean;
}) => {
  return (
    <ul
      className={`gap-4 min-[1200px]:gap-8 items-center justify-center font-semibold md:text-[16px] hidden md:flex ${
        !scrolled ? (isHome ? "min-[1200px]:ml-[300px]" : "mt-0") : "ml-0"
      }`}
    >
      {navLinkItems.map((item) => (
        <li key={item.name} className="relative group cursor-pointer">
          <Link to={item.link} className="flex justify-center items-center ">
            {item.name}
            {item.subLinks && (
              <ChevronDown className="w-5 h-5 ml-1 font-bold" />
            )}
          </Link>
          {item.subLinks && (
            <ul className="hidden nav-sublist-shadow   py-6 flex-col absolute group-hover:flex space-y-4 bg-white min-w-[250px]">
              {item.subLinks.map((subItem) => (
                <Link key={subItem.name} to={subItem.link}>
                  <li className="cursor-pointer text-black hover:outline px-6">
                    {subItem.name}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </li>
      ))}
      <li className="cursor-pointer"></li>
    </ul>
  );
};

export default NavItems;
