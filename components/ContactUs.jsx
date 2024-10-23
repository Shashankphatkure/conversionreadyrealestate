import "./ContactUs.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function ContactUs() {
    return (
        <div className="contact-container">
            <div className="contact-form">
                <form>
                    <div className="form-row">
                        <input type="text" placeholder="Name" required />
                        <input type="email" placeholder="Email" required />
                    </div>
                    <div className="form-row">
                        <input type="text" placeholder="Subject" required />
                        <input type="tel" placeholder="Number" required />
                    </div>
                    <textarea placeholder="Write message" required></textarea>
                    <button type="submit">Send Us A Message</button>
                </form>
            </div>
            <div className="contact-info">
                <div style={{
                    "padding":"30px",
                    "background":"url(https://newprojectsonline.com/assets/main/img/contact-info.jpg)",
                    "backgroundPosition":"center center",
                    "backgroundRepeat":"no-repeat",
                    "backgroundSize":"cover",
                    "position":"relative",
                    "borderRadius":"10px",
                    "height": "100%"
                }}>
                    <div className="media-oxt">
                        <FontAwesomeIcon icon={faPhone} className="fa-1f3" style={{ marginRight: '10px' }} />
                        <div className="media-57v">
                            <h5>Phone:</h5>
                            <p><a href="tel:+919137458691">+91 9137458691</a></p>
                        </div>
                    </div>
                    <div className="media-oxt">
                        <FontAwesomeIcon icon={faEnvelope} className="fa-1f3" style={{ marginRight: '10px' }} />
                        <div className="media-57v">
                            <h5>Email:</h5>
                            <p><a href="mailto:newprojectsonline.com@gmail.com">newprojectsonline.com@gmail.com</a></p>
                        </div>
                    </div>
                    <div className="media-oxt">
                        <FontAwesomeIcon icon={faGlobe} className="fa-1f3" style={{ marginRight: '10px' }} />
                        <div className="media-57v">
                            <h5>Web:</h5>
                            <p><a href="https://newprojectsonline.com">newprojectsonline.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
