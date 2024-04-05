import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Importing your CSS file for styling
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import ResumePage from './ResumePage';
import ContactPage from './ContactPage';
import Calculator from './calculator';






import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<LayoutWithNav><HomePage /></LayoutWithNav>} />
        <Route path="/about" element={<LayoutWithNav><AboutPage /></LayoutWithNav>} />
        <Route path="/resume" element={<LayoutWithNav><ResumePage /></LayoutWithNav>} />
        <Route path="/projects" element={<LayoutWithNav><ProjectsPage /></LayoutWithNav>} />
        <Route path="/contacts" element={<LayoutWithNav><ContactPage /></LayoutWithNav>} />
        <Route path="/calculator" element={<LayoutWithNav><Calculator /></LayoutWithNav>} />
      </Routes>
    </Router>
    </div>
    <p>‎</p>
    <p>‎</p>
    <p>‎</p>
    <p>‎</p>
    <p>‎</p>
    <p>‎</p>
    <p>‎</p>
    <p>‎</p>
    <p>‎</p>
    <p>‎</p>
    <p>‎</p>
    <p>‎</p>
    <p>‎</p>
    <p>‎</p>
    <p>‎</p>
    <p>‎</p>
    <p>‎</p>
    <p>‎</p>
    <p>‎</p>
    <p>‎</p>
    <p>‎</p>
    <p>‎</p>
    </>
  )
}

function LayoutWithNav({ children }) {
  return (
    <div>
      <div >
        </div>
      <Navbar />
      {children} {/* This will be either <HomePage /> or <AboutPage />, depending on the route */}
    </div>
  );
}

function Navbar() {
  return (
    <div>
    <nav>
      <ul>
        <li>
        <Link to="/" style={{ color: location.pathname === '/' ? 'lightblue' : 'white' }}>
            Home
          </Link>
          </li>
          <li>
        <Link to="/about" style={{ color: location.pathname === '/about' ? 'lightblue' : 'white' }}>
            About
          </Link>
          </li>
        <li>
        <Link to="/resume" style={{ color: location.pathname === '/resume' ? 'lightblue' : 'white' }}>
            Resume
          </Link>
          </li>
        <li>
        <Link to="/projects" style={{ color: location.pathname === '/projects' ? 'lightblue' : 'white' }}>
            Projects
          </Link>
          </li>
          <li>
        <Link to="/contacts" style={{ color: location.pathname === '/contacts' ? 'lightblue' : 'white' }}>
            Contact
          </Link>
          </li>
      </ul>
    </nav>
    </div>
  );
}

export default App
