// ProductCard.js

import React from 'react';
import './productcard.css';
import {useNavigate } from 'react-router-dom';
const Productcard = ({ product }) => {
  // const arr=[airPods,bag,shoe];
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/form", { state: { productName: product.title } });
  };
  return (
    <div onClick={handleClick}>
      <div className="product-card">
        <img src={product.images} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Ratings: {product.ratings}</p>
        <p>Reviews: {product.reviews}</p>
      </div>
    </div>
  );
};

export default Productcard;
