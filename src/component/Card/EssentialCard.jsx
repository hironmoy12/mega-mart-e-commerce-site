import React from 'react'
import { essentials } from '../../assets/Data/essentials';
import "./Card.css";
function EssentialCard() {
  return (
    <>
      <div className="product-card">
            {essentials[0].map((item, index) => (
              <div className="phone-card ess" key={index}>
                <div className="phone-image ess">
                  <img src={item.image} alt={item.title} />
                </div>
                <h3 className="phone-title ess">{item.name}</h3>
               <span className="discount-text">{item.discount}</span>
             
              </div>
            ))}
          </div>
    </>
  )
}

export default EssentialCard
