import React from 'react'

const About = () => {
  return (
      <div className="max-w-4xl mx-auto p-6">
        <header className="bg-gray-100 p-6 border-b border-gray-300 text-center">
          <h1 className="text-3xl font-bold">About Us</h1>
        </header>
        <section className="mt-6 space-y-4">
          <p>
            Welcome to [Your Company Name], where innovation meets excellence. Founded in [Year], our mission is to revolutionize the [industry/field] by providing top-notch services and products that exceed our customers' expectations.
          </p>
          <p>
            At [Your Company Name], we believe in the power of collaboration and the strength of community. Our team is composed of passionate professionals dedicated to making a positive impact through our work. We take pride in our commitment to sustainability, quality, and customer satisfaction.
          </p>
          <p>
            Our journey began with a simple idea: to create solutions that not only solve problems but also add value to the lives of our users. Over the years, we have grown and evolved, continually adapting to the ever-changing landscape of our industry. Yet, our core values remain unchanged—integrity, innovation, and excellence.
          </p>
          <p>
            We are grateful for the trust and support of our clients and partners, which has been instrumental in our success. As we look to the future, we remain focused on our goal of driving progress and delivering exceptional results. Thank you for being a part of our story.
          </p>
          <p>
            If you have any questions or would like to learn more about our work, please don't hesitate to <a href="mailto:contact@example.com" className="text-blue-500 hover:underline">contact us</a>. We look forward to connecting with you.
          </p>
          <p>Sincerely,</p>
          <p>The [Your Company Name] Team</p>
        </section>
      </div>
  )
}

export default About
