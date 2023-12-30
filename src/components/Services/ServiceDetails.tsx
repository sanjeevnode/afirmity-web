import { IFaq } from "@/lib/utils";
import {
  Check,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  HomeIcon,
  Plus,
} from "lucide-react";
import { useState } from "react";
import { Collapse } from "react-collapse";
import { ImFilePdf } from "react-icons/im";

const ServiceDetails = () => {
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
          <span className="text-white text-5xl font-bold">Our Services</span>
          <div className="flex justify-center items-center mt-4">
            <HomeIcon className="w-5 h-5 text-white" />
            <span className="text-white font-bold">Home</span>
            <ChevronRight className="w-5 h-5 text-white" />
            <span className="text-white font-bold">Services</span>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-6xl flex flex-col py-20 px-6  md:px-10  min-[1200px]:px-0  ">
          {/* data */}
          <div className="w-full flex flex-col min-[996px]:flex-row gap-10 justify-start ">
            {/* description */}
            <div className="w-full min-[996px]:w-2/3 flex gap-8 flex-col">
              <img
                src="/service-detail1.jpeg"
                alt=""
                className="w-full rounded-lg object-contain"
              />
              <span className="text-2xl md:text-4xl font-bold text-black">
                Best influencer marketing services
              </span>
              <p className="text-slate-500 w-full">
                We denounce with righteous indige nation and dislike men who are
                so beguiled and demo realized by the charms of pleasure of the
                moment, so blinded by desire, that they cannot foresee the pain
                and trouble that are bound to ensue cannot foresee. These cases
                are perfectly simple and easy to distinguish. In a free hour,
                when our power of choice is untrammelled data structures manages
                data in technology.
              </p>
              {/* grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* grid item 1 */}
                <div className="w-full flex flex-col gap-6">
                  <span className="text-2xl font-bold text-black">
                    Included Services
                  </span>
                  <ul className="w-full flex flex-col gap-4">
                    <li className="flex gap-6 justify-start items-center">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-slate-500">Consulting Service</span>
                    </li>
                    <li className="flex gap-6 justify-start items-center">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-slate-500">
                        24/7 Alltime Supporting
                      </span>
                    </li>
                    <li className="flex gap-6 justify-start items-center">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-slate-500">Marketing Service</span>
                    </li>
                    <li className="flex gap-6 justify-start items-center">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-slate-500">
                        Expert Team Members
                      </span>
                    </li>
                  </ul>
                </div>
                {/* grid item 2 */}
                <div className="w-full flex flex-col gap-6">
                  <span className="text-2xl font-bold text-black">
                    The Challange
                  </span>
                  <p className="text-slate-500 w-full">
                    Temporibus autem quibusdam et aut officiis debitis aut rerum
                    necessitatibus saepe eveniet ut et voluptates repudiandae
                    sint et molestiae non recusandae. Itaque earum rerum hic
                    tenetur a sapiente delectus, ut aut reiciendis voluptatibus
                    maiores alias. consequatur aut perferendis doloribus.
                  </p>
                </div>
              </div>
              {/* what we do */}
              <span className="text-2xl font-bold text-black">What we do</span>
              <p className="text-slate-500 w-full">
                Nam libero tempore, cum soluta nobis est elig endi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repelle ndus.
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae. Itaque earum rerum hic tenetur a
                sapiente delectus, ut aut reiciendis voluptatibus maiores alias.
                consequatur aut perferendis doloribus asperiores repellat. The
                wise man therefore always holds in these matters to this
                principle of selection: he rejects pleasures to secure other
                greater pleasures, or else he endures pains to avoid worse
                pains. pleasures have to be repudiated and annoyances accepted.
              </p>
              {/* Common questions */}
              <CommonQuestion />
              {/* Popular Services */}
              <span className="text-2xl font-bold text-black">
                Popular Services
              </span>
              {/* popular servces grid */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className=" bg-white  flex flex-col gap-4 ">
                  <img
                    src="/save-money-hand.png"
                    alt=""
                    className="w-16 h-16"
                  />

                  <span className=" text-black font-bold hover:text-red-500 cursor-pointer">
                    Investment Marketing
                  </span>
                  <p className="text-gray-500 text-sm">
                    Prevailed always tolerably discourse and loser assurance
                    creatively coin applauded more uncommonly. Him everything
                    trouble
                  </p>
                </div>

                <div className=" bg-white  flex flex-col gap-4 ">
                  <img src="/career.png" alt="" className="w-16 h-16" />

                  <span className=" text-black font-bold hover:text-red-500 cursor-pointer">
                    Markets Research
                  </span>
                  <p className="text-gray-500 text-sm">
                    Prevailed always tolerably discourse and loser assurance
                    creatively coin applauded more uncommonly. Him everything
                    trouble
                  </p>
                </div>
              </div>
            </div>
            {/* Inforation */}
            <div className="w-full max-h-fit h-fit  min-[996px]:w-1/3 flex gap-8 flex-col ">
              {/* Marketing Servces */}
              <div className="w-full p-10 bg-[#f7f7f7] rounded-lg flex flex-col gap-6">
                <div className="w-full flex flex-col gap-2">
                  <span className="w-full text-2xl font-bold text-black">
                    Marketing Services
                  </span>
                  <div className="flex gap-2">
                    <span className="w-5 h-[3px] bg-primary" />
                    <span className="w-10 h-[3px] bg-primary" />
                  </div>
                </div>

                <ul className="w-full flex flex-col gap-4">
                  <li className="w-full flex justify-between items-center border-b pb-4">
                    <span className="text-black font-bold hover:text-primary cursor-pointer">
                      Email Marketing
                    </span>
                  </li>
                  <li className="w-full flex justify-between items-center border-b pb-4">
                    <span className="text-primary font-bold hover:text-primary cursor-pointer">
                      Growth Hacking
                    </span>
                    <Plus className="w-5 h-5 text-primary" />
                  </li>
                  <li className="w-full flex justify-between items-center border-b pb-4">
                    <span className="text-black font-bold hover:text-primary cursor-pointer">
                      Lead Generation
                    </span>
                  </li>
                  <li className="w-full flex justify-between items-center border-b pb-4">
                    <span className="text-black font-bold hover:text-primary cursor-pointer">
                      Offline SEO
                    </span>
                  </li>
                  <li className="w-full flex justify-between items-center border-b pb-4">
                    <span className="text-black font-bold hover:text-primary cursor-pointer">
                      Social Media Marketing
                    </span>
                  </li>
                </ul>
              </div>
              {/* Need Help */}
              <div className="w-full flex flex-col p-10 gap-6 bg-gradient-to-br from-black/90 to-dark/95 rounded-lg">
                <span className="w-full text-2xl font-bold text-white">
                  Need Help ?
                </span>
                <span className="w-full text-white">
                  Speak with a human to filling out a form? call corporate
                  office and we will connect you with a team member help.
                </span>
                <span className="text-2xl text-white font-bold">
                  +(012) 6679545
                </span>

                <a
                  className="text-xl  text-white underline"
                  href="mailto:nfo@digital.com"
                >
                  nfo@digital.com
                </a>

                <button className="px-8 py-4 w-fit  text-white bg-gradient-to-r from-primary to-blue-500 rounded-full">
                  Contact Us
                </button>
              </div>
              {/* Brochure */}
              <div className="w-full flex flex-col gap-8">
                <div className="w-full flex flex-col gap-2">
                  <span className="w-full text-2xl font-bold text-black">
                    Brochure
                  </span>
                  <div className="flex gap-2">
                    <span className="w-2 h-[3px] bg-primary" />
                    <span className="w-10 h-[3px] bg-primary" />
                  </div>
                </div>

                <div className="w-full flex flex-col gap-4">
                  <div className="w-full flex gap-4 justify-start items-center cursor-pointer  bg-primary  rounded-lg px-6 py-4">
                    <ImFilePdf className="w-8 h-8 text-white" />

                    <span className="text-white font-bold">
                      Download Brochure
                    </span>
                  </div>
                  <div className="w-full flex gap-4 justify-start items-center border-2  rounded-lg px-6 py-4 cursor-pointer hover:bg-primary group transition-all duration-500">
                    <ImFilePdf className="w-8 h-8 text-black group-hover:text-white transition-all duration-500" />

                    <span className="text-black font-bold  group-hover:text-white transition-all duration-500">
                      Company Detail
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

const CommonQuestion = () => {
  const [open, setOpen] = useState<number | null>();

  const toggle = (index: number) => {
    if (index === open) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };
  const questionList: IFaq[] = [
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
      question: "what kind of data needed for analytics?",
      answer:
        "Tennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.",
    },
  ];
  return (
    <div className="w-full flex-col gap-6 flex">
      <span className="text-2xl font-bold text-black">
        Common Question for this project
      </span>

      {questionList.map((faq, index) => {
        return (
          <Question
            faq={faq}
            key={index}
            open={open === index}
            index={index}
            toggle={toggle}
          />
        );
      })}
    </div>
  );
};

const Question = ({
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
        }      items-center rounded-md px-6 py-3`}
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
