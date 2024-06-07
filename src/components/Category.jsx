import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa';

import { CategoryItem } from '../data/CategoryItem.jsx';
import {SliderSettings} from "./SliderSetting.jsx"

const Category = () => {
  const swiperRef = useRef(null);
  const [cat, setCat] = useState(CategoryItem);

  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <>
      <div className="flex items-center flex-col md:w-[80%] w-full m-auto py-8 px-4 md:px-0 border-b-[2px] pb-4">
        {/* CATEGORY HEADER */}
        <div className="flex items-center justify-between w-full m-auto">
          <h2 className="font-bold text-slate-900 text-lg">What's on your mind?</h2>
          <div className="flex items-center gap-2">
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

        {/* CATEGORIES */}
        <Swiper ref={swiperRef} {...SliderSettings} className="w-[100%] mt-4 md:mt-6">
          {cat.map((v, i) => (
            <SwiperSlide key={i} className="flex items-center justify-center">
              <div className="flex items-center justify-center md:w-[150px] w-[100px] duration-300 cursor-pointer">
                <img src={v.image} alt={`category-${i}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Category;
