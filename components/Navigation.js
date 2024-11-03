"use client";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase";
import { toast } from "react-hot-toast";

export default function Navigation() {
  const router = useRouter();

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
    <button
      onClick={handleLogout}
      className="text-sm text-gray-700 hover:text-gray-900"
    >
      Logout
    </button>
  );
}
