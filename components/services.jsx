import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faHome, faCar } from "@fortawesome/free-solid-svg-icons";

const ServiceItem = ({ icon, title, description, id }) => (
  <div className="w-full md:w-1/3 p-4" id={id}>
    <div className="bg-white rounded-lg p-6 h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 mb-4">
          <FontAwesomeIcon icon={icon} className="text-blue-600 text-2xl" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          <a
            href={`#${id}`}
            className="hover:text-blue-600 transition-colors duration-300"
          >
            {title}
          </a>
        </h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

export default function Services() {
  const services = [
    {
      icon: faHandshake,
      title: "Real Estate Consulting",
      description:
        "We help you in finding the right property which fits within your budget & preferred location. Our team of experts will help you for free in giving the complete information about the projects as per your choice and in finalizing the right property with better rates than the market.",
      id: "real-estate-consulting",
    },
    {
      icon: faHome,
      title: "Home Loan Services",
      description:
        "Finding the right home loan is often a difficult task during the process of home buying. We provide the right guidance based on your needs. We can work with you to get the best home loan in the market with the lowest interest rates.",
      id: "home-loan-services",
    },
    {
      icon: faCar,
      title: "Inspection and Site Visits",
      description:
        "We provide complimentary pickup and drop service for site visits to new project locations. Our dedicated team will arrange transportation and accompany you to ensure an informative visit experience.",
      id: "inspection-services",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>
        <div className="flex flex-wrap -mx-4">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
