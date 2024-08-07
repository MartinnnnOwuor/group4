import React from 'react'
import './App.css'
import './index.css'
import Login from './component/Login'
import Navbar from './component/Navbar'
import Home from "./component/Home"
import CustomersList from './component/CustomerList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './component/About'
import ShoppingCart from './component/ShoppingCart'
import Dashboard from './component/dashboard'
import Contact from './component/Contact'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Home/>} />
      <Route path='/dashboard'element={<Dashboard/>}/>
      <Route path='/customers' element={<CustomersList/>}/>
      <Route path='/about' element={<About />} />
      <Route path='/shopping' element={<ShoppingCart/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App