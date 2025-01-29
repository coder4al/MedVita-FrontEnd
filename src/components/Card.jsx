import React from 'react'
import "./Card.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ image, title, description }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        const titleUrl = title
            .toLowerCase()
            .replace(/[\s#!?,.:;'"()&@$%*+=[\]{}/\\|]/g, "-");
        navigate(`/department/${titleUrl}`);
    }
    return (
        <div className="service-card" onClick={handleClick}>
            <img src={image} alt="Card" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};


export default Card