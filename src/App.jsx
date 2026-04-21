import './App.css'
import { Routes, Route } from 'react-router-dom'
import  Home  from './pages/Home'
import  Auth  from './pages/Auth'
import  Checkout  from './pages/Checkout'
import ProductDetails from './pages/ProductDetails'
import Navbar from './components/Navbar'
import  AuthProvider  from './context/AuthContext'
import CartProvider from './context/CartContext'

function App() {

  return (
    <div className="app">
      <AuthProvider>
        <CartProvider>
          <Navbar/>
          <Routes>
              <Route path = "/" element={ <Home />} />
              <Route path = "/auth" element = { <Auth />} />
              <Route path = "/checkout" element = { <Checkout />} />
              <Route path = "/products/:id" element = { <ProductDetails />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
      
    </div>
  )
}

export default App
