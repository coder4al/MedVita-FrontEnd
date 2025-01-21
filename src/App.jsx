import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/About'
import Contact from './components/Contact'
import Department from './components/Department'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import LoginRegister from "./components/LoginRegister";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-register" element={<LoginRegister />} />
      </Routes>
      <Department />
      <About />
      <Contact />
      <Footer />
    </Router>
  )
}

export default App
