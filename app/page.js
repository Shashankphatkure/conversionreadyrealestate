import { supabase } from "@/utils/supabase";
import HomeContent from "@/components/HomeContent";

// This becomes the main page component (Server Component)
export default async function HomePage() {
  // Fetch properties from Supabase
  const { data: propertiesData } = await supabase
    .from("properties")
    .select("*");

  return <HomeContent properties={propertiesData} />;
}
