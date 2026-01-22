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
import Dashboard from './pages/Admin/AdminDashboard';
import AdminUsers from './pages/Admin/AdminUsers';
import AdminProducts from './pages/Admin/AdminProducts';
import AdminProductPage from './pages/Admin/AdminProductPage';
import AdminCoupons from "./pages/Admin/AdminCoupons"
import AdminOrders from "./pages/Admin/AdminOrders"
import AdminReviews from "./pages/Admin/AdminReviews"
import PrivateAdminComponent from './components/PrivateAdminComponent';
import Profile from './pages/Profile';
import PageNotFound from './pages/PageNotFound';
import About from './pages/About';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<PageNotFound/>} />
        {/* Home / Hero Page */}
        <Route path="/" element={<Hero />} />

        {/* Auth Pages */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* User Products Page*/}
        <Route path="/products" element={<UserAllProducts />} />
        <Route path="/products/:pid" element={<SingleProduct />} />
        <Route path="/about" element={<About />} />
        <Route path='/profile' element={<Profile/>} />
        {/* Cart Route */}
        <Route path='/cart' element={<ViewCart />} />
        {/* Order */}
        <Route path='/order' element={<PlaceOrder />} />
        {/* Admin */}
        {/* <Route path='/admin/dashboard' element={<Dashboard />} /> */}
        <Route path='/admin' element={<PrivateAdminComponent />}>
          <Route index element={<Dashboard />} />
          <Route path='dashboard' element={<Dashboard />}/>
          <Route path='users' element={<AdminUsers />} />
          <Route path='products' element={<AdminProducts />} />
          <Route path='products/:pid' element={<AdminProductPage />} />
          <Route path='orders' element={<AdminOrders />} />
          <Route path='reviews' element={<AdminReviews />} />
          <Route path='coupons' element={<AdminCoupons />} />
          
        </Route>
        
      </Routes>

      <ToastContainer />
     
      <Footer />
    </Router>
  );
};

export default App;
