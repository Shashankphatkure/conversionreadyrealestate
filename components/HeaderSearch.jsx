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
      router.push(`/search?name=${encodeURIComponent(searchText.trim())}`);
    }
  };

  return (
    <div className="w-full h-full relative bg-[url('https://newprojectsonline.com/assets/main/img/properties/properties-6.webp')] bg-cover bg-center bg-no-repeat py-24">
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-1 w-full pt-10">
        <div className="container mx-auto px-4 max-w-[1250px]">
          <div className="py-16">
            <div className="flex flex-col items-center justify-center">
              <div className="text-center mb-3">
                <p className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
                  Find Your Dream Home With Us
                </p>
              </div>

              <div className="w-full lg:w-2/3 px-4">
                <div className="relative mt-2.5">
                  <div className="absolute w-full bottom-[-90px]">
                    <div className="p-8 rounded bg-white/30 backdrop-blur-sm shadow-lg">
                      <form onSubmit={handleSubmit}>
                        <div className="flex">
                          <div className="flex-1">
                            <div className="relative text-left">
                              <input
                                type="text"
                                name="project-name"
                                id="sea-6t3"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                placeholder="Search by: Project Name/ Property Name/ Location"
                                className="w-full h-[45px] px-4 rounded-l focus:outline-none"
                              />
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="bg-[#f64d0d] text-white px-6 h-[45px] uppercase text-lg rounded-r hover:bg-[#e64707] transition-colors"
                          >
                            <FontAwesomeIcon icon={faSearch} />
                          </button>
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
    </div>
  );
}
