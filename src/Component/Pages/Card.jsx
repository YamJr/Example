import React from "react";
import "./Pages.css";
const Card = ({ image, title, description, price }) => {
  return (
    <div className="card">
      <img src={image} alt="shoes" />
      <h4>{title}</h4>
      <p>{description}</p>
      <h5>${price}</h5>
    </div>
  );
};

export default Card;
