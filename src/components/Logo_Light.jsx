import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo_Light.svg'
import './Logo.css';

const Logo = () => {
    return (
        <Link to="/">
            <div className="logoL">
                <h1> <img src={logo} width={50} height={50} alt="" />
                    MedVita</h1>
            </div>
        </Link>
    )
}

export default Logo