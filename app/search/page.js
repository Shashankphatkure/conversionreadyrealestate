"use client";
import { useState, useEffect } from "react";
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
} from "@heroicons/react/24/solid";
import { supabase } from "@/utils/supabase";
import { useRouter, useSearchParams } from "next/navigation";

// Add Skeleton Loading Component
const PropertySkeleton = () => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
    <div className="h-48 bg-gray-200"></div>
    <div className="p-4">
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>
      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between">
          <div className="h-5 bg-gray-200 rounded w-1/3"></div>
          <div className="h-5 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  </div>
);

export default function SearchResults() {
  const router = useRouter();
  const searchParams = useSearchParams();

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

  // Sample data
  const projectTypes = ["Residential", "Commercial", "Luxury", "Affordable"];
  const builders = [
    "Lodha Group",
    "Godrej Properties",
    "Runwal Group",
    "Piramal Realty",
  ];
  const cities = ["Mumbai", "Thane", "Navi Mumbai", "Kalyan"];
  const configurations = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"];
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

  useEffect(() => {
    fetchProperties();
  }, [currentPage, sortBy]);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      let query = supabase.from("properties").select("*", { count: "exact" });

      // Apply filters
      if (filters.projectName) {
        query = query.ilike("name", `%${filters.projectName}%`);
      }
      if (filters.projectType) {
        query = query.eq("type", filters.projectType);
      }
      if (filters.builder) {
        query = query.eq("developer", filters.builder);
      }
      if (filters.city) {
        query = query.eq("city", filters.city);
      }
      if (filters.configuration) {
        query = query.ilike("configurations", `%${filters.configuration}%`);
      }

      // Apply sorting
      switch (sortBy) {
        case "price_low":
          query = query.order("price", { ascending: true });
          break;
        case "price_high":
          query = query.order("price", { ascending: false });
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

      setProperties(data || []);
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

  // Modified handleSearch
  const handleSearch = () => {
    setCurrentPage(1);
    updateURL(filters);
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
        {/* Search Stats and Sort */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
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

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Panel */}
          {showFilters && (
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Filters</h2>
                  <button
                    onClick={clearFilters}
                    className="text-red-500 text-sm hover:text-red-600"
                  >
                    Clear All
                  </button>
                </div>

                {/* Filter Fields */}
                <div className="space-y-6">
                  {/* ... existing filter fields ... */}
                  {/* Add Configuration Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Configuration
                    </label>
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
                  </div>

                  <button
                    onClick={handleSearch}
                    disabled={loading}
                    className="w-full bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors disabled:bg-gray-400"
                  >
                    {loading ? "Searching..." : "Apply Filters"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Search Results with Skeleton Loading */}
          <div className={showFilters ? "lg:col-span-3" : "lg:col-span-4"}>
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <PropertySkeleton key={n} />
                ))}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {properties.map((property, index) => (
                    <a
                      href={property.link}
                      key={index}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="relative">
                        <img
                          src={property.image}
                          alt={property.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                          {property.status}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {property.name}
                        </h3>
                        <div className="space-y-2">
                          <p className="flex items-center text-gray-600">
                            <MapPinIcon className="w-4 h-4 mr-2" />
                            {property.location}
                          </p>
                          <p className="flex items-center text-gray-600">
                            <BuildingOfficeIcon className="w-4 h-4 mr-2" />
                            {property.developer}
                          </p>
                          <p className="flex items-center text-gray-600">
                            <HomeIcon className="w-4 h-4 mr-2" />
                            {property.configurations}
                          </p>
                        </div>
                        <div className="mt-4 pt-4 border-t">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center text-red-500 font-semibold">
                              <CurrencyRupeeIcon className="w-4 h-4 mr-1" />
                              {property.price}
                            </div>
                            <span className="text-sm text-gray-500">
                              Possession: {property.possession}
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
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
