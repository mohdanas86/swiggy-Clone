import {useState} from 'react'
import {CityResturent} from "../data/cityResturent.jsx"

import { IoIosArrowDown } from "react-icons/io";

const FooterOptions = () => {
  const [data, setData]=useState(CityResturent);
  const [defaultShow, setDefaultShow]=useState(8);
  
  const showMore=()=>{
    setDefaultShow(defaultShow + 8)
  }
  return (
    <>
    <div className="flex flex-col justify-center items-center w-full md:w-[80%] py-4 m-auto px-4 mt-4">
    <h2 className="w-full text-start font-semibold text-lg">Best Cuisines Near Me</h2>
    <div className="grid md:grid-cols-4 grid-cols-2 w-full py-4 gap-3">
    {CityResturent &&
    CityResturent.slice(0, defaultShow).map((v, i)=>{
      return(
    <button className="border border-slate-300 py-3 px-4 font-[500] rounded-lg cursor-pointer text-[1rem]" key={i}>{v.restaurant.length <= 30 ? v.restaurant.substr(0, 15)+"...":""}</button>
        )
    })
    }
    </div>
    <button className="flex justify-center items-center gap-4 border border-slate-300 py-3 px-2 font-[500] rounded-lg cursor-pointe text-[1rem] w-full" onClick={showMore}>View more <IoIosArrowDown /></button>
    </div>
    </>
  )
}

export default FooterOptions