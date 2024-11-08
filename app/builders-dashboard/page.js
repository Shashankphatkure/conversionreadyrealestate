"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";
import { FiEdit2, FiTrash2, FiPlus } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { useAuth } from "@/components/AuthProvider";
import DashboardLayout from "@/components/DashboardLayout";

const BuilderForm = ({ builder, setBuilder, onSubmit, onCancel, title }) => {
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
                Logo URL
              </label>
              <input
                type="url"
                value={builder.logo}
                onChange={(e) =>
                  setBuilder({ ...builder, logo: e.target.value })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
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

        {/* Contact Information */}
        <div className="col-span-2">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Contact Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Website URL
              </label>
              <input
                type="url"
                value={builder.website_url}
                onChange={(e) =>
                  setBuilder({ ...builder, website_url: e.target.value })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Headquarters
              </label>
              <input
                type="text"
                value={builder.headquarters}
                onChange={(e) =>
                  setBuilder({ ...builder, headquarters: e.target.value })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Email
              </label>
              <input
                type="email"
                value={builder.contact_email}
                onChange={(e) =>
                  setBuilder({ ...builder, contact_email: e.target.value })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Phone
              </label>
              <input
                type="tel"
                value={builder.contact_phone}
                onChange={(e) =>
                  setBuilder({ ...builder, contact_phone: e.target.value })
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

        {/* Social Media */}
        <div className="col-span-2">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Social Media
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["facebook", "twitter", "linkedin", "instagram"].map(
              (platform) => (
                <div key={platform}>
                  <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                    {platform} URL
                  </label>
                  <input
                    type="url"
                    value={builder.social_media?.[platform] || ""}
                    onChange={(e) =>
                      setBuilder({
                        ...builder,
                        social_media: {
                          ...builder.social_media,
                          [platform]: e.target.value,
                        },
                      })
                    }
                    className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )
            )}
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
    website_url: "",
    headquarters: "",
    contact_email: "",
    contact_phone: "",
    social_media: {},
    featured: false,
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
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Projects
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
                          <div className="text-sm text-gray-500">
                            {builder.headquarters}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {builder.contact_email}
                      </div>
                      <div className="text-sm text-gray-500">
                        {builder.contact_phone}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {builder.total_projects} Projects
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
