import React from 'react'
import { categories } from '../../assets/Data/categories';
import "./Card.css";
function CategoryCard() {
  return (
  <div className="product-card">
        {categories[0].map((Category, index) => (
          <div className="phone-card cat" key={index}>
            <div className="phone-image cat">
              <img src={Category.icon} alt={Category.name} />
            </div>
            <h3 className="phone-title">{Category.name}</h3>
            
        
          </div>
        ))}
      </div>
  )
}

export default CategoryCard
