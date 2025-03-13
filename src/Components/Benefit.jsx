import { FaCheckCircle } from "react-icons/fa"
import Phone from "../assets/Bannerside.png"
import Beneover from "../assets/beneoverly.png"
import BeneoverTwo from "../assets/beneoverly2.png"

const Benefit = () => {
  return (
    <section className="relative z-10 xl:h-[940px] w-full overflow-hidden bg-gradient-to-br from-[#f5e6df] via-[#f8e8e8] to-[#e8e1f0] py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h3 className="text-[#F4A261] font-epi text-lg sm:text-xl md:text-2xl font-medium mt-8 sm:mt-12 md:mt-16 lg:mt-20 mb-10 sm:mb-16 md:mb-20 lg:mb-28">
          Our Benefits
        </h3>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 lg:mb-[-85px] relative">
          <button className="text-[#4A0D4A] font-gara text-lg sm:text-xl md:text-2xl font-medium">For Families</button>

          <button className="text-gray-400 font-gara text-lg sm:text-xl md:text-2xl font-medium hover:text-[#4A0D4A] ease-in-out duration-500">
            For Dietitians
          </button>

          <div className="absolute w-full sm:w-[285px] bottom-[-8px] sm:mt-[50px] h-[2px] bg-[#4B133B] opacity-[8%]"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 mt-12 sm:mt-16">
        
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
            <div className="flex gap-3 sm:gap-4">
              <div className="w-6 h-6 rounded-full bg-[#AF9DEE]/10 flex items-center justify-center flex-shrink-0 mt-1">
                <FaCheckCircle className="text-[#AF9DEE] w-4 h-4" />
              </div>
              <div>
                <h4 className="text-[#4A0D4A] font-gara text-lg sm:text-xl md:text-2xl font-medium mb-1 sm:mb-2">
                  End the Chaos of Cooking Multiple Meals
                </h4>
                <p className="text-[#301F1AA3] font-epi text-sm sm:text-base opacity-[64%] font-normal">
                  Simplify grocery shopping and reclaim your time—no more juggling separate dishes for every diet.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="w-6 h-6 rounded-full bg-[#AF9DEE]/10 flex items-center justify-center flex-shrink-0 mt-1">
                <FaCheckCircle className="text-[#AF9DEE] w-4 h-4" />
              </div>
              <div>
                <h4 className="text-[#4A0D4A] font-gara text-lg sm:text-xl md:text-2xl font-medium mb-1 sm:mb-2">
                  One Unified Grocery List
                </h4>
                <p className="text-[#301F1AA3] font-epi opacity-[64%] text-sm sm:text-base font-normal">
                  Eliminate duplicate shopping. Plan just once, and watch Amelia consolidate ingredients for everyone's
                  needs into a single cart.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="w-6 h-6 rounded-full bg-[#AF9DEE]/10 flex items-center justify-center flex-shrink-0 mt-1">
                <FaCheckCircle className="text-[#AF9DEE] w-4 h-4" />
              </div>
              <div>
                <h4 className="text-[#4A0D4A] font-gara text-lg sm:text-xl md:text-2xl font-medium mb-1 sm:mb-2">
                  Boost Confidence in the Kitchen
                </h4>
                <p className="text-[#301F1AA3] opacity-[64%] font-epi text-sm sm:text-base font-normal">
                  Serve every meal knowing each family member's nutritional goals are satisfied—goodbye guesswork, hello
                  peace of mind.
                </p>
              </div>
            </div>
          </div>

        
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="relative w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] xl:w-[450px]">
              <img src={Phone } alt="Phone" className="w-full h-auto relative z-10" />
              <img className="absolute top-0 left-0 w-full h-auto -z-10" src={Beneover } alt="" />
              <img
                className="absolute top-0 left-0 w-full h-auto -z-10 rotate-[-180deg] opacity-[15%] rounded-full"
                src={BeneoverTwo }
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefit

