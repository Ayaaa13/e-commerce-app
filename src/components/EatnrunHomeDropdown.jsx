import React from "react";
import EatnrunLogo from "./EatnrunL";
import HomeMainNavbar from "./EatnrunHomeMainNavbar";
import AccountNavbar from "./EatnrunAccountNavbar";

const HomeDropdown = () => {
  return (
    <div className="HomeDropdown active">
      <EatnrunLogo />

      <h1>Menu</h1>
      <div className="top-home-navbar">
        <HomeMainNavbar />
      </div>

      <h1>Account</h1>
      <div className="account">
        <AccountNavbar />
      </div>
    </div>
  );
};

export default HomeDropdown;
