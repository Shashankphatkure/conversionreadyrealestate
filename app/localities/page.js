"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";
import { FiEdit2, FiTrash2, FiExternalLink, FiPlus } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { useAuth } from "@/components/AuthProvider";
import DashboardLayout from "@/components/DashboardLayout";

const LocalityForm = ({ locality, setLocality, onSubmit, onCancel, title }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Information */}
        <div className="col-span-2">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Locality Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name*
              </label>
              <input
                type="text"
                value={locality.name}
                onChange={(e) =>
                  setLocality({ ...locality, name: e.target.value })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Properties Count*
              </label>
              <input
                type="number"
                value={locality.properties}
                onChange={(e) =>
                  setLocality({ ...locality, properties: e.target.value })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Link*
              </label>
              <input
                type="url"
                value={locality.link}
                onChange={(e) =>
                  setLocality({ ...locality, link: e.target.value })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image URL*
              </label>
              <input
                type="url"
                value={locality.image}
                onChange={(e) =>
                  setLocality({ ...locality, image: e.target.value })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
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
          {title === "Add Locality" ? "Add Locality" : "Save Changes"}
        </button>
      </div>
    </form>
  );
};

export default function Localities() {
  const { user } = useAuth();
  const [localities, setLocalities] = useState([]);
  const [isAddingLocality, setIsAddingLocality] = useState(false);
  const [editingLocality, setEditingLocality] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "asc",
  });
  const [filters, setFilters] = useState({
    search: "",
  });

  const initialLocalityState = {
    name: "",
    properties: "",
    link: "",
    image: "",
  };

  const [newLocality, setNewLocality] = useState(initialLocalityState);

  useEffect(() => {
    fetchLocalities();
  }, []);

  async function fetchLocalities() {
    const { data, error } = await supabase.from("localities").select("*");

    if (error) {
      console.error("Error fetching localities:", error);
    } else {
      setLocalities(data);
      setIsLoading(false);
    }
  }

  async function handleAddLocality(e) {
    e.preventDefault();
    setIsLoading(true);

    const { data, error } = await supabase
      .from("localities")
      .insert([newLocality])
      .select();

    if (error) {
      toast.error("Error adding locality");
      console.error("Error adding locality:", error);
    } else {
      setLocalities([...localities, data[0]]);
      setNewLocality(initialLocalityState);
      setIsAddingLocality(false);
      toast.success("Locality added successfully");
    }
    setIsLoading(false);
  }

  async function handleDeleteLocality(id) {
    const { error } = await supabase.from("localities").delete().eq("id", id);

    if (error) {
      toast.error("Error deleting locality");
      console.error("Error deleting locality:", error);
    } else {
      setLocalities(localities.filter((locality) => locality.id !== id));
      toast.success("Locality deleted successfully");
    }
  }

  async function handleEditLocality(e) {
    e.preventDefault();
    setIsLoading(true);

    const { data, error } = await supabase
      .from("localities")
      .update(editingLocality)
      .eq("id", editingLocality.id)
      .select();

    if (error) {
      toast.error("Error updating locality");
      console.error("Error updating locality:", error);
    } else {
      setLocalities(
        localities.map((l) => (l.id === editingLocality.id ? data[0] : l))
      );
      setEditingLocality(null);
      toast.success("Locality updated successfully");
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

  const filteredLocalities = localities.filter((locality) => {
    if (!locality) return false;

    return locality.name?.toLowerCase().includes(filters.search.toLowerCase());
  });

  const sortedAndFilteredLocalities = filteredLocalities.sort((a, b) => {
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
                Localities Dashboard
              </h1>
              <p className="text-gray-600 mt-1">Manage your localities</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setIsAddingLocality(!isAddingLocality)}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
              >
                <FiPlus /> {isAddingLocality ? "Cancel" : "Add Locality"}
              </button>
            </div>
          </div>

          {/* Search Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8 border border-gray-100">
            <div className="max-w-md">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Localities
              </label>
              <input
                type="text"
                placeholder="Search by name..."
                value={filters.search}
                onChange={(e) =>
                  setFilters({ ...filters, search: e.target.value })
                }
                className="w-full border border-gray-200 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Localities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedAndFilteredLocalities.map((locality) => (
              <div
                key={locality.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
              >
                <img
                  src={locality.image}
                  alt={locality.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {locality.name}
                  </h3>
                  <p className="text-gray-600">
                    {locality.properties} Properties Available
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setEditingLocality(locality)}
                        className="text-blue-600 hover:text-blue-800"
                        title="Edit"
                      >
                        <FiEdit2 />
                      </button>
                      <button
                        onClick={() => handleDeleteLocality(locality.id)}
                        className="text-red-600 hover:text-red-800"
                        title="Delete"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                    <a
                      href={locality.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Edit Locality Modal */}
          {editingLocality && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
                <h2 className="text-xl font-semibold mb-4">Edit Locality</h2>
                <LocalityForm
                  locality={editingLocality}
                  setLocality={setEditingLocality}
                  onSubmit={handleEditLocality}
                  onCancel={() => setEditingLocality(null)}
                  title="Edit Locality"
                />
              </div>
            </div>
          )}

          {/* Add Locality Modal */}
          {isAddingLocality && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
                <h2 className="text-xl font-semibold mb-4">Add New Locality</h2>
                <LocalityForm
                  locality={newLocality}
                  setLocality={setNewLocality}
                  onSubmit={handleAddLocality}
                  onCancel={() => {
                    setIsAddingLocality(false);
                    setNewLocality(initialLocalityState);
                  }}
                  title="Add Locality"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
