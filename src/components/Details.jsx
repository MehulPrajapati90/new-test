import { owner } from "../utils/owners.js";
import { GoArrowUpRight } from "react-icons/go";

const Details = () => {
  return (
    <div id="details" className="min-h-screen w-full pt-10 md:pt-40 md:pb-10">
      <div className="min-h-screen w-full flex justify-center items-center flex-col gap-10 text-slate-800">
        <div className="flex flex-col justify-center items-center gap-5 mb-10 text-[#5F5F5F]">
          <h1 className="text-2xl md:text-4xl font-bold">Who We Are</h1>
          <p className="text-center px-5 md:px-0 text-[12px] md:text-[15px] max-w-[700px]">
            Yash Bearing’s was founded in 1907. We are represented in around 130 countries, with more than 40 000 employees and 17 000 distributor locations worldwide.
          </p>
        </div>
        <div className="h-[1.5px] w-[90vw] md:w-[80vw] bg-[#D9D9D9]"></div>
        <div className='flex flex-col justify-center items-center gap-10 mt-10 mb-10 text-[#5F5F5F]'>
          <div className='flex flex-col justify-center items-center gap-5 bg-image-owner-ref h-50 w-[90vw] md:w-[80vw] relative'>
            <div className='absolute top-0 left-0 text-white flex flex-col gap-23 h-full w-full bg-black/50'>
              <h1 className='text-2xl font-bold my-2 mx-5'>Owners</h1>
              <h1 className='text-[9px] sm:text-[13px] md:text-[15px] font-semibold mx-5 my-5'>Bearing . Belts . Block . Chains . Gearbox . Motor . Grease . Pulley</h1>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-[90vw] md:w-[80vw]">
            {
              owner.map((val) => {
                return (
                  <div key={val.id} className="flex flex-col items-center min-h-100 w-full md:w-[50%] bg-[#D9D9D9] shadow-2xl shadow-gray-400 rounded-lg transition-all duration-150 hover:scale-102 hover:bg-slate-800 hover:text-white hover:shadow-lg">
                    <div className="w-full h-55 bg-slate-700 rounded-[5px]">
                      <img className="w-full h-full rounded-[5px]" src={`${val.image}`} alt="oops" />
                    </div>
                    <div className="w-full px-5 md:px-0 md:w-[70%] rounded-l-2xl h-50 flex flex-col justify-center text-center items-center gap-2">
                      <h1 className="text-xl md:text-2xl font-bold">{val.name}</h1>
                      <p className="text-[13px] md:text-[15px] font-semibold">{val.description}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="h-[1.5px] w-[90vw] md:w-[80vw] bg-[#D9D9D9]"></div>
        <div className='flex flex-col justify-center items-center gap-5 bg-image-company-ref h-50 w-[90vw] md:w-[80vw] relative mt-10'>
          <div className='absolute top-0 left-0 text-white flex flex-col gap-23 h-full w-full bg-black/50'>
            <h1 className='text-2xl font-bold my-2 mx-5'>The Company</h1>
            <h1 className='text-[15px] font-semibold mx-5 my-5'>Delhi . Mumbai . Kolkata</h1>
          </div>
        </div>
        <div className= "w-[90vw] md:w-[80vw] font-semibold text-[12px] md:text-[15px] mb-3 md:mb-10 text-[#5F5F5F]">
          <p>
            Yash Bearings is a reputed supplier of high-precision industrial bearings, catering to diverse sectors such as automotive, agriculture, machinery, and electrical equipment. Known for their commitment to quality and innovation, Yash Bearings produces a wide range of products, including deep groove ball bearings, tapered roller bearings, and specialty bearings designed for heavy-duty applications. The company adheres to stringent international standards, ensuring durability, efficiency, and optimal performance in demanding environments. With a strong focus on customer satisfaction, Yash Bearings provides customized solutions, competitive pricing, and reliable after-sales support. Its growing presence in both domestic and international markets makes it a trusted name in the bearing industry.
          </p>
        </div>

        <div className="h-[1.5px] w-[90vw] md:w-[80vw] bg-[#D9D9D9]"></div>

        <div className="flex justify-start items-center w-[90vw] md:w-[80vw] md:text-[18px] text-[13px] font-bold gap-5 md:gap-10">
          <div className="flex items-center gap-2">
            <h1>Product</h1>
            <GoArrowUpRight className="text-[#00A0A9] mt-[3px]"/>
          </div>
          <div className="flex items-center gap-2">
            <h1>Industries</h1>
            <GoArrowUpRight className="text-[#00A0A9] mt-[3px]"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details