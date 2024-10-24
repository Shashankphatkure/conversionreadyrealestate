import "./PropertyHero.css";
import PropertyModal from "./PropertyModal";

export default function PropertyHero() {
  return (
    <div className="property-hero">
      <div className="carousel-container">
        <div className="carousel-item active">
          <img
            className="hero-image"
            src="https://newprojectsonline.com/assets/uploads/banners/1719552676-ashar-merac-mulund-banner.webp"
            alt="Ashar Merac Thane"
          />
        </div>
        <div className="carousel-item">
          <img
            className="hero-image"
            src="https://newprojectsonline.com/assets/uploads/banners/1719552678-ashar-merac-mulund-banner2.webp"
            alt="Ashar Merac Thane"
          />
        </div>
      </div>

      <PropertyModal />
    </div>
  );
}
