import React from "react";
import MenuData from "../data/EatnrunMenuData";

const EatnrunChickenTitle = MenuData.EatnrunChickenTitleData;
const EatnrunTakoyakiTitle = MenuData.EatnrunTakoyakiTitleData;
const EatnrunDrinksTitle = MenuData.EatnrunDrinksTitleData;
const EatnrunRamenTitle = MenuData.EatnrunRamenTitleData;
const EatnrunChicken = MenuData.EatnrunChickenData;
const EatnrunTakoyaki = MenuData.EatnrunTakoyakiData;
const EatnrunDrinks = MenuData.EatnrunDrinksData;

const FlavorsAndPrices = (props) => {
  return (
    <div className="flavorAndPrice">
      <h2 className="menuFlavor">{props.flavor}</h2>
      <p className="menuPrice">₱{props.price}</p>
    </div>
  );
};

const CreateFlavorsAndPrices = (FlavorPrice) => {
  return (
    <FlavorsAndPrices
      key={FlavorPrice.id}
      flavor={FlavorPrice.flavor}
      price={FlavorPrice.price}
    />
  );
};

// // MENU CARD TOP
const MenuCardTop = (props) => {
  return (
    <div className="menuCardTop">
      <img src={props.img} alt="" />
      <h2 className="menuName">{props.title}</h2>
    </div>
  );
};

const CreateMenuCardTop = (CardTop) => {
  return (
    <MenuCardTop key={CardTop.id} img={CardTop.img} title={CardTop.title} />
  );
};

// MENU FLAVOR AND PRICE
const EatnrunMenu = () => {
  return (
    <div className="menu" id="menu">
      <div className="ourMenu">
        <p>Our Menu</p>
        <h1>Menu That Always Make You Fall Inlove</h1>
      </div>

      <div className="menuCards">
        {/* 1. Chicken */}
        <div className="menuCard">
          {EatnrunChickenTitle.map(CreateMenuCardTop)}

          <hr />

          <div className="content">
            {EatnrunChicken.map(CreateFlavorsAndPrices)}
          </div>
        </div>

        {/* 2. takoyaki */}
        <div className="menuCard">
          {EatnrunTakoyakiTitle.map(CreateMenuCardTop)}

          <hr />

          <div className="content">
            {EatnrunTakoyaki.map(CreateFlavorsAndPrices)}
          </div>
        </div>

        {/* 3. Drinks */}
        <div className="menuCard">
          {EatnrunDrinksTitle.map(CreateMenuCardTop)}
          <hr />

          <div className="content">
            {EatnrunDrinks.map(CreateFlavorsAndPrices)}
          </div>
        </div>

        {/* 4. Ramen */}
        <div className="menuCard">
          {EatnrunRamenTitle.map(CreateMenuCardTop)}
          <hr />

          <div className="content">COMING SOON</div>
        </div>
      </div>
    </div>
  );
};

export default EatnrunMenu;
