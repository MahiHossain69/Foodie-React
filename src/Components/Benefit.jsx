import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import Phone from "../assets/Bannerside.png"
import Beneover from "../assets/beneoverly.png"
import BeneoverTwo from "../assets/beneoverly2.png"

const Benefit = () => {
  return (
    <section className='relative z-10 h-[1120px] w-full overflow-hidden bg-gradient-to-br from-[#f5e6df] via-[#f8e8e8] to-[#e8e1f0]'>
         <div className="container mx-auto px-6 py-20">
        
          <h3 className="text-[#F4A261] font-epi text-[24px] font-medium mt-[80px] mb-[140px]">Our Benefits</h3>

          <div className="flex gap-8 mb-[-85px]">
            <button className="text-[#4A0D4A] font-gara text-[24px] font-medium">For Families</button>
           
            <button className="text-gray-400 font-gara text-[24px] font-medium hover:text-[#4A0D4A] ease-in-out duration-500">For Dietitians</button>
          <div className="absolute w-[285px] mt-[50px] h-[2px] bg-[#4B133B] opacity-[8%]"></div>
         
          </div>


          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
           
            <div className="lg:w-1/2 space-y-8">
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#AF9DEE]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheckCircle className="text-[#AF9DEE] w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[#4A0D4A] font-gara text-[24px] font-medium mb-2">End the Chaos of Cooking Multiple Meals</h4>
                    <p className="text-[#301F1AA3] font-epi text-[16px] opacity-[64%] font-normal">Simplify grocery shopping and reclaim your time—no more juggling separate dishes for every diet.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#AF9DEE]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheckCircle className="text-[#AF9DEE] w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[#4A0D4A]  font-gara text-[24px] font-medium mb-2">One Unified Grocery List</h4>
                    <p className="text-[#301F1AA3]  font-epi opacity-[64%] text-[16px] font-normal">Eliminate duplicate shopping. Plan just once, and watch Amelia consolidate ingredients for everyone's needs into a single cart.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#AF9DEE]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheckCircle className="text-[#AF9DEE] w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[#4A0D4A]  font-gara text-[24px] font-medium mb-2">Boost Confidence in the Kitchen</h4>
                    <p className="text-[#301F1AA3] opacity-[64%]  font-epi text-[16px] font-normal">Serve every meal knowing each family member's nutritional goals are satisfied—goodbye guesswork, hello peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>

          
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative">
                <img src={Phone}/>
                <img className='-z-10 absolute top-0 left-0' src={Beneover}/>
                <img className='-z-10 absolute top-0 left-0 rotate-[-180deg] opacity-[15%] rounded-full' src={BeneoverTwo}/>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Benefit
