import { FiFacebook, FiGithub } from "react-icons/fi"
import { TbBrandTelegram } from "react-icons/tb"
import { RxInstagramLogo } from "react-icons/rx"
import { FaFigma } from "react-icons/fa"
import Container from "./Container"
import FootBan from "../assets/footerbanner.png"

const Footer = () => {
  return (
    <footer className="bg-[#4B133B] text-white">
     
      <Container>
        <div className="relative px-4">
          <img
            className="z-10 mx-auto w-full max-w-[280px] sm:max-w-[450px] md:max-w-[650px] lg:max-w-[850px] xl:max-w-[1000px] mt-[-20px] sm:mt-[-30px] md:mt-[-40px] relative"
            src={FootBan}
            alt="Footer Banner"
          />
        </div>
      </Container>

      
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <a href="#">
            <h3 className="text-3xl sm:text-4xl md:text-[48px] font-lob text-[#E69138] font-normal">famēlia</h3>
          </a>
        </div>

        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-8 sm:mt-12 md:mt-[70px]">
          
          <div className="col-span-1 lg:col-span-1">
            <h4 className="font-bold text-base sm:text-[18px] mb-3 sm:mb-4 font-roboto">Product</h4>
            <ul className="space-y-2 sm:space-y-3 text-white text-xs sm:text-[14px] font-normal font-roboto">
              <li>
                <a href="#" className="hover:opacity-100">
                  Landing Page
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Recipe Builder
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Meal Planning
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Content
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          
          <div className="col-span-1 lg:col-span-1">
            <h4 className="font-bold text-base sm:text-[18px] mb-3 sm:mb-4 font-roboto">Use Cases</h4>
            <ul className="space-y-2 sm:space-y-3 text-white text-xs sm:text-[14px] font-normal font-roboto">
              <li>
                <a href="#" className="hover:opacity-100">
                  Web-designers
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Marketers
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Small Business
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Website Builder
                </a>
              </li>
            </ul>
          </div>

         
          <div className="col-span-1 lg:col-span-1">
            <h4 className="font-bold text-base sm:text-[18px] mb-3 sm:mb-4 font-roboto">Resources</h4>
            <ul className="space-y-2 sm:space-y-3 text-white text-xs sm:text-[14px] font-normal font-roboto">
              <li>
                <a href="#" className="hover:opacity-100">
                  Academy
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Themes
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Hosting
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Developers
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Support
                </a>
              </li>
            </ul>
          </div>

         
          <div className="col-span-1 lg:col-span-1">
            <h4 className="font-bold text-base sm:text-[18px] mb-3 sm:mb-4 font-roboto">Company</h4>
            <ul className="space-y-2 sm:space-y-3 text-white text-xs sm:text-[14px] font-normal font-roboto">
              <li>
                <a href="#" className="hover:opacity-100">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Teams
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          
          <div className="col-span-2 sm:mt-[-12.5rem] md:mt-[30px] md:ml-[0] sm:ml-[205px] sm:col-span-3 md:col-span-4 lg:col-span-2 mt-6 lg:mt-0">
            <h3 className="font-bold text-base sm:text-[18px] mb-3 sm:mb-4 font-roboto">Let's do it!</h3>
            <div className="flex flex-wrap gap-2 sm:gap-[5px]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center text-[#fff] hover:text-white justify-center hover:border hover:border-[#fff]">
                <a href="#">
                  <FiFacebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center text-[#fff] hover:text-white justify-center hover:border hover:border-[#fff]">
                <a href="#">
                  <FiGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center text-[#fff] hover:text-white justify-center hover:border hover:border-[#fff]">
                <a href="#">
                  <TbBrandTelegram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center text-[#fff] hover:text-white justify-center hover:border hover:border-[#fff]">
                <a href="#">
                  <RxInstagramLogo className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center text-[#fff] hover:text-white justify-center hover:border hover:border-[#fff]">
                <a href="#">
                  <FaFigma className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 md:gap-6">
              <a href="#" className="text-white text-xs sm:text-[14px] font-normal font-roboto">
                Privacy Policy
              </a>
              <a href="#" className="text-white text-xs sm:text-[14px] font-normal font-roboto">
                Terms of Use
              </a>
              <a href="#" className="text-white text-xs sm:text-[14px] font-normal font-roboto">
                Sales and Refunds
              </a>
              <a href="#" className="text-white text-xs sm:text-[14px] font-normal font-roboto">
                Legal
              </a>
              <a href="#" className="text-white text-xs sm:text-[14px] font-normal font-roboto">
                Site Map
              </a>
            </div>
            <div className="opacity-60 font-roboto font-normal text-xs sm:text-[14px] mt-4 md:mt-0">
              © 2024 All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

