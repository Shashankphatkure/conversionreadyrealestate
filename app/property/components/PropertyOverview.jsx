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
      <div>
        <p>{property.description}</p>

        <p>
          Wagle Estate is in a good position with some of the top schools,
          universities, hospitals, commercial parks, and malls. Finland
          International School, Oxford English School, St. Lawrence High School
          and Jr. College, Jupiter Hospital, Manavta Hospital, Apex Hospital,
          Manisha RJ Thakur College, KBP College, Korum Mall, and R Mall.
        </p>
      </div>

      <button className="btn-zi3 info-jp8 form-z8s eff-byd eff-onq" href="#">
        Read More
      </button>

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
          className="pb-3"
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
            {property.highlights &&
              property.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="list-group-item-low"
                  style={{ "border-bottom": "2px dashed" }}
                >
                  ✓ {highlight}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <br />
    </section>
  );
}
