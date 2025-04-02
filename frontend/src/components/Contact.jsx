import React from 'react';

const Contact = () => {
  return (
    <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto p-6">
      {/* Header */}
      <header className="bg-gray-100 p-6 border-b border-gray-300 text-center rounded-md shadow-sm">
        <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
      </header>

      {/* Contact Info */}
      <section className="mt-6 bg-gray-50 p-6 rounded-lg shadow-md">
        <p className="text-gray-600 leading-relaxed">
          We'd love to hear from you! Whether you have a question about our services, need assistance, or just want to provide feedback, feel free to reach out to us.
        </p>

        <div className="mt-4 space-y-2 text-gray-700">
          <p>
            📧 Email: 
            <a href="mailto:contact@example.com" className="text-blue-500 hover:underline ml-2">
              contact@example.com
            </a>
          </p>
          <p>📞 Phone: (123) 456-7890</p>
          <p>📍 Address: 123 Main Street, Anytown, USA</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
