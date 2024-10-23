import "./services.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faHome, faCar } from '@fortawesome/free-solid-svg-icons';

const ServiceItem = ({ icon, title, description }) => (
  <div className="col-awg col-c2g">
    <div className="info-mr4">
      <div className="icon-container">
        <FontAwesomeIcon icon={icon} className="service-icon" />
      </div>
      <h3><a href="javascript:void(0)">{title}</a></h3>
      <p>{description}</p>
    </div>
  </div>
);

export default function Services() {
    const services = [
        {
            icon: faHandshake,
            title: "Real Estate Consulting",
            description: "We help you in finding the right property which fits within your budget & preferred location. Our team of experts will help you for free in giving the complete information about the projects as per your choice and in finalizing the right property with better rates than the market."
        },
        {
            icon: faHome,
            title: "Home Loan Services",
            description: "Finding the right home loan is often a difficult task during the process of home buying. We provide the right guidance based on your needs. We can work with you to get the best home loan in the market with the lowest interest rates."
        },
        {
            icon: faCar,
            title: "Inspection and Site Visits",
            description: "We provide free pickup and drop facility to visit the New Projects Site/sales office."
        }
    ];

    return (
        <div className="services-container">
            {services.map((service, index) => (
                <ServiceItem key={index} {...service} />
            ))}
        </div>
    );
}
