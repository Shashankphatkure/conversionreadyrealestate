import "./PropertyFooter.css";

export default function PropertyFooter() {
  return (
    <footer style={{ padding: "0 10px" }}>
      {/* <div className="social-share-container">
        <div className="social-share-text">
          Share This Project On Social Media
        </div>
        <div className="social-icons">
          <a href="http://www.facebook.com/sharer.php?u=http%3A%2F%2Fnewprojectsonline.com%2Fashar-merac-thane">
            <img className="social-icon" src="/facebook.png" alt="Facebook" />
          </a>
          <a href="http://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Fnewprojectsonline.com%2Fashar-merac-thane">
            <img className="social-icon" src="/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://twitter.com/share?url=http%3A%2F%2Fnewprojectsonline.com%2Fashar-merac-thane">
            <img className="social-icon" src="/twitter.png" alt="Twitter" />
          </a>
          <a href="https://wa.me/?text=http%3A%2F%2Fnewprojectsonline.com%2Fashar-merac-thane">
            <img className="social-icon" src="/whatsapp.png" alt="WhatsApp" />
          </a>
        </div>
      </div> */}

      <div className="disclaimer-container">
        <strong>Disclaimer:</strong> We are an authorised marketing partner for
        this project. Provided content is given by respective owners and this
        website and content is for information purpose only and it does not
        constitute any offer to avail for any services. Prices mentioned are
        subject to change without prior notice and properties mentioned are
        subject to availability. You can expect a call, SMS or emails on details
        registered with us. | Project RERA No. P51700056361.
      </div>
    </footer>
  );
}
