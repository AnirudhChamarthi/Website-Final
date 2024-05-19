import './App.css';
import Home from './components/Home';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Contact from './components/Contact.js';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route exact path = "/" element = {<Home/>}/>
      <Route exact path = "/Contact.js" element = {<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;

