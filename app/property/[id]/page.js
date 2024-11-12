import { createClient } from "@supabase/supabase-js";
import PropertyAmenities from "../components/PropertyAmenities";
import PropertyFAQ from "../components/PropertyFAQ";
import PropertyFooter from "../components/PropertyFooter";
import PropertyGallery from "../components/PropertyGallery";
import PropertyHeader from "../components/PropertyHeader";
import PropertyHero from "../components/PropertyHero";
import PropertyLocation from "../components/PropertyLocation";
import PropertyOverview from "../components/PropertyOverview";
import PropertyPrice from "../components/PropertyPrice";
import PropertySitePlan from "../components/PropertySitePlan";
import PropertySiteTour from "../components/PropertySiteTour";
import Sidebar from "../components/sidebar";

export default async function SingleProperty({ params }) {
  // Initialize Supabase client
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  // Fetch property data with builder details
  const { data: property, error } = await supabase
    .from("properties")
    .select(
      `
      *,
      builder:builders (
        id,
        name,
        logo,
        description,
        established_year
      )
    `
    )
    .eq("id", params.id)
    .single();

  if (error) {
    console.error("Error fetching property:", error);
    return <div>Error loading property</div>;
  }

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="flex">
      <main className="w-3/4">
        <PropertyHeader property={property} />
        <PropertyHero property={property} />

        <div className="px-3">
          <PropertyOverview property={property} />
          <PropertyPrice property={property} />
          <PropertySitePlan property={property} />
          <PropertyAmenities property={property} />
          <PropertyGallery property={property} />
          <PropertyLocation property={property} />
          <PropertySiteTour property={property} />
        </div>

        <PropertyFooter property={property} />
      </main>

      <aside className="w-1/4">
        <Sidebar property={property} />
      </aside>
    </div>
  );
}
