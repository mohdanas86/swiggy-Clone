import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {TopSliderSettings} from "./SliderSetting.jsx"
import { FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa';
import { ResturentChanis } from '../data/restaurantChains.jsx';
import Card from "./Card.jsx"

const TopItems = () => {
  const swipeRef = useRef(null)
  const [topItem, setTopItem]=useState(ResturentChanis)
  const slidePrev=()=>{
    if(swipeRef.current && swipeRef.current.swiper){
      swipeRef.current.swiper.slidePrev()
    }
  }
  const slideNext=()=>{
    if(swipeRef.current && swipeRef.current.swiper){
      swipeRef.current.swiper.slideNext()
    }
  }
  return (
       <>
      <div className="flex items-center flex-col md:w-[80%] w-full m-auto py-8 px-4 md:px-0 border-b-[2px] pb-0">
        {/* TOPITEMS HEADER */}
        <div className="flex items-center justify-between w-full m-auto">
          <h2 className="w-full font-bold text-slate-900 text-lg">Top resturents chains in delhi</h2>
          <div className="hidden md:flex items-center gap-2">
            <span
              className="border-0 rounded-full text-slate-900 text-[1rem] p-2 cursor-pointer bg-[rgba(0,0,0,0.106)]"
              onClick={slidePrev}
            >
              <FaLongArrowAltLeft />
            </span>
            <span
              className="border-0 rounded-full bg-[rgba(0,0,0,0.106)] text-slate-900 text-[1rem] p-2 cursor-pointer"
              onClick={slideNext}
            >
              <FaLongArrowAltRight />
            </span>
          </div>
        </div>
        {/* TOPITEMS CARD */}
        <div className="flex gap-3 overflow-hidden w-full mt-8">
            <Swiper ref={swipeRef} {...TopSliderSettings}>
        {topItem &&
          topItem.map((v, i)=>{
          return(
    <SwiperSlide className="flex items-center justify-center gap-3">
        <Card {...v} key={i} />
            </SwiperSlide>
        )
        })
        }
    </Swiper>
        </div>
        
        </div>
        </>
  )
}

export default TopItems