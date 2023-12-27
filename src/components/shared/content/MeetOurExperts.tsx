import { IteamExpert, teamExpertList } from "@/lib/utils";

const MeetOurExperts = () => {
  return (
    <div className="w-full flex justify-center items-center mt-16 bg-[#f7f7f7]">
      <div className="w-full max-w-6xl flex flex-col py-20 px-6  md:px-10  min-[1200px]:px-0 ">
        <div className="flex w-full flex-col justify-center items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
            TEAM MEMBERS
          </span>
          <span className="mt-4 md:text-4xl text-4xl font-bold">
            Meet Our Experts
          </span>
          <div className="flex gap-4 mt-4">
            <span className="w-4 bg-red-500 h-[2px]"></span>
            <span className="w-[80px] bg-red-500 h-[2px]"></span>
          </div>
        </div>
        {/* grid */}
        <ShowTeamMembers teamMemberList={teamExpertList.slice(0, 4)} />
      </div>
    </div>
  );
};

export default MeetOurExperts;

export const ShowTeamMembers = ({
  teamMemberList,
}: {
  teamMemberList: IteamExpert[];
}) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 min-[1200px]:grid-cols-4 justify-items-center gap-6 mt-10">
      {teamMemberList.map((item, index) => (
        <div key={index} className="flex flex-col">
          <img src={item.img} alt="" />
          <span className="text-gray-500 mt-4">{item.post}</span>
          <span className="text-black font-bold mt-1">{item.name}</span>
        </div>
      ))}
    </div>
  );
};
