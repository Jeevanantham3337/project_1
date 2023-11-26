/// Homepage.js

import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './homepage.css';
import ProductCatalog from '../productcatalog/productcatalog';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Homepage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to the Fake Product Monitoring System</h1>
      <p>
        {/* <FontAwesomeIcon icon={faEnvelope} /> */}
        Empowering users to identify and report potentially fake products for a safer online shopping experience.
      </p>
      <div className="auth-buttons">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
        <ProductCatalog />
      </div>
    </div>
  );
}

export default Homepage;
