import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages / Components
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import Coupons from './pages/Coupons';
import Orders from './pages/Order';
import AdminProducts from './pages/AdminProducts';
import Reviews from './pages/Reviews';
import Users from './pages/Users';

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
      </Routes>
      <AdminDashboard />
      <AdminProducts />
      <Reviews />
      <Users/>
      <Orders/>
      <Coupons/>
      <Footer />
    </Router>
  );
};

export default App;
