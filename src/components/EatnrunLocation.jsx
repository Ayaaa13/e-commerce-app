import React from "react";

const EatnrunLocation = () => {
  return (
    <div className="location">
      <h1 className="location-text">Location</h1>
      <p className="visit">Visit Our Shop</p>
      <div className="address-and-view-on-google-maps">
        <span className="address">
          <i className="fa-solid fa-location-dot"></i>404 Gumamela St. Topsite
          B., Townsite Mariveles, Bataan 2105
        </span>

        <span className="view-on-google-maps">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/@14.4574295,120.5905449,19z/data=!4m3!11m2!2sDgPlWdZTioqa5AveDy_zQYRWm9FUXA!3e1?authuser=0&entry=ttu"
          >
            View on Google Maps
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
          >
            <path
              d="M4.36364 0.0335693L0 4.39721L7.27273 11.6699L0 18.9427L4.36364 23.3063L16 11.6699L4.36364 0.0335693Z"
              fill="black"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default EatnrunLocation;
