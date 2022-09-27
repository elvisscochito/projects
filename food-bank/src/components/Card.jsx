import React from "react";
import '../styles/Card.css';

const Card = ({ image, title/* , description */ }) => {
    return (
        <div className="Card">

            <header className="Card-header">
                <img src={image} alt={title}/>
            </header>

            {/* <div className="card-body">
                <p>{description}</p>
            </div> */}

            <footer className="Card-footer">
                <h3>{title}</h3>
            </footer>
        </div>
    );
}

export default Card;
