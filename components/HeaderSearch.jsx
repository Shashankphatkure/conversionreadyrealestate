import "./HeaderSearch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HeaderSearch() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      // Navigate to search page with the search query
      router.push(`/search?name=${encodeURIComponent(searchText.trim())}`);
    }
  };

  return (
    <div className="hb-25x">
      <div className="search-oyt">
        <div className="container-ssc">
          <div className="content-zed">
            <div className="row-etd content-nj1 text-i2x flex-column">
              <div className="text-center mb-3">
                <p style={{ color: "white", fontSize: "36px" }}>
                  Find Your Dream Home With Us
                </p>
              </div>
              <div className="col-8nj">
                <div className="search-vvo">
                  <div className="search-ze4">
                    <form onSubmit={handleSubmit}>
                      <div className="row-etd content-nj1 no-maj">
                        <div className="col-oxy col-x5q d-yrc" />
                        <div className="col-sgs col-pzo">
                          <div className="auto-jpq">
                            <input
                              type="text"
                              name="project-name"
                              id="sea-6t3"
                              value={searchText}
                              onChange={(e) => setSearchText(e.target.value)}
                              placeholder="Search by: Project Name/ Property Name/ Location"
                              style={{ margin: "0 !important" }}
                            />
                            <div
                              style={{
                                width: "96%",
                                position: "absolute",
                                zIndex: "999",
                                height: "140px",
                                overflow: "auto",
                                display: "none",
                                marginLeft: "0%",
                                borderRadius: "10px",
                              }}
                            />
                            <div id="sug-71o" />
                          </div>
                        </div>
                        <div className="col-gbd col-hz4">
                          <button type="submit">
                            <FontAwesomeIcon
                              icon={faSearch}
                              className="hygin search-48v"
                            />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
