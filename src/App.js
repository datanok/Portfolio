import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/About/Skills';
import Footer from './Components/Footer/Footer';
import Testimonials from './Components/Testimonials/Testimonials';
import HireMe from './Components/CTA/HireMe';
import Projects from './Components/Projects/Projects';
import GithubBox from './Components/Github/GithubBox'
import Contact from './Components/CTA/Contact';
import './style.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About/>
      <Skills/>
      <GithubBox/>
      <Projects/>
      <Contact/>
      <Testimonials/>
      <HireMe/>
      <Footer/>
    </div>
  );
}

export default App;
