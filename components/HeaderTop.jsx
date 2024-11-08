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
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function HeaderTop() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute z-10 left-0 top-0 w-full bg-opacity-30 bg-black text-sm text-white h-10 border-b border-white border-opacity-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-full">
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
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
            </ul>
          </div>
          <div
            className={`lg:block ${
              isMenuOpen ? "block" : "hidden"
            } absolute lg:relative top-10 lg:top-0 left-0 w-full lg:w-auto bg-black lg:bg-transparent`}
          >
            <ul className="flex flex-col lg:flex-row">
              <li className="border-b lg:border-b-0 lg:border-l border-white border-opacity-20">
                <a
                  href="/requirements"
                  className="block lg:inline-block px-4 py-2 lg:py-0 text-white hover:text-opacity-90"
                >
                  <FontAwesomeIcon icon={faCopy} className="mr-2" />
                  Post Requirement
                </a>
              </li>
              <li className="border-b lg:border-b-0 lg:border-x border-white border-opacity-20">
                <a
                  href="#contact"
                  className="block lg:inline-block px-4 py-2 lg:py-0 text-white hover:text-opacity-90"
                >
                  <FontAwesomeIcon icon={faAddressCard} className="mr-2" />
                  Contact us
                </a>
              </li>
              <li className="lg:border-r border-white border-opacity-20">
                <a
                  href="https://api.whatsapp.com/send?phone=919892666207&text=Hi!%20I%20am%20interested%20in%20Buying%20New%20Property.%20Please%20connect%20with%20me"
                  className="block lg:inline-block px-4 py-2 lg:py-0 text-white hover:text-opacity-90"
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
