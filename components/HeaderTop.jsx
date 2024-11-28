import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCopy,
  faAddressCard,
  faBars,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";

export default function HeaderTop() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="hidden lg:block absolute z-20 left-0 top-0 w-full bg-opacity-30 bg-black text-sm text-white h-auto lg:h-10 border-b border-white border-opacity-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center py-2 lg:py-0 h-full">
          <div className="lg:hidden self-start">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 hover:bg-gray-700 rounded transition-colors"
            >
              <FontAwesomeIcon icon={faBars} className="text-lg" />
            </button>
          </div>
          <div className="hidden lg:block">
            <ul className="flex border-l border-white border-opacity-20">
              <li className="border-r border-white border-opacity-20">
                <a
                  href="https://www.facebook.com/GSrealtys/"
                  className="block w-10 h-10 text-center leading-10 text-white hover:text-opacity-90"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="text-lg" />
                </a>
              </li>
              <li className="border-r border-white border-opacity-20">
                <a
                  href="https://www.instagram.com/shree_ganesh_realty/?hl=en"
                  className="block w-10 h-10 text-center leading-10 text-white hover:text-opacity-90"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-lg" />
                </a>
              </li>
              <li className="border-r border-white border-opacity-20">
                <a
                  href="mailto:shreeganeshrealty90@gmail.com"
                  className="block w-10 h-10 text-center leading-10 text-white hover:text-opacity-90"
                >
                  <FontAwesomeIcon icon={faEnvelopeOpen} className="text-lg" />
                </a>
              </li>
            </ul>
          </div>
          <div
            className={`lg:block ${
              isMenuOpen ? "block" : "hidden"
            } w-full lg:w-auto bg-black lg:bg-transparent transition-all duration-300`}
          >
            <ul className="flex flex-col lg:flex-row divide-y lg:divide-y-0 divide-white divide-opacity-20">
              <li className="lg:border-l border-white border-opacity-20">
                <a
                  href="/requirements"
                  className="block lg:inline-block px-4 py-3 lg:py-0 text-white hover:bg-gray-700 lg:hover:bg-transparent hover:text-opacity-90 transition-colors duration-200"
                >
                  <FontAwesomeIcon icon={faCopy} className="mr-2" />
                  Post Requirement
                </a>
              </li>
              <li className="lg:border-l border-white border-opacity-20">
                <a
                  href="#contact"
                  className="block lg:inline-block px-4 py-3 lg:py-0 text-white hover:bg-gray-700 lg:hover:bg-transparent hover:text-opacity-90 transition-colors duration-200"
                >
                  <FontAwesomeIcon icon={faAddressCard} className="mr-2" />
                  Contact us
                </a>
              </li>
              <li className="lg:border-l border-white border-opacity-20">
                <a
                  href="https://api.whatsapp.com/send?phone=919892666207&text=Hi!%20I%20am%20interested%20in%20Buying%20New%20Property.%20Please%20connect%20with%20me"
                  className="block lg:inline-block px-4 py-3 lg:py-0 text-white hover:bg-gray-700 lg:hover:bg-transparent hover:text-opacity-90 transition-colors duration-200"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
