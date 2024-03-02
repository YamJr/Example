import React from "react";
import { useState } from "react";
import "./Accesories.css";
import Card from "../Pages/Card";
import airForceEasyonShoes from "../../Images/airForceEasyonShoes.png";
import sbZoomJanoskiOgSkateShoes from "../../Images/sbZoomJanoskiOgSkateShoes.png";
import jumpmanMvpShoes from "../../Images/jumpmanMvpShoes.png";
import airMaxPlusDrifrShoes from "../../Images/airMaxPlusDrifrShoes.png";
import airMaxPlusShoes from "../../Images/airMaxPlusShoes.png";
import pegasusShoes from "../../Images/pegasusShoes.png";

function Accesories() {
  const newArrival = [
    {
      image: airForceEasyonShoes,
      title: "air-force-easyon-shoes",
      description: "Women's shoes",
      price: 120,
    },
    {
      image: airMaxPlusDrifrShoes,
      title: "air-max-plus-drifr-shoes",
      description: "Men's shoes",
      price: 210,
    },
    {
      image: airMaxPlusShoes,
      title: "air-max-plus-shoes",
      description: "Men's shoes",
      price: 240,
    },
    {
      image: pegasusShoes,
      title: "Pegasus-shoes",
      description: "Men's shoes",
      price: 110,
    },
    {
      image: jumpmanMvpShoes,
      title: "jumpman-mvp-shoes",
      description: "Men's shoes",
      price: 270,
    },
    {
      image: sbZoomJanoskiOgSkateShoes,
      title: "sb-zoom-janoski-og-skate-shoes",
      description: "Men's shoes",
      price: 90,
    },
  ];

  const [seeMore, setSeeMore] = useState(false);
  const displayedItems = seeMore ? newArrival : newArrival.slice(0, 3);

  const toggleSeeMore = () => {
    setSeeMore(!seeMore);
  };
  return (
    <div className="section">
      <h2 className="info">New Arrivals</h2>
      <div className="card-container">
        {displayedItems.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            price={card.price}
          />
        ))}
      </div>
      {seeMore && (
        <button className="see_more" onClick={toggleSeeMore}>
          See Less
        </button>
      )}
      {!seeMore && (
        <button className="see_more" onClick={toggleSeeMore}>
          {seeMore ? "see less" : "see more"}
        </button>
      )}
    </div>
  );
}
export default Accesories;
