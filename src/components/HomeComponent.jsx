import { GoArrowUpRight } from "react-icons/go";
import Marquee from "react-fast-marquee";

const HomeComponent = () => {
  return (
    <div className='min-h-screen w-full flex justify-center items-end text-[#5F5F5F]'>
      <div className="min-h-[90vh] w-full flex justify-center items-center flex-col gap-5">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-xl md:text-2xl font-bold">Yash Bearings.</h1>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold md:font-semibold bebas">Discover top-grade bearings</h1>
            <div className="flex gap-2">
              <div className="flex items-end-safe">
                <span className="text-[15px] mb-[3px] md:mb-0 md:text-2xl font-bold text-[#04E4D8] bebas">crafted for</span>
              </div>
              <span className="text-[22px] md:text-3xl lg:text-4xl font-bold bebas">efficiency and endurance</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="h-70 w-70 md:block hidden">
            <div className="bg-img-1 h-full w-full hover:scale-95 transition-all duration-120 hover:rotate-10 ease-in-out"></div>
          </div>
          <div className="h-60 w-60 flex flex-col justify-center items-center">
            <div className="flex justify-center items-center gap-2">
              <div className="flex justify-center items-center gap-1 transition-all product-shadow hover:bg-cyan-300 hover:scale-95 bg-[#C1FFFC] text-[#00A0A9] border-2 text-md font-semibold border-[#00A0A9] rounded-2xl w-30">
                <h1>Products</h1>
                <GoArrowUpRight />
              </div>
              <div className="flex justify-center items-center gap-1 transition-all industry-shadow hover:bg-blue-300 hover:scale-95 bg-[#D3E8FF] text-[#007AFF] border-2 text-md font-semibold border-[#007AFF] rounded-2xl w-30">
                <h1>Industries</h1>
                <GoArrowUpRight />
              </div>
            </div>
            <div className="flex justify-center items-center h-45 w-full">
              <div className="bg-img-2 h-30 w-full hover:scale-95 transition-all duration-120 hover:rotate-10 ease-in-out"></div>
              <div className="bg-img-3 h-30 w-full hover:scale-95 transition-all duration-120 hover:rotate-10 ease-in-out"></div>
            </div>
          </div>
          <div className="h-70 w-70 md:block hidden">
            <div className="bg-img-4 h-full w-full hover:scale-95 transition-all duration-120 hover:rotate-10 ease-in-out"></div>
          </div>
        </div>
        <div className="text-md font-bold text-black">
          <h1>Industries we are in!</h1>
        </div>
        <div className="h-[2px] w-[80vw] md:w-[30vw] bg-[#D9D9D9]"></div>
        <div className="hidden md:flex justify-center items-center">
            <Marquee pauseOnClick pauseOnHover gradient gradientColor="white" gradientWidth={"100px"}  className="w-full md:max-w-225 text-gray-500 tracking-[0.1px] text-center flex">
              <div className="w-20 md:w-50">
                <h1 className="text-[10px] md:text-2xl bebas">Crusher Industry</h1>
              </div>
              <div className="w-20 md:w-50">
                <h1 className="text-[10px] md:text-2xl bebas">Automotive Industry</h1>
              </div>
              <div className="w-20 md:w-50">
                <h1 className="text-[10px] md:text-2xl bebas">Agriculture</h1>
              </div>
              <div className="w-20 md:w-50">
                <h1 className="text-[10px] md:text-2xl bebas">Food Processing</h1>
              </div>
              <div className="w-20 md:w-50">
                <h1 className="text-[10px] md:text-2xl bebas">Lathe Machine</h1>
              </div>
              <div className="w-20 md:w-50">
                <h1 className="text-[10px] md:text-2xl bebas">Rolling Mill</h1>
              </div>
              <div className="w-20 md:w-50">
                <h1 className="text-[10px] md:text-2xl bebas">Rail & Transit</h1>
              </div>
              <div className="w-20 md:w-50">
                <h1 className="text-[10px] md:text-2xl bebas">Infrastructure</h1>
              </div>
              <div className="w-20 md:w-50">
                <h1 className="text-[10px] md:text-2xl bebas">Pulp & Paper Mill</h1>
              </div>
              <div className="w-20 md:w-50">
                <h1 className="text-[10px] md:text-2xl bebas">Wind Energy</h1>
              </div>
              <div className="w-20 md:w-50">
                <h1 className="text-[10px] md:text-2xl bebas">Sponge Iron</h1>
              </div>
              <div className="w-20 md:w-70">
                <h1 className="text-[10px] md:text-2xl bebas">Motor Pumps & Compressors</h1>
              </div>
              <div className="w-20 md:w-20">
                <h1 className="text-[10px] md:text-2xl bebas">Gear Box</h1>
              </div>
              <div className="w-20 md:w-50">
                <h1 className="text-[10px] md:text-2xl bebas">Cement Industry</h1>
              </div>
            </Marquee>
        </div>
      </div>
    </div>
  )
}

export default HomeComponent