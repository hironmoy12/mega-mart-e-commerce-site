import React from "react";
import "./Card.css";
import { smartphones } from "../../assets/Data/smartphones";

function SmartPhoneCard() {
  return (
    <div className="product-card">
      {smartphones.map((item, index) => (
        <div className="phone-card" key={index}>
          <div className="phone-image">
            <img src={item.image} alt={item.title} />
          </div>
          <h3 className="phone-title">{item.title}</h3>
          <p className="phone-price">{item.price}</p>
          <p className="phone-discount">{item.discount}</p>
          <p className="phone-save-price">{item.save}</p>
        </div>
      ))}
    </div>
  );
}

export default SmartPhoneCard;
