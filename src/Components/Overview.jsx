// Try to import images, but handle cases where they might not be available
import Over from "../assets/Over.png"
import Round from "../assets/round.png"

const Overview = () => {
  return (
    <section className="z-10 xl:h-[594px] lg:h-[475px] relative h-auto md:h-[825px] sm:h-[805px] xs:h-[475px] w-full overflow-hidden bg-gradient-to-r from-[#4a1625] via-[#581c3d] to-[#3b1155]">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {/* Image container */}
          <div className="flex justify-center items-center relative order-2 lg:order-1">
           
              <img
                className="w-full max-w-[500px] sm:max-w-[600px] md:max-w-[650px] lg:max-w-[725px] h-auto z-10"
                src={Over}
                alt="Overview"
              />
           
             
           
            <div className="absolute inset-0 flex justify-end items-center">
             
                <img
                  className="w-[70%] xl:mt-[310px] xl:w-[510px] xs:mr-[25px] lg:mt-[242px] lg:mr-[48px] xs:mt-[165px] xs:w-[85%] sm:w-[80%] md:w-[85%] sm:mr-[60px] sm:mt-[310px] lg:w-[370px] rounded-se-full opacity-[20%] -z-10"
                  src={Round}
                  alt=""
                />
             
               
             
            </div>
          </div>

          {/* Text content */}
          <div className="flex flex-col justify-center space-y-3 sm:space-y-4 md:space-y-5 order-1 lg:order-2 lg:ml-8">
            <h3 className="text-base sm:text-lg lg:text-[12px] xl:text-[16px] xl:ml-[-50px] lg:mt-[-25px] font-epi font-medium text-orange-400 md:ml-[19px] md:text-[15px]">Living Room Overview</h3>
            <h2 className="font-gara xl:text-[34px] xl:w-[700px] xl:ml-[-50px] text-2x lg-text-[20px] lg:w-[395px] sm:w-[585px] md:w-[725px] sm:text-[28px] md:text-[25px] md:ml-[19px] lg:text-[34px] font-semibold text-white leading-[1.4] max-w-[822px]">
              Track calories first, then macros for each family member—and finally see how close they are to personal
              goals. Effortlessly visualize your household's health journey.
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Overview

