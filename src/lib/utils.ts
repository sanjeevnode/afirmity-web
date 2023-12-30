import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Nav Link
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

// Team Expert
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

// FAQ
export interface IFaq {
  question: string;
  answer: string;
}

export const faqList: IFaq[] = [
  {
    question: "Where can i get analytics help?",
    answer:
      "Bennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.",
  },
  {
    question: "How much does data analytics cost?",
    answer:
      "Cennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.",
  },

  {
    question: "What kind of data is needed for analytics?",
    answer:
      "Tennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.",
  },
  {
    question: "How do i pay for your services?",
    answer:
      "Sennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.",
  },
];

export interface ILatestProject {
  img: string;
  category: string;
  title: string;
}

export const latestProjectList: ILatestProject[] = [
  {
    img: "/latest-project1.jpeg",
    category: "Consulting,Recruitment",
    title: "Coping under the current climate",
  },
  {
    img: "/latest-project2.jpeg",
    category: "Consulting,Recruitment",
    title: "Purpose Driven Eployers Succeed",
  },
  {
    img: "/latest-project3.jpeg",
    category: "Consulting,Recruitment",
    title: "Share Statics with Team Leader",
  },
  {
    img: "/latest-project4.jpeg",
    category: "Consulting,Recruitment",
    title: "Nifty Team Responds After Crisis",
  },
];
