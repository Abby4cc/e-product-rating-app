import React from 'react';
import { Form } from 'react-bootstrap';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <Form className="mb-3 ">
      <Form.Control
        type="text"
        placeholder="Search products ..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </Form>
  );
}

export default SearchBar;
