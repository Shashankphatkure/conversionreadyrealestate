import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute z-10 left-0 top-10 w-full bg-transparent py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="logo">
            <a href="/">
              <img src="/logo.png" width={50} height={50} alt="Logo" />
            </a>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              <FontAwesomeIcon icon={faBars} className="text-2xl" />
            </button>
          </div>
          <nav
            className={`lg:block ${
              isMenuOpen ? "block" : "hidden"
            } absolute lg:relative top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent`}
          >
            <ul className="flex flex-col lg:flex-row">
              <li>
                <a
                  href="/"
                  className="block py-2 lg:py-0 px-4 text-black lg:text-white font-bold hover:text-opacity-80"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 lg:py-0 px-4 text-black lg:text-white font-bold hover:text-opacity-80"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block py-2 lg:py-0 px-4 text-black lg:text-white font-bold hover:text-opacity-80"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 lg:py-0 px-4 text-black lg:text-white font-bold hover:text-opacity-80"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="/search"
                  className="block py-2 lg:py-0 px-4 text-black lg:text-white font-bold hover:text-opacity-80"
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="block py-2 lg:py-0 px-4 text-black lg:text-white font-bold hover:text-opacity-80"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>
          <div className="hidden lg:block">
            <a
              href="tel:+91-9892666207"
              className="inline-flex items-center bg-[#f64d0d] text-white px-4 py-2 rounded"
            >
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <span>+91-9892666207</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
