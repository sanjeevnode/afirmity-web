const cardData = [
  {
    title: "Investment Marketing",
    img: "/save-money-hand.png",
    description:
      "Prevailed always tolerably discourse and loser assurance creatively coin applauded more uncommonly. Him everything trouble",
  },
  {
    title: "Markets Research",
    img: "/career.png",
    description:
      "Prevailed always tolerably discourse and loser assurance creatively coin applauded more uncommonly. Him everything trouble",
  },
  {
    title: "Consultancy & Advice",
    img: "/group.png",
    description:
      "Prevailed always tolerably discourse and loser assurance creatively coin applauded more uncommonly. Him everything trouble",
  },
  {
    title: "Business Planning",
    img: "/business.png",
    description:
      "Prevailed always tolerably discourse and loser assurance creatively coin applauded more uncommonly. Him everything trouble",
  },
];

const SectionTwo = () => {
  return (
    <div
      className="w-full flex justify-center items-center mt-16 bg-[#f7f7f7]"
      id="pages"
    >
      <div className="w-full max-w-6xl flex flex-col min-[996px]:flex-row gap-20  py-20 px-6  md:px-10 min-[1200px]:px-0  ">
        <div className=" w-full lg:w-2/5 card-shadow flex flex-col gap-6 p-10 bg-white">
          <span className=" w-fit text-2xl font-bold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
            WHAT WE DO
          </span>
          <h1 className="text-black font-bold text-4xl">
            Excellent service and support for you
          </h1>

          <div className="w-full flex flex-col gap-6 py-8">
            <div className="bg-black w-full rounded-md px-8 py-2 flex justify-between items-center">
              <img src="/portfolio.png" alt="" className="w-12 h-12" />

              <span className="text-white font-bold">Consulting Services</span>
            </div>

            <div className="border-2 w-full rounded-md px-8 py-2 flex justify-between items-center">
              <img src="/megaphone.png" alt="" className="w-12 h-12" />

              <span className="text-black font-bold">Marketing Services</span>
            </div>

            <div className="border-2 w-full rounded-md px-8 py-2 flex justify-between items-center">
              <img src="/save-money.png" alt="" className="w-12 h-12" />

              <span className="text-black font-bold">Banking Services</span>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-3/5 max-md:px-6">
          {cardData.map((item, index) => (
            <Card key={index} index={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;

const Card = ({ item }: { item: (typeof cardData)[0]; index: number }) => {
  return (
    <div className=" shadow-sm max-[996px]:bg-white p-8 flex flex-col gap-4  ">
      <img src={item.img} alt="" className="w-14 h-14" />

      <span className="text-[20px] text-black font-bold hover:text-red-500 cursor-pointer">
        {item.title}
      </span>
      <p className="text-gray-500 text-sm">{item.description}</p>
    </div>
  );
};
