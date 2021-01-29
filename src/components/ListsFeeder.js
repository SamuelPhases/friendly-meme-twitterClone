import React from "react";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import ListAltRoundedIcon from "@material-ui/icons/ListAltRounded";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import "./ListsFeeder.css";

function ListsFeeder() {
  return (
    <div className="feed">
      <div className="list__header">
        <div className="list__content">
          <ArrowBackRoundedIcon />
          <div className="cred">
            <h3>Lists</h3>
            <p>@Lorem__Ip</p>
          </div>
        </div>
        <div className="list__icons">
          <ListAltRoundedIcon />
          <MoreHorizOutlinedIcon />
        </div>
      </div>
      <h2 className="pinned__list">Pinned</h2>
      <div className="pin__items">
        <p>
          Nothing to see here yet — pin up to five of your favorite Lists to
          access them quickly.
        </p>
      </div>

      <h2 className="pinned__list">Your Lists</h2>
      <div className="list__block">
        <h3>You haven't created any lists yet</h3>
        <p>When you do, it’ll show up here.</p>
        <button>Create a List</button>
      </div>
    </div>
  );
}

export default ListsFeeder;
