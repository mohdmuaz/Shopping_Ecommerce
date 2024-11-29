import React, { useState } from 'react';

const ContactPage = () => {
  // State to manage form data and submission status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Form Data Submitted:', formData);

    setSubmitted(true);

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });

    setTimeout(() => setSubmitted(false), 50000); // 
  };

  return (
    <div className="bg-gray-50 min-h-scree py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Contact Us:</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-400"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-400"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-400"
                  placeholder="Phone"
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-400"
                  rows="5"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>

            {/* Display a Thank You message if submitted */}
            {submitted && (
              <div className="mt-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700">
                <p>Thank you for your message! We'll get back to you shortly.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
