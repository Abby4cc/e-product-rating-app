import React from 'react';

function CategoryFilter({ selectedCategory, onCategoryChange, categories }) {
  return (
    <div className="mb-3 d-flex align-items-center gap-2">
      <label htmlFor="categorySelect" className="form-label fw-bold">Category:</label>
      <select
        id="categorySelect"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="form-select w-auto"
      >
        <option value="all">All</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;

