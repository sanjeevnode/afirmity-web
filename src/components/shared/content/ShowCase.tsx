const ShowCase = () => {
  return ( 
  <div
    className="w-full flex justify-center items-center mt-16 bg-[#f7f7f7]"
    id="pages"
  >
    <div className="w-full max-w-6xl py-10 px-6  md:px-10 min-[1200px]:px-0  ">
{/* content */}
      <div className="w-full grid  grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
{/* grid */}
       <div className="w-full flex flex-col justify-center items-center max-md:border-b">
        <span className="text-7xl font-bold text-black">
          56K

        </span>
        <span className="text-black font-bold">
          Happy Clients
        </span>
       </div>

       <div className="w-full flex flex-col justify-center items-center max-md:border-b">
        <span className="text-7xl font-bold text-black">
          98%

        </span>
        <span className="text-black font-bold">
          Successful Projects
        </span>
       </div>

       <div className="w-full flex flex-col justify-center items-center max-md:border-b">
        <span className="text-7xl font-bold text-black">
         25+

        </span>
        <span className="text-black font-bold">
          Ongoing Projects
        </span>
       </div>

      </div>
      
    </div>
    </div>
  )
}

export default ShowCase
