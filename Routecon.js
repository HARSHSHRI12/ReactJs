import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';

export default function Routecon() {
  return (
    <div>
      <BrowserRouter>
        <Link to="hm">Open Home</Link>
        <Link to="ab">Open About</Link>
        <Link to="cn">Open Contact</Link>
        <Routes>
          <Route path="hm" element={<Home />} />
          <Route path="ab" element={<About />} />
          <Route path="cn" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
