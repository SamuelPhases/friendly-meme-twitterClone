import React from "react";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import "./Trends.css";
import Trend from "./Trend";
import Follow from "./Follow";
import Footer from "./Footer";

function Trends({ explore }) {
  return (
    <div className="trend">
      {explore ? (
        <>
          <Follow />
          <Footer />
        </>
      ) : (
        <>
          <div className="trend__input">
            <SearchRoundedIcon />
            <input type="text" placeholder="Search Twitter" />
          </div>
          <div className="trend__list">
            <div className="trend__topic">
              <div>
                <h2>Trends for you</h2>
                <SettingsRoundedIcon />
              </div>
            </div>
            <Trend />
            <Trend />
            <Trend />
            <Trend />
            <div className="trend__more">
              <p>Show more</p>
            </div>
          </div>
          <Follow />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Trends;
