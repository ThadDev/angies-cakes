// import './css/App.css'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import NavBar from './components/NavBar'
// import NotFound from './pages/NotFound'
// import HomePage from './pages/Home'
// import CartPage from './pages/Cart'
// import Products from './pages/Products'
// import ProductDetail from './pages/ProductDetails'
// import Footer from './components/Footer'
// import CathegoryFilter from './components/BrowseCathegory'
// import { useToast } from "./context/ToastContext";
// import Toast from "./components/Toast";
// import ScrollToTop from './components/ScrollToTop'
// import OrderPage from './pages/Checkout'
import "./css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import CathegoryFilter from "./components/BrowseCathegory";
import { useToast } from "./context/ToastContext";
import Toast from "./components/Toast";
import ScrollToTop from "./components/ScrollToTop";

// LAZY LOADED PAGES & COMPONENTS
const CartPage = React.lazy(() => import("./pages/Cart"));
const Products = React.lazy(() => import("./pages/Products"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetails"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const OrderPage = React.lazy(() => import("./pages/Checkout"));



function App() {
   const { toast } = useToast();

  return (
     <Router>
      <>
      <ScrollToTop/>
      <NavBar/>
      <div>
         {toast && <Toast message={toast.message} duration={toast.duration} />}
      </div>
      <Suspense fallback={<div className="text-center text-white p-10">Loading...</div>}>
        <Routes>
        <Route path={"/"} element={<HomePage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product-details/:id' element={<ProductDetail/>}/>
        <Route path='/checkout' element={<OrderPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </Suspense>
      
      <CathegoryFilter/>
      <Footer/>
      </>
     </Router>
    
  )
}

export default App
