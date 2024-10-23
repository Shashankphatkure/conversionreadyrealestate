"use client";
import Properties from "@/components/properties";

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
      <h1>Featured Properties</h1>
      <Properties properties={propertiesData} />
    </div>
  );
}
