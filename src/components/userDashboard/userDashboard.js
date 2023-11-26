// UserDashboard.js

import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import "./userDashboard.css"; // Import the CSS file for UserDashboard
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faTimeline,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../productcard/productcard.js"; // Import the ProductCard component
import productsData from "../../data/productsData.json";
// import Form from "../form/form.js";
// import { icon } from "@fortawesome/fontawesome-svg-core";




const UserDashboard = () => {

  const [id, setId] = useState(); 
// localStorage.setItem("id",id)

  const [searchTerm, setSearchTerm] = useState(""); // State to hold the search term
  const [filteredProducts, setFilteredProducts] = useState(
    productsData.products
  );
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = productsData.products.filter(
      (product) => !value || product.title.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      {/* <h1>lkjhg</h1> */}
      <nav className="navbar">
        <div className="right-icons">
          <FontAwesomeIcon icon={faTimeline} />
          <FontAwesomeIcon icon={faUser} />
        </div>
      </nav>
      <main>
        <div className="search-box">
          <h3>Search Box for Products</h3>
          <div className="input-container">
            <span className="icon">
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              style={{
                width: "200px",
                padding: "8px",
                margin: "4px",
                border: "none",
                borderRadius: "5px",
                outline: "none",
                boxSizing: "border-box", // Add this line
              }}
            />
          </div>
        </div>

        <h3 className="pList">Product catalog</h3>
        <div className="product-listmain">
          <div className="product-list">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product,i) => (
                <div key={i}  onClick={()=>{setId(product.productId)}} >
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <p>No items found</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
