import React from "react";



function Footer() {
  return <footer className=" text-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Tulunaki Astrología</h3>
          <p className="text-sm text-gray-300">Descubre los secretos del universo y encuentra tu camino en las estrellas.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-sm hover:text-white transition-colors">TulunakI</a></li>
            <li><a href="/" className="text-sm hover:text-white transition-colors">Calcula tu carta natal</a></li>
            <li><a href="/" className="text-sm hover:text-white transition-colors">Talleres</a></li>
            <li><a href="/" className="text-sm hover:text-white transition-colors">Contacto</a></li>
          </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="">Instagram icono  PROBLEMA CON LA IMPORTACIÓN</a>
              <a href="">TikTok icono  PROBLEMA CON LA IMPORTACIÓN</a>
              
            </div>
          
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-black text-center text-sm text-gray-300"></div>
      <p>&copy; {new Date().getFullYear()} TulunakI Astrología. Todos los derechos reservados.</p>
    </div>

  </footer>;
}

export default Footer;
