import "./PropertyHero.css";
import PropertyModal from "./PropertyModal";

export default function PropertyHero({ property }) {
  // Get gallery images from property data
  const exteriorImages = property?.gallery?.exterior || [];

  return (
    <div className="property-hero">
      <div className="carousel-container">
        {/* If there are exterior images, map through them */}
        {exteriorImages.length > 0 ? (
          exteriorImages.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                className="hero-image"
                src={image}
                alt={`${property.name} - View ${index + 1}`}
              />
            </div>
          ))
        ) : (
          // Fallback image if no gallery images are available
          <div className="carousel-item active">
            <img
              className="hero-image"
              src={property.image || "https://via.placeholder.com/1200x600"}
              alt={property.name}
            />
          </div>
        )}
      </div>
    </div>
  );
}
