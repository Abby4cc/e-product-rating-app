import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function RatingModal({ product, onClose, onSubmit, rating, setRating, comment, setComment, username, setUsername }) {
  const handleStarClick = (value) => {
    setRating(value);
  };

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Rate {product.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Rating</Form.Label>
            <div>
              {[1, 2, 3, 4, 5].map((value) => (
                <span
                  key={value}
                  style={{
                    cursor: 'pointer',
                    color: value <= rating ? 'gold' : 'lightgray',
                    fontSize: '1.5rem'
                  }}
                  onClick={() => handleStarClick(value)}
                >
                  ★
                </span>
              ))}
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Review</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your feedback..."
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">Submit Review</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default RatingModal;

