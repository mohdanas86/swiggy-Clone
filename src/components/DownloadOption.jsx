import {useState} from 'react'
import {CityResturent} from "../data/cityResturent.jsx"

import { IoIosArrowDown } from "react-icons/io";

const DownloadOption = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center w-full h-[100px] m-auto px-4 bg-[#F1F0F5]">
    
    {/* DOWNLOAD OPTIONS */}
    <div className="w-full flex items-center justify-center gap-4">
    <img src={"/app_store.png"} className="w-[150px]" />
    <img src={"/play_store.png"} className="w-[150px]" />
    </div>
    
    </div>
    </>
  )
}

export default DownloadOption