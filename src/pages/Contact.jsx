import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import whatsapp from '../images/whatsapp.svg';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", 'cea07ca3-9b87-403e-9c81-e42707178a41');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    console.log(json);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div className='min-h-screen w-full flex items-end-safe'>
      <div className='min-h-[80vh] w-full flex justify-center items-center flex-col border gap-20 text-[#5F5F5F]'>
        <div className='h-full w-full flex flex-col justify-center items-center mt-30 md:mt-40'>
          <div className='w-[90vw] md:w-[80vw] flex flex-col justify-center item-start gap-1'>
            <h1 className='text-2xl font-bold'>Contact Us</h1>
            <p className='text-[12px] md:text-[15px] font-medium'>Have questions about our services or need a quote? Get in touch with our team using the information below.</p>
          </div>
          <div className='w-[90vw] md:w-[80vw] shadow-2xl px-5 sm:px-10 md:px-30 py-10 bg-[#E4FFFE] border-2 border-[#72F7FF] rounded-[15px] flex justify-center items-center mt-10'>
            <form onSubmit={onSubmit} className='w-full flex flex-col gap-10'>
              <input required type="text" name="name" placeholder="Your Name" className='border-2 border-[#BEFCFF] rounded-[5px] py-2 bg-white text-[13px] md:text-[15px] font-bold text-[#00A0A9] transition-all hover:border-[#72F7FF] focus:border-[#00A0A9] focus:outline-none' />
              <input required type="email" name="email" placeholder="Your Email" className='border-2 border-[#BEFCFF] rounded-[5px] py-2 bg-white text-[13px] md:text-[15px] font-bold text-[#00A0A9] transition-all hover:border-[#72F7FF] focus:border-[#00A0A9] focus:outline-none' />
              <input required type="number" name="number" placeholder="Your Number" className='border-2 border-[#BEFCFF] rounded-[5px] py-2 bg-white text-[13px] md:text-[15px] font-bold text-[#00A0A9] transition-all hover:border-[#72F7FF] focus:border-[#00A0A9] focus:outline-none' />
              <textarea required name="message" placeholder="Your Message" className='border-2 border-[#BEFCFF] rounded-[5px] px-2 h-30 py-2 bg-white text-[13px] md:text-[15px] font-bold text-[#00A0A9] transition-all hover:border-[#72F7FF] focus:border-[#00A0A9] focus:outline-none'></textarea>
              <button type="submit" className='border-2 border-[#00A0A9] transition-all hover:bg-[#005A5F] bg-[#00A0A9] text-white rounded-[5px] py-2 text-[13px] md:text-[15px] font-semibold'>Submit Form</button>
            </form>
          </div>
        </div>
        <div className='h-full w-full flex flex-col justify-center items-center gap-20'>
          <div className='w-[80vw] flex flex-col justify-center item-start gap-1'>
            <h1 className='text-xl md:text-2xl font-bold'>Contact Us via WhatsApp</h1>
            <p className='text-[12px] md:text-[15px] font-medium'>Get answers to your questions on WhatsApp™.</p>
          </div>
          <div className='w-[90vw] md:w-[40vw] min-h-60 bg-[#E2FFFD] rounded-xl flex flex-col justify-center items-center gap-5 p-5 border-2 shadow-2xl border-[#d5fdff]'>
            <img src={whatsapp} alt="whatsApp" className='md:h-15 md:w-15 h-10 w-10 transition-all hover:scale-95'/>
            <h1 className='text-[14px] md:text-[15px] font-medium'>Quick Connect</h1>
            <div className='text-[15px] md:text-[18px] text-[#00868d] px-12 rounded-xl transition-all hover:bg-[#b7fbff] py-2 bg-[#85f9ff] font-semibold flex justify-center items-center gap-1 w-fit hover:scale-98 border-2 border-[#55f6ff]'>
              <a href="https://wa.me/918450875155" target='_blank'>Chat with us</a>
              <GoArrowUpRight className='mt-[3px]'/>
            </div>
          </div>
        </div>
        <div className='mb-20 mt-10 flex flex-col justify-center items-center gap-5 w-[80vw]'>
          <h1 className='text-xl font-bold'>Yash Bearings</h1>
          <div className='h-[2px] w-[80vw] bg-[#cbcbcb]'></div>
          <div className='flex flex-col justify-between md:items-center gap-2 text-[13px] md:text-[14px] font-medium text-[#5F5F5F] w-full'>
            <h1>Copyright © 2025 Yash Bearings</h1>
            <h1>Designed and Developed by CreatiQ.Tech</h1>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Contact