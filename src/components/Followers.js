import React from "react";
import "./Followers.css";

function Followers() {
  return (
    <div className="follow__item">
      <div className="follow__category">
        <div className="follow__dp"></div>
        <div className="follow__profile">
          <h3>Phases </h3>
          <p>@Phases</p>
        </div>
      </div>
      <button>Follow</button>
    </div>
  );
}

export default Followers;
