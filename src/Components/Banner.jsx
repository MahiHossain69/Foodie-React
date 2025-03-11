import React from 'react'
import BannerImg from "../assets/banner.png"
import Logo from "../assets/logo.png"
import BannerSide from "../assets/Bannerside.png"
import { FaArrowLeft } from "react-icons/fa6";
import Container from './Container';


const Banner = () => {
  return (
   <>
   <div className="">
     
      <section className="relative h-[830px] w-[100%]  overflow-hidden">
      
       
      <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-hero-pattern"  >
 
  <div className="absolute inset-0 bg-black/40" />
</div>

        
       
     <div className="container mx-auto">
     <div className="relative   px-6">
        
        <div className="pt-8">
        <img className='' src={Logo}/>
        </div>

       
        <div className="h-full flex flex-col justify-center mt-[180px] max-w-2xl">
          <div className="text-white space-y-6">
            <div className="space-y-2">
              <p className="font-epi font-normal text-[24px]">One Meal, Every Diet – Powered by</p>
              <h2 className="text-[64px] font-gara font-extrabold">Real-Time AI</h2>
            </div>

           

            <div className="flex gap-4 pt-4">
              <button className="bg-transparent font-epi font-semibold hover:bg-[#F4A261] text-white px-6 py-3 rounded-[10px] border-[2px] border-[#F4A261] transition-colors">
                Sign Up For Early Access
              </button>
              <button className="bg-transparent font-epi font-semibold hover:bg-[#F4A261] text-white px-6 py-3 rounded-[10px] border-[2px] border-[#F4A261] transition-colors">
                Join as a Dietitian
              </button>
            </div>
          </div>
        </div>

       
        <div className="">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 md:translate-x-0 mt-[-230px] translate-x-1/3">
          <img  src={BannerSide} alt="App interface" className="h-[700px] mt-[710px]"/>
        </div>

        
        <div className="absolute bottom-[755px] right-[-25px] text-white text-sm rotate-[-90deg] translate-x-1">
          <button className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 border-[2px] border-white rounded-[25px] py-2 px-6 transition-opacity">
            <span className='flex items-center font-epi text-[20px] font-normal gap-[10px]'><FaArrowLeft />
            Explore more</span>
            
          </button>
        </div>
        </div>
      </div>

     
      
    <div className="">
      <div className="w-[100%] bg-[#F3EDE5] h-[1px] relative mt-[195px]"></div>
      <div className="relative">
          <p className='font-epi text-left w-[735px] leading-[140%] text-[20px] font-normal text-white mt-[35px]'>Tired of juggling multiple dishes for different dietary needs? Amelia instantly customizes any recipe—so you only cook once.</p>
      </div>

    </div>
     </div>
      
      </section>
    </div>
   </>
  )
}

export default Banner
