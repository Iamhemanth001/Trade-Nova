import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Homepage from './landing_page/home/HomePage.jsx';
import Signup from './landing_page/signup/Signup.jsx';
import AboutPage from './landing_page/about/AboutPage.jsx';
import ProductsPage from './landing_page/products/ProductsPage.jsx';
import PricingPage from './landing_page/pricing/PricingPage.jsx';
import SupportPage from './landing_page/support/SupportPage.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import NotFound from './landing_page/NotFound.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientid = import.meta.env.VITE_CLIENT_ID;

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <GoogleOAuthProvider clientId={clientid}>
      <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/product' element={<ProductsPage />} />
          <Route path='/pricing' element={<PricingPage />} />
          <Route path='/support' element={<SupportPage />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    </GoogleOAuthProvider>  
    <Footer />
  </BrowserRouter>
);
