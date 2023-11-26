// FormComponent.js

import React, { useState,useEffect } from 'react';
import './form.css';
import {useLocation } from 'react-router-dom';
const Form = () => {
  
  const location=useLocation();
  console.log(location);
  const initialProductName = location?.state?.productName || '';
  const [formData, setFormData] = useState({
    productName: initialProductName,
    description: '',
    images: [],
    comments: '',
  });
  // console.log(location.state); 
  useEffect(() => {
    if (location?.state?.productName) {
      setFormData((prevData) => ({
        ...prevData,
        productName: location.state.productName,
      }));
    }
  }, [location]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      images: [...formData.images, file],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      productName: '',
      description: '',
      images: [],
      comments: '',
    });
  };

  return (
    
    <div className="main">
      <h2>Report Submission</h2>
      <div className="form-container">
      
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Product Name
            <input
              type="text"
              name="productName"
              id='productName'
              value={formData.productName}
              onChange={handleChange}
              required
            />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor='desc'>Description</label>
            <textarea
              name="description"
              id='desc'
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor='img'>Upload Images</label>
            <input type="file" id='img' onChange={handleFileChange} />
          </div>
          <div className="form-group">
            <label htmlFor='comments'>Comments</label>
            <textarea
              name="comments"
              id='comments'
              value={formData.comments}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
