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
      
       
      <div className="absolute inset-0 md:h-[555px] lg:h-[700px] sm:h-[530px] w-full h-full bg-cover bg-center md:overflow-hidden bg-hero-pattern"  >
 
  <div className="absolute inset-0 bg-black/40" />
</div>

        
       
     <div className="container mx-auto">
     <div className="relative   px-6">
        
         <div className="pt-6 md:pt-8">
          <a href="#" className="inline-block">
            
            <a href='#'><img className='' src={Logo}/></a>
          </a>
        </div>

       
        <div className="flex flex-col justify-center mt-16 md:mt-24 lg:mt-[180px] max-w-full md:max-w-2xl z-10">
          <div className="text-white space-y-4 md:space-y-6">
            <div className="space-y-1 md:space-y-2">
              <p className="font-normal font-epi text-lg sm:text-[12px] md:text-[24px]">One Meal, Every Diet – Powered by</p>
              <h2 className="text-3xl font-gara sm:text-[30px] md:text-5xl lg:text-[64px] font-bold">Real-Time AI</h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
            <button className="bg-transparent font-epi sm:text-[9px] font-semibold sm:hover:bg-[#F4A261] hover:bg-[#F4A261] text-white lg:text-[12px]  px-4 sm:w-[150px] lg:w-[200px] py-2 sm:h-[50px] rounded-[10px] border-[2px] border-[#F4A261] transition-colors">
                <a href="#">Sign Up For Early Access</a>
              </button>
              <button className="bg-transparent font-epi font-semibold sm:text-[9px] hover:bg-[#F4A261] text-white lg:text-[12px] px-4 6 py-2 sm:w-[150px] lg:w-[200px] sm:h-[50px] rounded-[10px] border-[2px] border-[#F4A261] transition-colors">
                <a href="#">Join as a Dietitian</a>
              </button>
            </div>
          </div>
        </div>

       
        <div className="">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 lg:translate-x-0 mt-0 lg:mt-[-230px]">
          <img  src={BannerSide} alt="App interface"  className="h-full w-full lg:h-[460px] lg:w-[405px] ml-[-85px] sm:w-[50%] sm:mt-[155px] sm:ml-[240px] mt-[710px] lg:mt-[710px] "
              aria-label="App interface"/>
        </div>

        
       
        </div>
      </div>

     
      
      <div className="mt-auto pb-8 relative md:pb-12">
          <div className="w-full bg-[#F3EDE5] h-[1px] absolute top-[365px] left-0 sm:top-[130px] md:top-[90px] md:left-0 lg:top-[140px]   "></div>
          <div className="relative">
            <p className="xs:text-center lg:pt-[163px] lg:text-[17px] xs:text-[9px] md:ml-[25px] sm:ml-[23px] sm:pt-[150px]  lg:ml-[23px] font-epi w-full md:w-[760px] lg:w-[735px] leading-[140%] text-base sm:text-lg md:text-[19px] font-normal text-white pt-[395px]  md:pt-[110px]">
              Tired of juggling multiple dishes for different dietary needs? Amelia instantly customizes any recipe—so
              you only cook once.
            </p>
          </div>
        </div>
     </div>
      
      </section>
    </div>
   </>
  )
}

export default Banner
