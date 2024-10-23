export default function Welcome() {
    return (
        <div className="welcome-container flex">
            <div className="welcome-left w-1/2 pr-4">
                <div className="welcome-image">
                    <img src="https://newprojectsonline.com/assets/main/img/properties/properties-6.webp" alt="Luxurious bedroom interior" className="w-full h-auto object-cover" />
                </div>
            </div>
            <div className="welcome-right w-1/2 pl-4">
                <div className="welcome-text">
                    <h2 className="text-2xl font-bold mb-4 text-orange-500">Welcome to NewProjectsOnline.Com</h2>
                    <p className="mb-2 font-bold uppercase">WE ARE A FAST-GROWING MARKETING COMPANY IN THE REAL ESTATE INDUSTRY. OUR AIM IS NOT ONLY TO PROVIDE RELEVANT BUT ALSO PERSONALIZED HOME SOLUTIONS.</p>
                    <p className="font-bold">In the first place, our Mission is to give buyers all information about Flats for sale in New Projects in Navi Mumbai,Thane, Pune, Delhi-NCR locations in new projects launched and upcoming launches in real estate sector. Furthermore in shortest possible time and maximum convenience we assist them to decide in purchasing their Dream Home. We therefore provide trust and security with complete peace of mind by assisting them from start to finish point on their journey of Home Buying.</p>
                </div>
            </div>
        </div>
    );
}