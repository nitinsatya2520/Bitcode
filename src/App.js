import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Design from './pages/Design';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Header from './components/Header';
import Bar from './components/bar';
import Footer from './components/Footer';
import './App.css';
import TimeModule from './components/TimeModule';
import WeatherModule from './components/WeatherModule';
import New from './components/New';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Bar/>
      <New/>
      <Footer />
      <TimeModule />
            <WeatherModule apiKey="03f7fb2a6ffa9af4e20414dc73edb7a3" city="Delhi" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/Design" element={<Design />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
