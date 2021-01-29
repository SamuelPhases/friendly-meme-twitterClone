import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import "./Header.css";

function Header({ title, Icon }) {
  return (
    <header>
      {title ? (
        <>
          <div className="header__title">
            <h3>{title}</h3>
            <Icon />
          </div>
        </>
      ) : (
        <div className="header__explore">
          <div className="header__input">
            <SearchIcon />
            <input type="text" placeholder="Search Twitter" />
          </div>
          <SettingsIcon />
        </div>
      )}
    </header>
  );
}

export default Header;
