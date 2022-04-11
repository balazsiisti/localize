import React from 'react'
import Header from './components/Header';
import App from './App';
import About from './components/About';
import {
  BrowserRouter, Routes, Route, Link
} from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Link to="/">
        <Header />
      </Link>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about/*" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;