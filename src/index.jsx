import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Projects from './pages/Projects'
import CV from './pages/CV'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Login from './pages/Login'
import Footer from './components/Footer'
import './utils/styles/index.scss'
import Background from './components/Background'
import { BackgroundProvider } from './utils/context'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <BackgroundProvider>
        <Header />
        <Background 
          longueurX={150}
          longueurY_headerMax={400}
          longueurY_headerMin={50}
          longueurY_main={2000}
        />
        <Routes>
          <Route path="/Projet8_Portfolio/" element={<Home />} />
          <Route path="/Projet8_Portfolio/projects" element={<Projects />} />
          <Route path="/Projet8_Portfolio/cv" element={<CV />} />
          <Route path="/Projet8_Portfolio/contact" element={<Contact />} />
          <Route path="/Projet8_Portfolio/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BackgroundProvider>
    </Router>
  </React.StrictMode>,
)
