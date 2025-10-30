import React from 'react'
import CategoryCard from '../../Card/CategoryCard'

function CategoriesSection() {
  return (
    <div>
         <div className="product-page">
      <div className="product-page-top">
        <div className="product-left-text">
          <p>
          Shop from <span>Top Categories</span>
          </p>
        </div>
         <div className="product-right-text">
          <a href="#">View All  </a>
        </div> 
      </div>
    </div>
      <CategoryCard />
    </div>
  )
}

export default CategoriesSection
