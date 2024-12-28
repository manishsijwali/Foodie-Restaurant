import React from 'react'

const Contact  = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="bg-gray-100 p-6 border-b border-gray-300 text-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
      </header>
      <section className="mt-6">
        <p className="mb-4">
          We'd love to hear from you! Whether you have a question about our services, need assistance, or just want to provide feedback, feel free to reach out to us.
        </p>
        <p className="mb-4">Alternatively, you can reach us at:</p>
        <p className="mb-2">Email: <a href="mailto:contact@example.com" className="text-blue-500 hover:underline">contact@example.com</a></p>
        <p className="mb-2">Phone: (123) 456-7890</p>
        <p className="mb-2">Address: 123 Main Street, Anytown, USA</p>
      </section>
    </div>
  )
}

export default Contact
