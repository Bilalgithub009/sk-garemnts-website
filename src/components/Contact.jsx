// src/components/ContactSection.jsx
import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-blue-50 py-20 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto text-center">
  <h2 className="text-4xl font-bold text-black mb-4">Contact Us SK <span className="text-blue-600">Garments Team</span></h2>

  <p className="text-gray-700 font-bold text-xl">
    We’d love to hear from you — whether it’s about sizes, custom orders, or just feedback on our latest styles. Team SK Garments is here for you!
  </p>
</div>


      <div className="max-w-3xl mx-auto mt-12 bg-white p-8 rounded-xl shadow-lg">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              placeholder="your@email.com"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              rows="5"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="inline-block px-10 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="mt-10 text-center text-gray-600 text-sm">
          <p className="mx-auto">Email: <a href="mailto:info@example.com" className="text-blue-500">saad khan@gmail.com</a></p>
          <p className="mt-4"> <span className="text-blue-600">Address:</span> Near Al Falah Masjid Bhangoriya Goth Karachi, Pakistan</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
