import React from "react";
import "./mob-navbar.scss";
import { Link } from "react-scroll";
import { MenuButtonComponent } from "./menu-button";
import { TitleComponent } from "../../shared-components/title/title.component";

export const MobNavBarComponent = () => {
  const [isOpened, setIsOpened] = React.useState(false);
  const closeMenu = () => {
    setIsOpened(false);
  }
  return (
    <div className="mob-navbar">
      <MenuButtonComponent
        open={isOpened}
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      />
      <div
        style={{ opacity: isOpened ? "1" : "0",  height: isOpened ? "100%" : "0" }}
        className="mob-navbar__content"
      >
        <Link onClick={closeMenu}  to="about" spy={true} smooth={true} offset={-70} duration={500}>
          <TitleComponent right title="About" />
        </Link>
        <Link onClick={closeMenu}  to="technicalSkills" spy={true} smooth={true} offset={-70} duration={500}>
          <TitleComponent right title="Technical Skills" />
        </Link>
       


        <Link onClick={closeMenu} to="education" spy={true} smooth={true} offset={-70} duration={500}>
          <TitleComponent right title="Education" />
        </Link>
        <Link onClick={closeMenu}  to="workExperiences" spy={true} smooth={true} offset={-70} duration={500}>
          <TitleComponent right title="Work Experiences" />
        </Link>
        <Link onClick={closeMenu}  to="languages" spy={true} smooth={true} offset={-70} duration={500}>
          <TitleComponent right title="Languages" />
        </Link>
      </div>
      {/* <button>aa</button> */}
    </div>
  );
};
