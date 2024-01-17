import React from "react";
import { Link } from "react-scroll";

const WelcomeGreetings = () => {
  return (
    <div className="welcome-greetings">
      <div className="hello-user">
        <div className="left-side">
          <h1>Eat ‘N Run Party</h1>
          <hr />
          <h2>Open Every Monday to Saturday</h2>
          <p>
            Feeling hungry? You are in the right place. Order now from “Eat ‘N
            Run”
          </p>
          <Link
            className="order-now-button"
            to="menus"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          >
            Order Now
          </Link>
        </div>

        <div className="right-side">
          <div className="foods">
            <div className="chicken-and-ramen">
              <img
                className="chicken"
                src="/images/FoodImage/chicken.png"
                alt="Chicken"
              />
              <img
                className="ramen"
                src="/images/FoodImage/ramen.png"
                alt="Ramen"
              />
            </div>
            <div className="takoyaki-and-drinks">
              <img
                className="takoyaki"
                src="/images/FoodImage/takoyaki.png"
                alt="Takoyaki"
              />
              <img
                className="drinks"
                src="/images/FoodImage/drinks.png"
                alt="Drinks"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeGreetings;
