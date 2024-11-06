import { supabase } from "@/utils/supabase";
import HomeContent from "@/components/HomeContent";

export default async function HomePage() {
  // Fetch properties from Supabase
  const { data: propertiesData } = await supabase
    .from("properties")
    .select("*");

  return <HomeContent properties={propertiesData} />;
}
