import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/icons/MegaMart-logo.png";
import MenuIcon from "../../assets/icons/menu-icon.png";
import SearchIcon from "../../assets/icons/Search-icon.png";
import CatagoriesIcon from "../../assets/icons/catagories-icon.png";
import Buy from "../../assets/icons/Buy.png";
import User from "../../assets/icons/user.png";
import arrow from "../../assets/icons/select-arrow.png";
import AuthModal from "../../component/Modal/AuthModal";

function Header() {
  const [showModal, setShowModal] = useState(false);

  const customeObject = [
    { id: 1, name: "Rice", type: "Grocery" },
    { id: 2, name: "Oil", type: "Grocery" },
    { id: 3, name: "Apple", type: "Premium Fruits" },
    { id: 4, name: "Mango", type: "Premium Fruits" },
    { id: 5, name: "Mixer Grinder", type: "Home & Kitchen" },
    { id: 6, name: "Cookware Set", type: "Home & Kitchen" },
    { id: 7, name: "T-Shirt", type: "Fashion" },
    { id: 8, name: "Jeans", type: "Fashion" },
    { id: 9, name: "Laptop", type: "Electronics" },
    { id: 10, name: "Smartwatch", type: "Electronics" },
    { id: 11, name: "Lipstick", type: "Beauty" },
    { id: 12, name: "Perfume", type: "Beauty" },
    { id: 13, name: "Wrench Set", type: "Home Improvement" },
    { id: 14, name: "Screwdriver Kit", type: "Home Improvement" },
    { id: 15, name: "Cricket Bat", type: "Sports, Toys & Luggage" },
    { id: 16, name: "Football", type: "Sports, Toys & Luggage" },
  ];

  const categoryOrder = [
    "Grocery",
    "Premium Fruits",
    "Home & Kitchen",
    "Fashion",
    "Electronics",
    "Beauty",
    "Home Improvement",
    "Sports, Toys & Luggage",
  ];

  const uniqueCategories = customeObject.filter(
    (item, index, arr) => index === arr.findIndex((t) => t.type === item.type)
  );

  uniqueCategories.sort(
    (a, b) => categoryOrder.indexOf(a.type) - categoryOrder.indexOf(b.type)
  );

  return (
    <>
      <header className="header">
        <div className="container header-container">
          {/* Left Section */}
          <div className="logo">
            <img src={MenuIcon} alt="menu-icon" />
            <img src={logo} alt="logo" />
          </div>

          {/* Search Bar */}
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
           <div className="icon" onClick={() => setShowModal(true)}>
  <img src={User} alt="user" />
  <span onClick={() => setShowModal(true)}>Sign Up/Sign In</span>
</div>

            <div className="icon">
              <img src={Buy} alt="buy" />
              <span>Cart</span>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="nav-menu">
          {uniqueCategories.map((category) => (
            <div className="nav-item" key={category.type}>
              <span>{category.type}</span>
              <span className="arrow">
                <img src={arrow} alt="arrow" />
              </span>
              <ul className="dropdown">
                {customeObject
                  .filter((item) => item.type === category.type)
                  .map((item) => (
                    <li key={item.id}>{item.name}</li>
                  ))}
              </ul>
            </div>
          ))}
        </nav>
      </header>

      {/* Modal */}
      <AuthModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

export default Header;
