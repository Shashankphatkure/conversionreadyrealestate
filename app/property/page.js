import PropertyAmenities from "./components/PropertyAmenities";
import PropertyFAQ from "./components/PropertyFAQ";
import PropertyFooter from "./components/PropertyFooter";
import PropertyGallery from "./components/PropertyGallery";
import PropertyHeader from "./components/PropertyHeader";
import PropertyHero from "./components/PropertyHero";
import PropertyLocation from "./components/PropertyLocation";
import PropertyOverview from "./components/PropertyOverview";
import PropertyPrice from "./components/PropertyPrice";
import PropertySitePlan from "./components/PropertySitePlan";
import PropertySiteTour from "./components/PropertySiteTour";
import Sidebar from "./components/sidebar";

export default function PropertyPage() {
  return (
    <div className="flex">
      <main className="w-3/4">
        <PropertyHeader />
        <PropertyHero />

        <div className="px-3">
          <PropertyOverview />
          <PropertyPrice />
          <PropertySitePlan />
          <PropertyAmenities />
          <PropertyGallery />
          <PropertyLocation />
          <PropertySiteTour />
        </div>

        <PropertyFooter />
      </main>

      <aside className="w-1/4">
        <Sidebar />
      </aside>
    </div>
  );
}
