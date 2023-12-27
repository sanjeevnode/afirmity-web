import { LinkItem, navLinkItems } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const MobileNavItems = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ul className="w-full list-none flex flex-col gap-6">
      {navLinkItems.map((item) => (
        <li key={item.name} className="w-full border-b flex flex-col ">
          <div className="w-full flex justify-between items-center">
            <Link to={item.link} className="">
              <span className="text-xl  text-black">{item.name}</span>
            </Link>
            {item.subLinks && (
              <ChevronDown
                className="w-5 h-5 ml-1 font-bold"
                onClick={() => setIsOpen(!isOpen)}
              />
            )}
          </div>
          {item.subLinks && (
            <SubLinks isOpen={isOpen} subLinks={item.subLinks} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default MobileNavItems;

const SubLinks = ({
  isOpen,
  subLinks,
}: {
  isOpen: boolean;
  subLinks: LinkItem[];
}) => {
  return (
    <ul
      className={`${isOpen ? "flex" : "hidden"} flex-col gap-4  bg-white mt-4`}
    >
      {subLinks.map((subItem) => (
        <Link key={subItem.name} to={subItem.link}>
          <li className="cursor-pointer text-black hover:outline px-6">
            {subItem.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};
