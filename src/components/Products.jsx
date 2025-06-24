import { productData } from "../utils/productData.js"
import { GoArrowUpRight } from "react-icons/go";

const Products = () => {
  return (
    <div id="product" className="min-h-screen w-full flex justify-center items-center text-slate-700">
      <div className="w-[90vw] min-h-screen flex flex-col justify-center items-center gap-10 md:gap-20 mt-30">
        <div className="w-full flex justify-center items-center flex-col gap-3 text-black">
          <h1 className="text-2xl md:text-4xl font-bold">The Product’s we have</h1>
          <p className="text-[12px] md:text-[15px] font-medium text-center">Find out more about our commitment to industrial sustainability, the opportunities at SKF around the world and our stories in the selected sections below.</p>
        </div>
        <div className="h-[1px] w-[90vw] md:w-[80vw] bg-gray-300"></div>
        <div className="w-full flex justify-center items-center gap-5 flex-wrap mb-10">
          {
            productData.map((val) => {
              return (
                <div key={val.name} className="bg-[#D9D9D9] w-70 md:w-68 min-h-140 rounded-[10px] flex flex-col justify-between pb-2 items-center hover:shadow-2xl border border-[#dddddd] hover:shadow-slate-700  transition-all hover:scale-105 hover:bg-slate-800 hover:text-white duration-150">
                  <div className="w-full h-65 md:h-70 bg-white rounded-[10px]">
                    <img src={val.image} alt={val.title} className="w-full h-full rounded-[10px]" />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-5 p-2">
                    <h1 className="text-md font-extrabold text-center">{val.title}</h1>
                    <p className="line-clamp-4 text-center text-sm font-medium px-1">{val.description}</p>
                  </div>
                  <h1 className="text-md font-bold">Use Cases</h1>
                  <div className="flex h-full justify-center items-center flex-col gap-2">
                    {
                      val.uses.map((data) => {
                        return (
                          <div key={data} className="flex justify-center text-center w-full">
                            <h1 className="bg-gray-100 text-black text-sm hover:text-white w-full px-15 py-[2px] rounded-[5px] gap-5 transition-all hover:bg-blue-600">{data}</h1>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
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

export default Products