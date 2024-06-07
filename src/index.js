import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Menu from './Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Searchbar from './Searchbar';
import Header from './header';
import About from './About';
import Service from './Service';
import Team from './Team';
import reportWebVitals from './reportWebVitals';
import Layout from './Layout';
import Project from './Project';
import Footer from './Footer';
import Contact from './Contact';
// import App from './Vision.module';
// import App from './society.module'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="menu" element={<Menu />} />
          <Route path="search" element={<Searchbar />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Service />} />
          <Route path="team" element={<Team />} />
          <Route path="project" element={<Project />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
