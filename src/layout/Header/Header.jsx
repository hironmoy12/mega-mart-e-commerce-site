import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/icons/MegaMart-logo.png";
import MenuIcon from "../../assets/icons/menu-icon.png";
import SearchIcon from "../../assets/icons/Search-icon.png";
import CatagoriesIcon from "../../assets/icons/catagories-icon.png";
import Buy from "../../assets/icons/Buy.png";
import User from "../../assets/icons/user.png";
function Header() {


  const customeObject = [
  { id: 1, name: "Cake", type: "Premium Fruits" },
  { id: 2, name: "Apple", type: "Premium Fruits" },
  { id: 3, name: "Laptop", type: "Electronics" },
  { id: 4, name: "Teddy Bear", type: "Toys & Luggage" },
  { id: 5, name: "Lipstick", type: "Beauty" },
  { id: 6, name: "Shampoo", type: "Grocery" },
  { id: 7, name: "Orange", type: "Premium Fruits" },
  { id: 8, name: "Smartphone", type: "Electronics" },
  { id: 9, name: "Doll", type: "Toys & Luggage" },
  { id: 10, name: "Face Cream", type: "Beauty" },
  { id: 11, name: "Toothpaste", type: "Grocery" },
  { id: 12, name: "Banana", type: "Premium Fruits" },
  { id: 13, name: "Tablet", type: "Electronics" },
  { id: 14, name: "Remote Car", type: "Toys & Luggage" },
  { id: 15, name: "Nail Polish", type: "Beauty" },
  { id: 16, name: "Rice", type: "Grocery" },
  { id: 17, name: "Mango", type: "Premium Fruits" },
  { id: 18, name: "Smartwatch", type: "Electronics" },
  { id: 19, name: "Board Game", type: "Toys & Luggage" },
  { id: 20, name: "Perfume", type: "Beauty" },
  { id: 21, name: "Milk", type: "Grocery" },
  { id: 22, name: "Grapes", type: "Premium Fruits" },
  { id: 23, name: "Monitor", type: "Electronics" },
  { id: 24, name: "Puzzle", type: "Toys & Luggage" },
  { id: 25, name: "Compact Powder", type: "Beauty" },
  { id: 26, name: "Salt", type: "Grocery" },
  { id: 27, name: "Pineapple", type: "Premium Fruits" },
  { id: 28, name: "Headphones", type: "Electronics" },
  { id: 29, name: "Lego Set", type: "Toys & Luggage" },
  { id: 30, name: "Makeup Brush", type: "Beauty" },
  { id: 31, name: "Sugar", type: "Grocery" },
  { id: 32, name: "Watermelon", type: "Premium Fruits" },
  { id: 33, name: "Camera", type: "Electronics" },
  { id: 34, name: "Action Figure", type: "Toys & Luggage" },
  { id: 35, name: "Eyeliner", type: "Beauty" },
  { id: 36, name: "Tea", type: "Grocery" },
  { id: 37, name: "Kiwi", type: "Premium Fruits" },
  { id: 38, name: "Keyboard", type: "Electronics" },
  { id: 39, name: "Train Set", type: "Toys & Luggage" },
  { id: 40, name: "Foundation", type: "Beauty" },
  { id: 41, name: "Coffee", type: "Grocery" },
  { id: 42, name: "Papaya", type: "Premium Fruits" },
  { id: 43, name: "Mouse", type: "Electronics" },
  { id: 44, name: "Stuffed Animal", type: "Toys & Luggage" },
  { id: 45, name: "Body Lotion", type: "Beauty" },
  { id: 46, name: "Oil", type: "Grocery" },
  { id: 47, name: "Avocado", type: "Premium Fruits" },
  { id: 48, name: "Charger", type: "Electronics" },
  { id: 49, name: "Rubik's Cube", type: "Toys & Luggage" },
  { id: 50, name: "Mascara", type: "Beauty" },
  { id: 51, name: "Flour", type: "Grocery" },
  { id: 52, name: "Lychee", type: "Premium Fruits" },
  { id: 53, name: "Speaker", type: "Electronics" },
  { id: 54, name: "Yo-Yo", type: "Toys & Luggage" },
  { id: 55, name: "Hair Serum", type: "Beauty" },
  { id: 56, name: "Detergent", type: "Grocery" },
  { id: 57, name: "Strawberry", type: "Premium Fruits" },
  { id: 58, name: "Television", type: "Electronics" },
  { id: 59, name: "Play-Doh", type: "Toys & Luggage" },
  { id: 60, name: "Concealer", type: "Beauty" },
  { id: 61, name: "Dish Soap", type: "Grocery" },
  { id: 62, name: "Blueberry", type: "Premium Fruits" },
  { id: 63, name: "Printer", type: "Electronics" },
  { id: 64, name: "Toy Drum", type: "Toys & Luggage" },
  { id: 65, name: "Face Mask", type: "Beauty" },
  { id: 66, name: "Bread", type: "Grocery" },
  { id: 67, name: "Raspberry", type: "Premium Fruits" },
  { id: 68, name: "Drone", type: "Electronics" },
  { id: 69, name: "Toy Helicopter", type: "Toys & Luggage" },
  { id: 70, name: "Blush", type: "Beauty" },
  { id: 71, name: "Butter", type: "Grocery" },
  { id: 72, name: "Cherry", type: "Premium Fruits" },
  { id: 73, name: "VR Headset", type: "Electronics" },
  { id: 74, name: "Toy Blocks", type: "Toys & Luggage" },
  { id: 75, name: "Hair Gel", type: "Beauty" },
  { id: 76, name: "Cereal", type: "Grocery" },
  { id: 77, name: "Pear", type: "Premium Fruits" },
  { id: 78, name: "Bluetooth Speaker", type: "Electronics" },
  { id: 79, name: "Toy Gun", type: "Toys & Luggage" },  { id: 88, name: "Game Console", type: "Electronics" },

  { id: 80, name: "Lip Balm", type: "Beauty" },
  { id: 81, name: "Pasta", type: "Grocery" },
  { id: 82, name: "Plum", type: "Premium Fruits" },
  { id: 83, name: "Webcam", type: "Electronics" },
  { id: 84, name: "Kite", type: "Toys & Luggage" },
  { id: 85, name: "Face Wash", type: "Beauty" },
  { id: 86, name: "Honey", type: "Grocery" },
  { id: 87, name: "Peach", type: "Premium Fruits" },
  { id: 88, name: "Game Console", type: "Electronics" },
  { id: 89, name: "Skateboard", type: "Toys & Luggage" },
  { id: 90, name: "Hair Oil", type: "Beauty" },
  { id: 91, name: "Jam", type: "Grocery" },
  { id: 92, name: "Fig", type: "Premium Fruits" },
  { id: 93, name: "Power Bank", type: "Electronics" },
  { id: 94, name: "Toy Train", type: "Toys & Luggage" },
  { id: 95, name: "Toner", type: "Beauty" },
  { id: 96, name: "Noodles", type: "Grocery" },
  { id: 97, name: "Blackberry", type: "Premium Fruits" },
  { id: 98, name: "Graphics Card", type: "Electronics" },
  { id: 99, name: "Jigsaw Puzzle", type: "Toys & Luggage" },
  { id: 100, name: "Compact Mirror", type: "Beauty" }
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
  { 
   
    customeObject
      .filter((item, index) =>
        index === item.findIndex(t => t.type === item.type)
      )
     
      .map((category) => (
        <select key={category.type}>
          { 
         
            customeObject
              .filter(item => item.type === category.type)
          
              .map(item => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))
          }
        </select>
      ))
  }
</nav>


    </header>
  );
}

export default Header;
