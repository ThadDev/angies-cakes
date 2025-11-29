import { useState } from 'react'
import './css/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import NotFound from './pages/NotFound'
import HomePage from './pages/Home'
import CartPage from './pages/Cart'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetails'
import Footer from './components/Footer'
import CathegoryFilter from './components/BrowseCathegory'
import { useToast } from "./context/ToastContext";
import Toast from "./components/Toast";
import ScrollToTop from './components/ScrollToTop'



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
      <Routes>
        <Route path={"/"} element={<HomePage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product-details/:id' element={<ProductDetail/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <CathegoryFilter/>
      <Footer/>
      </>
     </Router>
    
  )
}

export default App
