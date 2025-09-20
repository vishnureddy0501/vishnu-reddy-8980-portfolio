"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react"; // close icon

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { href: "/#about", label: "ABOUT" },
    { href: "/#experience", label: "EXPERIENCE" },
    { href: "/#skills", label: "SKILLS" },
    { href: "/#education", label: "EDUCATION" },
    { href: "/#projects", label: "PROJECTS" },
    { href: "/#contact", label: "CONTACT" },
  ];

  return (
    <nav className="top-0 w-full z-50 backdrop-blur-md border-b bg-[#0d1224]/80 border-[#1a1f3a]">
      <div className="flex items-center justify-between px-6 py-4">

        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-8 h-8 sm:w-10 sm:h-10">
            <img
              src="https://cdn.vectorstock.com/i/500p/33/40/letter-g-icon-template-vector-4063340.jpg"
              alt="Lion Head Logo"
              className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <span
            className="
                text-2xl sm:text-3xl font-extrabold
                bg-gradient-to-r from-[#8433ff] via-[#8f43ff] to-[#16f2b3]
                bg-clip-text text-transparent
                transition-all duration-300
                group-hover:text-opacity-90"
            >
                Portfolio
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="relative text-white text-sm tracking-wide transition duration-300 hover:text-[#16f2b3]"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
        >
          <span className="w-6 h-0.5 bg-[#16f2b3] rounded"></span>
          <span className="w-6 h-0.5 bg-[#8f43ff] rounded"></span>
          <span className="w-6 h-0.5 bg-[#8433ff] rounded"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[80%] bg-[#0e1129]/95 z-50 transform transition-transform duration-500 ease-in-out ${menuOpen ? "translate-x-0" : "hidden"
          }`}
      >
        {/* Close button */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#25213b]">
          <span className="text-lg font-bold text-[#16f2b3]">Menu</span>
          <button onClick={toggleMenu} className="text-white hover:text-[#16f2b3]">
            <X size={28} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col items-start px-8 py-6 space-y-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-xl font-medium text-white hover:text-[#16f2b3] transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
