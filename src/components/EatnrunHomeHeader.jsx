import React, { useEffect, useState } from "react";
import EatnrunLogo from "./EatnrunL";
import HomeDropdown from "./EatnrunHomeDropdown";
import HomeMainNavbar from "./EatnrunHomeMainNavbar";
import AccountNavbar from "./EatnrunAccountNavbar";

const EatNRunHomeHeader = () => {
  const [isHomeDropActive, setHomeDropActive] = useState(false);

  const barsClick = () => {
    setHomeDropActive(true);
    document.body.style.overflow = "hidden";
  };

  const closeDropdown = () => {
    setHomeDropActive(false);
    document.body.style.overflow = "auto";
  };

  const handleSize = () => {
    if (isHomeDropActive && window.innerWidth > 1024) {
      closeDropdown();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleSize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  });

  return (
    <header className="eatnrunHomeHeader">
      <div className="logo-barsBtn">
        <i
          onClick={barsClick}
          className="fa-solid fa-bars-staggered bars-button"
        ></i>
        <a href="/home">
          <EatnrunLogo />
        </a>
      </div>

      {isHomeDropActive && (
        <div className="dropdown-content">
          <HomeDropdown />
          <div onClick={closeDropdown} className="dropdown-overlay"></div>
        </div>
      )}

      <div className="left-home-navbar">
        <a href="/home">
          <EatnrunLogo />
        </a>
        <HomeMainNavbar />
      </div>

      <div className="right-home-navbar">
        <AccountNavbar />
      </div>
    </header>
  );
};

export default EatNRunHomeHeader;
