import React from "react";
import "./SidebarOption.css";

function SidebarOption({ Icon, navItem, active, circleIcon }) {
  return (
    <div
      className={`navLink ${active && "activeLink"} ${
        circleIcon && "circleIt"
      }`}
    >
      <div>{Icon ? <Icon /> : <h3 className="explore__icon">#</h3>}</div>
      {/* <Icon /> */}
      <h2>{navItem}</h2>
    </div>
  );
}

export default SidebarOption;
