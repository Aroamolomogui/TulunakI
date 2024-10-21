
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPodcast} from '@fortawesome/free-solid-svg-icons';



const Footer = () => {
  return (
    <footer className="footer py-10 px-24 flex justify-around items-center bg-light-bg">
      <ul className="footer_sections list-none p-0 text-left">
        <li>
          <a href="" className="footer_sections-link text-main-text font-links no-underline relative transition-all duration-300 hover:text-warm-purple after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:left-0">
            Mi luna
          </a>
        </li>
        <li>
          <a href="" className="footer_sections-link text-main-text font-links no-underline relative transition-all duration-300 hover:text-warm-purple after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:left-0">
            Equilibrio emocional
          </a>
        </li>
        <li>
          <a href="" className="footer_sections-link text-main-text font-links no-underline relative transition-all duration-300 hover:text-warm-purple after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:left-0">
            Quiénes somos
          </a>
        </li>
        <li>
          <a href="" className="footer_sections-link text-main-text font-links no-underline relative transition-all duration-300 hover:text-warm-purple after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:left-0">
            Contacto
          </a>
        </li>
      </ul>
      <a href="" className="footer_logo">
        <img src="src/assets/Logo_fondo_transparente.PNG" alt="logo" className="footer_logo-logo h-36" />
      </a>
      <ul className="footer_socials list-none p-0 text-left">
        <li>
          <a href="" className="relative transition-all duration-300 hover:text-warm-purple after:absolute  after:bg-current after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:left-0">
          <FontAwesomeIcon icon={faInstagram} className="h-4 w-4" />
          <span className="footer_socials_link text-main-text font-links no-underline relative transition-all duration-300 hover:text-warm-purple after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:left-0 ml-2">Instagram</span>
          </a>
        </li>
        <li>
          <a href="" className="relative transition-all duration-300 hover:text-warm-purple after:absolute  after:bg-current after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:left-0">
          <FontAwesomeIcon icon={faTiktok} className="h-4 w-4" />
          <span className="footer_socials_link text-main-text font-links no-underline relative transition-all duration-300 hover:text-warm-purple after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:left-0 ml-2">TikTok</span>
          </a>
        </li>
        <li>
          <a href="" className="relative transition-all duration-300 hover:text-warm-purple after:absolute  after:bg-current after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:left-0">
          <FontAwesomeIcon icon={faYoutube} className="h-4 w-4" />
          <span className="footer_socials_link text-main-text font-links no-underline relative transition-all duration-300 hover:text-warm-purple after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:left-0 ml-2">YouTube</span>
          </a>
        </li>
        <li>
          <a href="" className="relative transition-all duration-300 hover:text-warm-purple after:absolute  after:bg-current after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:left-0">
          <FontAwesomeIcon icon={faPodcast} className=" h-4 w-4 " />
          <span className='footer_socials_link text-main-text font-links no-underline relative transition-all duration-300 hover:text-warm-purple after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:left-0 ml-2'>Podcast</span>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;