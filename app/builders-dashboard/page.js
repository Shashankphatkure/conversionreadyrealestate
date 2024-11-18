"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";
import { FiEdit2, FiTrash2, FiPlus } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { useAuth } from "@/components/AuthProvider";
import DashboardLayout from "@/components/DashboardLayout";
import { v4 as uuidv4 } from "uuid";

const BuilderForm = ({ builder, setBuilder, onSubmit, onCancel, title }) => {
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      // Create a unique file name
      const fileExt = file.name.split(".").pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const filePath = `builders/${fileName}`;

      // Upload the file to Supabase Storage
      const { data, error } = await supabase.storage
        .from("builders")
        .upload(filePath, file);

      if (error) throw error;

      // Get the public URL
      const {
        data: { publicUrl },
      } = supabase.storage.from("builders").getPublicUrl(filePath);

      // Update the builder state with the new logo URL
      setBuilder({ ...builder, logo: publicUrl });
      toast.success("Logo uploaded successfully");
    } catch (error) {
      console.error("Error uploading logo:", error);
      toast.error("Error uploading logo");
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
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Builder Name*
              </label>
              <input
                type="text"
                value={builder.name}
                onChange={(e) =>
                  setBuilder({ ...builder, name: e.target.value })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Logo
              </label>
              <div className="flex items-center gap-4">
                {builder.logo && (
                  <img
                    src={builder.logo}
                    alt="Builder logo"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Established Year
              </label>
              <input
                type="number"
                value={builder.established_year}
                onChange={(e) =>
                  setBuilder({ ...builder, established_year: e.target.value })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Projects
              </label>
              <input
                type="number"
                value={builder.total_projects}
                onChange={(e) =>
                  setBuilder({ ...builder, total_projects: e.target.value })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="col-span-2">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Description
          </h3>
          <div>
            <textarea
              value={builder.description}
              onChange={(e) =>
                setBuilder({ ...builder, description: e.target.value })
              }
              rows={4}
              className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Locations */}
        <div className="col-span-2">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Locations</h3>
          <div className="space-y-4">
            {builder.locations.map((location, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={location}
                  onChange={(e) => {
                    const newLocations = [...builder.locations];
                    newLocations[index] = e.target.value;
                    setBuilder({ ...builder, locations: newLocations });
                  }}
                  className="flex-1 border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter location"
                />
                <button
                  type="button"
                  onClick={() => {
                    const newLocations = builder.locations.filter(
                      (_, i) => i !== index
                    );
                    setBuilder({ ...builder, locations: newLocations });
                  }}
                  className="text-red-600 hover:text-red-800 px-2"
                >
                  <FiTrash2 />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                setBuilder({
                  ...builder,
                  locations: [...builder.locations, ""],
                });
              }}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
            >
              <FiPlus /> Add Location
            </button>
          </div>
        </div>

        {/* Add Featured Toggle */}
        <div className="col-span-2">
          <div className="flex items-center gap-2">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={builder.featured}
                onChange={(e) =>
                  setBuilder({ ...builder, featured: e.target.checked })
                }
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
            <span className="text-sm font-medium text-gray-700">
              Featured Builder
            </span>
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
          {title === "Add Builder" ? "Add Builder" : "Save Changes"}
        </button>
      </div>
    </form>
  );
};

export default function BuildersDashboard() {
  const { user } = useAuth();
  const [builders, setBuilders] = useState([]);
  const [isAddingBuilder, setIsAddingBuilder] = useState(false);
  const [editingBuilder, setEditingBuilder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "asc",
  });
  const [filters, setFilters] = useState({
    search: "",
  });

  const initialBuilderState = {
    name: "",
    logo: "",
    description: "",
    established_year: "",
    total_projects: 0,
    featured: false,
    locations: [],
  };

  const [newBuilder, setNewBuilder] = useState(initialBuilderState);

  useEffect(() => {
    fetchBuilders();
  }, []);

  async function fetchBuilders() {
    const { data, error } = await supabase.from("builders").select("*");

    if (error) {
      console.error("Error fetching builders:", error);
      toast.error("Error fetching builders");
    } else {
      setBuilders(data);
      setIsLoading(false);
    }
  }

  async function handleAddBuilder(e) {
    e.preventDefault();
    setIsLoading(true);

    const { data, error } = await supabase
      .from("builders")
      .insert([newBuilder])
      .select();

    if (error) {
      toast.error("Error adding builder");
      console.error("Error adding builder:", error);
    } else {
      setBuilders([...builders, data[0]]);
      setNewBuilder(initialBuilderState);
      setIsAddingBuilder(false);
      toast.success("Builder added successfully");
    }
    setIsLoading(false);
  }

  async function handleDeleteBuilder(id) {
    const builderToDelete = builders.find((b) => b.id === id);

    if (builderToDelete?.logo) {
      // Extract the file path from the URL
      const logoPath = builderToDelete.logo.split("/").pop();

      // Delete the image from storage
      const { error: storageError } = await supabase.storage
        .from("builders")
        .remove([`builders/${logoPath}`]);

      if (storageError) {
        console.error("Error deleting logo:", storageError);
      }
    }

    const { error } = await supabase.from("builders").delete().eq("id", id);

    if (error) {
      console.error("Error deleting builder:", error);
      toast.error("Error deleting builder");
    } else {
      setBuilders(builders.filter((builder) => builder.id !== id));
      toast.success("Builder deleted successfully");
    }
  }

  async function handleEditBuilder(e) {
    e.preventDefault();
    setIsLoading(true);

    const { data, error } = await supabase
      .from("builders")
      .update(editingBuilder)
      .eq("id", editingBuilder.id)
      .select();

    if (error) {
      toast.error("Error updating builder");
      console.error("Error updating builder:", error);
    } else {
      setBuilders(
        builders.map((b) => (b.id === editingBuilder.id ? data[0] : b))
      );
      setEditingBuilder(null);
      toast.success("Builder updated successfully");
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

  const filteredBuilders = builders.filter((builder) =>
    builder.name.toLowerCase().includes(filters.search.toLowerCase())
  );

  const sortedBuilders = filteredBuilders.sort((a, b) => {
    if (sortConfig.direction === "asc") {
      return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
    }
    return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
  });

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto p-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Builders Dashboard
              </h1>
              <p className="text-gray-600 mt-1">Manage your builders</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setIsAddingBuilder(!isAddingBuilder)}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
              >
                <FiPlus /> {isAddingBuilder ? "Cancel" : "Add Builder"}
              </button>
            </div>
          </div>

          {/* Search Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8 border border-gray-100">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Search builders..."
                value={filters.search}
                onChange={(e) =>
                  setFilters({ ...filters, search: e.target.value })
                }
                className="w-full border border-gray-200 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Builders Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort("name")}
                  >
                    Builder
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Projects
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Locations
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Featured
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sortedBuilders.map((builder) => (
                  <tr key={builder.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full object-cover"
                            src={builder.logo || "/placeholder-builder.png"}
                            alt={builder.name}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {builder.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {builder.total_projects} Projects
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {builder.locations?.length > 0
                          ? builder.locations.join(", ")
                          : "No locations"}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={builder.featured}
                            onChange={async () => {
                              const { error } = await supabase
                                .from("builders")
                                .update({ featured: !builder.featured })
                                .eq("id", builder.id);

                              if (error) {
                                toast.error("Error updating featured status");
                              } else {
                                setBuilders(
                                  builders.map((b) =>
                                    b.id === builder.id
                                      ? { ...b, featured: !b.featured }
                                      : b
                                  )
                                );
                                toast.success("Featured status updated");
                              }
                            }}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setEditingBuilder(builder)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <FiEdit2 />
                        </button>
                        <button
                          onClick={() => handleDeleteBuilder(builder.id)}
                          className="text-red-600 hover:text-red-800"
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

          {/* Add/Edit Builder Modal */}
          {(isAddingBuilder || editingBuilder) && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
                <h2 className="text-xl font-semibold mb-4">
                  {isAddingBuilder ? "Add New Builder" : "Edit Builder"}
                </h2>
                <BuilderForm
                  builder={isAddingBuilder ? newBuilder : editingBuilder}
                  setBuilder={
                    isAddingBuilder ? setNewBuilder : setEditingBuilder
                  }
                  onSubmit={
                    isAddingBuilder ? handleAddBuilder : handleEditBuilder
                  }
                  onCancel={() => {
                    isAddingBuilder
                      ? setIsAddingBuilder(false)
                      : setEditingBuilder(null);
                    isAddingBuilder && setNewBuilder(initialBuilderState);
                  }}
                  title={isAddingBuilder ? "Add Builder" : "Edit Builder"}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
