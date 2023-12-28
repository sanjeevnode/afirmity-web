import { IFaq, faqList } from "@/lib/utils";
import { ChevronDown, ChevronRight, ChevronUp, HomeIcon } from "lucide-react";
import { useState } from "react";
import { Collapse } from "react-collapse";

const FaqPage = () => {
  const [open, setOpen] = useState<number | null>();

  const toggle = (index: number) => {
    if (index === open) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };
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
          <span className="text-white  text-5xl font-bold">
            Frequently Asked Questions
          </span>
          <div className="flex justify-center items-center mt-4">
            <HomeIcon className="w-5 h-5 text-white" />
            <span className="text-white  font-bold">Home</span>
            <ChevronRight className="w-5 h-5 text-white" />
            <span className="text-white font-bold"> FAQ</span>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="w-full flex justify-center items-center  ">
        <div className="w-full max-w-6xl flex flex-col py-24 px-6  md:px-10  min-[1200px]:px-0 ">
          {/* grid */}

          <div className="w-full flex flex-col min-[996px]:flex-row gap-10">
            <div
              className="w-full max-h-fit h-full  min-[996px]:w-1/3 border px-7 py-9 bg-cover bg-center relative rounded-md"
              style={{ backgroundImage: "url(/map.png" }}
            >
              <div className="bg-primary/90  w-full h-full absolute inset-0 -z-10"></div>
              <div className="flex flex-col gap-4 z-0 ">
                <span className="text-2xl text-white font-bold border-b pb-2">
                  Need Help ?
                </span>
                <span className="text-white font-bold">Buisness Policy</span>
                <span className="text-white font-bold">Marketing Strategy</span>
                <span className="text-white font-bold">Customer Benifits</span>
                <span className="text-white font-bold">Profit Sharing</span>
              </div>
            </div>

            <div className="w-full min-[996px]:w-2/3 flex flex-col min-[996px]:px-4 gap-8">
              <span className=" text-3xl md:text-5xl text-black font-bold">
                You need to know before begin everything.
              </span>
              {/* Faq Questions */}

              {faqList.map((faq, index) => {
                return (
                  <FaqQuestion
                    faq={faq}
                    key={index}
                    open={open === index}
                    index={index}
                    toggle={toggle}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;

const FaqQuestion = ({
  faq,
  open,
  toggle,
  index,
}: {
  faq: IFaq;
  open: boolean;
  index: number;
  toggle: (index: number) => void;
}) => {
  return (
    <div className="w-full  flex flex-col rounded-md faq-question-shadow ">
      <div
        className={`w-full flex justify-between ${
          open ? "bg-black text-white" : "text-black bg-white"
        } text-xl  md:text-2xl font-bold  items-center rounded-md px-6 py-3`}
      >
        <span>{faq.question}</span>
        {open ? (
          <ChevronUp
            onClick={() => toggle(index)}
            role="button"
            className="w-5 h-5 text-white hover:outline outline-white  rounded-md"
          />
        ) : (
          <ChevronDown
            onClick={() => toggle(index)}
            role="button"
            className="w-5 h-5 text-black hover:outline rounded-md"
          />
        )}
      </div>

      {/* Answer */}

      <Collapse isOpened={open}>
        <div className="w-full  py-6 px-6  text-slate-500">
          <span>{faq.answer}</span>
        </div>
      </Collapse>
    </div>
  );
};
