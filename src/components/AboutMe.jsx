import React from "react";

const AboutMe = () => {
  return (
    <section className="aboutMe" id="aboutMe">
      <div className="left-side">
        <h2>INFORMATION ABOUT ME</h2>
        <div className="information">
          <p>
            I'm Jeremiah G. Nava, a Computer Engineering graduate with a passion
            for web design and development, and I'm actively seeking
            opportunities to enhance my skills and embark on a journey of
            continuous learning.
          </p>
          <div className="email">
            <h3>Email:</h3>
            <p>aiahnava5@gmail.com</p>
          </div>

          <div className="address">
            <h3>Address:</h3>
            <p>087 Townsite Proper Mariveles Bataan</p>
          </div>

          <div className="phoneNumber">
            <h3>Phone Number:</h3>
            <p>+63 9155434721</p>
          </div>

          <div className="socialMedia">
            <a
              href="https://www.facebook.com/ayaaa13"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/Facebook.png" alt="" />
            </a>
            <a
              href="https://twitter.com/NavaAiah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/Twitter.png" alt="" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/Instagram.png" alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="aboutMeimage">
        <img src="images/AboutMePictures.png" alt="" />
      </div>
    </section>
  );
};

export default AboutMe;
