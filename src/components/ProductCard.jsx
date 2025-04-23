import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ProductCard({ product, onRateClick }) {
  return (
    <Card style={{ width: '18rem' }} className="m-2">
      <Card.Img variant="top" src={product.image} height="200" style={{ objectFit: 'contain' }} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button variant="primary" onClick={() => onRateClick(product)}>Rate Product</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;