"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";
import {
  FiHome,
  FiUsers,
  FiMap,
  FiGrid,
  FiLogOut,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { supabase } from "@/utils/supabase";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const { user } = useAuth();
  const router = useRouter();

  const navigation = [
    {
      name: "Properties",
      href: "/dashboard",
      icon: FiHome,
      current: pathname === "/dashboard",
    },
    {
      name: "Builders",
      href: "/builders-dashboard",
      icon: FiGrid,
      current: pathname === "/builders-dashboard",
    },
    {
      name: "Localities",
      href: "/localities",
      icon: FiMap,
      current: pathname === "/localities",
    },
    {
      name: "Leads",
      href: "/leads",
      icon: FiUsers,
      current: pathname === "/leads",
    },
  ];

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged out successfully");
      router.push("/login");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 transform transition-transform duration-200 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between h-16 px-4 bg-gray-800">
            <div className="flex items-center">
              <span className="text-white text-xl font-semibold">
                Dashboard
              </span>
            </div>
            <button
              className="lg:hidden text-gray-400 hover:text-white"
              onClick={() => setSidebarOpen(false)}
            >
              <FiX className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  item.current
                    ? "bg-gray-800 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <item.icon
                  className={`mr-3 h-5 w-5 ${
                    item.current ? "text-white" : "text-gray-400"
                  }`}
                />
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t border-gray-700">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-2 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              <FiLogOut className="mr-3 h-5 w-5 text-gray-400" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 ${
          isSidebarOpen ? "lg:ml-64" : ""
        } transition-margin duration-200 ease-in-out`}
      >
        {/* Mobile Header */}
        <div className="lg:hidden bg-white shadow-sm">
          <div className="flex items-center justify-between h-16 px-4">
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setSidebarOpen(true)}
            >
              <FiMenu className="h-6 w-6" />
            </button>
            <span className="text-gray-900 text-lg font-medium">Dashboard</span>
            <div className="w-6" /> {/* Spacer for alignment */}
          </div>
        </div>

        {/* Page Content */}
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
