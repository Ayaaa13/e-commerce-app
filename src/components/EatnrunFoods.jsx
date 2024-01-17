import React from "react";

import menuData from "../data/EatnrunMenuData";

const EatnrunChickenData = menuData.EatnrunChickenData;
const EatnrunTakoyakiData = menuData.EatnrunTakoyakiData;
const EatnrunDrinksData = menuData.EatnrunDrinksData;
const EatnrunRamenData = menuData.EatnrunRamenData;

const FoodLists = (props) => {
  return (
    <div className="food">
      <div className="food-content">
        <img src={props.img} alt="" />

        <div className="food-details">
          <div className="product-name-and-favorite-button">
            <h1 className="product-name">{props.name}</h1>
            <div className="favorite-button">
              <i className="fa-solid fa-heart"></i>
            </div>
          </div>

          <div className="flavor-price">
            <div className="flavor">
              <span>{props.flavor}</span>
            </div>
            <div className="price">
              <span>₱{props.price}</span>
            </div>
          </div>

          <div className="stocks-review">
            <div className="stocks">
              <span>Only {props.stocks} left in stock!</span>
            </div>
            <div className="review">
              <span>4.8</span>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>

          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

const NewFoodList = (FoodList) => {
  return (
    <FoodLists
      key={FoodList.id}
      id={FoodList.id}
      img={FoodList.img}
      name={FoodList.name}
      flavor={FoodList.flavor}
      price={FoodList.price}
      stocks={FoodList.stocks}
    />
  );
};

const Drinks = ({ searchQuery }) => {
  const filteredDrinksData = EatnrunDrinksData.filter((item) =>
    item.flavor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return filteredDrinksData.length > 0 ? (
    <div className="foodLists">{filteredDrinksData.map(NewFoodList)}</div>
  ) : (
    <div className="item-not-available">
      <h1>Item is not available</h1>
    </div>
  );
};

const Chicken = ({ searchQuery }) => {
  const filteredChickenData = EatnrunChickenData.filter((item) =>
    item.flavor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return filteredChickenData.length > 0 ? (
    <div className="foodLists">{filteredChickenData.map(NewFoodList)}</div>
  ) : (
    <div className="item-not-available">
      <h1>Item is not available</h1>
    </div>
  );
};

const Takoyaki = ({ searchQuery }) => {
  const filteredTakoyakiData = EatnrunTakoyakiData.filter((item) =>
    item.flavor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return filteredTakoyakiData.length > 0 ? (
    <div className="foodLists">{filteredTakoyakiData.map(NewFoodList)}</div>
  ) : (
    <div className="item-not-available">
      <h1>Item is not available</h1>
    </div>
  );
};

const Ramen = ({ searchQuery }) => {
  const filteredRamenData = EatnrunRamenData.filter((item) =>
    item.flavor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return filteredRamenData.length > 0 ? (
    <div className="foodLists">{filteredRamenData.map(NewFoodList)}</div>
  ) : (
    <div className="item-not-available">
      <h1>Item is not available</h1>
    </div>
  );
};

const Foods = {
  Chicken,
  Drinks,
  Takoyaki,
  Ramen,
};

export default Foods;
