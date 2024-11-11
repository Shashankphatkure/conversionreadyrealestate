"use client";
import { useState, useEffect, useCallback } from "react";
import ContactUs from "@/components/ContactUs";
import FooterBottom from "@/components/FooterBottom";
import FooterTop from "@/components/FooterTop";
import Header from "@/components/Header";
import HeaderSearch from "@/components/HeaderSearch";
import HeaderTop from "@/components/HeaderTop";
import {
  HomeIcon,
  ChevronRightIcon,
  FunnelIcon,
  XMarkIcon,
  AdjustmentsHorizontalIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  CurrencyRupeeIcon,
  ClockIcon,
  TrashIcon,
  SearchIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { supabase } from "@/utils/supabase";
import { useRouter, useSearchParams } from "next/navigation";

// Enhanced PropertySkeleton with better animation
const PropertySkeleton = () => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
    <div className="h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
    <div className="p-6">
      <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-3/4 mb-4"></div>
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
      <div className="mt-6 pt-4 border-t">
        <div className="flex justify-between">
          <div className="h-5 bg-gray-200 rounded w-1/3"></div>
          <div className="h-5 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  </div>
);

// Enhanced FilterTag with animation
const FilterTag = ({ label, value, onRemove }) => (
  <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-50 to-red-100 text-red-600 rounded-full text-sm font-medium shadow-sm hover:shadow transition-all duration-200">
    {label}: {value}
    <button
      onClick={onRemove}
      className="hover:bg-red-200 p-1 rounded-full transition-colors"
      aria-label={`Remove ${label} filter`}
    >
      <XMarkIcon className="w-4 h-4" />
    </button>
  </span>
);

// Enhanced SearchHistory with better styling
const SearchHistory = ({ searches, onSelect, onClear }) => (
  <div className="bg-white rounded-xl shadow-md p-6 mb-8 transform transition-all duration-300 hover:shadow-lg">
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-2">
        <ClockIcon className="w-5 h-5 text-gray-400" />
        <h3 className="font-semibold text-gray-900">Recent Searches</h3>
      </div>
      <button
        onClick={onClear}
        className="text-sm text-red-500 hover:text-red-600 transition-colors flex items-center gap-1"
      >
        <TrashIcon className="w-4 h-4" />
        Clear History
      </button>
    </div>
    <div className="flex flex-wrap gap-3">
      {searches.map((search, index) => (
        <button
          key={index}
          onClick={() => onSelect(search)}
          className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-full text-sm text-gray-600 transition-colors duration-200 flex items-center gap-2"
        >
          <SearchIcon className="w-4 h-4 text-gray-400" />
          {search.projectName || search.city || search.builder}
        </button>
      ))}
    </div>
  </div>
);

