import React from 'react'

const Footer = () => {
  let img = "https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem-1536x864.png";
  return (
    <>
    <div className="flex justify-center items-center w-full bg-[#02050C]">
    <div className="flex flex-col justify-start items-center   w-full md:w-[80%] py-4 px-4 m-auto">
    {/* FOOTER HEADER */}
    <div className="flex justify-start items-center   w-full pt-4 pb-2">
    <img src={img} className="w-[50px]" style={{
  filter: "invert(1) brightness(2) saturate(0)"
}}/>
    <h2 className="text-white font-bold  text-xl">Swiggy</h2>
    </div>
    <p className="w-full text-start text-slate-300 mb-6">&copy; 2024 Anas Pvt. Ltd</p>
    
        {/* FOOTER LISTS */}
    <div className="grid grid-cols-2 gap-4   w-full py-4">
        {/* list */}
    <div className="flex flex-col justify-start items-start   w-full py-4">
    <h2 className="text-white font-bold  text-xl mb-2 text-xl">Company</h2>
    
    <ul className="flex flex-col justify-start text-slate-300 list-none gap-1  font-semibold">
    <a href="/"><li>About</li></a>
    <a href="/"><li>Careers</li></a>
    <a href="/"><li>Team</li></a>
    <a href="/"><li>Swiggy One</li></a>
    <a href="/"><li>Swiggy Instamart</li></a>
    <a href="/"><li>Swiggy Genie</li></a>
    </ul>
    </div>
        {/* list */}
    <div className="flex flex-col justify-start items-start   w-full py-4">
    <h2 className="text-white font-bold  text-xl mb-2 text-xl">Contact Us</h2>
    
    <ul className="flex flex-col justify-start text-slate-300 list-none gap-1  font-semibold">
    <a href="/"><li>Help & Support</li></a>
    <a href="/"><li>Partner with us</li></a>
    <a href="/"><li>Ride with us</li></a>
    </ul>
    </div>
        {/* list */}
    <div className="flex flex-col justify-start items-start   w-full py-4">
    <h2 className="text-white font-bold  text-xl mb-2 text-xl">Legal</h2>
    
    <ul className="flex flex-col justify-start text-slate-300 list-none gap-1  font-semibold">
    <a href="/"><li>Terms & Conditions</li></a>
    <a href="/"><li>cookies Policy</li></a>
    <a href="/"><li>Privacy Policy</li></a>
    <a href="/"><li>Invester Relations</li></a>
    </ul>
    </div>
        {/* list */}
    <div className="flex flex-col justify-start items-start   w-full py-4">
    <h2 className="text-white font-bold  text-xl mb-2 text-xl">We deliever to:</h2>
    
    <ul className="flex flex-col justify-start text-slate-300 list-none gap-1  font-semibold">
    <a href="/"><li>Banglore</li></a>
    <a href="/"><li>Gurgaon</li></a>
    <a href="/"><li>Hydrabad</li></a>
    <a href="/"><li>Delhi</li></a>
    <a href="/"><li>Pune</li></a>
    <a href="/"><li>Mumbai</li></a>
    </ul>
    </div>

    
    </div>
    
    </div>
    </div>
    </>
  )
}

export default Footer