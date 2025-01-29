import './App.css'
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import LoginRegister from "./pages/LoginRegister";
import Cardiology from './pages/Departments/Cardiology';
import Neurology from './pages/Departments/Neurology';
import Orthopedic from './pages/Departments/Orthopedic';
import ENT from './pages/Departments/ENT';
import Urology from './pages/Departments/Urology';
import Gastroenterology from './pages/Departments/Gastroenterology';
import Pulmonology from './pages/Departments/Pulmonology';
import Eye from './pages/Departments/Eye';
import Dermatology from './pages/Departments/Dermatology';
import Dental from './pages/Departments/Dental';

function App() {
  const {pathname} = useLocation();
  const navHidePath = ["/login"];
  const hideNavBar = navHidePath.includes(pathname);
  return (
    <>
      {!hideNavBar && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/department/cardiology" element={<Cardiology />} />
        <Route path="/department/neurology" element={<Neurology />} />
        <Route path="/department/orthopedic" element={<Orthopedic />} />
        <Route path="/department/ent" element={<ENT />} />
        <Route path="/department/urology" element={<Urology />} />
        <Route path="/department/gastroenterology" element={<Gastroenterology />} />
        <Route path="/department/pulmonology" element={<Pulmonology />} />
        <Route path="/department/ophthalmology" element={<Eye />} />
        <Route path="/department/dermatology" element={<Dermatology />} />
        <Route path="/department/odontology" element={<Dental />} />
      </Routes>
      {!hideNavBar && <Footer />}
    </>
  )
}

export default App
