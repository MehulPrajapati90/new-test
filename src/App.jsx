import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router'
import Home from './pages/Home'
import NotExist from './utils/NotExist'
import { GoArrowUpRight } from "react-icons/go";
import Contact from './pages/Contact'
import { FaHome } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { FaIndustry } from "react-icons/fa6";
import { BsGridFill } from "react-icons/bs";

const AppComponent = () => {
  return (
    <>
      <nav className='bg-slate-900 fixed top-5 md:top-10 left-1 right-1 md:left-30 md:right-30 h-15 md:h-20 rounded-full md:rounded-none md:rounded-b-full flex justify-center items-center nav-shadow backdrop-blur-[10px] z-20'>
        <div className='w-[90%] flex justify-between items-center'>
          <Link to='/'> <h1 className='font-bold text-[15px] md:text-2xl text-white transition-all hover:text-blue-500 hover:scale-95'>Yash Bearings.</h1></Link>
          <Link to={'/contact'}>
           <div className="flex justify-center items-center gap-1 transition-all hover:bg-pink-300 hover:scale-95 bg-[#FFC1FC] text-[#A90084] border-2 text-[12px] md:text-[15px] font-semibold border-[#A90084] contact-shadow rounded-2xl w-20 md:w-30">
                <h1>Contact</h1>
                <GoArrowUpRight />
              </div>
          </Link>
        </div>
      </nav>

      <nav className='z-100 flex justify-between items-center px-15 md:hidden bg-slate-900 h-12 w-full fixed bottom-0 left-0 right-0 rounded-t-[5px] text-[17px] text-white'>
        <Link to={"/"}><FaHome/></Link>
        <a href="#industry"><BsGridFill/></a>
        <a href="#product"><FaIndustry/></a>
        <Link to={"/contact"}><MdContacts/></Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/contact' element={<Contact/>}>Contact</Route>
        <Route path='*' element={<NotExist />}></Route>
      </Routes>
    </>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <AppComponent />
    </BrowserRouter>
  )
}

export default App