// Login.js

import React, { useState } from 'react';
import { Link} from 'react-router-dom'; // Assuming you're using React Router for navigation
import './login.css';
import { useNavigate } from 'react-router-dom';
// import userDashboard from '../userDashboard/userDashboard.js';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  // const [error,setError]=useState('');
  
  const navigate=useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here, e.g., make an API call to authenticate the user
    // console.log('Logging in with:', formData);
    const storedUserData=JSON.parse(localStorage.getItem('userData'));
    // console.log(storedUserData);
    if(storedUserData && storedUserData.email===formData.email && storedUserData.password===formData.password)
    {
        // console.log("kjhg");
        navigate('/userDashboard');
    }
    else
    {
      // setError('Invalid data');
      // navigate('/');
      // console.log("kjb");
      setFormData({
        email: '',
        password: '',
      });
    }
    // Reset form after submission
    
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
