import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function FooterBottom() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">About Us</h3>
              <p className="text-gray-400 leading-relaxed">
                With an experience of 20+ years in the real estate sector, we
                assist people searching for homes or looking for investment, and
                provide them with options that effectively fulfill their
                desires. NewProjectsOnline.com serves major areas from Mumbai,
                Thane, Pune and Navi Mumbai. You will find 1 BHK flats, 2 BHK
                flats, 3 BHK flats, in New Projects and much more.
              </p>
            </div>
            <div className="flex gap-4">
              {[
                {
                  icon: faFacebookF,
                  href: "https://www.facebook.com/NewProjectsOnline",
                },
                {
                  icon: faInstagram,
                  href: "https://www.instagram.com/newprojectsonline/",
                },
                { icon: faTwitter, href: "https://twitter.com/launches_new" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-600 transition-colors duration-300"
                  aria-label={social.icon.iconName}
                >
                  <FontAwesomeIcon icon={social.icon} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Us</h3>
            <div className="space-y-4">
              {[
                {
                  icon: faLocationDot,
                  content:
                    "Shah Alpine Shop no.22 Plot no.6 Sector6 Kharghar Navi Mumbai 410210",
                },
                {
                  icon: faEnvelope,
                  content: "omshree5707@gmail.com",
                  href: "mailto:omshree5707@gmail.com",
                },
                {
                  icon: faPhone,
                  content: "+91 9892666207",
                  href: "tel:+919892666207",
                },
                {
                  icon: faShieldHalved,
                  content: "Read Privacy & Policy",
                  href: "/privacy",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-orange-500 mt-1"
                  />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-orange-400 transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <span>{item.content}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <img
                src="https://newprojectsonline.com/assets/newprojectonline/306986922RERA%20Registered.png"
                alt="RERA Registered"
                className="h-16 object-contain"
              />
              <img
                src="https://newprojectsonline.com/assets/newprojectonline/97811066Small%20TNRECA.jpg"
                alt="TNRECA"
                className="h-16 object-contain"
              />
            </div>
            <div className="flex items-center gap-4 bg-gray-800 px-6 py-3 rounded-lg">
              <FontAwesomeIcon icon={faPhone} className="text-orange-500" />
              <div className="text-sm">
                <div className="text-gray-400">Do You Have Questions?</div>
                <a
                  href="tel:+919892666207"
                  className="text-white hover:text-orange-400 font-semibold"
                >
                  +91 9892666207
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-950">
        <div className="container mx-auto px-4 py-6">
          <p className="text-gray-500 text-sm text-center leading-relaxed">
            DISCLAIMER: This website and the Information contained is in the
            process of being updated and are under review/revision in terms of
            the Real Estate Regulation Act, 2016 and Rules there under (RERA),
            and will be reviewed from time to time. Till the time the contents
            are fully updated the same shall not be construed to be any kind of
            advertisement, solicitation, marketing, Booking, offer for sale,
            invitation to offer within the purview of RERA and shall have no
            binding effect on the Company.
          </p>
        </div>
      </div>
    </footer>
  );
}
