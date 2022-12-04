import React from 'react'
import './App.css'
import { BrowserRouter as Router,
  Routes,
  Route,
  Link } from 'react-router-dom';
import Home from '../src/Pages/Home'
import Products from '../src/Pages/Products'
import Blog from '../src/Pages/Blog'
function App() {
  return (
    <Router>
      <nav style = {{display:'flex', flexDirection:'column'}}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  )
}
export default App