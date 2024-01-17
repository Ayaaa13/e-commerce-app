import React, { useEffect } from "react";
import EatNRunHomeHeader from "./EatnrunHomeHeader";
import WelcomeGreetings from "./EatnrunWelcomeGreet";
import Menus from "./EatnrunMenus";
import EatnrunTestimonial from "./EatnrunTestimonial";
import EatnrunLocation from "./EatnrunLocation";
import EatnrunFooter from "./EatnrunFooter";

const EatnrunHome = () => {
  useEffect(() => {
    document.title = "Eat 'N Run - Home";

    const link = document.createElement("link");
    link.rel = "icon";
    link.href = "/images/portfolioLogo.png";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="eatnrunHome">
      <EatNRunHomeHeader />
      <WelcomeGreetings />
      <Menus />
      <EatnrunLocation />
      <EatnrunTestimonial />
      <EatnrunFooter />
    </div>
  );
};

export default EatnrunHome;
