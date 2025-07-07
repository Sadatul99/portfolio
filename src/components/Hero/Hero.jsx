import { IoMdDownload } from "react-icons/io";
import Spline from "@splinetool/react-spline";
import { MdOutlineLocationOn } from "react-icons/md";

const Hero = () => {
  return (
    <main className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)] relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Left Section - Content (shows after 3D model on mobile) */}
      <div className="w-full lg:max-w-xl z-10 mt-8 lg:mt-0 lg:ml-[5%]">
        {/* Presenting Tag */}
        <div className="relative w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
          <div className="absolute flex items-center justify-center inset-[3px] bg-black rounded-full gap-1 text-white font-medium">
            Presenting
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-semibold tracking-wider mt-8 text-white">
          MD. Sadatul Hossain
        </h1>

        {/* Description */}
        <p className="text-lg my-6 tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
          Full stack Developer | MERN
          <br />
          <span className="flex items-center gap-2 mt-2">
            <MdOutlineLocationOn className="text-[#e99b63]" />
            Dhaka, Bangladesh
          </span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          {/* About me button */}
          <div className="relative h-11 w-full sm:w-fit bg-gradient-to-r from-[#656565] to-[#e99b63] rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            <button className="w-full h-full px-6 text-base font-semibold text-white bg-black rounded-full hover:bg-[#1a1a1a] transition-all duration-300">
              About me
            </button>
          </div>

          {/* Download CV button */}
          <div className="relative h-11 w-full sm:w-fit bg-gray-300 rounded-full">
            <a
              className="flex items-center justify-center gap-2 w-full h-full px-6 text-base font-semibold text-black rounded-full hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
              href="/Sadatul_Hossain_CV.pdf"
              download
            >
              <IoMdDownload className="text-lg" />
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Right Section - 3D Model (appears first on mobile) */}
      <div className="w-full lg:w-[50%] h-[40vh] sm:h-[50vh] lg:h-[80vh] mb-8 lg:mb-0">
        <Spline
          className="w-full h-full"
          scene="https://prod.spline.design/6kTh4QMx3atNYDU9/scene.splinecode"
        />
      </div>
    </main>
  );
};

export default Hero;