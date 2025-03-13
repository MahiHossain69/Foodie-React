import { TbSmartHome } from "react-icons/tb";
import { LiaUtensilSpoonSolid } from "react-icons/lia";
import { IoIosPeople } from "react-icons/io";
import { LiaBandcamp } from "react-icons/lia";
import BannerSide from "../assets/Bannerside.png";
import Beneover from "../assets/beneoverly.png";

const Goal = () => {
  return (
    <section>
      <div className="mt-[130px] xs:mt-[-1px] sm:mt-[-300px] lg:mt-[-130px]">
        <div className="bg-[#f8f3ee] relative w-full z-10 pt-8 md:pt-12 lg:pt-16 pb-16 md:pb-20 lg:pb-[13rem] px-4 md:px-8 lg:px-16">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
              
              
              <div className="w-full lg:w-1/2 mt-8 md:mt-12 lg:mt-[150px] xl:mt-[260px]">
                <div className="flex  xl:ml-[0] lg:ml-[-41px] space-x-2 sm:space-x-4 mb-6">
                
                  <div className="bg-[#f5a05c] w-10 h-10 sm:w-12 sm:h-12 rounded-full cursor-pointer flex items-center justify-center">
                    <a href="#">
                      <TbSmartHome className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </a>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex cursor-pointer items-center text-[#6b3e4e] hover:text-white hover:bg-[#f5a05c] justify-center hover:border hover:border-[#6b3e4e] hover:border-opacity-20">
                    <a href="#">
                      <LiaUtensilSpoonSolid className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex cursor-pointer text-[#6b3e4e] hover:text-white hover:bg-[#f5a05c] items-center justify-center hover:border hover:border-[#6b3e4e] hover:border-opacity-20">
                    <a href="#">
                      <IoIosPeople className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex cursor-pointer text-[#6b3e4e] hover:text-white hover:bg-[#f5a05c] items-center justify-center hover:border hover:border-[#6b3e4e] hover:border-opacity-20">
                    <a href="#">
                      <LiaBandcamp className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </div>
                </div>

                
                <div className="mt-6 sm:mt-8 md:mt-[40px]">
                  <h2 className="text-2xl xl:ml-[0]  lg:ml-[-41px] xs:text-[17px] xs:w-[290px] sm:text-3xl sm:w-[510px] md:text-4xl md:w-[600px] lg:text-[27px] xl:text-[42px] xl:w-[720px] xl:leading-[55px] lg:w-[456px] font-gara font-semibold text-[#6b3e4e] leading-tight">
                    Enter each family member's dietary needs — from allergies to weight goals.
                  </h2>
                  <p className="text-[#6b3e4e]  xl:ml-[0] lg:ml-[-41px] mt-4 xs:text-[7px] xs:w-[313px] sm:text-[10px] sm:w-[445px] md:w-[700px] lg:w-full xl:w-[710px] font-epi sm:mt-6 md:mt-[30px] lg:mt-[30px] font-normal text-sm sm:text-base md:text-[16px] lg:text-[16px] leading-relaxed md:leading-[30px] text-opacity-70">
                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>

             
              <div className="w-full lg:w-1/2 mt-8 md:mt-12 lg:mt-[150px] relative">
                <div className="relative w-full h-0 pb-[100%] md:pb-[80%] lg:pb-[75%]">
                  <div className="absolute inset-0 flex items-center justify-center lg:justify-end">
                    <img
                      className="w-full md:w-[520px] md:ml-[80px] lg:mt-[110px] xl:mt-[115px] lg:w-[365px] xl:w-[495px] xl:mr-[5px] 2xl:w-[535px] 2xl:mr-[65px] h-auto"
                      src={BannerSide}
                      alt="Banner"
                    />
                    <img
                      className="absolute -z-10 top-0 right-0 w-full h-full object-contain lg:top-[70px] lg:left-[-17px] xl:top-[65px] xl:right-[15px]"
                      src={Beneover}
                      alt="Background"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goal;
