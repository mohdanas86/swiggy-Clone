import React, { useRef, useState, useEffect } from 'react';
import { ResturentChanis } from '../data/restaurantChains.jsx';
import Card from "./Card.jsx"

import { IoIosArrowDown } from "react-icons/io";
import { MdFilterList } from "react-icons/md";

const Resturents = () => {
  const [resData, setSesData]=useState(ResturentChanis)
  
  const componentRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);

    const [pageTitle, setPageTitle]=useState();
    const pageTit = "Restaurants with online food delivery in Delhi";
  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        setIsAtTop(rect.top <= 0);
      }
    };
    const updateTitle =()=>{
      if(window.innerWidth < 786){
        setPageTitle(pageTit.length>= 30?pageTit.substr(0, 25)+"...":"")
      }else{
        setPageTitle(pageTit)
      }
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateTitle)

updateTitle()
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateTitle)
    };
  }, [pageTit]);

  return (
         <div className="flex items-center flex-col md:w-[80%] w-full m-auto py-8 pb-0 px-4 md:px-0 border-b-[2px]">
        {/* RESTURENTS HEADER */}
        <div className="flex flex-col items-start justify-center w-full m-auto duration-300 overflow-hidden" ref={componentRef}>
        
          <h2 className="w-full  font-bold text-slate-900 text-lg mb-4 md:mb-0"> {pageTit}</h2>
          
          <div className={`w-full flex justify-start items-center  ${isAtTop? "shadow-lg bg-white fixed top-0 left-0 z-[9999] ":""}`}>
          <div className={`listOverFlow w-full m-auto flex justify-start items-center p-0 py-3 md:py-5 px-2 md:px-0 gap-4 ${isAtTop? "md:w-[80%]":""}`} >
          
      <a href="/"><div className="listItems flex items-center justify-center border border-slate-400 py-1.5 px-4 rounded-3xl gap-2 font-[500]">filter <MdFilterList /></div></a>
      
      <a href="/"><div className="listItems flex items-center justify-center border border-slate-400 py-1.5 px-4 rounded-3xl gap-2 font-[500]">sort <IoIosArrowDown /></div></a>
      
      <a href="/"><div className="listItems flex items-center justify-center border border-slate-400 py-1.5 px-4 rounded-3xl gap-2 font-[500]">rating</div></a>
      
      <a href="/"><div className="listItems flex items-center justify-center border border-slate-400 py-1.5 px-4 rounded-3xl gap-2 font-[500]">offer</div></a>
      
          </div>
          </div>
          </div>
        
        {/* RESTURENTS CARDS */}
  <div className="w-full md:mt-2 mt-5">
        <div className="grid gap-3 grid-cols-2 md:grid-cols-3">
          {resData && resData.map((v, i) => (
            <div className="flex items-center justify-center" key={i}>
              <Card {...v} />
            </div>
          ))}
        </div>
      </div>
        
    </div>
  )
}

export default Resturents