// Enhanced Property Card Component
const PropertyCard = ({ property }) => (
  <a
    href={property.link}
    className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
  >
    {/* Image Container with Overlay */}
    <div className="relative">
      {/* Main Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.image || "/placeholder-property.jpg"}
          alt={property.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span
          className={`
          px-3 py-1.5 rounded-full text-sm font-medium shadow-lg
          ${
            property.status === "READY TO MOVE"
              ? "bg-gradient-to-r from-green-500 to-green-600 text-white"
              : property.status === "UNDER CONSTRUCTION"
              ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white"
              : "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
          }
        `}
        >
          {property.status}
        </span>
      </div>

      {/* Developer Logo */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
        <div className="flex items-center gap-2">
          <BuildingOfficeIcon className="w-5 h-5 text-gray-600" />
          <span className="text-sm font-medium text-gray-800">
            {property.developer}
          </span>
        </div>
      </div>

      {/* Price Tag */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg py-1.5 px-3 shadow-lg">
        <div className="flex items-center gap-1">
          <CurrencyRupeeIcon className="w-4 h-4 text-red-500" />
          <span className="font-semibold text-gray-900">{property.price}</span>
        </div>
      </div>
    </div>

    {/* Content Section */}
    <div className="p-6">
      {/* Property Title - updated size from text-xl to text-lg and adjusted spacing */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-500 transition-colors line-clamp-2">
        {property.name}
      </h3>

      {/* Property Details */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center text-gray-600 group-hover:text-gray-900 transition-colors">
          <MapPinIcon className="w-5 h-5 mr-2 text-red-500 flex-shrink-0" />
          <span className="text-sm line-clamp-1">{property.location}</span>
        </div>

        <div className="flex items-center text-gray-600 group-hover:text-gray-900 transition-colors">
          <HomeIcon className="w-5 h-5 mr-2 text-red-500 flex-shrink-0" />
          <span className="text-sm">{property.configurations}</span>
        </div>

        {/* Amenities Preview */}
        {property.amenities && property.amenities.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {property.amenities.slice(0, 3).map((amenity, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
              >
                {amenity}
              </span>
            ))}
            {property.amenities.length > 3 && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                +{property.amenities.length - 3} more
              </span>
            )}
          </div>
        )}
      </div>

      {/* Footer Section */}
      <div className="pt-4 border-t border-gray-100">
        <div className="flex justify-between items-center">
          {/* Possession Date */}
          <div className="flex items-center gap-1.5">
            <ClockIcon className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-500">
              Possession: {property.possession}
            </span>
          </div>

          {/* View Details Button */}
          <span className="inline-flex items-center gap-1 text-sm font-medium text-red-500 group-hover:text-red-600 transition-colors">
            View Details
            <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>

      {/* Hover Overlay for Touch Devices */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors pointer-events-none md:hidden" />
    </div>
  </a>
);

// Enhanced Filter Section
const FilterSection = ({ title, children }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">{title}</label>
    {children}
  </div>
);

// Add to your CSS (globals.css or similar)
const styles = `
  @keyframes shimmer {
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
  }
  
  .animate-shimmer {
    animation: shimmer 2s infinite linear;
    background-size: 1000px 100%;
  }
`;

export default function SearchResults() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Add configurations array with other sample data at the top of the component
  const projectTypes = ["Residential", "Commercial", "Luxury", "Affordable"];
  const builders = [
    "Lodha Group",
    "Godrej Properties",
    "Runwal Group",
    "Piramal Realty",
  ];
  const cities = ["Mumbai", "Thane", "Navi Mumbai", "Kalyan"];
  const configurations = [
    "1 BHK",
    "1.5 BHK",
    "2 BHK",
    "2.5 BHK",
    "3 BHK",
    "3.5 BHK",
    "4 BHK",
    "4+ BHK",
  ];
  const budgetRanges = [
    "25 Lac",
    "50 Lac",
    "75 Lac",
    "1 Cr",
    "1.5 Cr",
    "2 Cr",
    "2.5 Cr",
    "3 Cr",
    "5 Cr",
  ];

  // Initialize filters from URL params
  const [filters, setFilters] = useState({
    projectName: searchParams.get("name") || "",
    projectType: searchParams.get("type") || "",
    builder: searchParams.get("builder") || "",
    minBudget: searchParams.get("minBudget") || "",
    maxBudget: searchParams.get("maxBudget") || "",
    city: searchParams.get("city") || "",
    configuration: searchParams.get("config") || "",
  });

  const [showFilters, setShowFilters] = useState(true);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("relevance");
  const [properties, setProperties] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [searchHistory, setSearchHistory] = useState([]);

  // Load search history from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem("searchHistory");
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  // Save search to history
  const saveToHistory = useCallback(
    (searchFilters) => {
      const newHistory = [
        searchFilters,
        ...searchHistory
          .filter((h) => JSON.stringify(h) !== JSON.stringify(searchFilters))
          .slice(0, 4),
      ];
      setSearchHistory(newHistory);
      localStorage.setItem("searchHistory", JSON.stringify(newHistory));
    },
    [searchHistory]
  );

  useEffect(() => {
    fetchProperties();
  }, [currentPage, sortBy]);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      let query = supabase.from("properties").select(
        `
          id,
          name,
          link,
          image,
          location,
          type,
          status,
          developer,
          configurations,
          price,
          description,
          amenities,
          completion_date,
          total_units,
          overview,
          price_details,
          location_details
        `,
        { count: "exact" }
      );

      // Apply filters
      if (filters.projectName) {
        query = query.ilike("name", `%${filters.projectName}%`);
      }

      if (filters.projectType) {
        query = query.eq("type", filters.projectType.toLowerCase());
      }

      if (filters.builder) {
        query = query.ilike("developer", `%${filters.builder}%`);
      }

      if (filters.city) {
        query = query.ilike("location", `%${filters.city}%`);
      }

      if (filters.configuration) {
        query = query.ilike("configurations", `%${filters.configuration}%`);
      }

      // Price range filtering (assuming price is stored as text)
      if (filters.minBudget) {
        const minPrice = filters.minBudget.replace(/[^0-9.]/g, "");
        query = query.gte("price_details->>'Starting Price'", minPrice);
      }

      if (filters.maxBudget) {
        const maxPrice = filters.maxBudget.replace(/[^0-9.]/g, "");
        query = query.lte("price_details->>'Starting Price'", maxPrice);
      }

      // Apply sorting
      switch (sortBy) {
        case "price_low":
          query = query.order("price_details->>'Starting Price'", {
            ascending: true,
          });
          break;
        case "price_high":
          query = query.order("price_details->>'Starting Price'", {
            ascending: false,
          });
          break;
        case "newest":
          query = query.order("created_at", { ascending: false });
          break;
        default:
          query = query.order("name");
      }

      // Apply pagination
      const start = (currentPage - 1) * itemsPerPage;
      query = query.range(start, start + itemsPerPage - 1);

      const { data, error, count } = await query;

      if (error) throw error;

      // Transform the data to match the PropertyCard component expectations
      const transformedProperties = data.map((property) => ({
        id: property.id,
        name: property.name,
        link: property.link,
        image: property.image,
        location: property.location,
        developer: property.developer,
        configurations: property.configurations,
        price: property.price_details?.["Starting Price"] || property.price,
        status: property.status.replace("_", " "),
        possession: property.completion_date
          ? new Date(property.completion_date).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })
          : "Not Available",
        amenities: property.amenities || [],
        overview: property.overview || {},
        location_details: property.location_details || {},
      }));

      setProperties(transformedProperties);
      setTotalCount(count || 0);
    } catch (error) {
      console.error("Error fetching properties:", error);
    } finally {
      setLoading(false);
    }
  };

  // Update URL with current filters
  const updateURL = (newFilters) => {
    const params = new URLSearchParams();
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });
    router.push(`/search?${params.toString()}`, { scroll: false });
  };

  // Modified handleFilterChange
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const newFilters = {
      ...filters,
      [name]: value,
    };
    setFilters(newFilters);
    updateURL(newFilters);
  };

  // Modified handleSearch to include history
  const handleSearch = () => {
    setCurrentPage(1);
    updateURL(filters);
    saveToHistory(filters);
    fetchProperties();
  };

  // Modified clearFilters
  const clearFilters = () => {
    const emptyFilters = {
      projectName: "",
      projectType: "",
      builder: "",
      minBudget: "",
      maxBudget: "",
      city: "",
      configuration: "",
    };
    setFilters(emptyFilters);
    setCurrentPage(1);
    updateURL(emptyFilters);
    fetchProperties();
  };

  // Pagination component
  const Pagination = () => {
    const totalPages = Math.ceil(totalCount / itemsPerPage);
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex justify-center items-center space-x-2 mt-8">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-lg border hover:bg-gray-50 disabled:opacity-50"
        >
          Previous
        </button>

        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`px-4 py-2 rounded-lg border ${
              currentPage === number
                ? "bg-red-500 text-white"
                : "hover:bg-gray-50"
            }`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-lg border hover:bg-gray-50 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    );
  };

  // Get active filters for tags
  const getActiveFilters = () => {
    return Object.entries(filters).filter(([_, value]) => value !== "");
  };

  // Remove individual filter
  const removeFilter = (key) => {
    const newFilters = {
      ...filters,
      [key]: "",
    };
    setFilters(newFilters);
    updateURL(newFilters);
    fetchProperties();
  };

  // Clear search history
  const clearSearchHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem("searchHistory");
  };

  // Load saved search
  const loadSavedSearch = (savedFilters) => {
    setFilters(savedFilters);
    updateURL(savedFilters);
    fetchProperties();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderTop />
      <Header />
      <HeaderSearch />

      {/* Breadcrumb */}
      <div className="bg-white py-2 border-b shadow-sm">
        <div className="container mx-auto px-4 md:px-8 lg:px-20">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <a
                  href="/"
                  className="text-sm text-gray-700 hover:text-red-500 flex items-center"
                >
                  <HomeIcon className="w-4 h-4 mr-1" />
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon className="w-3 h-3 text-gray-400 mx-1" />
                  <span className="text-sm text-red-500">Search Results</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-20 py-8">
        {/* Add Search History if available */}
        {searchHistory.length > 0 && (
          <SearchHistory
            searches={searchHistory}
            onSelect={loadSavedSearch}
            onClear={clearSearchHistory}
          />
        )}

        {/* Search Stats and Sort */}
        <div className="flex flex-col space-y-4 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">
              Showing {properties.length} of {totalCount} properties
            </p>
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:ring-red-500 focus:border-red-500"
              >
                <option value="relevance">Sort by Relevance</option>
                <option value="price_low">Price: Low to High</option>
                <option value="price_high">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 text-red-500 hover:text-red-600"
              >
                {showFilters ? (
                  <XMarkIcon className="w-5 h-5" />
                ) : (
                  <AdjustmentsHorizontalIcon className="w-5 h-5" />
                )}
                {showFilters ? "Hide Filters" : "Show Filters"}
              </button>
            </div>
          </div>

          {/* Add Filter Tags */}
          {getActiveFilters().length > 0 && (
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm text-gray-600">Active Filters:</span>
              {getActiveFilters().map(([key, value]) => (
                <FilterTag
                  key={key}
                  label={key.replace(/([A-Z])/g, " $1").trim()}
                  value={value}
                  onRemove={() => removeFilter(key)}
                />
              ))}
              <button
                onClick={clearFilters}
                className="text-sm text-red-500 hover:text-red-600 ml-2"
              >
                Clear All
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Panel */}
          {showFilters && (
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-4 transition-shadow hover:shadow-lg">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-2">
                    <FunnelIcon className="w-5 h-5 text-red-500" />
                    <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                  </div>
                  <button
                    onClick={clearFilters}
                    className="text-red-500 text-sm hover:text-red-600 transition-colors flex items-center gap-1"
                  >
                    <XMarkIcon className="w-4 h-4" />
                    Clear All
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Use FilterSection component for each filter */}
                  <FilterSection title="Project Name">
                    <input
                      type="text"
                      name="projectName"
                      value={filters.projectName}
                      onChange={handleFilterChange}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                      placeholder="Search projects..."
                    />
                  </FilterSection>

                  {/* Project Type */}
                  <FilterSection title="Project Type">
                    <select
                      name="projectType"
                      value={filters.projectType}
                      onChange={handleFilterChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="">All Types</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </FilterSection>

                  {/* Builder */}
                  <FilterSection title="Builder">
                    <select
                      name="builder"
                      value={filters.builder}
                      onChange={handleFilterChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="">All Builders</option>
                      {builders.map((builder) => (
                        <option key={builder} value={builder}>
                          {builder}
                        </option>
                      ))}
                    </select>
                  </FilterSection>

                  {/* Configuration */}
                  <FilterSection title="Configuration">
                    <select
                      name="configuration"
                      value={filters.configuration}
                      onChange={handleFilterChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="">All Configurations</option>
                      {configurations.map((config) => (
                        <option key={config} value={config}>
                          {config}
                        </option>
                      ))}
                    </select>
                  </FilterSection>

                  {/* Min Budget */}
                  <FilterSection title="Min Budget">
                    <select
                      name="minBudget"
                      value={filters.minBudget}
                      onChange={handleFilterChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="">No Min</option>
                      {budgetRanges.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </FilterSection>

                  {/* Max Budget */}
                  <FilterSection title="Max Budget">
                    <select
                      name="maxBudget"
                      value={filters.maxBudget}
                      onChange={handleFilterChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="">No Max</option>
                      {budgetRanges.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </FilterSection>

                  {/* City */}
                  <FilterSection title="City">
                    <select
                      name="city"
                      value={filters.city}
                      onChange={handleFilterChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="">All Cities</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </FilterSection>

                  <button
                    onClick={handleSearch}
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Searching...
                      </div>
                    ) : (
                      "Apply Filters"
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Search Results with Skeleton Loading */}
          <div className={showFilters ? "lg:col-span-3" : "lg:col-span-4"}>
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((n) => (
                  <PropertySkeleton key={n} />
                ))}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {properties.map((property, index) => (
                    <PropertyCard key={index} property={property} />
                  ))}
                </div>

                {/* Add Pagination */}
                {properties.length > 0 && <Pagination />}
              </>
            )}

            {/* Enhanced No Results Message */}
            {!loading && properties.length === 0 && (
              <div className="text-center py-12 bg-white rounded-lg shadow-md">
                <div className="mb-4">
                  <BuildingOfficeIcon className="w-12 h-12 text-gray-400 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No Properties Found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search criteria or
                </p>
                <button
                  onClick={clearFilters}
                  className="text-red-500 hover:text-red-600 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <FooterTop />
      <FooterBottom />
    </div>
  );
}
