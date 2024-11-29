import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-yellow-300 to-yellow-500 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-6">
        <h1 className="text-5xl font-bold mb-4">About Our Bookstore</h1>
        <p className="text-lg max-w-3xl">
          Welcome to <span className="font-semibold">Book Haven</span>, your cozy corner of the world where stories come alive! Our mission is to ignite imaginations and inspire readers with a curated selection of books across every genre.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16 px-8">
        <h2 className="text-4xl font-bold text-center mb-8">Our Mission</h2>
        <p className="text-lg max-w-4xl mx-auto text-center">
          We believe that books have the power to change lives. At Book Haven, we strive to create a space where readers of all ages can discover their next great adventure, learn something new, or find a moment of peace. Our commitment is to provide a wide selection of books and foster a love for reading in our community.
        </p>
      </section>

      {/* Bookstore Highlights Section */}
      <section className="py-16 px-6 bg-yellow-200">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Highlight 1 */}
          <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-semibold mb-4">Curated Selection</h3>
            <p>We hand-pick the best books to ensure there's something for every reader, from timeless classics to modern bestsellers.</p>
          </div>

          {/* Highlight 2 */}
          <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-semibold mb-4">Cozy Reading Nooks</h3>
            <p>Enjoy a welcoming environment with comfortable seating where you can get lost in your favorite book.</p>
          </div>

          {/* Highlight 3 */}
          <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-semibold mb-4">Community Events</h3>
            <p>Join us for author readings, book signings, and community book clubs to connect with fellow book lovers.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 py-8">
        <p className="text-center text-gray-400 text-sm">
          © 2024 Book Haven. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default AboutUs;
