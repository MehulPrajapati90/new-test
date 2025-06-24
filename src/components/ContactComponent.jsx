import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const ContactComponent = () => {
    return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center bg-[#00A0A9] text-[#ACFFFB]'>
            <div className='w-[90vw] md:w-[80vw] flex flex-col justify-center items-center gap-10 mt-20 md:mt-50'>
                <div className="z-10 flex justify-center items-center gap-1 transition-all footer-shadow hover:bg-slate-300 hover:scale-95 bg-white text-slate-900 border-2 text-md font-semibold border-slate-800 shadow-white rounded-2xl w-30">
                    <h1>Contact</h1>
                    <GoArrowUpRight />
                </div>
                <div className='w-full flex justify-center items-center flex-col gap-5'>
                    <div className='w-full flex flex-col md:flex-row justify-center items-center gap-5'>
                        <div className='w-full md:w-[50%] bg-[#007076] h-120  rounded-[10px] flex flex-col items-center p-5'>
                            <h1 className='text-2xl font-bold'>Contact Information</h1>
                        </div>
                        <div className='w-full md:w-[50%] bg-[#007076] h-120  rounded-[10px] flex flex-col items-center p-5'>
                            <h1 className='text-2xl font-bold'>Our Address</h1>
                        </div>
                    </div>
                    <div className='w-full bg-[#007076] h-30 flex justify-between items-center flex-col gap-2 p-5 rounded-[10px]'>
                        <h1 className='text-2xl font-bold'>We Sell</h1>
                        <h1 className='text-[12px] text-center md:text-[16px] font-medium'>Bearing . Belts - Block . Chains . Gearbox . Motor . Grease . Pulley</h1>
                    </div>
                </div>
                <div className='mb-20 md:mt-10 flex flex-col justify-center items-center gap-5 w-[90vw] md:w-[80vw]'>
                    <h1 className='text-xl font-bold text-white'>Yash Bearings</h1>
                    <div className='h-[2px] w-[90vw] md:w-[80vw] bg-[#04E4D8]'></div>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-2 text-[12px] md:text-[14px] font-medium w-full'>
                        <h1>Copyright © 2025 Yash Bearings</h1>
                        <h1>Designed and Developed by CreatiQ.Tech</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactComponent
