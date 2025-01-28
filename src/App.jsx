import './App.css'
import {Route, Routes } from "react-router-dom";
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import LoginRegister from "./pages/LoginRegister";
import Cardiology from './pages/Cardiology';
import Neurology from './pages/Neurology';
import Orthopedic from './pages/Orthopedic';
import ENT from './pages/ENT';
import Urology from './pages/Urology';
import Gastroenterology from './pages/Gastroenterology';
import Pulmotology from './pages/Pulmotology';
import Eye from './pages/Eye';
import Dermatology from './pages/Dermatology';
import Dental from './pages/Dental';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/cardiology" element={<Cardiology />} />
        <Route path="/neurology" element={<Neurology />} />
        <Route path="/Orthopedic" element={<Orthopedic />} />
        <Route path="/ENT" element={<ENT />} />
        <Route path="/Urology" element={<Urology />} />
        <Route path="/Gastroenterology" element={<Gastroenterology />} />
        <Route path="/Pulmotology" element={<Pulmotology />} />
        <Route path="/Eye" element={<Eye />} />
        <Route path="/Dermatology" element={<Dermatology />} />
        <Route path="/Dental" element={<Dental />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
