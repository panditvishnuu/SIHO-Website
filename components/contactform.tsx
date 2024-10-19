import React, { useState } from "react";
import emailjs from "emailjs-com";
import { images } from "@/constants";
import Image from "next/image";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNo: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          contactNo: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="bg-gradient-to-r from-purple-100 to-blue-100 py-8 lg:py-24">
      {/* Paragraph and Location Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
          {/* Paragraph */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
              Our Mission
            </h1>
            <p className="text-lg lg:text-xl text-gray-600">
              Our passion is to help people make the best financial decisions,
              enabling them to live the life they aspire to. Striving to build a
              leading team of financial advisors and technologists to create the
              modern, all-in-one RIA and wealth management platform.
            </p>
          </div>

          {/* Location */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4 lg:mb-6 text-center lg:text-left">
              Our Location
            </h2>
            <div className="flex justify-center lg:justify-start rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112088.06096363135!2d77.35303719198076!3d28.607218692533813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390ce557777b7b45%3A0x69870f8fa7e1f92e!2s2nd%20Floor%2C%20Galaxy%20Blue%20Sapphire%20Plaza%2C%2095-5%2C%20Greater%20Noida%20W%20Rd%2C%20Sector%204%2C%20Greater%20Noida%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201309!3m2!1d28.6072436!2d77.4354386!5e0!3m2!1sen!2sin!4v1729331676345!5m2!1sen!2sin"
                width="100%" // Fluid width for responsiveness
                height="350" // Reduced height for mobile screens
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Image and Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-6">
            We're here to help! Please fill out the form below to get in touch
            with us.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full border border-blue-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-blue-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Contact No. *
              </label>
              <input
                type="tel"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                required
                className="w-full border border-blue-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="Enter Contact number"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border border-blue-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="Subject"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-blue-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="Message"
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-200 shadow-lg"
            >
              Submit
            </button>
          </form>

          {status && (
            <div className="mt-4 text-center">
              <p
                className={`text-lg ${
                  status.includes("successfully")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {status}
              </p>
            </div>
          )}
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={images.contactus}
            alt="Contact Us Illustration"
            className="max-w-full h-auto rounded-lg"
            layout="intrinsic"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
