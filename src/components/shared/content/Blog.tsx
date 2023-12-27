import { ChevronRight } from "lucide-react";

interface Iblog {
  image: string;
  date: string;
  author: string;
  title: string;
}

type TblodData = Iblog[];

interface IblogItem {
  item: Iblog;
}

const blogData: TblodData = [
  {
    image: "/blog1.jpeg",
    date: "2021-09-01",
    author: "Aleesha Brown",
    title: "How to choose the right investment for you ?",
  },
  {
    image: "/blog2.jpeg",
    date: "2022-09-01",
    author: "Junah Smith",
    title: "How to do your own taxes ?",
  },

  {
    image: "/blog3.jpeg",
    date: "2023-09-01",
    author: "Sarah Albert",
    title: "Where to find inspirtion ?",
  },
];

const Blog = () => {
  return (
    <div className="w-full flex justify-center items-center mt-16" id="blog">
      <div className="w-full max-w-6xl flex flex-col px-6  md:px-10  min-[1200px]:px-0  py-8 ">
        <div className="flex w-full flex-col justify-center items-center">
          <span className="text-2xl w-fit font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
            LATEST BLOG
          </span>
          <span className="mt-4 md:text-4xl text-4xl font-bold">
            News & Updates
          </span>
          <div className="flex gap-4 mt-4">
            <span className="w-4 bg-red-500 h-[2px]"></span>
            <span className="w-[80px] bg-red-500 h-[2px]"></span>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 min-[1200px]:grid-cols-3 gap-6 justify-items-center mt-10">
          {blogData.map((item, index) => (
            <BlogItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

const BlogItem = ({ item }: IblogItem) => {
  return (
    <div className="p-5 shadow-lg rounded-md flex flex-col">
      <img src={item.image} alt="" className="rounded-md" />
      <div className="flex flex-col mt-5">
        <div className="flex gap-4 w-full justify-between items-center">
          <span className="text-slate-500">BY {item.author.toUpperCase()}</span>
          <span className="bg-slate-400 w-1/4 h-[1px]" />
          <span className="text-slate-500">{item.date}</span>
        </div>
        <span className="text-black text-xl font-bold mt-5">{item.title}</span>
        <div className="flex gap-4 justify-start items-center mt-5 group  cursor-pointer  w-fit">
          <div className="bg-black group-hover:bg-primary transition-all duration-300 p-2 rounded-full ">
            <ChevronRight className="w-6 h-6 text-white" />
          </div>
          <span className="text-black group-hover:text-primary font-bold cursor-pointer">
            Read More
          </span>
        </div>
      </div>
    </div>
  );
};
