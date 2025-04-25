import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import RatingModal from './components/RatingModal';
import ReviewForm from './components/ReviewForm';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';

function App() {
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [username, setUsername] = useState('');
  const [filteredCategory, setFilteredCategory] = useState('all');

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
      username,
    };

    fetch('http://localhost:3001/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((newReview) => {
        setReviews([...reviews, newReview]);
        toast.success('Review submitted!'); 
        setRating('');
        setComment('');
        setSelectedProduct(null);
      });
  };

  const categories = [...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filteredCategory === 'all' || p.category === filteredCategory)
  );

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <main className="flex-grow-1">
        <Routes>
          <Route
            path="/"
            element={
              <div className="container-fluid p-0">
                
                <div
                  className="hero bg-secondary text-dark text-center d-flex align-items-center justify-content-center"
                  style={{
                    minHeight: '90vh',
                    backgroundImage:
                      "url('https://images.pexels.com/photos/5076510/pexels-photo-5076510.jpeg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="bg-dark bg-opacity-50 p-5 rounded shadow text-white text-center">
                    <h1 className="display-4 fw-bold">Discover Honest Product Ratings</h1>
                    <p className="lead">Read real reviews, compare ratings, and shop smarter with confidence.</p>
                    <a href="/products" className="btn btn-warning btn-lg mt-3">
                      Browse Products
                    </a>
                  </div>
                </div>

                <div className="container my-5 shadow" style={{ backgroundColor: '#e6d7ff' }}>
                  <h2 className="text-center mb-4 fw-bold ">Why Choose Us?</h2>
                  <div className="row text-center">
                    {[
                        { icon: '⭐', title: 'Verified Reviews', text: 'All reviews are from real users with verified purchases.' },
                        { icon: '🛍️', title: 'Curated Products', text: 'Only the best-rated and most loved products listed.' },
                        { icon: '🔒', title: 'Secure & Private', text: 'We value your privacy and ensure secure browsing.' },
                        { icon: '📈', title: 'Live Ratings', text: 'See ratings change in real-time as users review.' }
                    ].map((item, i) => (
                      <div className="col-md-3 mb-4" key={i}>
                        <div className="card h-100 shadow-sm border-0">
                          <div className="card-body">
                            <div className="fs-1">{item.icon}</div>
                            <h5 className="card-title mt-3">{item.title}</h5>
                            <p className="card-text">{item.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                
                <div className="container my-5 shadow" style={{ backgroundColor: '#e6d7ff' }}>
                  <h2 className="text-center mb-4 fw-bold">Trending Products</h2>
                  <div className="d-flex flex-wrap justify-content-center gap-4">
                    {products.slice(0, 3).map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onRateClick={setSelectedProduct}
                      />
                    ))}
                  </div>
                </div>

                
                <div className="container my-5 shadow" style={{ backgroundColor: '#e6d7ff' }}>
                <h2 className="text-center mb-4 fw-bold">What Our Users Say</h2>
                <div className="row">
      {[
        {
          name: 'Emily W.',
          feedback: 'This platform helped me find the best laptop in minutes!',
          avatar: 'https://i.pravatar.cc/150?img=1'
        },
        {
          name: 'Michael B.',
          feedback: 'Honest reviews that actually reflect the product. Love it!',
          avatar: 'https://i.pravatar.cc/150?img=2'
        },
        {
          name: 'Sofia K.',
          feedback: 'The UI is sleek, and reviewing products is a breeze.',
          avatar: 'https://i.pravatar.cc/150?img=3'
        }
      ].map((testimonial, index) => (
        <div className="col-md-4" key={index}>
          <div className="card shadow-sm p-3 mb-4 border-0">
            <div className="d-flex align-items-center mb-3">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="rounded-circle me-3"
                width="50"
                height="50"
              />
              <h5 className="mb-0">{testimonial.name}</h5>
            </div>
            <p className="mb-0">{testimonial.feedback}</p>
          </div>
        </div>
      ))}
    </div>
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
            path="/products"
            element={(
              <div className="container mt-4 shadow" style={{ backgroundColor: '#e6d7ff', maxWidth: '1100px' }}>
    <h2 className="mb-3 fw-bold text-center">Available Products</h2>

    
    <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 mb-3">
      <CategoryFilter
        selectedCategory={filteredCategory}
        onCategoryChange={setFilteredCategory}
        categories={categories}
      />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>

    
    <div className="d-flex flex-wrap justify-content-center gap-4 mt-3">
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
            )}
          />

          <Route
            path="/submit-review"
            element={(
              <div className="container mt-5 shadow" style={{ backgroundColor: '#e6d7ff' }}>
                <ReviewForm
                  onReviewSubmitted={(newReview) => {
                    setReviews([...reviews, newReview]);
                    toast.success('Thanks for your review!'); 
                  }}
                />
              </div>
            )}
          />
        </Routes>
      </main>

      <Footer />
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar newestOnTop rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
}

export default App;