import React, { useState } from "react";

import menuData from "../data/EatnrunMenuData";

const EatnrunChickenData = menuData.EatnrunChickenData;
const EatnrunTakoyakiData = menuData.EatnrunTakoyakiData;
const EatnrunDrinksData = menuData.EatnrunDrinksData;
const EatnrunRamenData = menuData.EatnrunRamenData;

const CartItems = ({ cart, removeFromCart }) =>
  cart && cart.length > 0 ? (
    cart.map((item) => (
      <div className="orders" key={item.id}>
        <div className="order">
          <h2 className="product-name">{item.name}</h2>

          <div className="product-details">
            <img className="product-image" src={item.img} alt={item.name} />
            <div className="details">
              <p className="description">{item.description}</p>
              <span className="flavor">{item.flavor}</span>

              <div className="price-remove-and-quantity">
                <span className="price">₱{item.price * item.quantity}</span>

                <div className="remove-button-and-quantity">
                  <i
                    className="fa-solid fa-trash-can remove-button"
                    onClick={() => removeFromCart(item.id)}
                  ></i>
                  <div className="quantity">
                    <span className="minus">-</span>
                    <span className="number">{item.quantity}</span>
                    <span className="add">+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  ) : (
    <h1>Your Cart is Empty</h1>
  );

const FoodLists = (props) => {
  const [cart, setCart] = useState([]);
  // const [cartOpen, setCartOpen] = useState(false);

  // const openCart = () => {
  //   setCartOpen(!cartOpen);
  // };

  // const cartClose = () => {
  //   setCartOpen(false);
  // };

  const addToCart = () => {
    if (cart.find((item) => item.id === props.id)) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === props.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...props, quantity: 1 }]);
    }
  };

  const removeFromCart = () => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== props.id));
  };

  // const addToCart = (item) => {
  //   if (cart.find((cartItem) => cartItem.id === item.id)) {
  //     setCart((prevCart) =>
  //       prevCart.map((cartItem) =>
  //         cartItem.id === item.id
  //           ? { ...cartItem, quantity: cartItem.quantity + 1 }
  //           : cartItem
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { ...item, quantity: 1 }]);
  //   }
  // };

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

          <button className="add-to-cart-button" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
      {/* <div className="cart">
        <div className="my-cart">
          <h1>My Orders</h1>

          <div className="all-orders">
            <div className="order-summary">{CartItems}</div>
          </div>
        </div>
      </div> */}
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
      // addToCart={addToCart}
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
  CartItems,
};

export default Foods;
