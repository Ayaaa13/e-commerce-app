import React from "react";

const AccountNavbar = () => {
  return (
    <div className="account-navbar">
      <a href="#cart" className="favorite-button">
        <i className="fa-regular fa-heart"></i>
        <span>Favorite</span>
      </a>
      <a href="#notification" className="notification-button">
        <i className="fa-regular fa-bell"></i>
        <span>Notification</span>
      </a>

      <a href="#Profile">
        <img src="/images/UserImage/gomez.jpg" alt="" />
      </a>
    </div>
  );
};

export default AccountNavbar;
