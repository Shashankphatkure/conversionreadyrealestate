"use client";
import "./sidebar.css";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftIcon,
  MapPinIcon,
  DocumentIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Sidebar({ property }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const { error } = await supabase.from("leads").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          interested_property: property?.name,
          location: property?.location,
          property_type: property?.type,
          source: "website",
          status: "NEW",
        },
      ]);

      if (error) throw error;

      setMessage("Thank you for your interest! We'll contact you soon.");
      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      console.error("Error submitting lead:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="micro-9at text-bln">
      <div className="section-e6t pb-xe1">
        <ul className="nav-svv nav-6gq block-63t">
          <li className="nav-item-rvj">Organize Site Visit</li>
          <li className="nav-item-rvj">
            <ChatBubbleLeftIcon className="h-5 w-5 inline-block" /> Send us
            Whatsapp
          </li>
        </ul>
        <button className="btn-pm7 btn-tjz info-4em form-hok eff-yls eff-jqi mt-7er">
          <PhoneIcon className="h-5 w-5 inline-block" /> Request Call Back
        </button>
      </div>
      <span className="block-pw4 form-91l font-weight-k7b my-cb8">
        Pre-Register here for Best Offers
      </span>

      {message && (
        <div
          className={
            message.includes("error") ? "error-message" : "success-message"
          }
        >
          {message}
        </div>
      )}

      <form className="px-4" onSubmit={handleSubmit}>
        <div className="mb-1">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/10"
            placeholder="Name"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/10"
            placeholder="Mobile No"
            required
          />
        </div>

        <div className="">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/10"
            placeholder="E-Mail Address"
            required
          />
        </div>

        <button
          className="w-full py-2 text-sm mb-2 font-semibold text-white bg-amber-500 hover:bg-amber-600 rounded-md transition-colors disabled:opacity-50 mt-4 animate-scaleIn"
          type="submit"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Pre-Register Now"}
        </button>
      </form>

      {/* Rest of your existing sidebar content */}
      <p className="animate-4y8">
        Call Us :{" "}
        <a href="tel:+919892666207">
          <PhoneIcon className="h-4 w-4 inline-block" /> +91 9892666207
        </a>
      </p>
      <p className="dlres">
        <a href="#">
          Book A Site Visit &nbsp;&nbsp;
          <HomeIcon className="h-5 w-5 inline-block" />
        </a>
      </p>
      <ul className="animate-4y8">
        <li>
          <span>✓ Configurations</span> : {property?.configurations || "N/A"}
        </li>
        <li>
          <span>✓ Location</span> : {property?.location || "N/A"}
        </li>
        <li>
          <span>✓ Price </span> : {property?.price || "Price on Request"} All
          Incl. Onwards
        </li>
      </ul>
      <div className="social-share-container">
        <p>Share This Project On Social Media</p>
        <div className="social-icons">
          <a href="http://www.facebook.com/sharer.php?u=http%3A%2F%2Fnewprojectsonline.com%2Fashar-merac-thane&title=Share This Project in social media')">
            <img
              src="https://newprojectsonline.com/assets/img/comman/facebook.png"
              width={30}
              height={30}
              alt="Share on Facebook"
            />
          </a>
          <a href="http://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Fnewprojectsonline.com%2Fashar-merac-thane&title=Share This Project in social media')">
            <img
              src="https://newprojectsonline.com/assets/img/comman/linkedin.png"
              width={30}
              height={30}
              alt="Share on LinkedIn"
            />
          </a>
          <a href="https://twitter.com/share?url=http%3A%2F%2Fnewprojectsonline.com%2Fashar-merac-thane&title=Share This Project in social media')">
            <img
              src="https://newprojectsonline.com/assets/img/comman/twitter.png"
              width={30}
              height={30}
              alt="Share on Twitter"
            />
          </a>
          <a href="https://wa.me/?text=http%3A%2F%2Fnewprojectsonline.com%2Fashar-merac-thane&title=Share This Project in social media')">
            <img
              src="https://newprojectsonline.com/assets/img/comman/whatsapp.png"
              width={30}
              height={30}
              alt="Share on WhatsApp"
            />
          </a>
        </div>
      </div>
      <div className="link-ec4">
        <a href="tel:+919892666207">
          <PhoneIcon className="h-6 w-6" />
        </a>
        <a href="#">
          <EnvelopeIcon className="h-6 w-6" />
        </a>
        <a href="#">
          <ChatBubbleLeftIcon className="h-6 w-6" />
        </a>
        <a href="#">
          <MapPinIcon className="h-6 w-6" />
        </a>
        <a href="#">
          <DocumentIcon className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}
