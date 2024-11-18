"use client";
import { useState, useEffect, useRef } from "react";
import { supabase } from "@/utils/supabase";
import { FiEdit2, FiTrash2, FiExternalLink, FiPlus } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { useAuth } from "@/components/AuthProvider";
import DashboardLayout from "@/components/DashboardLayout";
import { v4 as uuidv4 } from "uuid";

// Add these helper functions before the Dashboard component
const uploadImage = async (file, bucket = "properties") => {
  try {
    const fileExt = file.name.split(".").pop();
    const fileName = `${uuidv4()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError, data } = await supabase.storage
      .from(bucket)
      .upload(filePath, file);

    if (uploadError) {
      throw uploadError;
    }

    // Get public URL
    const {
      data: { publicUrl },
    } = supabase.storage.from(bucket).getPublicUrl(filePath);

    return publicUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

const uploadMultipleImages = async (files, bucket = "properties") => {
  try {
    const uploadPromises = Array.from(files).map((file) =>
      uploadImage(file, bucket)
    );
    return await Promise.all(uploadPromises);
  } catch (error) {
    console.error("Error uploading multiple images:", error);
    throw error;
  }
};

// Add this component at the top of your file, outside the main Dashboard component
const PropertyForm = ({
  property,
  setProperty,
  onSubmit,
  onCancel,
  title,
  builders,
  localities,
}) => {
  const mainImageRef = useRef(null);
  const logoImageRef = useRef(null);
  const galleryRefs = {
    exterior: useRef(null),
    interior: useRef(null),
    amenities: useRef(null),
    construction: useRef(null),
  };

  const handleMainImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const publicUrl = await uploadImage(file);
        setProperty({
          ...property,
          image: publicUrl,
        });
        toast.success("Main image uploaded successfully");
      } catch (error) {
        toast.error("Error uploading main image");
      }
    }
  };

  const handleGalleryUpload = async (section, e) => {
    const files = e.target.files;
    if (files?.length) {
      try {
        const urls = await uploadMultipleImages(files);
        setProperty({
          ...property,
          gallery: {
            ...property.gallery,
            [section]: [...(property.gallery?.[section] || []), ...urls],
          },
        });
        toast.success(`${section} images uploaded successfully`);
      } catch (error) {
        toast.error(`Error uploading ${section} images`);
      }
    }
  };

  const handleLogoUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const publicUrl = await uploadImage(file, "logos");
        setProperty({
          ...property,
          logo: publicUrl,
        });
        toast.success("Logo uploaded successfully");
      } catch (error) {
        toast.error("Error uploading logo");
      }
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Information */}
        <div className="col-span-2">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Basic Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Add Logo Upload Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Logo
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  value={property.logo}
                  onChange={(e) =>
                    setProperty({ ...property, logo: e.target.value })
                  }
                  className="flex-1 border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Logo URL"
                />
                <input
                  type="file"
                  ref={logoImageRef}
                  onChange={handleLogoUpload}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => logoImageRef.current?.click()}
                  className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  Upload
                </button>
              </div>
              {property.logo && (
                <img
                  src={property.logo}
                  alt="Property Logo"
                  className="mt-2 h-16 w-16 object-contain"
                />
              )}
            </div>

            {/* Add Builder Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Builder*
              </label>
              <select
                value={property.builder || ""}
                onChange={(e) =>
                  setProperty({ ...property, builder: e.target.value })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Builder</option>
                {builders.map((builder) => (
                  <option key={builder.id} value={builder.id}>
                    {builder.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Add Locality Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Locality*
              </label>
              <select
                value={property.locality || ""}
                onChange={(e) =>
                  setProperty({ ...property, locality: e.target.value })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Locality</option>
                {localities.map((locality) => (
                  <option key={locality.id} value={locality.id}>
                    {locality.name}
                  </option>
                ))}
              </select>
            </div>

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
                Main Image*
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  value={property.image}
                  onChange={(e) =>
                    setProperty({ ...property, image: e.target.value })
                  }
                  className="flex-1 border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Image URL"
                />
                <input
                  type="file"
                  ref={mainImageRef}
                  onChange={handleMainImageUpload}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => mainImageRef.current?.click()}
                  className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  Upload
                </button>
              </div>
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
              <select
                multiple
                value={property.amenities || []}
                onChange={(e) => {
                  const selectedAmenities = Array.from(
                    e.target.selectedOptions
                  ).map((option) => option.value);
                  setProperty({
                    ...property,
                    amenities: selectedAmenities,
                  });
                }}
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 h-48"
              >
                <option value="24/7 Security">24/7 Security</option>
                <option value="Swimming Pool">Swimming Pool</option>
                <option value="Gym">Gym</option>
                <option value="Kids Play Area">Kids Play Area</option>
                <option value="Clubhouse">Clubhouse</option>
                <option value="Indoor Games">Indoor Games</option>
                <option value="Yoga/Meditation Area">
                  Yoga/Meditation Area
                </option>
                <option value="Jogging Track">Jogging Track</option>
                <option value="Landscaped Gardens">Landscaped Gardens</option>
                <option value="Basketball Court">Basketball Court</option>
                <option value="Tennis Court">Tennis Court</option>
                <option value="Badminton Court">Badminton Court</option>
                <option value="Cricket Pitch">Cricket Pitch</option>
                <option value="Amphitheatre">Amphitheatre</option>
                <option value="Banquet Hall">Banquet Hall</option>
                <option value="Library">Library</option>
                <option value="Senior Citizen Area">Senior Citizen Area</option>
                <option value="BBQ Area">BBQ Area</option>
                <option value="Party Lawn">Party Lawn</option>
                <option value="Cycling Track">Cycling Track</option>
                <option value="Car Parking">Car Parking</option>
                <option value="Visitor Parking">Visitor Parking</option>
                <option value="Power Backup">Power Backup</option>
                <option value="Rain Water Harvesting">
                  Rain Water Harvesting
                </option>
                <option value="Fire Fighting System">
                  Fire Fighting System
                </option>
                <option value="CCTV Surveillance">CCTV Surveillance</option>
                <option value="Intercom">Intercom</option>
                <option value="Wi-Fi Connectivity">Wi-Fi Connectivity</option>
                <option value="Shopping Complex">Shopping Complex</option>
                <option value="ATM">ATM</option>
                <option value="Pharmacy">Pharmacy</option>
                <option value="Supermarket">Supermarket</option>
                <option value="School Within Campus">
                  School Within Campus
                </option>
                <option value="Hospital Within Campus">
                  Hospital Within Campus
                </option>
                <option value="Spa">Spa</option>
                <option value="Salon">Salon</option>
                <option value="Cafe">Cafe</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Movie Theatre">Movie Theatre</option>
                <option value="Pet Area">Pet Area</option>
                <option value="Guest Rooms">Guest Rooms</option>
                <option value="Laundry Service">Laundry Service</option>
                <option value="Valet Service">Valet Service</option>
                <option value="Electric Car Charging">
                  Electric Car Charging
                </option>
                <option value="Waste Management">Waste Management</option>
                <option value="Solar Power">Solar Power</option>
                <option value="Sewage Treatment Plant">
                  Sewage Treatment Plant
                </option>
                <option value="Meditation Hall">Meditation Hall</option>
                <option value="Rock Climbing">Rock Climbing</option>
                <option value="Skating Rink">Skating Rink</option>
                <option value="Golf Course">Golf Course</option>
              </select>
              <p className="text-sm text-gray-500 mt-1">
                Hold Ctrl/Cmd to select multiple amenities
              </p>
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
                Starting Price
              </label>
              <input
                type="text"
                value={property.price_details?.["Starting Price"] || ""}
                onChange={(e) =>
                  setProperty({
                    ...property,
                    price_details: {
                      ...property.price_details,
                      "Starting Price": e.target.value,
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
                value={property.price_details?.["Booking Amount"] || ""}
                onChange={(e) =>
                  setProperty({
                    ...property,
                    price_details: {
                      ...property.price_details,
                      "Booking Amount": e.target.value,
                    },
                  })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Add Price Range Section */}
        <div className="col-span-2">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Price Range
          </h3>
          {["1_bhk", "2_bhk", "3_bhk"].map((bhk) => (
            <div key={bhk} className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {bhk.replace("_", " ").toUpperCase()} Min Price
                </label>
                <input
                  type="text"
                  value={property.price_range?.[bhk]?.min || ""}
                  onChange={(e) =>
                    setProperty({
                      ...property,
                      price_range: {
                        ...property.price_range,
                        [bhk]: {
                          ...property.price_range?.[bhk],
                          min: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {bhk.replace("_", " ").toUpperCase()} Max Price
                </label>
                <input
                  type="text"
                  value={property.price_range?.[bhk]?.max || ""}
                  onChange={(e) =>
                    setProperty({
                      ...property,
                      price_range: {
                        ...property.price_range,
                        [bhk]: {
                          ...property.price_range?.[bhk],
                          max: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Add Carpet Area Section */}
        <div className="col-span-2">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Carpet Area
          </h3>
          {["1_bhk", "2_bhk", "3_bhk"].map((bhk) => (
            <div key={bhk} className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {bhk.replace("_", " ").toUpperCase()} Carpet Area
              </label>
              <input
                type="text"
                value={property.carpet_area?.[bhk] || ""}
                onChange={(e) =>
                  setProperty({
                    ...property,
                    carpet_area: {
                      ...property.carpet_area,
                      [bhk]: e.target.value,
                    },
                  })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>

        {/* Gallery Section */}
        <div className="col-span-2">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Gallery</h3>
          {["exterior", "interior", "amenities", "construction"].map(
            (section) => (
              <div key={section} className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {section.charAt(0).toUpperCase() + section.slice(1)} Images
                </label>
                <div className="space-y-2">
                  <textarea
                    value={property.gallery?.[section]?.join("\n") || ""}
                    onChange={(e) =>
                      setProperty({
                        ...property,
                        gallery: {
                          ...property.gallery,
                          [section]: e.target.value
                            .split("\n")
                            .filter((url) => url.trim()),
                        },
                      })
                    }
                    rows={3}
                    className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter URLs (one per line)"
                  />
                  <div className="flex items-center gap-2">
                    <input
                      type="file"
                      ref={galleryRefs[section]}
                      onChange={(e) => handleGalleryUpload(section, e)}
                      accept="image/*"
                      multiple
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => galleryRefs[section].current?.click()}
                      className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                    >
                      Upload Images
                    </button>
                    {property.gallery?.[section]?.length > 0 && (
                      <span className="text-sm text-gray-500">
                        {property.gallery[section].length} images
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Add Highlights Section */}
        <div className="col-span-2">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Highlights</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Highlights (one per line)
            </label>
            <textarea
              value={property.highlights?.join("\n") || ""}
              onChange={(e) =>
                setProperty({
                  ...property,
                  highlights: e.target.value
                    .split("\n")
                    .filter((item) => item.trim()),
                })
              }
              rows={4}
              className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
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

  const [builders, setBuilders] = useState([]);
  const [localities, setLocalities] = useState([]);

  const initialPropertyState = {
    name: "",
    image: "",
    logo: "",
    location: "",
    type: "residential",
    status: "UNDER_CONSTRUCTION",
    developer: "",
    configurations: "",
    price: "",
    description: "",
    amenities: [],
    highlights: [],
    price_details: {
      "EMI Options": "",
      "Payment Plan": "",
      "Booking Amount": "",
      "Starting Price": "",
    },
    gallery: {
      exterior: [],
      interior: [],
      amenities: [],
      construction: [],
    },
    location_details: {
      nearby: {
        schools: [],
        shopping: [],
        hospitals: [],
        transport: [],
      },
      address: "",
      mapEmbed: "",
      landmarks: [],
      connectivity: {},
    },
    carpet_area: {
      "1_bhk": "",
      "2_bhk": "",
      "3_bhk": "",
    },
    price_range: {
      "1_bhk": { min: "", max: "" },
      "2_bhk": { min: "", max: "" },
      "3_bhk": { min: "", max: "" },
    },
    builder: "",
    locality: "",
  };

  const [newProperty, setNewProperty] = useState(initialPropertyState);

  useEffect(() => {
    fetchProperties();
    fetchBuildersAndLocalities();
  }, []);

  async function fetchProperties() {
    const { data, error } = await supabase.from("properties").select("*");

    if (error) {
      console.error("Error fetching properties:", error);
    } else {
      setProperties(data);
    }
  }

  const fetchBuildersAndLocalities = async () => {
    // Fetch builders
    const { data: buildersData, error: buildersError } = await supabase
      .from("builders")
      .select("id, name");

    if (buildersError) {
      console.error("Error fetching builders:", buildersError);
    } else {
      setBuilders(buildersData);
    }

    // Fetch localities
    const { data: localitiesData, error: localitiesError } = await supabase
      .from("localities")
      .select("id, name");

    if (localitiesError) {
      console.error("Error fetching localities:", localitiesError);
    } else {
      setLocalities(localitiesData);
    }
  };

  async function handleAddProperty(e) {
    e.preventDefault();
    setIsLoading(true);

    const propertyToAdd = {
      ...newProperty,
      // Convert string arrays
      amenities: Array.isArray(newProperty.amenities)
        ? newProperty.amenities
        : newProperty.amenities
            ?.split(",")
            .map((item) => item.trim())
            .filter(Boolean) || [],
      highlights: Array.isArray(newProperty.highlights)
        ? newProperty.highlights
        : newProperty.highlights
            ?.split(",")
            .map((item) => item.trim())
            .filter(Boolean) || [],

      // Format price details
      price_details: {
        "EMI Options": newProperty.price_details?.["EMI Options"] || null,
        "Payment Plan": newProperty.price_details?.["Payment Plan"] || null,
        "Booking Amount": newProperty.price_details?.["Booking Amount"] || null,
        "Starting Price": newProperty.price_details?.["Starting Price"] || null,
      },

      // Format gallery
      gallery: {
        exterior: Array.isArray(newProperty.gallery?.exterior)
          ? newProperty.gallery.exterior
          : newProperty.gallery?.exterior?.split("\n").filter(Boolean) || null,
        interior: Array.isArray(newProperty.gallery?.interior)
          ? newProperty.gallery.interior
          : newProperty.gallery?.interior?.split("\n").filter(Boolean) || null,
        amenities: Array.isArray(newProperty.gallery?.amenities)
          ? newProperty.gallery.amenities
          : newProperty.gallery?.amenities?.split("\n").filter(Boolean) || null,
        construction: Array.isArray(newProperty.gallery?.construction)
          ? newProperty.gallery.construction
          : newProperty.gallery?.construction?.split("\n").filter(Boolean) ||
            null,
      },

      // Format location details
      location_details: {
        nearby: {
          schools: Array.isArray(newProperty.location_details?.nearby?.schools)
            ? newProperty.location_details.nearby.schools
            : [],
          shopping: Array.isArray(
            newProperty.location_details?.nearby?.shopping
          )
            ? newProperty.location_details.nearby.shopping
            : [],
          hospitals: Array.isArray(
            newProperty.location_details?.nearby?.hospitals
          )
            ? newProperty.location_details.nearby.hospitals
            : [],
          transport: Array.isArray(
            newProperty.location_details?.nearby?.transport
          )
            ? newProperty.location_details.nearby.transport
            : [],
        },
        address: newProperty.location_details?.address || null,
        mapEmbed: newProperty.location_details?.mapEmbed || null,
        landmarks: Array.isArray(newProperty.location_details?.landmarks)
          ? newProperty.location_details.landmarks
          : newProperty.location_details?.landmarks
              ?.split(",")
              .map((item) => item.trim())
              .filter(Boolean) || [],
        connectivity: newProperty.location_details?.connectivity || {},
      },

      // Format carpet area
      carpet_area: {
        "1_bhk": newProperty.carpet_area?.["1_bhk"] || null,
        "2_bhk": newProperty.carpet_area?.["2_bhk"] || null,
        "3_bhk": newProperty.carpet_area?.["3_bhk"] || null,
      },

      // Format price range
      price_range: {
        "1_bhk": {
          min: newProperty.price_range?.["1_bhk"]?.min || null,
          max: newProperty.price_range?.["1_bhk"]?.max || null,
        },
        "2_bhk": {
          min: newProperty.price_range?.["2_bhk"]?.min || null,
          max: newProperty.price_range?.["2_bhk"]?.max || null,
        },
        "3_bhk": {
          min: newProperty.price_range?.["3_bhk"]?.min || null,
          max: newProperty.price_range?.["3_bhk"]?.max || null,
        },
      },
      builder: newProperty.builder || null,
      locality: newProperty.locality || null,
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

    const propertyToUpdate = {
      ...editingProperty,
      // Convert string arrays
      amenities: Array.isArray(editingProperty.amenities)
        ? editingProperty.amenities
        : editingProperty.amenities
            ?.split(",")
            .map((item) => item.trim())
            .filter(Boolean) || [],
      highlights: Array.isArray(editingProperty.highlights)
        ? editingProperty.highlights
        : editingProperty.highlights
            ?.split(",")
            .map((item) => item.trim())
            .filter(Boolean) || [],

      price_details: {
        "EMI Options": editingProperty.price_details?.["EMI Options"] || null,
        "Payment Plan": editingProperty.price_details?.["Payment Plan"] || null,
        "Booking Amount":
          editingProperty.price_details?.["Booking Amount"] || null,
        "Starting Price":
          editingProperty.price_details?.["Starting Price"] || null,
      },

      // Format gallery
      gallery: {
        exterior: Array.isArray(editingProperty.gallery?.exterior)
          ? editingProperty.gallery.exterior
          : editingProperty.gallery?.exterior?.split("\n").filter(Boolean) ||
            null,
        interior: Array.isArray(editingProperty.gallery?.interior)
          ? editingProperty.gallery.interior
          : editingProperty.gallery?.interior?.split("\n").filter(Boolean) ||
            null,
        amenities: Array.isArray(editingProperty.gallery?.amenities)
          ? editingProperty.gallery.amenities
          : editingProperty.gallery?.amenities?.split("\n").filter(Boolean) ||
            null,
        construction: Array.isArray(editingProperty.gallery?.construction)
          ? editingProperty.gallery.construction
          : editingProperty.gallery?.construction
              ?.split("\n")
              .filter(Boolean) || null,
      },

      // Format location details
      location_details: {
        nearby: {
          schools: Array.isArray(
            editingProperty.location_details?.nearby?.schools
          )
            ? editingProperty.location_details.nearby.schools
            : [],
          shopping: Array.isArray(
            editingProperty.location_details?.nearby?.shopping
          )
            ? editingProperty.location_details.nearby.shopping
            : [],
          hospitals: Array.isArray(
            editingProperty.location_details?.nearby?.hospitals
          )
            ? editingProperty.location_details.nearby.hospitals
            : [],
          transport: Array.isArray(
            editingProperty.location_details?.nearby?.transport
          )
            ? editingProperty.location_details.nearby.transport
            : [],
        },
        address: editingProperty.location_details?.address || null,
        mapEmbed: editingProperty.location_details?.mapEmbed || null,
        landmarks: Array.isArray(editingProperty.location_details?.landmarks)
          ? editingProperty.location_details.landmarks
          : editingProperty.location_details?.landmarks
              ?.split(",")
              .map((item) => item.trim())
              .filter(Boolean) || [],
        connectivity: editingProperty.location_details?.connectivity || {},
      },

      // Format carpet area
      carpet_area: {
        "1_bhk": editingProperty.carpet_area?.["1_bhk"] || null,
        "2_bhk": editingProperty.carpet_area?.["2_bhk"] || null,
        "3_bhk": editingProperty.carpet_area?.["3_bhk"] || null,
      },

      // Format price range
      price_range: {
        "1_bhk": {
          min: editingProperty.price_range?.["1_bhk"]?.min || null,
          max: editingProperty.price_range?.["1_bhk"]?.max || null,
        },
        "2_bhk": {
          min: editingProperty.price_range?.["2_bhk"]?.min || null,
          max: editingProperty.price_range?.["2_bhk"]?.max || null,
        },
        "3_bhk": {
          min: editingProperty.price_range?.["3_bhk"]?.min || null,
          max: editingProperty.price_range?.["3_bhk"]?.max || null,
        },
      },
      builder: editingProperty.builder || null,
      locality: editingProperty.locality || null,
    };

    const { data, error } = await supabase
      .from("properties")
      .update(propertyToUpdate)
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
                      "Logo",
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
                          src={property.logo || "/placeholder-logo.png"}
                          alt={`${property.name} Logo`}
                          className="w-12 h-12 rounded-lg object-contain"
                        />
                      </td>
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
                            href={`/property/${property.id}`}
                            className="text-green-600 hover:text-green-800"
                            title="View Property"
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
                  builders={builders}
                  localities={localities}
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
                  builders={builders}
                  localities={localities}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
