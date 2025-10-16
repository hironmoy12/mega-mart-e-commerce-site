import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/icons/MegaMart-logo.png";
import MenuIcon from "../../assets/icons/menu-icon.png";
import SearchIcon from "../../assets/icons/Search-icon.png";
import CatagoriesIcon from "../../assets/icons/catagories-icon.png";
import Buy from "../../assets/icons/Buy.png";
import User from "../../assets/icons/User.png";
function Header() {

const [active, setActive] = useState("Groceries");

 const categories = [
    "Groceries",
    "Premium Fruits",
    "Home & Kitchen",
    "Fashion",
    "Electronics",
    "Beauty",
    "Home Improvement",
    "Sports",
    "Toys & Luggage",
  ];



  return (
    <header className="header">
      <div className="container header-container">
   
        <div className="logo">
          <img src={MenuIcon} alt="menu-icon" />
          <img src={logo} alt="logo" />
        </div>

   
        <div className="search-bar">
          <img src={SearchIcon} alt="search-icon" />
          <input
            type="text"
            placeholder="Search essentials, groceries and more..."
          />
          <img src={CatagoriesIcon} alt="cat-icon" />
         
        </div>

        {/* Right Icons */}
        <div className="header-icons">
          <div className="icon">
           <img src={User} alt="user" />
            <span>Sign Up/Sign In</span>
          </div>
          <div className="icon">
            <img src={Buy} alt="buy" />
            <span>Cart</span>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
     <nav className="nav-menu">
        {categories.map((categories, index) =>{
            return(
                 <select
          key={index}
          name={categories}
          onFocus={() => setActive(categories)}
          className={active === categories ? "active" : ""}
        >
          <option value="">{categories}</option>
        </select>
            )
        })}
</nav>

    </header>
  );
}

export default Header;
