import React from "react";
import { Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa6";

function Footer() {
  return (
    <footer className=" text-black w-full p-12 flex flex-col justify-center items-center">
      <div className="flex flex-col container w-full">
        <div className="flex flex-col md:flex-row  w-full mb-4 justify-between">
          <div className="w-full  mb-8 md:mb-0 pr-4">
            <h3 className="text-lg font-semibold mb-4">Tulunaki Astrología</h3>
            <p className="text-sm text-gray-300">
              Descubre los secretos del universo y encuentra tu camino en las
              estrellas.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-full mb-8 md:mb-0 md:px-4">
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-sm hover:text-white transition-colors"
                >
                  TulunakI
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-sm hover:text-white transition-colors"
                >
                  Calcula tu carta natal
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-sm hover:text-white transition-colors"
                >
                  Talleres
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-sm hover:text-white transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full  md:text-right pl-4">
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex md:justify-end space-x-4">
              <a
                href="https://www.instagram.com/aroamolomogi/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors group"
                aria-label="Visita el perfil de Instagram de Aroamolomogi"
              >
                <Instagram
                  size={24}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>

              <a
                href="https://www.tiktok.com/@aroamolomogui"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Visita nuestro perfil de TikTok"
              >
                <FaTiktok size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-black flex w-full md:justify-center space-x-4 mb-4">
          <p className="text-sm text-black mt-4">
            &copy; {new Date().getFullYear()} TulunakI Astrología. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
