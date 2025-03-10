import React from 'react'
import { FiFacebook,FiGithub } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";
import { RxInstagramLogo } from "react-icons/rx";
import { FaFigma } from "react-icons/fa";
import Container from './Container'
import FootBan from "../assets/footerbanner.png"






const Footer = () => {
  return (
  
    <footer className="  bg-[#4B133B] text-white">
   <Container>
   <img className='z-10 mx-auto w-[1000px] mt-[-40px] relative ' src={FootBan}/>
   </Container>
 

 
  <div className="container mx-auto px-6 py-16">
  <div className="space-y-8">
        <h3 className="text-[48px] font-lob text-[#E69138] font-normal">famēlia</h3>
        
      </div>
    <div className="flex justify-between mt-[70px]">
     
    

      
      <div className=''>
        <h4 className="font-bold text-[18px] mb-4 font-roboto">Product</h4>
        <ul className="space-y-3 text-white text-[14px] font-normal font-roboto">
          <li><a href="#" className="hover:opacity-100">Landing Page</a></li>
          <li><a href="#" className="hover:opacity-100">Recipe Builder</a></li>
          <li><a href="#" className="hover:opacity-100">Meal Planning</a></li>
          <li><a href="#" className="hover:opacity-100">Content</a></li>
          <li><a href="#" className="hover:opacity-100">Integrations</a></li>
        </ul>
      </div>

      <div className=''>
        <h4 className="font-bold text-[18px] mb-4 font-roboto">Use Cases</h4>
        <ul className="space-y-3 text-white text-[14px] font-normal font-roboto">
          <li><a href="#" className="hover:opacity-100">Web-designers</a></li>
          <li><a href="#" className="text-white">Marketers</a></li>
          <li><a href="#" className="hover:opacity-100">Small Business</a></li>
          <li><a href="#" className="hover:opacity-100">Website Builder</a></li>
        </ul>
      </div> 

     
      <div>
        <h4 className="font-bold text-[18px] mb-4 font-roboto">Resources</h4>
        <ul className="space-y-3 text-white text-[14px] font-normal font-roboto">
          <li><a href="#" className="hover:opacity-100">Academy</a></li>
          <li><a href="#" className="hover:opacity-100">Blog</a></li>
          <li><a href="#" className="hover:opacity-100">Themes</a></li>
          <li><a href="#" className="hover:opacity-100">Hosting</a></li>
          <li><a href="#" className="hover:opacity-100">Developers</a></li>
          <li><a href="#" className="hover:opacity-100">Support</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-[18px] mb-4 font-roboto">Company</h4>
        <ul className="space-y-3 text-white text-[14px] font-normal font-roboto">
          <li><a href="#" className="hover:opacity-100">About Us</a></li>
          <li><a href="#" className="hover:opacity-100">Careers</a></li>
          <li><a href="#" className="hover:opacity-100">FAQs</a></li>
          <li><a href="#" className="hover:opacity-100">Teams</a></li>
          <li><a href="#" className="hover:opacity-100">Contact Us</a></li>
        </ul>
      </div>

      <div className="lg:col-span-1">
            <h3 className="font-bold text-[18px] mb-4 font-roboto">Let's do it!</h3>
            <div className="flex gap-[5px]">
            <div className="w-12 h-12 rounded-full flex items-center  text-[#fff] hover:text-white   justify-center hover:border hover:border-[#fff] ">
              <FiFacebook className="w-5 h-5" />
            </div>
            <div className="w-12 h-12 rounded-full flex items-center  text-[#fff] hover:text-white   justify-center hover:border hover:border-[#fff] ">
              <FiGithub className="w-5 h-5" />
            </div>
            <div className="w-12 h-12 rounded-full flex items-center  text-[#fff] hover:text-white   justify-center hover:border hover:border-[#fff] ">
              < TbBrandTelegram  className="w-5 h-5" />
            </div>
            <div className="w-12 h-12 rounded-full flex items-center  text-[#fff] hover:text-white   justify-center hover:border hover:border-[#fff] ">
              <RxInstagramLogo className="w-5 h-5" />
            </div>
            <div className="w-12 h-12 rounded-full flex items-center  text-[#fff] hover:text-white   justify-center hover:border hover:border-[#fff] ">
              <FaFigma className="w-5 h-5" />
            </div>
            
          
           
            
           
            </div>
          </div>
        </div>
      </div>
  <div className="border-t border-white/10">
    <div className="container mx-auto px-6 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm ">
        <div className="flex gap-6">
          <a href="#" className="text-white text-[14px] font-normal font-roboto">Privacy Policy</a>
          <a href="#" className="text-white text-[14px] font-normal font-roboto">Terms of Use</a>
          <a href="#" className="text-white text-[14px] font-normal font-roboto">Sales and Refunds</a>
          <a href="#" className="text-white text-[14px] font-normal font-roboto">Legal</a>
          <a href="#" className="text-white text-[14px] font-normal font-roboto">Site Map</a>
        </div>
        <div className='opacity-60 font-roboto font-normal text-[14px]'>© 2024 All Rights Reserved</div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer
