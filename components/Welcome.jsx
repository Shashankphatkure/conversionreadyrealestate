export default function Welcome() {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/towers.jpg"
                alt="Luxurious bedroom interior"
                className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <p className="text-gray-800 font-semibold tracking-wide">
                WE ARE A FAST-GROWING MARKETING COMPANY IN THE REAL ESTATE
                INDUSTRY. OUR AIM IS NOT ONLY TO PROVIDE RELEVANT BUT ALSO
                PERSONALIZED HOME SOLUTIONS.
              </p>
            </div>
            <h2 className="text-3xl font-bold text-orange-600 mb-6">
              Welcome to Shree Ganesh Realty
            </h2>

            <p className="text-gray-600 leading-relaxed">
              In the first place, our Mission is to give buyers all information
              about Flats for sale in New Projects in{" "}
              <span className="font-medium">
                Navi Mumbai, Thane, Pune, Delhi-NCR
              </span>{" "}
              locations in new projects launched and upcoming launches in real
              estate sector.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Furthermore in shortest possible time and maximum convenience we
              assist them to decide in purchasing their Dream Home. We therefore
              provide trust and security with complete peace of mind by
              assisting them from start to finish point on their journey of Home
              Buying.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
