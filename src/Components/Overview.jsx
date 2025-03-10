import React from 'react'
import Over from "../assets/Over.png"
import Round from "../assets/round.png"
import Container from './Container'

const Overview = () => {
  return (
  <section className='z-10 relative h-auto w-full overflow-hidden bg-gradient-to-r from-[#4a1625] via-[#581c3d] to-[#3b1155]'>

   


<div className="container mx-auto">
<div className="mt-[75px] grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
 
 <div className="flex container justify-center items-center">
   <img className=" max-w-[725px] h-auto" src={Over} alt=" Overview" />
   <img className='w-[690px] mt-[375px] rounded-se-full opacity-[20%] -z-10 absolute' src={Round}/>
 </div>

 
 <div className="flex flex-col mt-[-70px] leading-loose justify-center lg:ml-8 space-y-4">
   <h3 className="text-lg font-epi font-medium text-orange-400">Living Room Overview</h3>
   <h2 className="font-gara text-[34px] font-semibold text-white leading-[140%] space-y-5 max-w-[822px]">
     Track calories first, then macros for each family member—and finally see how close they are to personal goals. Effortlessly visualize your household's health journey.
   </h2>
 </div>
</div>
</div>



  
  </section>
  )
}

export default Overview
