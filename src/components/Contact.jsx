import React, { useState } from "react";
import emailjs from "emailjs-com";
import Footer from "./Footer";
import image from "../assets/contactus.jpg";
import toast from "react-hot-toast";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_952kjj8";
    const templateId = "template_bgzfajz";
    const publicKey = "2WHBbnZlFqJMy8fCn";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Arjun",
      message: formData.message,
    };
    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (result) => {
        toast.success("Message Sent Successfully");
      },
      (error) => {
        toast.error("Failed to send message.");
      }
    );
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <div className="md:mt-2 py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold tracking-wide">GET IN TOUCH</h2>
            <p className="mt-2 text-lg">Can't wait to meet you!</p>
            <p className="mt-1">
              We are happy to read from you anytime. Please use the form below
              to contact us.
            </p>
          </div>
          <div className="grid grid-cols-1 my-24 md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center">
              <img
                src={image}
                alt="Contact"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div>
              <form
                onSubmit={handleSubmit}
                className="shadow-2xl rounded-lg p-16"
              >
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-sm text-white font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your Name..."
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm text-bl"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm text-white  font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email..."
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full  px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm text-black"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm text-white font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Enter Your Message..."
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-6 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm text-black"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <hr className="md:mt-10 -mt-24 "  />
      <Footer />
    </>
  );
}

export default ContactForm;
