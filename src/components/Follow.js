import React from "react";
import Followers from "./Followers";
import "./Follow.css";
function Follow({ title = "Who to follow" }) {
  return (
    <div className="follow__list">
      <div className="follow__topic">
        <div>
          <h2>{title}</h2>
        </div>
      </div>
      <Followers />
      <Followers />
      <Followers />
      <div className="follow__more">
        <p>Show more</p>
      </div>
    </div>
  );
}

export default Follow;
