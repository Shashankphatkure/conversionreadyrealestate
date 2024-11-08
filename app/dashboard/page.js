"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";
import { FiEdit2, FiTrash2, FiExternalLink, FiPlus } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { useAuth } from "@/components/AuthProvider";
import DashboardLayout from "@/components/DashboardLayout";

// Add this component at the top of your file, outside the main Dashboard component
const PropertyForm = ({ property, setProperty, onSubmit, onCancel, title }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Information */}
        <div className="col-span-2">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Basic Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Name*
              </label>
              <input
                type="text"
                value={property.name}
                onChange={(e) =>
                  setProperty({ ...property, name: e.target.value })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Developer*
              </label>
              <input
                type="text"
                value={property.developer}
                onChange={(e) =>
                  setProperty({ ...property, developer: e.target.value })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location*
              </label>
              <input
                type="text"
                value={property.location}
                onChange={(e) =>
                  setProperty({ ...property, location: e.target.value })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price*
              </label>
              <input
                type="text"
                value={property.price}
                onChange={(e) =>
                  setProperty({ ...property, price: e.target.value })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className="col-span-2">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Property Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type*
              </label>
              <select
                value={property.type}
                onChange={(e) =>
                  setProperty({ ...property, type: e.target.value })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status*
              </label>
              <select
                value={property.status}
                onChange={(e) =>
                  setProperty({ ...property, status: e.target.value })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="UNDER_CONSTRUCTION">Under Construction</option>
                <option value="READY_TO_MOVE">Ready to Move</option>
                <option value="UPCOMING">Upcoming</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Configurations*
              </label>
              <input
                type="text"
                value={property.configurations}
                onChange={(e) =>
                  setProperty({ ...property, configurations: e.target.value })
                }
                placeholder="e.g., 1BHK, 2BHK, 3BHK"
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Units
              </label>
              <input
                type="number"
                value={property.total_units}
                onChange={(e) =>
                  setProperty({ ...property, total_units: e.target.value })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Media & Links */}
        <div className="col-span-2">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Media & Links
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image URL*
              </label>
              <input
                type="url"
                value={property.image}
                onChange={(e) =>
                  setProperty({ ...property, image: e.target.value })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Link*
              </label>
              <input
                type="url"
                value={property.link}
                onChange={(e) =>
                  setProperty({ ...property, link: e.target.value })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="col-span-2">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Additional Information
          </h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={property.description}
                onChange={(e) =>
                  setProperty({ ...property, description: e.target.value })
                }
                rows={4}
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amenities
              </label>
              <input
                type="text"
                value={property.amenities}
                onChange={(e) =>
                  setProperty({
                    ...property,
                    amenities: e.target.value.split(","),
                  })
                }
                placeholder="Enter amenities separated by commas"
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Completion Date
              </label>
              <input
                type="date"
                value={property.completion_date}
                onChange={(e) =>
                  setProperty({ ...property, completion_date: e.target.value })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="col-span-2">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Project Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Area (acres)
              </label>
              <input
                type="text"
                value={property.overview?.project_area || ""}
                onChange={(e) =>
                  setProperty({
                    ...property,
                    overview: {
                      ...property.overview,
                      project_area: e.target.value,
                    },
                  })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Towers
              </label>
              <input
                type="number"
                value={property.overview?.total_towers || ""}
                onChange={(e) =>
                  setProperty({
                    ...property,
                    overview: {
                      ...property.overview,
                      total_towers: e.target.value,
                    },
                  })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                RERA ID
              </label>
              <input
                type="text"
                value={property.overview?.rera_id || ""}
                onChange={(e) =>
                  setProperty({
                    ...property,
                    overview: { ...property.overview, rera_id: e.target.value },
                  })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Price Details Section */}
        <div className="col-span-2">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Price Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price per sq.ft
              </label>
              <input
                type="text"
                value={property.price_details?.price_per_sqft || ""}
                onChange={(e) =>
                  setProperty({
                    ...property,
                    price_details: {
                      ...property.price_details,
                      price_per_sqft: e.target.value,
                    },
                  })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Booking Amount
              </label>
              <input
                type="text"
                value={property.price_details?.booking_amount || ""}
                onChange={(e) =>
                  setProperty({
                    ...property,
                    price_details: {
                      ...property.price_details,
                      booking_amount: e.target.value,
                    },
                  })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Location Details Section */}
        <div className="col-span-2">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Location Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Address
              </label>
              <textarea
                value={property.location_details?.address || ""}
                onChange={(e) =>
                  setProperty({
                    ...property,
                    location_details: {
                      ...property.location_details,
                      address: e.target.value,
                    },
                  })
                }
                rows={3}
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Landmarks (comma separated)
              </label>
              <input
                type="text"
                value={property.location_details?.landmarks?.join(", ") || ""}
                onChange={(e) =>
                  setProperty({
                    ...property,
                    location_details: {
                      ...property.location_details,
                      landmarks: e.target.value
                        .split(",")
                        .map((item) => item.trim()),
                    },
                  })
                }
                placeholder="Enter landmarks separated by commas"
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Latitude
              </label>
              <input
                type="text"
                value={property.location_details?.latitude || ""}
                onChange={(e) =>
                  setProperty({
                    ...property,
                    location_details: {
                      ...property.location_details,
                      latitude: e.target.value,
                    },
                  })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Longitude
              </label>
              <input
                type="text"
                value={property.location_details?.longitude || ""}
                onChange={(e) =>
                  setProperty({
                    ...property,
                    location_details: {
                      ...property.location_details,
                      longitude: e.target.value,
                    },
                  })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="col-span-2">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Gallery</h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image URLs (one per line)
              </label>
              <textarea
                value={property.gallery?.images?.join("\n") || ""}
                onChange={(e) =>
                  setProperty({
                    ...property,
                    gallery: {
                      ...property.gallery,
                      images: e.target.value
                        .split("\n")
                        .filter((url) => url.trim()),
                    },
                  })
                }
                rows={4}
                placeholder="Enter image URLs, one per line"
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Video URLs (one per line)
              </label>
              <textarea
                value={property.gallery?.videos?.join("\n") || ""}
                onChange={(e) =>
                  setProperty({
                    ...property,
                    gallery: {
                      ...property.gallery,
                      videos: e.target.value
                        .split("\n")
                        .filter((url) => url.trim()),
                    },
                  })
                }
                rows={4}
                placeholder="Enter video URLs, one per line"
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="col-span-2">
          <h3 className="text-lg font-medium text-gray-900 mb-4">FAQs</h3>
          <div className="space-y-4">
            {(property.faq || []).map((faq, index) => (
              <div key={index} className="grid grid-cols-1 gap-2">
                <input
                  type="text"
                  value={faq.question || ""}
                  onChange={(e) => {
                    const newFaqs = [...(property.faq || [])];
                    newFaqs[index] = {
                      ...newFaqs[index],
                      question: e.target.value,
                    };
                    setProperty({ ...property, faq: newFaqs });
                  }}
                  placeholder="Question"
                  className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  value={faq.answer || ""}
                  onChange={(e) => {
                    const newFaqs = [...(property.faq || [])];
                    newFaqs[index] = {
                      ...newFaqs[index],
                      answer: e.target.value,
                    };
                    setProperty({ ...property, faq: newFaqs });
                  }}
                  placeholder="Answer"
                  rows={2}
                  className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => {
                    const newFaqs = property.faq.filter((_, i) => i !== index);
                    setProperty({ ...property, faq: newFaqs });
                  }}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove FAQ
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                const newFaqs = [
                  ...(property.faq || []),
                  { question: "", answer: "" },
                ];
                setProperty({ ...property, faq: newFaqs });
              }}
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200"
            >
              Add FAQ
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4 pt-4 border-t">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          {title === "Add Property" ? "Add Property" : "Save Changes"}
        </button>
      </div>
    </form>
  );
};

export default function Dashboard() {
  const { user } = useAuth();
  const [properties, setProperties] = useState([]);
  const [isAddingProperty, setIsAddingProperty] = useState(false);
  const [editingProperty, setEditingProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "asc",
  });
  const [filters, setFilters] = useState({
    type: "all",
    status: "all",
    search: "",
    priceRange: "all",
  });

  const initialPropertyState = {
    name: "",
    link: "",
    image: "",
    location: "",
    type: "residential",
    status: "UNDER_CONSTRUCTION",
    developer: "",
    configurations: "",
    price: "",
    description: "",
    amenities: [],
    completion_date: "",
    total_units: "",
    overview: {
      project_area: "",
      total_towers: "",
      total_floors: "",
      possession_date: "",
      rera_id: "",
    },
    price_details: {
      starting_price: "",
      price_per_sqft: "",
      booking_amount: "",
      maintenance_charges: "",
    },
    site_plan: {
      plan_image: "",
      plan_description: "",
    },
    gallery: {
      images: [],
      videos: [],
    },
    location_details: {
      address: "",
      landmarks: [],
      latitude: "",
      longitude: "",
      connectivity: [],
    },
    site_tour: {
      virtual_tour_link: "",
      tour_images: [],
    },
    faq: [],
  };

  const [newProperty, setNewProperty] = useState(initialPropertyState);

  useEffect(() => {
    fetchProperties();
  }, []);

  async function fetchProperties() {
    const { data, error } = await supabase.from("properties").select("*");

    if (error) {
      console.error("Error fetching properties:", error);
    } else {
      setProperties(data);
    }
  }

  async function handleAddProperty(e) {
    e.preventDefault();
    setIsLoading(true);

    // Clean up the property data before sending
    const propertyToAdd = {
      ...newProperty,
      amenities: Array.isArray(newProperty.amenities)
        ? newProperty.amenities
        : newProperty.amenities
            ?.split(",")
            .map((item) => item.trim())
            .filter(Boolean) || [],
      gallery: {
        images: Array.isArray(newProperty.gallery?.images)
          ? newProperty.gallery.images
          : newProperty.gallery?.images?.split("\n").filter(Boolean) || [],
        videos: Array.isArray(newProperty.gallery?.videos)
          ? newProperty.gallery.videos
          : newProperty.gallery?.videos?.split("\n").filter(Boolean) || [],
      },
      location_details: {
        ...newProperty.location_details,
        landmarks: Array.isArray(newProperty.location_details?.landmarks)
          ? newProperty.location_details.landmarks
          : newProperty.location_details?.landmarks
              ?.split(",")
              .map((item) => item.trim())
              .filter(Boolean) || [],
      },
    };

    const { data, error } = await supabase
      .from("properties")
      .insert([propertyToAdd])
      .select();

    if (error) {
      toast.error("Error adding property");
      console.error("Error adding property:", error);
    } else {
      setProperties([...properties, data[0]]);
      setNewProperty(initialPropertyState);
      setIsAddingProperty(false);
      toast.success("Property added successfully");
    }
    setIsLoading(false);
  }

  async function handleDeleteProperty(id) {
    const { error } = await supabase.from("properties").delete().eq("id", id);

    if (error) {
      console.error("Error deleting property:", error);
    } else {
      setProperties(properties.filter((property) => property.id !== id));
    }
  }

  async function handleEditProperty(e) {
    e.preventDefault();
    setIsLoading(true);

    const { data, error } = await supabase
      .from("properties")
      .update(editingProperty)
      .eq("id", editingProperty.id)
      .select();

    if (error) {
      toast.error("Error updating property");
      console.error("Error updating property:", error);
    } else {
      setProperties(
        properties.map((p) => (p.id === editingProperty.id ? data[0] : p))
      );
      setEditingProperty(null);
      toast.success("Property updated successfully");
    }
    setIsLoading(false);
  }

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const filteredProperties = properties.filter((property) => {
    if (!property) return false;

    const matchesType =
      filters.type === "all" || property.type === filters.type;
    const matchesStatus =
      filters.status === "all" || property.status === filters.status;
    const matchesSearch =
      (property.name?.toLowerCase() || "").includes(
        filters.search.toLowerCase()
      ) ||
      (property.location?.toLowerCase() || "").includes(
        filters.search.toLowerCase()
      ) ||
      (property.developer?.toLowerCase() || "").includes(
        filters.search.toLowerCase()
      );

    return matchesType && matchesStatus && matchesSearch;
  });

  const sortedAndFilteredProperties = filteredProperties.sort((a, b) => {
    const aValue = a[sortConfig.key] || "";
    const bValue = b[sortConfig.key] || "";

    if (sortConfig.direction === "asc") {
      return aValue > bValue ? 1 : -1;
    }
    return aValue < bValue ? 1 : -1;
  });

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto p-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Property Dashboard
              </h1>
              <p className="text-gray-600 mt-1">
                Manage your property listings
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setIsAddingProperty(!isAddingProperty)}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
              >
                <FiPlus /> {isAddingProperty ? "Cancel" : "Add Property"}
              </button>
            </div>
          </div>

          {/* Enhanced Filters Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8 border border-gray-100">
            <h3 className="text-lg font-semibold mb-4">Filters & Search</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search
                </label>
                <input
                  type="text"
                  placeholder="Search properties..."
                  value={filters.search}
                  onChange={(e) =>
                    setFilters({ ...filters, search: e.target.value })
                  }
                  className="w-full border border-gray-200 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type
                </label>
                <select
                  value={filters.type}
                  onChange={(e) =>
                    setFilters({ ...filters, type: e.target.value })
                  }
                  className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">All Types</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  value={filters.status}
                  onChange={(e) =>
                    setFilters({ ...filters, status: e.target.value })
                  }
                  className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">All Status</option>
                  <option value="UNDER_CONSTRUCTION">Under Construction</option>
                  <option value="READY_TO_MOVE">Ready to Move</option>
                  <option value="UPCOMING">Upcoming</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <select
                  value={filters.priceRange}
                  onChange={(e) =>
                    setFilters({ ...filters, priceRange: e.target.value })
                  }
                  className="w-full border border-gray-200 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">All Prices</option>
                  <option value="0-5000000">Under 50L</option>
                  <option value="5000000-10000000">50L - 1Cr</option>
                  <option value="10000000+">Above 1Cr</option>
                </select>
              </div>
            </div>
          </div>

          {/* Properties Table View */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {[
                      "Image",
                      "Name",
                      "Location",
                      "Price",
                      "Status",
                      "Type",
                      "Actions",
                    ].map((header) => (
                      <th
                        key={header}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                        onClick={() => handleSort(header.toLowerCase())}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sortedAndFilteredProperties.map((property) => (
                    <tr key={property.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img
                          src={property.image || "/placeholder.png"}
                          alt={property.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          {property.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {property.developer}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {property.location}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        ₹{property.price}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            property.status === "READY_TO_MOVE"
                              ? "bg-green-100 text-green-800"
                              : property.status === "UNDER_CONSTRUCTION"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {property.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
                          {property.type}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => setEditingProperty(property)}
                            className="text-blue-600 hover:text-blue-800"
                            title="Edit"
                          >
                            <FiEdit2 />
                          </button>
                          <a
                            href={property.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-800"
                            title="View Details"
                          >
                            <FiExternalLink />
                          </a>
                          <button
                            onClick={() => handleDeleteProperty(property.id)}
                            className="text-red-600 hover:text-red-800"
                            title="Delete"
                          >
                            <FiTrash2 />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Edit Property Modal */}
          {editingProperty && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
                <h2 className="text-xl font-semibold mb-4">Edit Property</h2>
                <PropertyForm
                  property={editingProperty}
                  setProperty={setEditingProperty}
                  onSubmit={handleEditProperty}
                  onCancel={() => setEditingProperty(null)}
                  title="Edit Property"
                />
              </div>
            </div>
          )}

          {/* Add Property Modal */}
          {isAddingProperty && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
                <h2 className="text-xl font-semibold mb-4">Add New Property</h2>
                <PropertyForm
                  property={newProperty}
                  setProperty={setNewProperty}
                  onSubmit={handleAddProperty}
                  onCancel={() => {
                    setIsAddingProperty(false);
                    setNewProperty(initialPropertyState);
                  }}
                  title="Add Property"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
