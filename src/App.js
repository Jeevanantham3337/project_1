import React ,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import ProductCatalog from './components/productcatalog/productcatalog';
import UserDashboard from './components/userDashboard/userDashboard.js';
import Form from './components/form/form.js';
function App() {
 
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductCatalog />} />
        <Route path="/userDashBoard" element={<UserDashboard />} />
        <Route path="/form" element={<Form />} />
        {/* <Route path="/form" render={(props) => <Form {...props} />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
