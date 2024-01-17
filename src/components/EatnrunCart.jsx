import React, { useEffect } from "react";
import EatNRunHomeHeader from "./EatnrunHomeHeader";

const EatnrunCart = () => {
  useEffect(() => {
    document.title = "Eat 'N Run - My Cart";

    const link = document.createElement("link");
    link.rel = "icon";
    link.href = "/images/portfolioLogo.png";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="cart">
      <EatNRunHomeHeader />
      <div className="my-cart">
        <h1>My Orders</h1>
      </div>
    </div>
  );
};

export default EatnrunCart;
