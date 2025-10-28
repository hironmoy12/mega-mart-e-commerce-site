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

  // const customeObject = [
  //   { id: 1, name: "Rice", type: "Grocery" },
  //   { id: 2, name: "Oil", type: "Grocery" },
  //   { id: 3, name: "Apple", type: "Premium Fruits" },
  //   { id: 4, name: "Mango", type: "Premium Fruits" },
  //   { id: 5, name: "Mixer Grinder", type: "Home & Kitchen" },
  //   { id: 6, name: "Cookware Set", type: "Home & Kitchen" },
  //   { id: 7, name: "T-Shirt", type: "Fashion" },
  //   { id: 8, name: "Jeans", type: "Fashion" },
  //   { id: 9, name: "Laptop", type: "Electronics" },
  //   { id: 10, name: "Smartwatch", type: "Electronics" },
  //   { id: 11, name: "Lipstick", type: "Beauty" },
  //   { id: 12, name: "Perfume", type: "Beauty" },
  //   { id: 13, name: "Wrench Set", type: "Home Improvement" },
  //   { id: 14, name: "Screwdriver Kit", type: "Home Improvement" },
  //   { id: 15, name: "Cricket Bat", type: "Sports, Toys & Luggage" },
  //   { id: 16, name: "Football", type: "Sports, Toys & Luggage" },
  // ];
  //   const data = [
  //   "Grocery",
  //   "Premium Fruits",
  //   "Home & Kitchen",
  //   "Fashion",
  //   "Electronics",
  //   "Beauty",
  //   "Home Improvement",
  //   "Sports, Toys & Luggage",
  // ];

  const categoryOrder = [
    {
        id:1,
        name:"Grocery",
        listData:[
          {
            id:1,
            name:"Rice",
            path:'/rice'
          },
           {
            id:2,
            name:"Oil"
          },
        ]
    },
        {
        id:2,
        name:"Premium Fruits",
        listData:[
          {
            id:1,
            name:"Apple"
          },
           {
            id:2,
            name:"Mango"
          },
        ]
    },

    {
      id: 3,
      name: "Home & Kitchen",
      listData: [
        {
          id: 1,
          name: "Mixer Grinder",
        },
        {
          id: 2,
          name: "Cookware Set",
        },
      ],
    },
    {
      id: 4,
      name: "Fashion",
      listData: [
        {
          id: 1,
          name: "T-Shirt",
        },
        {
          id: 2,
          name: "Jeans",
        },
      ],            
    },

    {
      id: 5,
      name: "Electronics",
      listData: [
        {
          id: 1,
          name: "Laptop",
        },
        {
          id: 2,
          name: "Smartwatch",
        },
      ],
    },
    {
      id: 6,
      name: "Beauty",
      listData: [
        {
          id: 1,
          name: "Lipstick",
        },
        {
          id: 2,
          name: "Perfume",
        },
      ],
    },
    {
      id: 7,
      name: "Home Improvement",
      listData: [
        {
          id: 1,
          name: "Wrench Set",
        },
        {
          id: 2,
          name: "Screwdriver Kit",
        },
      ],
    },
    {
      id: 8,
      name: "Sports, Toys & Luggage",
      listData: [
        {   
          id: 1,
          name: "Cricket Bat",    
        },
        {
          id: 2,
          name: "Football", 
        }  

  ]
}
  ]

  

  const uniqueCategories = categoryOrder.filter(
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
          {categoryOrder.map((category) => (
            <div className="nav-item" key={category.id}>
              <span>{category.name}</span>
              <span className="arrow">
                <img src={arrow} alt="arrow" />
              </span>
              <ul className="dropdown">
                {/* {listData
                  // .filter((item) => item.type === category.type)
                  .map((item) => (
                    <li key={item.id}>{item.name}</li>
                  ))} */}



                  {category.listData.map((item) => (
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
