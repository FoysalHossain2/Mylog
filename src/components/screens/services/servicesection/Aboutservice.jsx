import React from 'react'

const Aboutservice = () => {
  return (
    <div>
        <div className="bg-gradient-to-br from-[#4A023D] to-[#6A0D54] text-white px-6 md:px-16 py-28">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Side */}
            <div>
                <button className="bg-[#8D2063] text-white px-6 py-3 rounded-full text-base font-semibold leading-[140%]">
                   About Service
                </button>
                <h2 className="text-5xl md:text-5xl font-normal leading-[100%] mt-6 w-full xl:max-w-[543px] lg:max-w-[543px] md:max-w-[543px]">
                    Scale Your Tech Team with Ease
                </h2>
                <p className="text-2xl lg:text-[32px] font-normal leading-[150%] text-gray-300 mt-8  w-full xl:max-w-[533px] lg:max-w-[533px] md:max-w-[533px]">
                    IT Consulting solutions that align with your business goals
                </p>
            </div>

            {/* Right Side */}
            <div className="text-[#F0F7FE] space-y-4 text-[21px]">
                <p className='leading-[150%]'>
                    Expanding your tech team doesn’t have to be a challenge. With Log-U’s
                    Team Extension service, you gain access to top-tier talent without the 
                    hassle of recruitment, onboarding, or management overhead. Our experts 
                    seamlessly integrate with your in-house team, bringing the right skills 
                    and experience to accelerate development, optimize workflows, and ensure
                    project success. Whether you need additional developers, designers, or 
                    engineers, we provide the flexibility to scale up or down as needed.
                </p>
                <p className='leading-[150%]'>
                    By partnering with Log-U, you can reduce operational costs, enhance productivity, 
                    and stay focused on what truly matters—innovation and business growth. Our vetted 
                    professionals are not just skilled coders; they understand your industry, workflows, 
                    and goals, making them a valuable extension of your team. With our hassle-free team 
                    augmentation, you get the expertise you need, when you need it, without long-term 
                    commitments or administrative burdens.
                </p>
            </div>
            </div>
      </div>
    </div>
  )
}

export default Aboutservice