import React from 'react';

const ContactUs = () => (
  <section className="mx-28  bg-gray-100 py-8">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

      <div className="flex flex-col items-center space-y-4">
        {/* Phone */}
        <div className="flex items-center space-x-3">
          <i className="fas fa-phone-alt text-blue-500 text-xl"></i>
          <a href="tel:(555)555-1234" className="text-lg text-gray-700">
            (555) 555-1234
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-3">
          <i className="fas fa-envelope text-blue-500 text-xl"></i>
          <a href="mailto:demo@inflatableoffice.com" className="text-lg text-gray-700">
            demo@inflatableoffice.com
          </a>
        </div>

        {/* Address */}
        <div className="flex items-center space-x-3">
          <i className="fas fa-map-marked-alt text-blue-500 text-xl"></i>
          <span className="text-lg text-gray-700">
            954 East Ave Akron, OH 44307
          </span>
        </div>
      </div>
    </div>
  </section>
);



export default ContactUs;
