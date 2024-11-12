import "./PropertySiteTour.css";

export default function PropertySiteTour({ property }) {
  return (
    <section className="section-lw2 shadow-pfo">
      <span />
      <span className="hea-6e1 text-vx6 pr-5">Virtual Site Tour</span>
      <a href="#">
        <div className="my-e8o pt-md-mdk">
          <div className="at-property-sjq vsv-jgs">
            <picture>
              <img
                src="https://newprojectsonline.com/assets/uploads/virtualTour/1719553101-ashar-merac-mulund-site-visit.webp"
                className="w-jl7"
              />
            </picture>
            <div className="text-cdb">
              <div className="text-7x8">
                <div />
                <span className="text-mi7 jxlqo font-weight-n8y mb-bm2 d-r3t block-i76">
                  Virtual Tour
                </span>
                <span className="text-vx6 text-dyv d-r3t block-i76">
                  {property.name} At {property.location}
                </span>
              </div>
            </div>
          </div>
          <span className="block-9by text-vx6 text-dyv block-nwy d-md-3ej pt-bcb">
            {property.name} At {property.location}
          </span>
        </div>
      </a>
    </section>
  );
}
