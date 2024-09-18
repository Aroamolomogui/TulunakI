import React from "react";


function Header() {
  return (
    <header className="bg-white text-black shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">

          <div className="flex items-center">
          {/* posible icono para completar el logo con el nombre de la app recuerda poner espacios entre el logo y el texto space-x-2 al div */}
            <span className="text-2xl font-bold">TulunakI</span>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <a href="/Miluna" className="text-lg font-semibold hover:text-violet-500 transition duration-300 relative group">
              <span className="relative"> 
                Mi luna
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </span>
            </a>

              <a href="/Equilibrio emocional" className="text-lg font-semibold hover:text-violet-500 transition duration-300 relative group">
                <span className="realtive">
                  Equilibrio emocional 
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </span>
            </a>

            <a href="/Contacto" className="text-lg font-semibold hover:text-violet-500 transition duration-300 relative group">
            <span className="relative">
              Contacto 
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </span>
            </a>
            </nav>

        </div>
      </div>
      <div>

      </div>
    </header>

  )
  
}

export default Header;
