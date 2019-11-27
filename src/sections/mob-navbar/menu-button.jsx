import React from "react";
import "./mob-navbar.scss";
export const MenuButtonComponent  =(props) => (
  <div onClick={()=>{props.onClick()}} className={props.open ? "burger-menu open" : "burger-menu"}>
    <div className="bar1" key="b1" />
    <div className="bar2" key="b2" />
    <div className="bar3" key="b3" />
  </div>
);