import "./ContactUs.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faGlobe,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function ContactUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6" id="contact">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact Info Section */}
        <div className="bg-white rounded-lg shadow-lg p-5">
          <h3 className="text-xl font-semibold ">Get in Touch</h3>
          <p className="text-gray-600 ">
            Have questions about our properties? We're here to help you find
            your dream home.
          </p>

          <div className="space-y-3">
            <div className="flex">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-red-500 text-lg"
                />
              </div>
              <div className="ml-4 flex flex-col justify-center mb-2">
                <h41 className="text-2xl font-semibold text-gray-900 leading-tight">
                  Call Us
                </h41>
                <a
                  href="tel:+919892666207"
                  className="text-gray-600 hover:text-red-500 transition-colors leading-tight"
                >
                  +91 9892666207
                </a>
              </div>
            </div>

            <div className="flex">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-red-500 text-lg"
                />
              </div>
              <div className="ml-4 flex flex-col justify-center mb-2">
                <h41 className="text-2xl font-semibold text-gray-900 leading-tight">
                  Email Us
                </h41>
                <a
                  href="mailto:omshree5707@gmail.com"
                  className="text-gray-600 hover:text-red-500 transition-colors leading-tight"
                >
                  omshree5707@gmail.com
                </a>
              </div>
            </div>

            <div className="flex">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="text-red-500 text-lg"
                />
              </div>
              <div className="ml-4 flex flex-col justify-center mb-2">
                <h41 className="text-2xl font-semibold text-gray-900 leading-tight">
                  Website
                </h41>
                <a
                  href="https://shreeganeshrealty.com"
                  className="text-gray-600 hover:text-red-500 transition-colors leading-tight"
                >
                  ShreeGaneshRealty.Com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white rounded-lg shadow-lg p-5">
          <form className="">
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="2"
                className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300 font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
