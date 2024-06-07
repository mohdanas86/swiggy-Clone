import React, { useRef, useState } from 'react';

import { FaStar } from "react-icons/fa";


const Card = (v) => {
  const swipeRef = useRef(null)
  return (
    <>
    <div className="cardMainCon flex flex-col w-[160px] p-0 grow shrink-0 cursor-pointer duration-200 mb-6">
  <div className="w-full h-[135px] md:h-[145px] rounded-[15px] overflow-hidden relative">
   <img src={v.image} className="w-full h-full object-cover" />
   <div className="cardOverplay absolute top-0 w-full h-full" />
   <h4 className="text-white font-semibold absolute bottom-2 left-4">{v.offer}</h4>
</div>
<div className="mt-2 font-semibold">{v.title.length <= 35 ? v.title.substr(0, 15) + "...": ""}</div>
<div className="flex items-center mt-1 gap-4 gap-2 md:gap-3">
<div className="flex items-center gap-2 md:gap-3">
<div className="flex items-center justify-center rounded-full text-white bg-green-600 w-[20px] h-[20px] p-[0.3rem]"><FaStar /></div>
{v.rating}
</div>
{v.minTime} : {v.maxTime} mins
</div>

    <div className="mt-1 text-slate-600 tex-xl">
    {v.name}
    <br />
    {v.place.length <= 30 ? v.place.substr(0, 15) + "...":""}
    </div>
    
    </div>
    </>
  )
}

export default Card