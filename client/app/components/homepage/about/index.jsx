"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

function HeroAboutSection() {
  return (
    <div id="about" className="relative w-full overflow-hidden py-12 md:py-20 bg-[#0a0d23]">
      {/* Background SVG */}
      <Image
        src="/hero.svg"
        alt="Hero Background"
        width={1572}
        height={795}
        className="absolute -top-[120px] left-0 w-full -z-10 pointer-events-none"
      />

      {/* Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-8 lg:gap-12">
          {/* Left: Text Content */}
          <div className="w-full">
            {/* Heading */}
            <h1 className="text-white text-[1.75rem] sm:text-[2rem] lg:text-[2.2rem] font-semibold leading-tight tracking-tight mb-2">
              Hello, I'm
            </h1>

            <h2 className="text-pink-500 text-[2.5rem] sm:text-[2.8rem] lg:text-[3rem] xl:text-[3.2rem] font-extrabold leading-tight mb-2">
              {personalData.name}
            </h2>

            <h3 className="text-[#16f2b3] text-[1.5rem] sm:text-[1.75rem] lg:text-[1.9rem] font-semibold mb-6">
              {personalData.designation}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
              {personalData.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="#contact" className="group">
                <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold uppercase rounded-full bg-gradient-to-r from-violet-600 to-pink-500 text-white shadow hover:from-pink-500 hover:to-violet-600 transition-all duration-300">
                  Contact Me
                  <RiContactsFill size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link href={personalData.resume} target="_blank" className="group">
                <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold uppercase rounded-full border border-[#16f2b3] text-[#16f2b3] hover:bg-[#16f2b3] hover:text-[#0d1224] transition-all duration-300">
                  Get Resume
                  <MdDownload size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right: Profile Image with visible gradient */}
          <div className="flex justify-center lg:justify-end">
            <div className="p-[4px] bg-gradient-to-br from-pink-500 via-[#16f2b3] to-violet-600 rounded-full shadow-xl hover:scale-105 transition-transform duration-500">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full overflow-hidden">
                <Image
                  src={personalData.profile}
                  alt={personalData.name}
                  fill
                  className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroAboutSection;
