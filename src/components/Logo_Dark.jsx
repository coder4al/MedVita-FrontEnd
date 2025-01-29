import React from 'react'
import { Link } from 'react-router-dom'
import logoD from '../assets/Logo_Dark.svg'
import './Logo.css';

const Logo = () => {
    return (
        <Link to="/">
            <div className="logoD">
                <h1> <img src={logoD} width={50} height={50} alt="" />
                    MedVita</h1>
            </div>
        </Link>
    )
}

export default Logo