import './App.css';
import Home from './components/Home';
import Footer from './components/Footer.js';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Contact from './components/Contact.js';
function App() {
  return (
    <>
    <div className = "main">
    <Navbar/>
    <Routes>
    <Route exact path = "/" element = {<Home/>}/>
      <Route exact path = "/Contact.js" element = {<Contact/>}/>
    </Routes>
    <Footer/>
    </div>
    </>
  );
}

export default App;

