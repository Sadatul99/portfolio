import { IoMdDownload } from "react-icons/io";
import Spline from "@splinetool/react-spline";
import { MdOutlineLocationOn } from "react-icons/md";

const Hero = () => {
  return (
    <main className="relative h-screen overflow-hidden">
      {/* Background Spline */}
      <div className="absolute hidden lg:block inset-0 w-full h-full z-0 pointer-events-auto">
        <Spline scene="https://prod.spline.design/YB7vt5z0vyGbOUJA/scene.splinecode" />
  
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between h-full px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div className="w-full lg:max-w-xl mt-8 lg:mt-0 lg:ml-[5%] pointer-events-auto">
          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-4xl font-bold tracking-wide mt-8 text-gray-900">
            <span className="bg-gradient-to-r from-black via-[#3a3a3a] to-[#d4af37] text-transparent bg-clip-text">
              MD. Sadatul Hossain
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg my-6 tracking-wide text-[#444] max-w-[25rem] lg:max-w-[30rem]">
            Full stack Developer | MERN
            <br />
            <span className="flex items-center gap-2 mt-2 text-sm">
              <MdOutlineLocationOn className="text-[#d4af37]" />
              <span className="text-[#555]">Dhaka, Bangladesh</span>
            </span>
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            {/* About me button */}
            <div className="relative h-11 w-full sm:w-fit bg-gradient-to-r from-[#000] to-[#d4af37] rounded-full shadow-lg">
              <button className="w-full h-full px-6 text-base font-semibold text-white bg-transparent rounded-full hover:brightness-110 transition-all duration-300">
                About Me
              </button>
            </div>

            {/* Download CV button */}
            <div className="relative h-11 w-full sm:w-fit bg-gradient-to-r from-white to-gray-300 rounded-full shadow-md">
              <a
                className="flex items-center justify-center gap-2 w-full h-full px-6 text-base font-semibold text-gray-800 rounded-full hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
                href="/Sadatul_Hossain_CV.pdf"
                download
              >
                <IoMdDownload className="text-lg" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
