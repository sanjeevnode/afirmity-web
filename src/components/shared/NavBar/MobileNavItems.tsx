import { SheetClose } from "@/components/ui/sheet";
import { navLinkItems } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Collapse } from "react-collapse";
import { Link } from "react-router-dom";

const MobileNavItems = () => {
  const [open, setOpen] = useState<number | null>();
  const toggle = (index: number) => {
    if (index === open) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };
  return (
    <ul className="w-full list-none flex flex-col gap-6">
      {navLinkItems.map((item, index) => (
        <li key={item.name} className="w-full border-b flex flex-col ">
          <div className="w-full flex justify-between items-center">
            <SheetClose asChild>
              <Link to={item.link} className="">
                <span className="text-xl  text-black">{item.name}</span>
              </Link>
            </SheetClose>
            {item.subLinks && (
              <ChevronDown
                className="w-5 h-5 ml-1 font-bold"
                onClick={() => toggle(index)}
              />
            )}
          </div>
          {item.subLinks && (
            <Collapse isOpened={open == index}>
              <ul className="flex-col gap-4  bg-white mt-4 flex">
                {item.subLinks.map((subItem) => (
                  <SheetClose asChild key={subItem.name}>
                    <Link to={subItem.link}>
                      <li className="cursor-pointer text-black hover:outline px-6">
                        {subItem.name}
                      </li>
                    </Link>
                  </SheetClose>
                ))}
              </ul>
            </Collapse>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MobileNavItems;
