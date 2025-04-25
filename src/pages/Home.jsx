import React from 'react';

const Home = () => {
  return (
    <div className="bg-dark bg-opacity-50 p-5 rounded shadow text-white text-center">
    <h1 className="display-4 fw-bold">Discover Honest Product Ratings</h1>
    <p className="lead">Read real reviews, compare ratings, and shop smarter with confidence.</p>
    <a href="/products" className="btn btn-warning btn-lg mt-3">
      Browse Products
    </a>
  </div>
  );
};

export default Home;