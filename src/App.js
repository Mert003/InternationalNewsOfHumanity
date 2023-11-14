import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home.js';
import Newsnav from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import BusinessNewsPage from "./Pages/BusinessPage/BusinessNewsPage";
import HealthNewsPage from "./Pages/HealthPage/HealthNewsPage";
import GeneralNewsPage from "./Pages/GeneralPage/GeneralNewsPage";
import SportNewsPage from "./Pages/SportPage/SportNewsPage";


export default function App() {
  return (
    <div className="App">

    <Newsnav />

   <Routes>
    
    <Route path="/" element={<Home />} />
    <Route path='/Business' element={<BusinessNewsPage />} />
    <Route path='/Health' element={<HealthNewsPage />} />
    <Route path='/General' element={<GeneralNewsPage />} />
    <Route path='/Sport' element={<SportNewsPage />} />
    
   </Routes>

   <Footer />
   
    </div>
  );
}

