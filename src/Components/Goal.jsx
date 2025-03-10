import React from 'react'
import { TbSmartHome } from "react-icons/tb";
import { LiaUtensilSpoonSolid } from "react-icons/lia";
import { IoIosPeople } from "react-icons/io";
import { LiaBandcamp } from "react-icons/lia";
import BannerSide from "../assets/Bannerside.png"
import Beneover from "../assets/beneoverly.png"




const Goal = () => {
  return (
    <section className=''>
      <div className="bg-[#f8f3ee] relative w-full z-10 pt-[4rem] pb-[13rem] px-4 md:px-8 lg:px-16">
      <div className="container   flex justify-between mx-auto md:grid-cols-2 gap-8 items-center">
       
        <div className="mt-[150px]">
          
          <div className="flex space-x-4">
            <div className="bg-[#f5a05c] w-12 h-12 rounded-full flex items-center justify-center">
              <TbSmartHome className="w-5 h-5 text-white" />
            </div>
            <div className="w-12 h-12 rounded-full flex items-center  text-[#6b3e4e] hover:text-white hover:bg-[#f5a05c]  justify-center hover:border hover:border-[#6b3e4e] hover:border-opacity-20">
              <LiaUtensilSpoonSolid className="w-5 h-5" />
            </div>
            <div className="w-12 h-12 rounded-full flex text-[#6b3e4e] hover:text-white hover:bg-[#f5a05c] items-center justify-center hover:border hover:border-[#6b3e4e] hover:border-opacity-20">
              <IoIosPeople className="w-5 h-5 " />
            </div>
            <div className="w-12 h-12 rounded-full flex text-[#6b3e4e] hover:text-white hover:bg-[#f5a05c] items-center justify-center hover:border hover:border-[#6b3e4e] hover:border-opacity-20">
              <LiaBandcamp className="w-5 h-5 " />
            </div>
          </div>

         
          <div className="mt-[40px]">
            <h2 className="text-[42px] w-[815px] md:text-4xl lg:text-5xl font-gara font-semibold text-[#6b3e4e] leading-[30px]">
              Enter each family members dietary needs
              —from allergies to weight goals.
            </h2>
            <p className="text-[#6b3e4e] mt-[30px] font-epi font-normal w-[700px] text-[16px] leading-[30px] text-opacity-70 ">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type
            </p>
          </div>
        </div>
        <div class="mt-[150px]  relative  ">
          
          <img className='w-[100%]  ' src={BannerSide}/>
         
        <img className='-z-10 absolute top-0 left-0' src={Beneover}/>
        </div>
        </div>
        </div>
       
    </section>
  )
}

export default Goal
