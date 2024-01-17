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
            <div className="number">
              <span>
                <i className="fa-solid fa-phone"></i>
              </span>
              <p>+63 9155434721</p>
            </div>
            <div className="gmail">
              <span>
                <i className="fa-solid fa-envelope"></i>
              </span>
              <p>aiahnava5@gmail.com</p>
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
