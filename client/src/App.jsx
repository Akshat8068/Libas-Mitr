import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
// Pages / Components
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import UserAllProducts from './pages/UserAllProducts';
import SingleProduct from './pages/SingleProduct';
import ViewCart from './pages/ViewCart';
import PlaceOrder from './pages/PlaceOrder';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home / Hero Page */}
        <Route path="/" element={<Hero />}/>

        {/* Auth Pages */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* User Products Page*/}
        <Route path="/products" element={<UserAllProducts />} />
        <Route path="/products/:pid" element={<SingleProduct />} />
        {/* Cart Route */}
        <Route path='/cart' element={<ViewCart />} />
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    
      <ToastContainer />
      
      <Footer />
    </Router>
  );
};

export default App;
