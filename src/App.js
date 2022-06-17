import React from 'react';
import './App.css';
import {About, Footer, Header, Testimonials, Work, Skills} from './container'
import Navbar from './components/Navbar/Navbar';
import './App.scss'
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
