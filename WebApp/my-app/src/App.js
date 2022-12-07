import React from 'react'
import './App.css'
import { BrowserRouter as Router,
  Routes,
  Route,
  Link } from 'react-router-dom';
import Home from '../src/Pages/Home'
import StaffOnly from '../src/Pages/StaffOnly'
import Orders from './Pages/Orders'
import Signup from './Pages/Signup'
function App() {
  return (
    <Router>
      <nav style = {{display:'flex', flexDirection:'column'}}>
        <Link to="/">Home</Link>
        <Link to="/staffonly">Staff Only</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/signup">Signup</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/staffonly" element={<StaffOnly />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}
export default App