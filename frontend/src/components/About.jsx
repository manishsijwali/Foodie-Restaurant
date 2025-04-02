import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 lg:mt-28 mt-16 py-6">
      <header className="bg-gray-100 p-6 border-b border-gray-300 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">About Us</h1>
      </header>
      <section className="mt-6 space-y-4 text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
        <p>
          Welcome to <strong>Foodie Hub</strong>, where innovation meets excellence. Founded in <strong>1998</strong>, our mission is to revolutionize the <strong>[industry/field]</strong> by providing top-notch services and products that exceed our customers' expectations.
        </p>
        <p>
          At <strong>Foodie Hub</strong>, we believe in the power of collaboration and the strength of community. Our team is composed of passionate professionals dedicated to making a positive impact through our work.
        </p>
        <p>
          Our journey began with a simple idea: to create solutions that not only solve problems but also add value to the lives of our users. Over the years, we have grown and evolved, continually adapting to the ever-changing landscape of our industry. Yet, our core values remain unchanged—<strong>integrity, innovation, and excellence</strong>.
        </p>
        <p>
          We are grateful for the trust and support of our clients and partners, which has been instrumental in our success. As we look to the future, we remain focused on our goal of driving progress and delivering exceptional results.
        </p>
        <p>
          If you have any questions or would like to learn more about our work, please don't hesitate to{' '}
          <a
            href="mailto:contact@example.com"
            className="text-blue-500 hover:underline focus:ring-2 focus:ring-blue-300"
          >
            contact us
          </a>
          . We look forward to connecting with you.
        </p>
        <p>Sincerely,</p>
        <p className="font-semibold">The Foodie Hub Team</p>
      </section>
    </div>
  );
};

export default About;
