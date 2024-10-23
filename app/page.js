"use client";
import ContactUs from "@/components/ContactUs";
import FooterBottom from "@/components/FooterBottom";
import FooterTop from "@/components/FooterTop";
import Header from "@/components/Header";
import HeaderSearch from "@/components/HeaderSearch";
import HeaderTop from "@/components/HeaderTop";
import Localities from "@/components/localities";
import Properties from "@/components/properties";
import Services from "@/components/services";
import Welcome from "@/components/Welcome";

const propertiesData = [
  {
    name: "Forest Hills Prestige City Mulund",
    link: "https://newprojectsonline.com/forest-hills-prestige-city-mulund",
    image: "https://newprojectsonline.com/assets/uploads/banners/1724072675-Forest-Hills-Prestige-City-Mulund-1.webp",
    location: "Mulund West, Mumbai",
    type: "residential",
    status: "UNDER CONSTRUCTION",
    developer: "Prestige Estates",
    configurations: "3 BHK , 4 BHK",
    price: "3.09 Cr* Onwards"
  },
  {
    name: "Moraj Sea La Vista Shivaji Park",
    link: "https://newprojectsonline.com/moraj-sea-la-vista-shivaji-park",
    image: "https://newprojectsonline.com/assets/uploads/banners/1723359431-moraj-sea-la-vista-shivaji-park-banner3.webp",
    location: "Shivaji Park, Mumbai",
    type: "residential",
    status: "UNDER CONSTRUCTION",
    developer: "Moraj Group",
    configurations: "3 BHK",
    price: "4.69 Cr* Onwards"
  },
  {
    name: "Prestige City Mulund",
    link: "https://newprojectsonline.com/prestige-city-mulund",
    image: "https://newprojectsonline.com/assets/uploads/banners/1722990816-prestige-city-mulund-west-new-launch-b3-1400w.webp",
    location: "Mulund West, Mumbai",
    type: "residential",
    status: "UNDER CONSTRUCTION",
    developer: "Prestige Estates",
    configurations: "3 BHK , 4 BHK",
    price: "3.09 Cr* Onwards"
  },
  {
    name: "Bhoomi Simana Parel",
    link: "https://newprojectsonline.com/bhoomi-simana-parel",
    image: "https://newprojectsonline.com/assets/uploads/banners/1722676544-bhoomi-simana-lalbaug-banner.webp",
    location: "LALBAUGH, PAREL Mumbai",
    type: "residential",
    status: "UNDER CONSTRUCTION",
    developer: "Reputed Developers of Navi Mumbai",
    configurations: "2 BHK , 3 BHK",
    price: "3.90 Cr* Onwards"
  },
  {
    name: "Bhoomi Simana Lalbaug",
    link: "https://newprojectsonline.com/bhoomi-simana-lalbaug",
    image: "https://newprojectsonline.com/assets/uploads/banners/1722676544-bhoomi-simana-lalbaug-banner.webp",
    location: "LALBAUGH, PAREL Mumbai",
    type: "residential",
    status: "UNDER CONSTRUCTION",
    developer: "Reputed Developers of Navi Mumbai",
    configurations: "2 BHK , 3 BHK",
    price: "3.90 Cr* Onwards"
  },
  {
    name: "Adani Airica Kanjurmarg West",
    link: "https://newprojectsonline.com/adani-airica-kanjurmarg-west",
    image: "https://newprojectsonline.com/assets/uploads/banners/1728707183-Adani-Airica-LBS-Kanjurmarg3_(1).webp",
    location: "Kanjurmarg West, Mumbai",
    type: "residential",
    status: "UNDER CONSTRUCTION",
    developer: "ADANI REALTY",
    configurations: "2 BHK , 3 BHK , Jodi Options",
    price: "1.75 Cr*+ Onwards"
  },
  {
    name: "Godrej Horizon Wadala",
    link: "https://newprojectsonline.com/godrej-horizon-wadala",
    image: "https://newprojectsonline.com/assets/uploads/banners/1728572371-godrej-horizon-wadala--ban-desk-31.webp",
    location: "Dadar-Wadala, Mumbai",
    type: "residential",
    status: "UNDER CONSTRUCTION",
    developer: "Godrej Properties",
    configurations: "2 BHK , 3 BHK",
    price: "2.99 Cr.* Onwards"
  },
  {
    name: "Runwal 7 Mahalaxmi",
    link: "https://newprojectsonline.com/runwal-7-mahalaxmi",
    image: "https://newprojectsonline.com/assets/uploads/banners/1728106726-runwal-7-Mahalaxmi-banner.webp",
    location: "7 Rasta, Mahalaxmi, Mumbai",
    type: "residential",
    status: "UNDER CONSTRUCTION",
    developer: "Runwal Group",
    configurations: "2 BHK , 3 BHK , 4 BHK",
    price: "3.75 Cr* Onwards"
  },
  {
    name: "Mahindra Malad West Liberty Garden",
    link: "https://newprojectsonline.com/mahindra-malad-west-liberty-garden",
    image: "https://newprojectsonline.com/assets/uploads/banners/1724570962-mahindra-malad-west-mahindra-malad-west-banner.webp",
    location: "Malad West, Mumbai",
    type: "residential",
    status: "UNDER CONSTRUCTION",
    developer: "Top Class Developers",
    configurations: "2 BHK , 3 BHK",
    price: "On Request"
  }
];

