import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: "/Miluna", text: "Mi luna" },
    { href: "/Equilibrio emocional", text: "Equilibrio emocional" },
    { href: "/Contacto", text: "Contacto" },
    { href: "/Quienes somos", text: "Quiénes somos" },
  ];

  return (
    <header className="bg-white shadow-md relative">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Logo</div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item, index) => (
            <a 
              key={index}
              href={item.href} 
              className="text-lg font-semibold hover:text-violet-500 transition duration-300 relative group"
            >
              <span className="relative">
                {item.text}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col items-center py-4">
          {menuItems.map((item, index) => (
            <a 
              key={index}
              href={item.href} 
              className="text-lg font-semibold hover:text-violet-500 transition duration-300 py-2"
              onClick={toggleMenu}
            >
              {item.text}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}