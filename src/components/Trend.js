import React from "react";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";
import "./Trend.css";
function Trend() {
  return (
    <div className="trend__item">
      <div className="category">
        <p>Trending in Nigeria</p>
        <div className="trend__icon">
          <KeyboardArrowDownRoundedIcon />
        </div>
      </div>
      <h3>Phases Tech</h3>
      <p>2B Tweets</p>
    </div>
  );
}
export default Trend;
