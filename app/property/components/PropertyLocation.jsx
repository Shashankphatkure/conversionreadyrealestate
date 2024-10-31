import "./PropertyLocation.css";
import { MapPinIcon } from "@heroicons/react/24/solid";

export default function PropertyLocation() {
  return (
    <section className="section-9de shadow-8vf">
      <span />
      <span className="hea-6ig text-lxi pr-5">Location</span>
      <br />
      <div className="row-fv6 mb-d67">
        <div className="col-dpq col-353">
          <span className="block-lob section-jdn text-lxi">Map View</span>
          <div className="map-qda">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d30144.538155035505!2d72.94729!3d19.192264!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDExJzMyLjIiTiA3MsKwNTYnNTAuMiJF!5e0!3m2!1sen!2sin!4v1719553320215!5m2!1sen!2sin"
              width={400}
              height={450}
              style={{ border: "0" }}
            />
          </div>
        </div>
        <div className="col-ofk col-353 map-8tm text-zgr">
          <span className="block-lob section-jdn text-lxi text-zgr">
            Location Map
          </span>
          <a href="#" className="text-wix">
            <div className="item-sxo mb-p1y">
              <div className="at-property-beb master-gz3">
                <picture>
                  <img className="shadow-8vf bor-k37" />
                </picture>
                <div className="overlay-532" />
                <span className="btn-w1o">View Location Map</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <p />
      <div className="location-list" style={{ textAlign: "left" }}>
        {[
          { name: "Pokhran Road", time: "07 Min" },
          { name: "Eastern Express Highway", time: "05 Min" },
          { name: "Thane Railway Station", time: "13 Min" },
          { name: "Ghodbunder Road", time: "08 Min" },
          { name: "Kolshet Road", time: "20 min" },
          {
            name: "Chattrapati Shivaji Maharaj International Airport",
            time: "47 Min",
          },
          { name: "Mulund West", time: "11 min" },
          { name: "Airoli", time: "26 min" },
          { name: "Kalwa", time: "20 min" },
          { name: "Thane West", time: "20 min" },
          { name: "Bhandup", time: "16 min" },
          { name: "Kalyan", time: "45 min" },
          { name: "Jupiter Hospital", time: "15 Min" },
          { name: "C.P. Goenka International School", time: "16 Min" },
          { name: "Lodha World School", time: "18 Min" },
          { name: "Holy Cross Convent", time: "16 Min" },
          { name: "Big Bazaar", time: "15 Min" },
        ].map((location, index) => (
          <div key={index} className="location-item">
            <MapPinIcon className="location-icon" />
            <span className="location-text">
              {location.name} - {location.time}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
