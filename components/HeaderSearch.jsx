import "./HeaderSearch.css";

export default function HeaderSearch() {
    return (
        <div className="hb-25x">
            <div className="search-oyt">
                <div className="container-ssc">
                    <div className="content-zed">
                        <div className="row-etd content-nj1 text-i2x">
                            <div className="col-8nj">
                                <h2>Find Your Dream Home With Us</h2><br />
                            </div>
                            <div className="col-8nj">
                                <div className="search-vvo">
                                    <div className="search-ze4">
                                        <form>
                                            <div className="row-etd content-nj1 no-maj">
                                                <div className="col-oxy col-x5q d-yrc" />
                                                <div className="col-sgs col-pzo">
                                                    <div className="auto-jpq">
                                                        <input 
                                                            type="text" 
                                                            name="project-name" 
                                                            id="sea-6t3" 
                                                            placeholder="Search by: Project Name/ Property Name/ Location" 
                                                            style={{margin: "0 !important"}} 
                                                        />
                                                        <div style={{
                                                            width: "96%",
                                                            position: "absolute",
                                                            zIndex: "999",
                                                            height: "140px",
                                                            overflow: "auto",
                                                            display: "none",
                                                            marginLeft: "0%",
                                                            borderRadius: "10px"
                                                        }} />
                                                        <div id="sug-71o" />
                                                    </div>
                                                </div>
                                                <div className="col-gbd col-hz4">
                                                    <button type="submit">
                                                        <i className="hygin search-48v" />
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
