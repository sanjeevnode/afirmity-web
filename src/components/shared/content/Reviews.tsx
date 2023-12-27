import { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";

interface IReview {
  name: string;
  description: string;
}

type TReviewData = IReview[];

interface IReviewItem {
  item: IReview;
  currentIndex: number;
}

const reviewData: TReviewData = [
  {
    name: "The best service ever",
    description:
      "Consultation discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now always remembering to the point another pointing go here.",
  },
  {
    name: "Awesome Business opportunities",
    description:
      "“Consultation discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now always remembering to the point another pointing go here.”",
  },

  {
    name: "The best solutions for your business",
    description:
      "“Consultation discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now always remembering to the point another pointing go here.”",
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewData.length);
  };

  useEffect(() => {
    const interval = setInterval(updateIndex, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center items-center mt-16">
      <div className="w-full max-w-6xl   px-6  md:px-10  min-[1200px]:px-0  py-8 flex flex-col min-[996px]:flex-row gap-8">
        <div className="w-full flex justify-center items-center min-[996px]:w-1/3 h-full ">
          <div className="rounded-full bg-gradient-to-r from-red-900 to-primary w-fit  relative overflow-hidden ">
            <img
              src="/review-image.png"
              alt=""
              className="w-[350px] h-[350px]  object-center object-scale-down"
            />
          </div>
        </div>

        <div className="w-full min-[996px]:w-2/3 relative flex overflow-hidden ">
          {reviewData.map((item, index) => {
            return (
              <ReviewItem item={item} currentIndex={currentIndex} key={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

const ReviewItem = ({ item, currentIndex }: IReviewItem) => {
  return (
    <div
      className={`min-w-full min-h-full flex flex-col px-8  ${
        currentIndex !== 0 && "transition duration-1000 ease-in-out"
      }`}
      style={{
        transform: `translateX(-${currentIndex * 100}%)`,
      }}
    >
      <div className="flex gap-1">
        <IoStar className="w-6 h-6 text-primary" />
        <IoStar className="w-6 h-6 text-primary" />
        <IoStar className="w-6 h-6 text-primary" />
        <IoStar className="w-6 h-6 text-primary" />
        <IoStar className="w-6 h-6 text-primary" />
      </div>
      <span className="text-3xl text-black  font-bold mt-5 w-full">
        {item.name}
      </span>
      <p className="mt-5 w-full text-slate-500 font-medium text-[20px]">
        {item.description}{" "}
      </p>
      <span className="bg-black w-full h-[2px] mt-5" />
      <div className="flex gap-6 mt-5 justify-center min-[996px]:justify-start items-center">
        <span className="text-6xl font-thin text-black">99</span>
        <div className="flex flex-col gap-2">
          <span className="text-slate-500 font-bold">Mathew J. Wyman</span>
          <span className="text-sm text-gray-500">Senior Consultant</span>
        </div>
      </div>
    </div>
  );
};
