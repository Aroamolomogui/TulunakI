import React from "react";

function Header() {
  return (
    <header className="flex items-baseline justify-between bg-light-bg p-10">
      <h1 className="font-h1 text-main">Tulunaki</h1>
      <nav className="flex gap-4">
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

export default Header;

