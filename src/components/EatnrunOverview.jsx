import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

import EatnrunLogo from "./EatnrunL";
import NavbarBtn from "./EatnrunNavbarBtn";
import EatnrunNavbarData from "../data/EatnrunNavbarData";
import EatnrunDefault from "./EatnrunDefault";
import EatnrunService from "./EatnrunService";
import EatnrunAboutUs from "./EatnrunAboutUs";
import EatnrunMenu from "./EatnrunMenu";
import EatnrunTestimonial from "./EatnrunTestimonial";
import EatnrunFooter from "./EatnrunFooter";

const EatnrunNavbar = (props) => {
  const handleClick = () => {
    props.onNavbarClick(props.index);
  };

  const transformStyle =
    props.to === props.activeSection ? { color: "#bc6103" } : {};

  return (
    <Link
      className="eatnrunNavbarBtn"
      onClick={handleClick}
      style={transformStyle}
      to={props.to}
      spy={true}
      smooth={true}
      duration={500}
      offset={-108}
    >
      {props.link}
    </Link>
  );
};

const EatnrunOverview = () => {
  const [isNavbarClicked, setNavbarClicked] = useState(0);

  const [activeSection, setActiveSection] = useState("default");

  const handleNavbarClick = (sectionId) => {
    setNavbarClicked(sectionId);
  };

  const calculateActiveSection = () => {
    const sections = ["default", "service", "aboutus", "menu", "testimonial"];
    const scrollPosition = window.scrollY;

    for (let i = sections.length - 1; i >= 0; i--) {
      const sectionElement = document.getElementById(sections[i]);
      if (sectionElement && scrollPosition >= sectionElement.offsetTop - 200) {
        setActiveSection(sections[i]);
        return;
      }
    }

    // setActiveSection(null); // If no section is active
  };

  useEffect(() => {
    window.addEventListener("scroll", calculateActiveSection);

    return () => {
      window.removeEventListener("scroll", calculateActiveSection);
    };
  }, []);

  return (
    <div className="eatnrunApp">
      <header className="eatnrunHeader">
        <EatnrunLogo />
        <nav className="eatnrunMainNavbar">
          {EatnrunNavbarData.map((Navbar) => (
            <EatnrunNavbar
              key={Navbar.id}
              // index={index}
              link={Navbar.link}
              isClicked={isNavbarClicked}
              onNavbarClick={handleNavbarClick}
              to={Navbar.to}
              activeSection={activeSection}
            />
          ))}
        </nav>
        <NavbarBtn />
        <i className="fa-solid fa-bars"></i>
      </header>
      <EatnrunDefault />
      <EatnrunService />
      <EatnrunAboutUs />
      <EatnrunMenu />
      <EatnrunTestimonial />
      <EatnrunFooter />
    </div>
  );
};

export default EatnrunOverview;
