import React from "react";

const AccountNavbar = () => {
  return (
    <div className="account-navbar">
      <a href="/EatNRunCart" className="favorite-button">
        <i className="fa-regular fa-heart"></i>
        <span>Favorite</span>
      </a>
      <a href="/cart" className="notification-button">
        <i className="fa-regular fa-bell"></i>
        <span>Notification</span>
      </a>

      <img src="/images/UserImage/gomez.jpg" alt="" />
    </div>
  );
};

export default AccountNavbar;
