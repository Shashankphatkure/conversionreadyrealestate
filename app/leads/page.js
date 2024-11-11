"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";
import { FiEdit2, FiTrash2, FiExternalLink, FiPlus } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { useAuth } from "@/components/AuthProvider";
import DashboardLayout from "@/components/DashboardLayout";

const LeadForm = ({ lead, setLead, onSubmit, onCancel, title }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Information */}
        <div className="col-span-2">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Lead Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name*
              </label>
              <input
                type="text"
                value={lead.name}
                onChange={(e) => setLead({ ...lead, name: e.target.value })}
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email*
              </label>
              <input
                type="email"
                value={lead.email}
                onChange={(e) => setLead({ ...lead, email: e.target.value })}
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone*
              </label>
              <input
                type="tel"
                value={lead.phone}
                onChange={(e) => setLead({ ...lead, phone: e.target.value })}
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={lead.status}
                onChange={(e) => setLead({ ...lead, status: e.target.value })}
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="NEW">New</option>
                <option value="CONTACTED">Contacted</option>
                <option value="QUALIFIED">Qualified</option>
                <option value="PROPOSAL">Proposal</option>
                <option value="NEGOTIATION">Negotiation</option>
                <option value="CLOSED">Closed</option>
                <option value="LOST">Lost</option>
              </select>
            </div>
          </div>
        </div>

        {/* Property Interest */}
        <div className="col-span-2">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Property Interest
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interested Property
              </label>
              <input
                type="text"
                value={lead.interested_property}
                onChange={(e) =>
                  setLead({ ...lead, interested_property: e.target.value })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range
              </label>
              <input
                type="text"
                value={lead.budget_range}
                onChange={(e) =>
                  setLead({ ...lead, budget_range: e.target.value })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Additional Details */}
        <div className="col-span-2">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Additional Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                value={lead.location}
                onChange={(e) => setLead({ ...lead, location: e.target.value })}
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Contact Time
              </label>
              <input
                type="text"
                value={lead.preferred_contact_time}
                onChange={(e) =>
                  setLead({ ...lead, preferred_contact_time: e.target.value })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Source
              </label>
              <select
                value={lead.source}
                onChange={(e) => setLead({ ...lead, source: e.target.value })}
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="website">Website</option>
                <option value="referral">Referral</option>
                <option value="social">Social Media</option>
                <option value="direct">Direct</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Type
              </label>
              <select
                value={lead.property_type}
                onChange={(e) =>
                  setLead({ ...lead, property_type: e.target.value })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Type</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="villa">Villa</option>
                <option value="plot">Plot</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Transaction Type
              </label>
              <select
                value={lead.transaction_type}
                onChange={(e) =>
                  setLead({ ...lead, transaction_type: e.target.value })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Type</option>
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
                <option value="sell">Sell</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Follow-up Date
              </label>
              <input
                type="datetime-local"
                value={lead.follow_up_date}
                onChange={(e) =>
                  setLead({ ...lead, follow_up_date: e.target.value })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lead Score (0-100)
              </label>
              <input
                type="number"
                min="0"
                max="100"
                value={lead.lead_score}
                onChange={(e) =>
                  setLead({ ...lead, lead_score: parseInt(e.target.value) })
                }
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="col-span-2">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Additional Information
          </h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Notes
            </label>
            <textarea
              value={lead.notes}
              onChange={(e) => setLead({ ...lead, notes: e.target.value })}
              rows={4}
              className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
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
          {title === "Add Lead" ? "Add Lead" : "Save Changes"}
        </button>
      </div>
    </form>
  );
};

export default function Leads() {
  const { user } = useAuth();
  const [leads, setLeads] = useState([]);
  const [isAddingLead, setIsAddingLead] = useState(false);
  const [editingLead, setEditingLead] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState({
    key: "created_at",
    direction: "desc",
  });
  const [filters, setFilters] = useState({
    status: "all",
    search: "",
  });

  const initialLeadState = {
    name: "",
    email: "",
    phone: "",
    status: "NEW",
    interested_property: "",
    budget_range: "",
    notes: "",
    location: "",
    preferred_contact_time: "",
    source: "website",
    property_type: "",
    transaction_type: "",
    follow_up_date: "",
    lead_score: 0,
  };

  const [newLead, setNewLead] = useState(initialLeadState);

  useEffect(() => {
    fetchLeads();
  }, []);

  async function fetchLeads() {
    const { data, error } = await supabase.from("leads").select("*");

    if (error) {
      console.error("Error fetching leads:", error);
    } else {
      setLeads(data);
      setIsLoading(false);
    }
  }

  async function handleAddLead(e) {
    e.preventDefault();
    setIsLoading(true);

    const { data, error } = await supabase
      .from("leads")
      .insert([newLead])
      .select();

    if (error) {
      toast.error("Error adding lead");
      console.error("Error adding lead:", error);
    } else {
      setLeads([...leads, data[0]]);
      setNewLead(initialLeadState);
      setIsAddingLead(false);
      toast.success("Lead added successfully");
    }
    setIsLoading(false);
  }

  async function handleDeleteLead(id) {
    const { error } = await supabase.from("leads").delete().eq("id", id);

    if (error) {
      toast.error("Error deleting lead");
      console.error("Error deleting lead:", error);
    } else {
      setLeads(leads.filter((lead) => lead.id !== id));
      toast.success("Lead deleted successfully");
    }
  }

  async function handleEditLead(e) {
    e.preventDefault();
    setIsLoading(true);

    const { data, error } = await supabase
      .from("leads")
      .update(editingLead)
      .eq("id", editingLead.id)
      .select();

    if (error) {
      toast.error("Error updating lead");
      console.error("Error updating lead:", error);
    } else {
      setLeads(leads.map((l) => (l.id === editingLead.id ? data[0] : l)));
      setEditingLead(null);
      toast.success("Lead updated successfully");
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

  const filteredLeads = leads.filter((lead) => {
    if (!lead) return false;

    const matchesStatus =
      filters.status === "all" || lead.status === filters.status;
    const matchesSearch =
      lead.name?.toLowerCase().includes(filters.search.toLowerCase()) ||
      lead.email?.toLowerCase().includes(filters.search.toLowerCase()) ||
      lead.phone?.toLowerCase().includes(filters.search.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  const sortedAndFilteredLeads = filteredLeads.sort((a, b) => {
    const aValue = a[sortConfig.key] || "";
    const bValue = b[sortConfig.key] || "";

    if (sortConfig.direction === "asc") {
      return aValue > bValue ? 1 : -1;
    }
    return aValue < bValue ? 1 : -1;
  });

  const getStatusColor = (status) => {
    const colors = {
      NEW: "bg-blue-100 text-blue-800",
      CONTACTED: "bg-yellow-100 text-yellow-800",
      QUALIFIED: "bg-green-100 text-green-800",
      PROPOSAL: "bg-purple-100 text-purple-800",
      NEGOTIATION: "bg-orange-100 text-orange-800",
      CLOSED: "bg-gray-100 text-gray-800",
      LOST: "bg-red-100 text-red-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto p-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Leads Dashboard
              </h1>
              <p className="text-gray-600 mt-1">Manage your leads</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setIsAddingLead(!isAddingLead)}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
              >
                <FiPlus /> {isAddingLead ? "Cancel" : "Add Lead"}
              </button>
            </div>
          </div>

          {/* Filters Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8 border border-gray-100">
            <h3 className="text-lg font-semibold mb-4">Filters & Search</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search
                </label>
                <input
                  type="text"
                  placeholder="Search leads..."
                  value={filters.search}
                  onChange={(e) =>
                    setFilters({ ...filters, search: e.target.value })
                  }
                  className="w-full border border-gray-200 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
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
                  <option value="NEW">New</option>
                  <option value="CONTACTED">Contacted</option>
                  <option value="QUALIFIED">Qualified</option>
                  <option value="PROPOSAL">Proposal</option>
                  <option value="NEGOTIATION">Negotiation</option>
                  <option value="CLOSED">Closed</option>
                  <option value="LOST">Lost</option>
                </select>
              </div>
            </div>
          </div>

          {/* Leads Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {[
                      "Name",
                      "Email",
                      "Phone",
                      "Status",
                      "Location",
                      "Follow-up",
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
                  {sortedAndFilteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          {lead.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {lead.email}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {lead.phone}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${getStatusColor(
                            lead.status
                          )}`}
                        >
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {lead.location}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {lead.follow_up_date
                          ? new Date(lead.follow_up_date).toLocaleDateString()
                          : "-"}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => setEditingLead(lead)}
                            className="text-blue-600 hover:text-blue-800"
                            title="Edit"
                          >
                            <FiEdit2 />
                          </button>
                          <button
                            onClick={() => handleDeleteLead(lead.id)}
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

          {/* Edit Lead Modal */}
          {editingLead && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
                <h2 className="text-xl font-semibold mb-4">Edit Lead</h2>
                <LeadForm
                  lead={editingLead}
                  setLead={setEditingLead}
                  onSubmit={handleEditLead}
                  onCancel={() => setEditingLead(null)}
                  title="Edit Lead"
                />
              </div>
            </div>
          )}

          {/* Add Lead Modal */}
          {isAddingLead && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
                <h2 className="text-xl font-semibold mb-4">Add New Lead</h2>
                <LeadForm
                  lead={newLead}
                  setLead={setNewLead}
                  onSubmit={handleAddLead}
                  onCancel={() => {
                    setIsAddingLead(false);
                    setNewLead(initialLeadState);
                  }}
                  title="Add Lead"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
