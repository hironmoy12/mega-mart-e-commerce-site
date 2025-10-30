import React from 'react'
import "./Essentials.css";
import EssentialCard from '../../Card/EssentialCard';
function EssentialsSection() {
  return (
    <>
       <div className="product-page">
      <div className="product-page-top">
        <div className="product-left-text">
          <p>
           Daily <span> Essentials</span>
          </p>
        </div>
         <div className="product-right-text">
          <a href="#">View All  </a>
        </div> 
      </div>
    </div>
    <EssentialCard/>
    </>
  )
}

export default EssentialsSection
