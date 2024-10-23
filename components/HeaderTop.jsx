import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCopy, faAddressCard } from '@fortawesome/free-solid-svg-icons';

export default function HeaderTop() {
    return (
        <nav className="absolute z-10 left-0 top-0 w-full bg-opacity-30 bg-black text-sm text-white h-10 border-b border-white border-opacity-20">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-full">
                    <div className="hidden lg:block">
                        <ul className="flex border-l border-white border-opacity-20">
                            <li className="border-r border-white border-opacity-20">
                                <a href="https://www.facebook.com/NewProjectsOnline" className="block w-10 h-10 text-center leading-10 text-white hover:text-opacity-90">
                                    <FontAwesomeIcon icon={faFacebookF} className="text-lg" />
                                </a>
                            </li>
                            <li className="border-r border-white border-opacity-20">
                                <a href="https://www.instagram.com/newprojectsonline/" className="block w-10 h-10 text-center leading-10 text-white hover:text-opacity-90">
                                    <FontAwesomeIcon icon={faInstagram} className="text-lg" />
                                </a>
                            </li>
                            <li className="border-r border-white border-opacity-20">
                                <a href="https://twitter.com/launches_new" className="block w-10 h-10 text-center leading-10 text-white hover:text-opacity-90">
                                    <FontAwesomeIcon icon={faTwitter} className="text-lg" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden lg:block">
                        <ul className="flex">
                            <li className="border-l border-white border-opacity-20">
                                <a href="https://newprojectsonline.com/postrequirements" className="inline-block px-4 text-white hover:text-opacity-90">
                                    <FontAwesomeIcon icon={faCopy} className="mr-2" />
                                    Post Requirement
                                </a>
                            </li>
                            <li className="border-x border-white border-opacity-20">
                                <a href="#contact" className="inline-block px-4 text-white hover:text-opacity-90">
                                    <FontAwesomeIcon icon={faAddressCard} className="mr-2" />
                                    Contact us
                                </a>
                            </li>
                            <li className="border-r border-white border-opacity-20">
                                <a href="https://api.whatsapp.com/send?phone=919137458691&text=Hi!%20I%20am%20interested%20in%20Buying%20New%20Property.%20Please%20connect%20with%20me" className="inline-block px-4 text-white hover:text-opacity-90">
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
