// ProductCatalog.js

import React from 'react';
import ProductCard from '../productcard/productcard.js'; // Import the ProductCard component
import productsData from '../../data/productsData.json'; // Assuming JSON data is in a file
import './productcatalog.css';
const Productcatalog = () => {
  return (
    <div className="product-catalog">
      <h2>Product Catalog</h2>
      <div className="product-list">
        {productsData.products.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Productcatalog;
