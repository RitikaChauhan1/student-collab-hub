
import React from "react";
import LightRays from './components/LightRays';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Features />
      <About />
      <Contact />

    </div>
    
  );
}

export default App;



