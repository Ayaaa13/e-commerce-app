import React, { useState } from "react";
import Foods from "./EatnrunFoods";
import ProductListsData from "../data/EatnrunListsData";

const Chicken = Foods.Chicken;
const Takoyaki = Foods.Takoyaki;
const Drinks = Foods.Drinks;
const Ramen = Foods.Ramen;

const Products = (props) => {
  const handleClick = () => {
    return props.onItemClick(props.index);
  };

  const transformStyle = props.isClicked
    ? { transform: "translateY(-10px)" }
    : {};

  return (
    <div className="product" style={transformStyle} onClick={handleClick}>
      <div className="product-image">
        <img src={props.img} alt="" />
      </div>
      <div className="product-title">
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const Menus = () => {
  const [clickedItem, setClickedItem] = useState(0); // Default to the first item

  const [isChickenActive, setChickenActive] = useState(true);
  const [isTakoyakiActive, setTakoyakiActive] = useState(false);
  const [isDrinksActive, setDrinksActive] = useState(false);
  const [isRamenActive, setRamenActive] = useState(false);

  const onItemClick = (index) => {
    setClickedItem(index);
    switch (index) {
      case 0:
        setChickenActive(true);
        setTakoyakiActive(false);
        setDrinksActive(false);
        setRamenActive(false);
        break;
      case 1:
        setChickenActive(false);
        setTakoyakiActive(true);
        setDrinksActive(false);
        setRamenActive(false);
        break;
      case 2:
        setChickenActive(false);
        setTakoyakiActive(false);
        setDrinksActive(true);
        setRamenActive(false);
        break;
      case 3:
        setChickenActive(false);
        setTakoyakiActive(false);
        setDrinksActive(false);
        setRamenActive(true);
        break;
      default:
    }
  };

  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [isSearchBarActive, setSearchBarActive] = useState(false);

  const searchIconBtn = () => {
    setSearchBarActive(!isSearchBarActive);
  };

  return (
    <div className="menus" id="menus">
      <div className="title-search">
        <h1 className="title">Find the best foods</h1>

        <div className="search">
          <i
            className="fa-solid fa-magnifying-glass searchIcon"
            onClick={searchIconBtn}
          ></i>
          {isSearchBarActive && (
            <input
              className="searchBarMedia"
              type="search"
              onChange={(e) => setSearchQuery(e.target.value)}
              name=""
              id=""
              placeholder="Search Flavor"
            />
          )}
          <input
            className="searchBar"
            type="search"
            onChange={(e) => setSearchQuery(e.target.value)}
            name=""
            id=""
            placeholder="Search Flavor"
          />
        </div>
      </div>
      <div className="product-lists">
        {ProductListsData.map((Product, index) => (
          <Products
            key={Product.id}
            index={index}
            img={Product.img}
            title={Product.title}
            isClicked={clickedItem === index}
            onItemClick={onItemClick}
          />
        ))}
      </div>
      {isChickenActive && <Chicken searchQuery={searchQuery} />}
      {isTakoyakiActive && <Takoyaki searchQuery={searchQuery} />}
      {isDrinksActive && <Drinks searchQuery={searchQuery} />}
      {isRamenActive && <Ramen searchQuery={searchQuery} />}
    </div>
  );
};

export default Menus;
