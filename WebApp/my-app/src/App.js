import React from 'react'
import './App.css'
import Header from '../src/Components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from '../src/Pages/Home'
import Products from '../src/Pages/Products'
import Blog from '../src/Pages/Blog'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  )
}
export default App