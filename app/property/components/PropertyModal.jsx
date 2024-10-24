import "./PropertyModal.css";

export default function PropertyModal() {
  return (
    <div className="info-wod overflow-7fp">
      <span className="pro-anw">BOOKINGS OPEN </span>
      <span className="title-ytn">Ashar Merac Thane</span>
      <span className="pro-xrg">At Thane, Mumbai</span>
      <span className="pro-arw">by Ashar Group</span>
      <div className="block-zzx d-lg-y8h">
        <span>Ashar Merac Thane</span>
        <span>At Thane, Mumbai by Ashar Group</span>
        <ul className="animate-wxt">
          <li>
            {" "}
            <span className="hea-1z7">✓ Configurations</span> : 1, 2, 3 BHK{" "}
          </li>
          <li>
            {" "}
            <span className="hea-1z7">✓ Location</span> : Thane, Mumbai
          </li>
          <li>
            {" "}
            <span className="hea-1z7">✓ Price </span> : 85 Lac* All Incl.
            Onwards
          </li>
        </ul>
      </div>
      <span
        className="block-vis mb-tv4"
        style={{
          background: "var(--colorPrimary)",
          color: "#fff",
          "font-size": "18px",
          "-webkit-text-align": "center",
          "text-align": "center",
          padding: "5px",
          display: "block",
          margin: "25px 0px",
        }}
      >
        <span
          className="ani-2zn bou-35v inf-b1c"
          style={{
            display: "block",
            "-webkit-animation-duration": "3s",
            "animation-duration": "3s",
            "font-size": "16px",
            border: "2px solid #fff",
            "border-style": "dashed",
            color: "#fff",
          }}
        >
          <h5
            style={{ "-webkit-text-align": "center", "text-align": "center" }}
          >
            <b>
              &nbsp;Spot Booking Offer
              <br /> &nbsp;Easy Payment Plan
              <br /> &nbsp;Floors G + 35 Storey
              <br /> &nbsp;East West Facing Flats
              <br /> &nbsp;Nearby Mulund And Thane Station
            </b>
          </h5>
        </span>
      </span>
      <span className="tag-kh5">
        <p style={{ "-webkit-text-align": "center", "text-align": "center" }}>
          <b>Premium 1, 2 &amp; 3 BHK Apartment </b>
        </p>
        <h4 style={{ "-webkit-text-align": "center", "text-align": "center" }}>
          <b>Starts ₹ 78 Lacs* </b>
        </h4>
        <p style={{ "-webkit-text-align": "center", "text-align": "center" }}>
          <b>Book Online Presentation Today!</b>
        </p>
      </span>
      <button className="btn-cgc info-8ch form-4fj eff-rbw eff-1ot">
        Enquire Now
      </button>
    </div>
  );
}
