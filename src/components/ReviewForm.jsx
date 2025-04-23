import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function ReviewForm() {
  const [reviews, setReviews] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/reviews')
      .then(res => res.json())
      .then(setReviews);

    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  const getProduct = (productId) => products.find(p => p.id === productId);

  const getAverageRating = (productId) => {
    const filtered = reviews.filter(r => r.productId === productId);
    if (filtered.length === 0) return 0;
    const total = filtered.reduce((sum, r) => sum + r.rating, 0);
    return (total / filtered.length).toFixed(1);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/reviews/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setReviews(prev => prev.filter(r => r.id !== id));
      });
  };

  return (
    <div>
      <h2 className="mb-4">All Reviews 💬</h2>
      <div className="d-flex flex-column gap-3">
        {reviews.map((review) => {
          const product = getProduct(review.productId);
          const avgRating = getAverageRating(review.productId);

          return (
            <Card key={review.id} className="d-flex flex-row align-items-center p-2 shadow-sm">
              {product && (
                <Card.Img
                  variant="left"
                  src={product.image}
                  style={{ width: '80px', height: '80px', objectFit: 'contain', marginRight: '15px' }}
                />
              )}
              <Card.Body className="p-2">
                <Card.Title className="mb-1">
                  {product?.title || 'Product'} <small className="text-muted">(Avg: ⭐{avgRating})</small>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">By: {review.username}</Card.Subtitle>
                <div className="mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: i < review.rating ? 'gold' : 'lightgray' }}>★</span>
                  ))}
                </div>
                <Card.Text>{review.comment}</Card.Text>
              </Card.Body>
              <Button variant="outline-danger" size="sm" onClick={() => handleDelete(review.id)}>🗑 </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default ReviewForm;
