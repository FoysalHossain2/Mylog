import Image from "next/image";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-[#0B1120] text-white py-6 px-4 md:px-12 lg:px-24">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row justify-between">
          <div className="w-[119px]">
            <Image src="/logo.svg" alt="Log" width={50} height={30} />
          </div>

          <div className="flex flex-row  md:items-end gap-x-44 mt-7 md:mt-0">
            <div>
              <h4 className="text-gray-300 font-semibold text-sm">
                OUR OFFICES:
              </h4>
              <div className="flex  gap-2 mt-2">
                <Image src="/flag1.png" alt="Lisbon" width={50} height={44} />
                <span className="text-gray-400 text-sm">LISBON</span>
              </div>
              <div className="flex  gap-2 mt-1">
                <Image src="/flag2.png" alt="Tallinn" width={50} height={44} />
                <span className="text-gray-400 text-sm">TALLINN</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="https://linkedin.com/company/log-u"
                className=" items-center justify-between text-gray-400 hover:text-white flex group"
              >
                <span>
                  <span className="text-sm">LinkedIn</span>
                  <p>/company.log-u</p>
                </span>
                <span className="w-[48px] h-[48px] text-gray-400 border border-gray-400 group-hover:border-[#F0F7FE] flex justify-center items-center">
                  <AiOutlineLinkedin />
                </span>
              </a>

              <a
                href="https://instagram.com/log-u"
                className=" items-center justify-between text-gray-400 hover:text-white flex group"
              >
                <span>
                  <span className="text-sm">Instagram</span>
                  <p>/log-u</p>
                </span>
                <span className="w-[48px] h-[48px] text-gray-400 border border-gray-400 group-hover:border-[#F0F7FE] flex justify-center items-center">
                  <FaInstagram />
                </span>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className=" max-w-[1320px] mx-auto text-center ">
        <p className="text-gray-400 text-sm my-3">
          © Log-U {currentYear}. All rights reserved.
        </p>
      </div>
    </>
  );
}
