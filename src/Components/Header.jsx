'use client'

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-baseline justify-between bg-light-bg p-10">
      <h1 className="font-h1 text-main">Tulunaki</h1>
      <button
        className="max-[799px]:block hidden text-main hover:text-warm-purple"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav className={`${isMenuOpen ? 'flex' : 'hidden'} min-[800px]:flex flex-col min-[800px]:flex-row gap-4 absolute min-[800px]:relative top-20 right-10 min-[800px]:top-0 min-[800px]:right-0 bg-light-bg min-[800px]:bg-transparent p-4 min-[800px]:p-0 rounded-lg shadow-lg min-[800px]:shadow-none`}>
        <a
          href=""
          className="relative font-text text-main no-underline transition-all duration-300 hover:text-warm-purple
                     after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-current 
                     after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:left-0"
        >
          Mi luna
        </a>
        <a
          href=""
          className="relative font-text text-main no-underline transition-all duration-300 hover:text-warm-purple
                     after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-current 
                     after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:left-0"
        >
          Equilibrio emocional
        </a>
        <a
          href=""
          className="relative font-text text-main no-underline transition-all duration-300 hover:text-warm-purple
                     after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-current 
                     after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:left-0"
        >
          Quiénes somos
        </a>
        <a
          href=""
          className="relative font-text text-main no-underline transition-all duration-300 hover:text-warm-purple
                     after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-current 
                     after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:left-0"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}