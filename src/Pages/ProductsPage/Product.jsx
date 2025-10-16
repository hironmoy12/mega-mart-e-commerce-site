import React from "react";
import "./Product.css";
function Product() {
  return (
    <div className="product-page">
      <div className="product-page-top">
        <div className="product-left-text">
          <p>
            Grab the best deal on <span>Smartphones</span>
          </p>
        </div>
        <div className="product-right-text">
          <a href="#">View All  </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
