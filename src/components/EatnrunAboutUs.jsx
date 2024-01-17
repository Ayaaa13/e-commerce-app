import React from "react";

const EatnrunAboutUs = () => {
  return (
    <div className="aboutUs" id="aboutus">
      <div className="left-side">
        <div className="aboutEatnrunLogo">
          <img src="/images/portfolioLogo.png" alt="" />
          <div className="name">
            <h1>Eat ‘N Run</h1>
            <p>먹고 달려요</p>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="eatnrunIntro">
          <h1>About Us</h1>
          <p>
            Welcome to Eat N' Run! As a culinary destination that seamlessly
            blends convenience and flavor, we take pride in offering both
            delivery and a warm, inviting store experience.
            <br /> <br />
            Experience the perfect balance of convenience and flavor at Eat N'
            Run, where every visit promises to be a satisfying culinary
            adventure. We look forward to serving you and making your dining
            moments truly special. Thank you for choosing Eat N' Run!
          </p>
        </div>

        <button className="contactBtn">Contact Us</button>
      </div>
    </div>
  );
};

export default EatnrunAboutUs;
