import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface LinkItem {
  link: string;
  name: string;
  subLinks?: LinkItem[];
}

export const navLinkItems: LinkItem[] = [
  { link: "/", name: "Home" },
  {
    link: "/",
    name: "Pages",
    subLinks: [
      { link: "/pages/about", name: "About Us" },
      { link: "/pages/team", name: "Team" },
      { link: "/pages/team-details", name: "Team Details" },
      { link: "/pages/faq", name: "FAQ" },
      { link: "/pages/contact", name: "Contact Us" },
    ],
  },
  {
    link: "/projects/latest-projects",
    name: "Projects",
    subLinks: [
      { link: "/projects/latest-projects", name: "Latest Projects" },
      { link: "/projects/project-details", name: "Project Details" },
    ],
  },
  {
    link: "/services/our-services",
    name: "Services",
    subLinks: [
      { link: "/services/our-services", name: "Our Services" },
      { link: "/services/service-details", name: "Service Details" },
    ],
  },
  { link: "/blog", name: "Blog" },
  { link: "/pages/contact", name: "Contact" },
];

export interface IteamExpert {
  post: string;
  name: string;
  img: string;
}
export const teamExpertList: IteamExpert[] = [
  {
    post: "CEO & Founder",
    name: "Alex Maxwel",
    img: "/team-expert1.jpeg",
  },

  {
    post: "Product Manager",
    name: "Kevin Martin",
    img: "/team-expert2.jpeg",
  },

  {
    post: "Financial Consultant",
    name: "Sara Taylor",
    img: "/team-expert3.jpeg",
  },
  {
    post: "Developer",
    name: "Doge Kin",
    img: "/team-expert4.jpeg",
  },
  {
    post: "Product Manager",
    name: "Kevin Martin",
    img: "/team-expert5.jpeg",
  },
  {
    post: "Consultant",
    name: "Kevin Martin",
    img: "/team-expert6.jpeg",
  },
  {
    post: "Supervisor",
    name: "Kevin Martin",
    img: "/team-expert7.jpeg",
  },
  {
    post: "Product Manager",
    name: "Kevin Martin",
    img: "/team-expert8.jpeg",
  },
];
