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
  MagnifyingGlassIcon as SearchIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { supabase } from "@/utils/supabase";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

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

// Enhanced Property Card Component
const PropertyCard = ({ property }) => (
  <Link
    href={`/property/${property.id}`}
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
  </Link>
);

// Enhanced Filter Section
const FilterSection = ({ title, children }) => (
  <div className="border-b border-gray-100 pb-3">
    <label className="block text-sm font-semibold text-gray-800 mb-1.5">
      {title}
    </label>
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

// Add this new component for select inputs
const FilterSelect = ({ value, onChange, name, options, placeholder }) => (
  <div className="relative">
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg 
                 text-gray-700 text-sm appearance-none hover:border-red-300 
                 focus:ring-2 focus:ring-red-100 focus:border-red-400 transition-all duration-200"
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
      <ChevronRightIcon className="w-4 h-4 text-gray-400 rotate-90" />
    </div>
  </div>
);

export default function SearchResults() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Add itemsPerPage constant
  const itemsPerPage = 10; // or whatever number you want to show per page

  // Add these state declarations at the top with other useState hooks
  const [builders, setBuilders] = useState([]);
  const [cities, setCities] = useState([]);

  // Keep these as regular constants
  const projectTypes = ["Residential", "Commercial", "Industrial"];
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
    userName: "",
    userPhone: "",
  });

  const [validationError, setValidationError] = useState("");

  const [showFilters, setShowFilters] = useState(true);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("relevance");
  const [properties, setProperties] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // Add useEffect to fetch builders and localities
  useEffect(() => {
    const loadFilterData = async () => {
      const [buildersList, localitiesList] = await Promise.all([
        fetchBuilders(),
        fetchLocalities(),
      ]);

      setBuilders(buildersList);
      setCities(localitiesList);
    };

    loadFilterData();
  }, []);

  // Add this useEffect to handle URL parameter changes
  useEffect(() => {
    const searchName = searchParams.get("name");
    if (searchName) {
      setFilters((prev) => ({
        ...prev,
        projectName: searchName,
      }));
    }
  }, [searchParams]);

  // Add this useEffect to trigger search when filters change
  useEffect(() => {
    fetchProperties();
  }, [filters]);

  // Add this useEffect to trigger search when sort changes
  useEffect(() => {
    fetchProperties();
  }, [sortBy]);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      let query = supabase.from("properties").select(
        `
          id,
          name,
          image,
          location,
          type,
          status,
          configurations,
          price,
          price_details,
          amenities,
          carpet_area,
          price_range,
          overview,
          location_details,
          created_at,
          builder,
          builders!properties_builder_fkey (
            id,
            name,
            logo,
            established_year
          ),
          localities!properties_locality_fkey (
            id,
            name,
            properties
          )
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
        query = query.eq("builders.name", filters.builder);
      }

      // Fix locality filtering - using the correct foreign key relationship
      if (filters.city) {
        // First get the locality ID
        const { data: localityData, error: localityError } = await supabase
          .from("localities")
          .select("id")
          .eq("name", filters.city)
          .single();

        if (localityError) {
          console.error("Error fetching locality:", localityError);
        } else if (localityData) {
          query = query.eq("locality", localityData.id);
        }
      }

      // Rest of the query remains the same...
      switch (sortBy) {
        case "price_low":
          query = query.order("price", { ascending: true, nullsLast: true });
          break;
        case "price_high":
          query = query.order("price", { ascending: false, nullsLast: true });
          break;
        case "newest":
          query = query.order("created_at", { ascending: false });
          break;
        case "relevance":
        default:
          query = query.order("name", { ascending: true });
          break;
      }

      query = query.range(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage - 1
      );

      const { data, error, count } = await query;

      if (error) throw error;

      // Transform the properties - using the correct locality reference
      const transformedProperties = data.map((property) => ({
        id: property.id,
        name: property.name,
        image: property.image,
        location: property.localities?.name || property.location,
        developer: property.builders?.name || "Unknown Developer",
        configurations: property.configurations,
        price: formatPrice(property.price_range),
        status: property.status.replace(/_/g, " "),
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

  // Add functions to fetch builders and localities for filters
  const fetchBuilders = async () => {
    const { data: builders, error } = await supabase
      .from("builders")
      .select("name")
      .order("name");

    if (error) {
      console.error("Error fetching builders:", error);
      return [];
    }

    return builders.map((builder) => builder.name);
  };

  const fetchLocalities = async () => {
    try {
      const { data: localities, error } = await supabase
        .from("localities")
        .select("name")
        .order("name");

      if (error) throw error;

      return localities.map((locality) => locality.name);
    } catch (error) {
      console.error("Error fetching localities:", error);
      return [];
    }
  };

  // Add this helper function to format the price range
  const formatPrice = (priceRange) => {
    if (!priceRange) return "Price on Request";

    const configs = ["1_bhk", "2_bhk", "3_bhk"];
    let minPrice = Infinity;

    configs.forEach((config) => {
      if (priceRange[config]?.min) {
        minPrice = Math.min(minPrice, priceRange[config].min);
      }
    });

    if (minPrice === Infinity) return "Price on Request";

    // Convert to Crores/Lakhs format
    if (minPrice >= 10000000) {
      return `${(minPrice / 10000000).toFixed(2)} Cr onwards`;
    } else {
      return `${(minPrice / 100000).toFixed(2)} L onwards`;
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
    // Remove the immediate URL update and search
    // setCurrentPage(1);
    // updateURL(newFilters);
  };

  // Update handleSearch to handle everything when the button is clicked
  const handleSearch = async () => {
    setCurrentPage(1);
    updateURL(filters);
    await fetchProperties();

    // Create lead if user info is provided
    if (filters.userName || filters.userPhone) {
      await createLead();
    }
  };

  // Modified clearFilters function
  const clearFilters = async () => {
    // Reset all filters to initial state
    const emptyFilters = {
      projectName: "",
      projectType: "",
      builder: "",
      minBudget: "",
      maxBudget: "",
      city: "",
      configuration: "",
      userName: "",
      userPhone: "",
    };

    // Reset other states
    setFilters(emptyFilters);
    setCurrentPage(1);
    setSortBy("relevance");
    setValidationError("");

    // Clear URL parameters
    router.push("/search", { scroll: false });

    // Fetch all properties without filters
    try {
      setLoading(true);
      const { data, error, count } = await supabase
        .from("properties")
        .select(
          `
          id,
          name,
          image,
          location,
          type,
          status,
          configurations,
          price,
          price_details,
          amenities,
          carpet_area,
          price_range,
          overview,
          location_details,
          created_at,
          builder,
          builders!properties_builder_fkey (
            id,
            name,
            logo,
            established_year
          ),
          localities!properties_locality_fkey (
            id,
            name,
            properties
          )
        `,
          { count: "exact" }
        )
        .range(0, itemsPerPage - 1)
        .order("name", { ascending: true });

      if (error) throw error;

      // Transform properties using the same transformation logic
      const transformedProperties = data.map((property) => ({
        id: property.id,
        name: property.name,
        image: property.image,
        location: property.localities?.name || property.location,
        developer: property.builders?.name || "Unknown Developer",
        configurations: property.configurations,
        price: formatPrice(property.price_range),
        status: property.status.replace(/_/g, " "),
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

  // Load saved search
  const loadSavedSearch = (savedFilters) => {
    setFilters(savedFilters);
    updateURL(savedFilters);
    fetchProperties();
  };

  // Update the sort handler to store the value but not trigger immediate search
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
    // Remove immediate search trigger
    // fetchProperties();
  };

  // Update the SortingOptions component to use the new handler
  const SortingOptions = () => (
    <div className="flex items-center gap-2">
      <label htmlFor="sort-select" className="text-gray-600">
        Sort by:
      </label>
      <select
        id="sort-select"
        value={sortBy}
        onChange={handleSortChange}
        className="px-4 py-2 border rounded-lg focus:ring-red-500 focus:border-red-500 bg-white"
      >
        <option value="relevance">Relevance</option>
        <option value="price_low">Price: Low to High</option>
        <option value="price_high">Price: High to Low</option>
        <option value="newest">Newest First</option>
      </select>
    </div>
  );

  // Add this function to handle lead creation
  const createLead = async () => {
    // Validate required fields
    if (!filters.userName || !filters.userPhone) {
      setValidationError("Please enter both name and phone number");
      return;
    }

    try {
      const { error } = await supabase.from("leads").insert({
        name: filters.userName,
        phone: filters.userPhone,
        property_type: filters.projectType || null,
        budget_range: filters.minBudget
          ? `${filters.minBudget} - ${filters.maxBudget}`
          : null,
        location: filters.city || null,
        notes: `Search Filters: ${JSON.stringify(filters)}`,
        source: "property_search",
      });

      if (error) throw error;

      // Clear user fields after successful submission
      setFilters((prev) => ({
        ...prev,
        userName: "",
        userPhone: "",
      }));
      setValidationError("");

      // Show success message (you'll need to implement this UI)
      alert("Thank you! We'll contact you soon.");
    } catch (error) {
      console.error("Error creating lead:", error);
      setValidationError("Failed to submit. Please try again.");
    }
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
        <div className="flex flex-col space-y-4 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">
              Showing {properties.length} of {totalCount} properties
            </p>
            <SortingOptions />
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
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Panel */}
          {showFilters && (
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-4 transition-all duration-300 hover:shadow-lg">
                {/* Filter Content */}
                <div className="p-4 space-y-4">
                  {/* Project Name */}
                  <FilterSection title="Project Name">
                    <div className="relative">
                      <input
                        type="text"
                        name="projectName"
                        value={filters.projectName}
                        onChange={handleFilterChange}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg 
                                 text-gray-700 text-sm placeholder-gray-400
                                 focus:ring-2 focus:ring-red-100 focus:border-red-400 
                                 transition-all duration-200"
                        placeholder="Enter project name..."
                      />
                      <SearchIcon className="w-4 h-4 text-gray-400 absolute right-2 top-1/2 -translate-y-1/2" />
                    </div>
                  </FilterSection>

                  {/* Project Type */}
                  <FilterSection title="Project Type">
                    <FilterSelect
                      name="projectType"
                      value={filters.projectType}
                      onChange={handleFilterChange}
                      options={projectTypes}
                      placeholder="Select project type"
                    />
                  </FilterSection>

                  {/* Builder */}
                  <FilterSection title="Builder">
                    <FilterSelect
                      name="builder"
                      value={filters.builder}
                      onChange={handleFilterChange}
                      options={builders}
                      placeholder="Select builder"
                    />
                  </FilterSection>

                  {/* Budget Range */}
                  <div className="border-b border-gray-100 pb-3">
                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                      Budget Range
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <FilterSelect
                        name="minBudget"
                        value={filters.minBudget}
                        onChange={handleFilterChange}
                        options={budgetRanges}
                        placeholder="Min Budget"
                      />
                      <FilterSelect
                        name="maxBudget"
                        value={filters.maxBudget}
                        onChange={handleFilterChange}
                        options={budgetRanges}
                        placeholder="Max Budget"
                      />
                    </div>
                  </div>

                  {/* Configuration */}
                  <FilterSection title="Configuration">
                    <FilterSelect
                      name="configuration"
                      value={filters.configuration}
                      onChange={handleFilterChange}
                      options={configurations}
                      placeholder="Select configuration"
                    />
                  </FilterSection>

                  {/* City */}
                  <FilterSection title="City">
                    <FilterSelect
                      name="city"
                      value={filters.city}
                      onChange={handleFilterChange}
                      options={cities}
                      placeholder="Select city"
                    />
                  </FilterSection>

                  {/* User Information Section */}
                  <FilterSection title="Your Contact Information">
                    <div className="space-y-3">
                      <div>
                        <input
                          type="text"
                          name="userName"
                          value={filters.userName}
                          onChange={handleFilterChange}
                          placeholder="Your Name *"
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg 
                                    text-gray-700 text-sm placeholder-gray-400
                                    focus:ring-2 focus:ring-red-100 focus:border-red-400 
                                    transition-all duration-200"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          name="userPhone"
                          value={filters.userPhone}
                          onChange={handleFilterChange}
                          placeholder="Your Phone Number *"
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg 
                                    text-gray-700 text-sm placeholder-gray-400
                                    focus:ring-2 focus:ring-red-100 focus:border-red-400 
                                    transition-all duration-200"
                        />
                      </div>
                      {validationError && (
                        <p className="text-red-500 text-sm">
                          {validationError}
                        </p>
                      )}
                    </div>
                  </FilterSection>

                  {/* Apply Button */}
                  <button
                    onClick={handleSearch}
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2.5 
                             rounded-lg font-medium shadow-sm hover:shadow-md
                             hover:from-red-600 hover:to-red-700 transition-all duration-300 
                             disabled:opacity-50 disabled:cursor-not-allowed 
                             transform hover:-translate-y-0.5 active:translate-y-0"
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
                      "Apply Filters & Get Updates"
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
                  onClick={async () => await clearFilters()}
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
