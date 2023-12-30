import { IBlog, blogList } from "@/lib/utils";
import {
  Calendar,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  CircleUserRound,
  File,
  HomeIcon,
  Search,
} from "lucide-react";
import {
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa6";

const recentPostList = [
  {
    img: "latest-project1.jpeg",
    title: "Lorem ipsum dolor sit amet consectetur ",
    date: "12/12/2023",
  },
  {
    img: "latest-project2.jpeg",
    title: "Lorem ipsum dolor sit amet consectetur ",
    date: "12/12/2023",
  },
  {
    img: "latest-project3.jpeg",
    title: "Lorem ipsum dolor sit amet consectetur ",
    date: "12/12/2023",
  },
];

const galleryList = [
  "/our-process1.jpeg",
  "/our-process3.jpeg",
  "/our-process2.jpeg",
  "/project1.jpeg",
  "/project2.jpeg",
  "/latest-project4.jpeg",
];

const tagList = ["National", "InterNational", "Sports", "Health", "Meagzine"];

const Blog = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center ">
      <div
        className="min-w-full w-full h-[60vh] bg-center bg-cover flex justify-center items-center relative"
        style={{
          backgroundImage: "url(/text-image.jpeg)",
          backgroundSize: "cover",
        }}
      >
        {/* Top Image */}
        <div className="absolute inset-0 w-full h-full bg-black/40" />
        <div className="flex flex-col z-[5]">
          <span className="text-white text-5xl font-bold">Blog</span>
          <div className="flex justify-center items-center mt-4">
            <HomeIcon className="w-5 h-5 text-white" />
            <span className="text-white font-bold">Home</span>
            <ChevronRight className="w-5 h-5 text-white" />
            <span className="text-white font-bold"> Blog</span>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="w-full flex justify-center items-center ">
        <div className="w-full max-w-6xl flex flex-col min-[996px]:py-24 py-16  px-6  md:px-10  min-[1200px]:px-0 ">
          {/* content start*/}
          <div className="w-full flex flex-col min-[996px]:flex-row gap-10">
            {/* Blog Contet */}
            <div className="w-full flex flex-col gap-16 min-[996px]:w-2/3 ">
              {/* display blog */}
              <DisplayBlog />
              {/* Pagination */}
              <div className="w-full flex justify-center items-center gap-1">
                <button className="outline-none border  rounded-md p-4 bg-white hover:bg-slate-200 cursor-pointer">
                  <ChevronsLeft className="w-4 h-4 text-dark" />
                </button>
                <button className="outline-none border  rounded-md p-4 bg-primary  text-white cursor-pointer">
                  <span>1</span>
                </button>
                <button className="outline-none border  rounded-md p-4 bg-white hover:bg-slate-200 cursor-pointer">
                  <span className="text-dark">2</span>
                </button>
                <button className="outline-none border  rounded-md p-4 bg-white hover:bg-slate-200 cursor-pointer">
                  <span className="text-dark">3</span>
                </button>
                <button className="outline-none border  rounded-md p-4 bg-white hover:bg-slate-200 cursor-pointer">
                  <ChevronsRight className="w-4 h-4 text-dark" />
                </button>
              </div>
            </div>
            {/* other details */}
            <div className="w-full flex flex-col gap-10 min-[996px]:w-1/3  ">
              {/* Search */}
              <div className="w-full p-6 md:p-10   bg-slate-100 ">
                <div className="w-full border border-cyan-500 flex rounded-md overflow-hidden">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full p-4  outline-none"
                  />
                  <button className="outline-none border  rounded-md p-4 bg-primary  text-white cursor-pointer">
                    <Search className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
              {/* Recent Post */}
              <div className="w-full flex flex-col gap-8 p-6 md:p-10   bg-slate-100 ">
                <div className="w-full flex flex-col gap-2">
                  <span className="w-full text-xl font-bold text-black">
                    Recent Post
                  </span>
                  <div className="flex gap-2">
                    <span className="w-2 h-[3px] bg-primary" />
                    <span className="w-10 h-[3px] bg-primary" />
                  </div>
                </div>
                {/* posts */}
                <div className="w-full flex flex-col gap-4">
                  {recentPostList.map((item, index) => (
                    <RecentPost key={index} item={item} />
                  ))}
                </div>
              </div>
              {/* Category List */}
              <div className="w-full flex flex-col gap-8 p-6  md:p-10  bg-slate-100 ">
                <div className="w-full flex flex-col gap-2">
                  <span className="w-full text-xl font-bold text-black">
                    Category List
                  </span>
                  <div className="flex gap-2">
                    <span className="w-2 h-[3px] bg-primary" />
                    <span className="w-10 h-[3px] bg-primary" />
                  </div>
                </div>
                <ul className="w-full flex flex-col gap-6">
                  <li className="w-full flex justify-between items-center">
                    <span className="text-slate-500">National</span>
                    <span className="p-1 bg-white text-[9px] text-dark rounded-full">
                      69
                    </span>
                  </li>
                  <li className="w-full flex justify-between items-center">
                    <span className="text-slate-500">InterNational</span>
                    <span className="p-1 bg-white text-[9px] text-dark rounded-full">
                      26
                    </span>
                  </li>
                  <li className="w-full flex justify-between items-center">
                    <span className="text-slate-500">Sports</span>
                    <span className="p-1 bg-white text-[9px] text-dark rounded-full">
                      12
                    </span>
                  </li>
                  <li className="w-full flex justify-between items-center">
                    <span className="text-slate-500">Health</span>
                    <span className="p-1 bg-white text-[9px] text-dark rounded-full">
                      14
                    </span>
                  </li>
                  <li className="w-full flex justify-between items-center">
                    <span className="text-slate-500">Meagzine</span>
                    <span className="p-1 bg-white text-[9px] text-dark rounded-full">
                      24
                    </span>
                  </li>
                </ul>
              </div>
              {/* Gallery */}
              <div className="w-full flex flex-col gap-8 p-6 md:p-10   bg-slate-100 ">
                <div className="w-full flex flex-col gap-2">
                  <span className="w-full text-xl font-bold text-black">
                    Category List
                  </span>
                  <div className="flex gap-2">
                    <span className="w-2 h-[3px] bg-primary" />
                    <span className="w-10 h-[3px] bg-primary" />
                  </div>
                </div>
                {/*  */}
                <div className="w-full grid grid-cols-3 gap-4">
                  {galleryList.map((item, index) => (
                    <img
                      src={item}
                      alt=""
                      key={index}
                      className="w-full h-[80px] object-cover"
                    />
                  ))}
                </div>
              </div>
              {/* Archives */}
              <div className="w-full flex flex-col gap-8 p-6 md:p-10   bg-slate-100 ">
                <div className="w-full flex flex-col gap-2">
                  <span className="w-full text-xl font-bold text-black">
                    Archives
                  </span>
                  <div className="flex gap-2">
                    <span className="w-2 h-[3px] bg-primary" />
                    <span className="w-10 h-[3px] bg-primary" />
                  </div>
                </div>
                {/*  */}
                <ul className="w-full flex flex-col gap-6">
                  <li className="flex gap-4 w-full text-slate-500 font-bold justify-start items-center">
                    <File className="w-4 h-4" />
                    <span>Aug 2020</span>
                  </li>
                  <li className="flex gap-4 w-full text-slate-500 font-bold justify-start items-center">
                    <File className="w-4 h-4" />
                    <span>Sep 2020</span>
                  </li>
                  <li className="flex gap-4 w-full text-slate-500 font-bold justify-start items-center">
                    <File className="w-4 h-4" />
                    <span>Oct 2020</span>
                  </li>
                  <li className="flex gap-4 w-full text-slate-500 font-bold justify-start items-center">
                    <File className="w-4 h-4" />
                    <span>Dec 2021</span>
                  </li>
                </ul>
              </div>
              {/* Follow us */}
              <div className="w-full flex flex-col gap-8 p-6 md:p-10   bg-slate-100 ">
                <div className="w-full flex flex-col gap-2">
                  <span className="w-full text-xl font-bold text-black">
                    Follow us
                  </span>
                  <div className="flex gap-2">
                    <span className="w-2 h-[3px] bg-primary" />
                    <span className="w-10 h-[3px] bg-primary" />
                  </div>
                </div>
                {/*  */}
                <div className="w-full flex gap-4 justify-start">
                  <div className="p-4 bg-[#3b5998]">
                    <FaFacebook className="w-4 h-4 text-white" />
                  </div>
                  <div className="p-4 bg-[#1da1f2]">
                    <FaTwitter className="w-4 h-4 text-white" />
                  </div>
                  <div className="p-4 bg-[#e60023]">
                    <FaPinterest className="w-4 h-4 text-white" />
                  </div>
                  <div className="p-4 bg-[#0077b5]">
                    <FaLinkedin className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              {/* Tags */}
              <div className="w-full flex flex-col gap-8 p-6 md:p-10   bg-slate-100 ">
                <div className="w-full flex flex-col gap-2">
                  <span className="w-full text-xl font-bold text-black">
                    Tags
                  </span>
                  <div className="flex gap-2">
                    <span className="w-2 h-[3px] bg-primary" />
                    <span className="w-10 h-[3px] bg-primary" />
                  </div>
                </div>
                {/*  */}
                <div className="flex w-full flex-wrap gap-4 justify-start">
                  {tagList.map((item, index) => (
                    <span
                      key={index}
                      className="py-2 px-4 bg-white border cursor-pointer rounded-full hover:bg-slate-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

const DisplayBlog = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      {blogList.map((blog, index) => (
        <SingleBlog key={index} item={blog} />
      ))}
    </div>
  );
};

const SingleBlog = ({ item }: { item: IBlog }) => {
  return (
    <div className="w-full flex flex-col rounded-lg overflow-hidden shadow-xl">
      <img src={item.img} alt="" className="w-full" />
      <div className="w-full p-6  md:p-10 flex flex-col gap-4">
        {/* date author */}
        <div className="flex gap-8">
          <div className="flex gap-1 justify-center items-center">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-slate-500">{item.date}</span>
          </div>
          <div className="flex gap-1 justify-center items-center">
            <CircleUserRound className="w-4 h-4 text-primary" />
            <span className="text-slate-500">{item.author}</span>
          </div>
        </div>
        {/* title */}
        <span className="text-2xl font-bold">{item.title}</span>
        {/* description */}
        <p className="text-slate-500 w-full">{item.desc}</p>

        <a href={item.link}>
          <button className="outline-none rounded-full px-10 py-3 w-fit bg-primary transition-all duration-300 hover:bg-black text-white">
            Learn More
          </button>
        </a>
      </div>
    </div>
  );
};

const RecentPost = ({ item }: { item: (typeof recentPostList)[0] }) => {
  return (
    <div className="w-full flex gap-6 items-center justify-center">
      <img src={item.img} alt="" className="w-[80px] h-[80px] object-contain" />

      <div className="flex flex-col gap-1 ">
        <span className="text-slate-500">{item.date}</span>
        <span className="text-black font-bold">{item.title}</span>
      </div>
    </div>
  );
};
