import "./FooterBottom.css";
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
    <footer className="footer-bottom">
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="about-us">
                <h3>About Us</h3>
                <p>
                  With an experience of 20+ years in the real estate sector, we
                  assist people searching for homes or looking for investment,
                  and provide them with options that effectively fulfill their
                  desires. NewProjectsOnline.com serves major areas from Mumbai,
                  Thane, Pune and Navi Mumbai. You will find 1 BHK flats, 2 BHK
                  flats, 3 BHK flats, in New Projects and much more.
                </p>
              </div>
              <div className="social-links">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/NewProjectsOnline"
                      aria-label="Facebook"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/newprojectsonline/"
                      aria-label="Instagram"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/launches_new"
                      aria-label="Twitter"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-section">
              <div className="contact-us">
                <h3>Contact Us</h3>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span>
                      603, Shiv Pratap Plaza, Plot No. 113B/C, Sector 50E,
                      Seawoods West, Navi Mumbai 400706
                    </span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <a href="mailto:info@newprojectsonline.com">
                      info@newprojectsonline.com
                    </a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPhone} />
                    <a href="tel:+919137458691">+91 9137458691</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faShieldHalved} />
                    <a href="https://newprojectsonline.com/privacy-policy.html">
                      Read Privacy & Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-middle">
        <div className="footer-container">
          <div className="footer-middle-content">
            <div className="certifications">
              <ul>
                <li>
                  <img
                    src="https://newprojectsonline.com/assets/newprojectonline/306986922RERA%20Registered.png"
                    alt="RERA Registered"
                  />
                </li>
                <li>
                  <img
                    src="https://newprojectsonline.com/assets/newprojectonline/97811066Small%20TNRECA.jpg"
                    alt="TNRECA"
                  />
                </li>
              </ul>
            </div>
            <div className="contact-cta">
              <FontAwesomeIcon icon={faPhone} />
              <div>Do You Have Questions?</div>
              <a href="tel:+919137458691">+91 9137458691</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-section">
        <div className="footer-container">
          <div className="disclaimer">
            <p>
              DISCLAIMER: This website and the Information contained is in the
              process of being updated and are under review/revision in terms of
              the Real Estate Regulation Act, 2016 and Rules there under (RERA),
              and will be reviewed from time to time. Till the time the contents
              are fully updated the same shall not be construed to be any kind
              of advertisement, solicitation, marketing, Booking, offer for
              sale, invitation to offer within the purview of RERA and shall
              have no binding effect on the Company.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
