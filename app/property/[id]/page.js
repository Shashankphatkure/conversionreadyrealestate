import { createClient } from "@supabase/supabase-js";
import PropertyAmenities from "../components/PropertyAmenities";
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
import PropertyModal from "../components/PropertyModal";
import PropertyPopup from "../components/PropertyPopup";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import PropertyPopup2 from "../components/PropertyPopup2";

export const revalidate = 0;

export default async function SingleProperty({ params }) {
  // Add mobile detection
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "";
  const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

  // Redirect to mobile-specific page if on a mobile device
  if (isMobile) {
    redirect(`/propertyinfo/${params.id}`);
  }

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
    <>
      <div className="flex">
        <main className="w-3/4">
          <div className="sticky top-0 z-50 bg-white ">
            <PropertyHeader property={property} />
          </div>
          <PropertyHero property={property} />
          <PropertyModal property={property} />

          <div className="px-3">
            <div>
              <PropertyOverview property={property} />
            </div>
            <div id="pricing" className="scroll-mt-20">
              <PropertyPrice property={property} />
            </div>
            <div id="sitefloorplan" className="scroll-mt-20">
              <PropertySitePlan property={property} />
            </div>
            <div id="amenities" className="scroll-mt-20">
              <PropertyAmenities property={property} />
            </div>
            <div id="gallery" className="scroll-mt-20">
              <PropertyGallery property={property} />
            </div>
            <div id="location" className="scroll-mt-20">
              <PropertyLocation property={property} />
            </div>
            <div id="sitevisit" className="scroll-mt-20">
              <PropertySiteTour property={property} />
            </div>
          </div>

          <PropertyFooter property={property} />
        </main>

        <aside className="w-1/4">
          <Sidebar property={property} />
        </aside>
      </div>

      <PropertyPopup property={property} />
      <PropertyPopup2 property={property} />
    </>
  );
}
