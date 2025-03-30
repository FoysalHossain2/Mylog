import Button from '@/components/commoneComponent/Button'
import Vectortop from '../../../../../public/Vectortop.png'
import Vectorbottom from '../../../../../public/Vectorbottom.png'
import Image from 'next/image'

const ServiceHero = () => {
  return (
    <div className='py-[200px] overflow-x-hidden'>
        {/* Left decorative swirl */}
      <div className="-z-10 absolute top-1 lg:top-16 -left-[220px] lg:-left-24   lg:rotate-0 rotate-[14deg]">
        <Image 
            src={Vectortop} 
            alt="" 
            width={580}
            height={580}
            className='lg:w-[580px] lg:h-[580px] w-[490px] h-[430px]'
        />
      </div>
      
      {/* Right decorative swirl */}
      <div className="-z-10 absolute lg:-bottom-24 -bottom-[390px] lg:right-[1px] right-[1px]  rotate-">
      <Image 
            src={Vectorbottom} 
            alt="" 
            width={430}
            height={430}
             className='lg:w-[430px] lg:h-[430px] w-[360px] h-[380px]'
        />
      </div>

        <div className=" lg:py-0 flex flex-col items-center justify-center z-50">
            <Button>
            Team Extension
            </Button>
            <div>
                <div className="flex flex-col items-center justify-center text-center mt-8 w-full">
                    <h2 className="text-[48px] lg:text-[80px] font-normal leading-[100%] text-[#F0F7FE] max-w-[820px] text-center">
                        Talented Software Engineers, <span className="text-[#3276DE]">Top-Notch IT Consulting</span>
                    </h2>

                    <p className='z-50 mt-7 text-[#F0F7FEB8] text-lg text-[21px] font-normal leading-[140%] w-full max-w-[874px]'>
                        We're unlocking businesses' full potential with IT consulting and staff augmentation. Our dedicated teams guarantee quality solutions that generate results.
                    </p>
                 </div>
          </div>
        </div>
    </div>
  )
}

export default ServiceHero