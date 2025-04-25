import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <Row className="mb-3 align-items-center">
      <Col md="auto"> 
        <Form>
          <Form.Control
            type="text"
            placeholder="Search products ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form>
      </Col>
      <Col md="auto" className="ms-2"> 
        <Button variant="outline-primary">Search</Button>
      </Col>
  
    </Row>
  );
}

export default SearchBar;