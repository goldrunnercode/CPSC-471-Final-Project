import React from 'react'
import './App.css'
import { BrowserRouter as Router,
  Routes,
  Route,
  Link } from 'react-router-dom';
import Home from '../src/Pages/Home'
import Products from '../src/Pages/Products'
import Orders from './Pages/Orders'
import Signup from './Pages/Signup'
function App() {
  return (
    <Router>
      <nav style = {{display:'flex', flexDirection:'column'}}>
        <Link to="/home">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/signup">Signup</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}
export default App