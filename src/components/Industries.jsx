import { GoArrowUpRight } from "react-icons/go";
import { industryData } from "../utils/industryData.js";

const Industries = () => {
  return (
    <div id="industry" className="min-h-screen w-full flex justify-center items-center text-[#5F5F5F]">
      <div className="w-[90vw] min-h-screen flex flex-col justify-center items-center gap-10 md:gap-20 mt-30">
        <div className="w-[90vw] md:w-[80vw] flex justify-center items-center flex-col gap-3 text-black">
          <h1 className="text-[20px] md:text-4xl font-bold">The Industries we are In!</h1>
          <p className="text-[12px] md:text-[16px] font-medium text-center">Our ball bearings are used in a variety of applications and industries that all involve moving parts. Some of these applications have specific features and requirements for which, Yash Bearings India supplies bearings to variety of industries, learn more below.</p>
        </div>
        <div className="h-[1px] w-[90vw] md:w-[80vw] bg-gray-300"></div>
        <div className="w-full flex justify-center items-center gap-5 flex-wrap mb-3 md:mb-10 text-slate-800">
          {
            industryData.map((val) => {
              return (
                <div key={val.name} className="bg-[#D9D9D9] w-75 md:w-68 min-h-80 rounded-[10px] flex flex-col justify-start pb-2 items-center hover:shadow-2xl border border-[#dddddd] hover:shadow-slate-700  transition-all hover:scale-105 hover:bg-slate-800 hover:text-white duration-150 gap-5">
                  <div className="w-full h-55 md:h-70 bg-white rounded-[10px]">
                    <img src={val.image} alt={val.title} className="w-full h-full rounded-[10px]" />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-3 md:gap-5 p-2">
                    <h1 className="text-lg font-extrabold text-center">{val.title}</h1>
                    <p className="line-clamp-4 text-center text-[12px] md:text-[13px] font-medium px-1">{val.description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>

        <div className="h-[1.5px] w-[90vw] md:w-[80vw] bg-[#D9D9D9]"></div>

        <div className="flex justify-start items-center w-[90vw] md:w-[80vw] md:text-[18px] text-[13px] font-bold gap-5 md:gap-10 mb-10">
          <div className="flex items-center gap-2">
            <h1>Product</h1>
            <GoArrowUpRight className="text-[#00A0A9] mt-[3px]" />
          </div>
          <div className="flex items-center gap-2">
            <h1>Industries</h1>
            <GoArrowUpRight className="text-[#00A0A9] mt-[3px]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Industries