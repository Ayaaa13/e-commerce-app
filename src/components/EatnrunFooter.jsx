import React from "react";

let year = new Date().getFullYear();

const EatnrunFooter = () => {
  return (
    <footer className="eatnrunFooter">
      <div className="top-footer">
        <div className="footerLogoName">
          <div className="footerEnglish">Eat N' Run</div>
          <div className="footerKorean">먹고 달려요</div>
        </div>

        <div className="mainFooter">
          <div className="media">
            <h2>Media</h2>
            <a
              href="https://www.facebook.com/EatNRunBataan"
              rel="noopener noreferrer"
              target="_blank"
            >
              Facebook
            </a>
          </div>

          <div className="contactUs">
            <h2>Contact Us</h2>
            {/* <div className="address">
              <span>
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.google.com/maps/place/14%C2%B027'26.8%22N+120%C2%B035'27.8%22E/@14.4574289,120.5910232,21z/data=!4m4!3m3!8m2!3d14.4574444!4d120.5910556?entry=tts&shorturl=1"
              >
                404 Gumamela St. Topsite B., Townsite, Mariveles, Bataan 2105
              </a>
            </div> */}
            <div className="number">
              <span>
                <i className="fa-solid fa-phone"></i>
              </span>
              <p>0970-241-2689 / 0998-536-0527</p>
            </div>
            <div className="gmail">
              <span>
                <i className="fa-solid fa-envelope"></i>
              </span>
              <p>eatnrun@gmail.com</p>
            </div>
          </div>

          <div className="legal">
            <h2>Legal</h2>
            <a href="#Waiting">Privacy Policy</a>
            <a href="#Waiting">Terms of Use</a>
            <a href="#Waiting">Sitemap</a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>Copyright © {year} Eat N' Run. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default EatnrunFooter;
