import "./FooterTop.css";

export default function FooterTop() {
  const stats = [
    {
      icon: "https://newprojectsonline.com/assets/newprojectonline/listed.svg",
      count: "500",
      label: "Properties Listed",
    },
    {
      icon: "https://newprojectsonline.com/assets/newprojectonline/location.svg",
      count: "50",
      label: "Locations Covered",
    },
    {
      icon: "https://newprojectsonline.com/assets/newprojectonline/agents.svg",
      count: "20",
      label: "Expert Agents",
    },
    {
      icon: "https://newprojectsonline.com/assets/newprojectonline/sold.svg",
      count: "500",
      label: "Properties Sold",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={stat.icon}
                  alt={stat.label}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="flex items-center justify-center gap-1 mb-2">
                <span className="text-3xl font-bold text-orange-600">
                  {stat.count}
                </span>
                <span className="text-2xl font-bold text-orange-600">+</span>
              </div>
              <h5 className="text-gray-700 font-medium">{stat.label}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
