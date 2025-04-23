import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import ProductCard from './components/ProductCard';
import RatingModal from './components/RatingModal';
import ReviewForm from './components/ReviewForm';
import SearchBar from './components/SearchBar';

function App() {
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [username, setUsername] = useState('');


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  useEffect(() => {
    fetch('http://localhost:3001/reviews')
      .then((res) => res.json())
      .then(setReviews);
  }, []);

  const handleSubmitRating = (e) => {
    e.preventDefault();

    const review = {
      productId: selectedProduct.id,
      rating,
      comment,
      username
    };

    fetch('http://localhost:3001/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(review)
    })
      .then((res) => res.json())
      .then((newReview) => {
        setReviews([...reviews, newReview]);
        alert('Review submitted!');
        setRating('');
        setComment('');
        setSelectedProduct(null);
      });
  };

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="container mt-5 text-center">
              <h1>The Ultimate Guide to Rating and Discovering Top Products</h1>
              <p>Share Your Feedback !</p>
            </div>
          }
        />
        <Route
          path="/products"
          element={
            <div className="container mt-4">
              <h2 className="mb-3">Available Products</h2>
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              <div className="d-flex flex-wrap justify-content-start gap-4 mt-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onRateClick={setSelectedProduct} />
                ))}
              </div>

              {selectedProduct && (
                <RatingModal
                  product={selectedProduct}
                  onClose={() => setSelectedProduct(null)}
                  onSubmit={handleSubmitRating}
                  rating={rating}
                  setRating={setRating}
                  comment={comment}
                  setComment={setComment}
                  username={username}
                  setUsername={setUsername}
                />
              )}
            </div>
          }
        />
        <Route
          path="/submit-review"
          element={
            <div className="container mt-5">
              <ReviewForm
                onReviewSubmitted={(newReview) => {
                  setReviews([...reviews, newReview]);
                  alert('Thanks for your review!');
                }}
              />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
