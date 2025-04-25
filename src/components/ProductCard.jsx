import React from 'react';
import { Card, Button, Col, Badge } from 'react-bootstrap';

function ProductCard({ product, onRateClick }) {
  return (
    <Col sm={6} md={4} lg={3} className="mb-4">
      <Card className="h-100 shadow-sm">
        <Card.Img
          variant="top"
          src={product.image}
          height="200"
          style={{ objectFit: 'contain' }}
        />
        <Card.Body className="d-flex flex-column">
          <Badge bg="light" text="dark" className="mb-2">{product.category}</Badge>
          <Card.Title className="fs-6 text-truncate">{product.title}</Card.Title>
          <div className="text-warning mb-2">
            {'★'.repeat(Math.floor(product.rating.rate))}{'☆'.repeat(5 - Math.floor(product.rating.rate))}
            <small className="text-muted ms-1">({product.rating.count})</small>
          </div>
          
          <div className="d-flex justify-content-between mt-auto">
            <Button variant="outline-dark" size="sm" onClick={() => onRateClick(product)}>Rate</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;
