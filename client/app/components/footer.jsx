"use client";
import { personalData } from "@/utils/data/personal-data";

import Link from "next/link";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white mt-[1px]">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[80rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        {/* Top glowing line */}
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-[#16f2b3] to-transparent"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center text-center space-y-2">
          {/* Copyright */}
          <p className="text-sm">
            © {new Date().getFullYear()} by{" "}
            <Link
              target="_blank"
              href={personalData.linkedIn}
              className="text-[#16f2b3] hover:underline"
            >
              Vishnu Vardhan Reddy G
            </Link>
          </p>

          {/* Fancy Quote */}
          <p className="text-xs text-[#d2d6f0] tracking-wide flex items-center gap-1">
            Made with {" "} <FaHeart className="text-[#f06292]" /> using{" "}
            <span className="text-[#16f2b3] px-1">Next.js, Express.js</span> &{" "}
            <span className="text-[#16f2b3] px-1">Tailwind CSS</span> by{" "}
            <span className="text-[#16f2b3]">Vishnu</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
