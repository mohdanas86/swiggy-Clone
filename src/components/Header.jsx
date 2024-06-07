import {useState} from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
 import { TbBriefcase2 } from "react-icons/tb";
  import { IoIosSearch } from "react-icons/io";
  import { CiDiscount1 } from "react-icons/ci";
  import { IoHelpBuoyOutline } from "react-icons/io5";
  import { CiUser } from "react-icons/ci";
  import { CiShoppingCart } from "react-icons/ci";
  import { MdLocationSearching } from "react-icons/md";
  import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  let img = "https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem-1536x864.png";
  const navList =()=>[
    {
      link : <IoIosSearch />,
      name: "Search",
    },
    {
      link : <CiDiscount1 />,
      name: "Offers",
      sup: "new"
    },
    {
      link : <IoHelpBuoyOutline />,
      name: "Help",
    },
    {
      link : <CiUser />,
      name: "Sign In",
    },
    {
      link : <CiShoppingCart />,
      name: "Cart",
    },
    ];
const [linkList, setLinkList]=useState(navList)
    
    const [toggle, setToggle]=useState(false)
  return (
    <>
    <div className="shadow-lg sticky top-0 bg-white z-50">
    <div className="flex items-center md:w-[90%] w-full py-4 px-4 md:px-0 border-0 m-auto">
 <div className="md:w-[60px] w-[50px] hidden md:block">
 <img src={img} className="w-full" />
    </div>
    
    <div className="flex items-center gap-2 cursor-pointer" onClick={()=>setToggle((e)=>!e)}>
    <span className="font-semibold border-b-[2px] border-slate-600 text-slate-600">Other</span>
    <MdKeyboardArrowDown  className="text-2xl"/>
    </div>
    
    <div className="flex justify-center items-center gap-4 ml-auto list-none text-lg hidden md:flex">
  {linkList.map((v, i) => (
  <li key={i} className="flex items-center cursor-pointer gap-2 font-semibold hover:text-[#fc8019]">
    {v.link}
    {v.name}
  </li>
))}
    </div>
    </div>
    </div>
    
    <div className={`z-10 w-full h-full bg-[rgba(0,0,0,0.500)] fixed top-0 ${toggle ? "visible z-[999]" : "hidden"}`} onClick={()=>setToggle((e)=>!e)}>
    <div className=" md:w-[400px] w-[70%] h-full bg-white flex flex-col justify-start items-start md:p-[4rem] p-[2rem] pt-[4rem]" onClick={(e)=>e.stopPropagation()}>
    
     <span className="absolute top-[1rem] left-[1rem] cursor-pointer" onClick={(e)=>setToggle((e)=>!e)}><IoCloseSharp className="text-2xl md:text-3xl font-bold" /></span>
    
    <div className="flex justify-center items-center border w-full mb-8 mt-4">
    <input type="text" className="w-full border border-slate-400 md:py-3 py-2 px-4 rounded-md hover:shadow-lg" placeholder="Search for area, steet name.." />
    </div>
    
    <div className="border border-slate-400 rounded-lg flex items-start justify-start py-4 px-3 gap-4 w-full">
    <div className="flex items-center justify-center mt-[0.2rem] text-[1.2rem]">
    <MdLocationSearching />
    </div>
    <div className="flex items-center justify-center">
    <div className="flex flex-col items-start">
    <p className="font-semibold hover:text-[#fc8019]">Get current location</p>
    <p className="text-slate-600">Using GPS</p>
    </div>
    </div>
    </div>
    
    </div>
    </div>
    </>
  )
}

export default Header