export default function HomePage() {
  return (
    <div>

      <HeaderTop />
      <Header />
      <HeaderSearch />
      
      

      <h1 className="text-3xl font-bold mt-8 mb-4 text-center">Flats for Sale in Mumbai in New Projects</h1>
      <div className="w-16 h-1 bg-red-500 mx-auto mb-4"></div>
      <div className="p-20">
        <Welcome />
      </div>


      <h1 className="text-3xl font-bold mt-8 mb-4 text-center">New Launch Projects in Mumbai</h1>
      <div className="w-16 h-1 bg-red-500 mx-auto mb-4"></div>
      <div className="px-20">
        <Properties properties={propertiesData} />
      </div>


      <h1 className="text-3xl font-bold mt-20 mb-4 text-center">New Launch Projects in Thane</h1>
      <div className="w-16 h-1 bg-red-500 mx-auto mb-4"></div>
      <div className="px-20">
        <Properties properties={propertiesData} />
      </div>

      <h1 className="text-3xl font-bold mt-20 mb-4 text-center">Browse by Localities</h1>
      <div className="w-16 h-1 bg-red-500 mx-auto mb-4"></div>
      <div className="px-20">
        <Localities />
      </div>

      <h1 className="text-3xl font-bold mt-4 mb-4 text-center">Our Services</h1>
      <div className="w-16 h-1 bg-red-500 mx-auto mb-4"></div>
      <Services />

      <h1 className="text-3xl font-bold mb-4 text-center">Real Estate Property With Us</h1>
      <div className="w-16 h-1 bg-red-500 mx-auto mb-4"></div>
      <div className="text-center px-4 py-8 max-w-4xl mx-auto">
        <p className="mb-4">
          The property market of Mumbai & Navi Mumbai offers property for sale in new residential projects in high-rise towers in all budgets whether Pre-Launch Projects, under construction, ready to move in (RTMI) or nearing possession. Whether it is for self-use or investment property requirements, we strive hard to provide the best offers on the best 1 BHK flats, 2 BHK flats, or 3 BHK in Mumbai, Pune, Thane, KDMC Area, and Navi Mumbai.
        </p>
        <p className="mb-4">
          Flats for sale in Mumbai, Pune, Thane, KDMC Area, and Navi Mumbai are on offer and with us you can browse affordable apartments/flats in new projects in Mumbai and other locations for sale in top upcoming projects in Mumbai and other nearby locations, along with current projects in Mumbai, Thane, and other nearby locations.
        </p>
        <p className="mb-4">
          Get the best deals on residential projects in the real estate market. Select offers and deals on new projects. Check out affordable housing flats of 1 bhk or luxurious 3 bhk flats by top developers like Lodha Group, Godrej Properties and other.
        </p>
        <p className="mb-4">
          Find projects that include amenities like car parking, a children's play area, a swimming pool with a higher carpet area and are strategically located within close distance to top schools, malls, hospitals, and parks.
        </p>
      </div>
      
      <h1 className="text-3xl font-bold mt-8 mb-4 text-center">Contact Us</h1>
      <div className="w-16 h-1 bg-red-500 mx-auto mb-4"></div>
      <ContactUs />

      <FooterTop />

      <FooterBottom />


    </div>
  );
}
