import Image from "next/image";
import Link from "next/link";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
       <footer className="container_fluid  text-white py-6 ">
     
     <div className=" flex flex-col md:flex-row justify-between items-">
      {/*--- logo part ---*/}
       <div className="cursor-pointer">
         <Image src="/logo.svg" alt="Log" width={60} height={70} />
       </div>

       {/*--- flag part ---*/}
       <div className="flex items-start flex-co md:flex-row  md:items-end lg:gap-x-44 gap-x-16 mt-20 md:mt-0 lg:mt-0">
        
         <div>
           <h4 className="text-gray-300 font-bold text-base leading-[100%]">
             OUR OFFICES:
            </h4>
           <div className="flex  gap-2 mt-4">
             <Image src="/flag1.png" alt="Lisbon" width={50} height={44} />
             <span className="text-gray-400 text-sm">LISBON</span>
           </div>
           <div className="flex  gap-2 mt-2">
             <Image src="/flag2.png" alt="Tallinn" width={50} height={44} />
             <span className="text-gray-400 text-sm">TALLINN</span>
           </div>
         </div>

         
         <div className="flex flex-col gap-2 ">
           <div className="flex items-center justify-between lg:gap-x-16 gap-x-6">
             <a href="https://linkedin.com/company/log-u" className=" items-center gap-2 text-gray-400 hover:text-white">
                 <span className="text-sm">LinkedIn</span>
                 <p>/company.log-u</p>
               </a>
               <a href="https://linkedin.com/company/log-u">
                 <div className="bg-[#1F3A6E] p-2 rounded-lg cursor-pointer">
                    <AiOutlineLinkedin className="w-5 h-5" />
                  </div>
               </a>
           </div>
           <hr className="border-[#1F3A6E] my-2" />
             <div className="flex items-center justify-between gap-x-16">
                 <a href="https://instagram.com/log-u" className=" items-center gap-2 text-gray-400 hover:text-white">
                   <span className="text-sm">Instagram</span>
                   <p>/log-u</p>
                 </a>
                 <a href="https://instagram.com/log-u">
                   <div className="bg-[#1F3A6E] p-2 rounded-lg cursor-pointer">
                      <FaInstagram className="w-5 h-5"  />
                   </div>
                 </a>
             </div>
         </div>
       </div>
       </div>
     </footer>

      <div className="bg-[#0B1120]  py-2">
        <div className="flex items-center justify-between container_fluid">
          <p className="text-gray-400 text-sm my-3">
            © Log-U {currentYear}. All rights reserved.
          </p>
          <Link href={'/privacy-policy'}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </>
  );
}
