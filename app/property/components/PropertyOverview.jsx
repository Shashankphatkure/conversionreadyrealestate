import "./PropertyOverview.css";

import { DocumentIcon } from "@heroicons/react/24/outline";

export default function PropertyOverview({ property }) {
  return (
    <section className="section-nkt shadow-c1i">
      <span className="hea-njg text-56r d-8lo block-kvs pr-5">Overview</span>
      <h1 className="block-qo4 section-fnm col-qgi text-56r">
        {property.name}
      </h1>
      <h2 className="block-qo4 section-29f col-qgi text-56r">
        At {property.location}
      </h2>
      <div className="hid-1pw">
        <p>{property.description}</p>

        <p>
          Wagle Estate is in a good position with some of the top schools,
          universities, hospitals, commercial parks, and malls. Finland
          International School, Oxford English School, St. Lawrence High School
          and Jr. College, Jupiter Hospital, Manavta Hospital, Apex Hospital,
          Manisha RJ Thakur College, KBP College, Korum Mall, and R Mall.
        </p>
        <p></p>
      </div>
      <div className="show-lvn">
        <button className="btn-zi3 info-jp8 form-z8s eff-byd eff-onq" href="#">
          Read More
        </button>
      </div>
      <center>
        {" "}
        <button className="btn-zi3 btn-foh info-aro btn-xr8 overflow-a2r">
          <DocumentIcon className="h-5 w-5 inline-block" /> Download Brochure
        </button>{" "}
      </center>
      <span
        className="block-qo4 section-29f text-56r mt-oq8"
        style={{ textAlign: "left" }}
      >
        About {property.builder?.name}
      </span>
      {property.builder?.logo && (
        <img
          height={200}
          width={200}
          src={property.builder.logo}
          alt={`${property.builder.name} logo`}
        />
      )}
      <p style={{ textAlign: "left" }}>
        {property.builder?.description}
        {property.builder?.established_year && (
          <span>
            {" "}
            Established in {property.builder.established_year},{" "}
            {property.builder.name} has grown to become one of the most trusted
            names in real estate development.
          </span>
        )}
      </p>
      <hr />
      <span
        className="at-property-bge eff-byd"
        style={{ textAlign: "left", marginLeft: "0" }}
      >
        {" "}
        Project Highlights{" "}
      </span>
      <div className="row-m23" style={{ textAlign: "left" }}>
        <div className="col-3lh">
          <ul
            className="list-group-tzc"
            style={{
              border: "2px solid",
              "font-size": "16px",
              "list-style": "none",
              "padding-left": "0",
              textAlign: "left",
            }}
          >
            <li
              className="list-group-item-low"
              style={{ "border-bottom": "2px dashed" }}
            >
              ✓ Vaastu-compliant homes with unobstructed city and creek Views.{" "}
            </li>
            <li
              className="list-group-item-low"
              style={{ "border-bottom": "2px dashed" }}
            >
              ✓ Separate car parks for residential and commercial units.{" "}
            </li>
            <li
              className="list-group-item-low"
              style={{ "border-bottom": "2px dashed" }}
            >
              ✓ New launch Ashar Shree Nagar Thane Wagle Estate Thane offers 1,
              2 &amp; 3 BHK, Urban Homes.{" "}
            </li>
            <li
              className="list-group-item-low"
              style={{ "border-bottom": "2px dashed" }}
            >
              ✓ Vehicle free amenity zone along with Wi-fi in common areas.{" "}
            </li>
            <li
              className="list-group-item-low"
              style={{ "border-bottom": "2px dashed" }}
            >
              ✓ Brings world-class design &amp; features giving you a boutique
              lifestyle.{" "}
            </li>
            <li
              className="list-group-item-low"
              style={{ "border-bottom": "2px dashed" }}
            >
              ✓ Double height entrance lobby with 7 High speed elevators and 1
              fire elevator.{" "}
            </li>
            <li
              className="list-group-item-low"
              style={{ "border-bottom": "2px dashed" }}
            >
              ✓ New construction in Thane west brings Twin Towers at Wagle
              Estate.{" "}
            </li>
            <li
              className="list-group-item-low"
              style={{ "border-bottom": "2px dashed" }}
            >
              ✓ New launch Ashar Shree Nagar Thane Wagle Estate is smartly
              planned, the complex.
            </li>
          </ul>
        </div>
      </div>
      <br />
    </section>
  );
}
