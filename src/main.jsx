import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Catalogue from './pages/Catalogue.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes >
        <Route exact path='/' element={<App />} />
        <Route path='/catalogue' element={<Catalogue />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
