import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
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
import Layout from './components/Layout';
import Dashboard from './pages/Admin/AdminDashboard';
import AdminUsers from './pages/Admin/AdminUsers';
import AdminProducts from './pages/Admin/AdminProducts';
import AdminCoupons from "./pages/Admin/AdminCoupons"
import AdminOrders from "./pages/Admin/AdminOrders"
import AdminReviews from "./pages/Admin/AdminReviews"
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home / Hero Page */}
        <Route path="/" element={<Hero />} />

        {/* Auth Pages */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* User Products Page*/}
        <Route path="/products" element={<UserAllProducts />} />
        <Route path="/products/:pid" element={<SingleProduct />} />
        {/* Cart Route */}
        <Route path='/cart' element={<ViewCart />} />
        {/* Order */}
        <Route path='/order' element={<PlaceOrder />} />
        {/* Admin */}
        <Route path='/admin' element={<Dashboard />} />
        <Route path='/admin/dashboard' element={<Dashboard />} />

        <Route path='/admin/users' element={<AdminUsers />} />
        <Route path='/admin/products' element={<AdminProducts />} />
        <Route path='/admin/orders' element={<AdminOrders />} />
        <Route path='/admin/reviews' element={<AdminReviews />} />
        <Route path='/admin/coupons' element={<AdminCoupons />} />

        

      </Routes>

      <ToastContainer />
      <Layout />
      <Footer />
    </Router>
  );
};

export default App;
