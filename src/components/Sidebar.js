import React from "react";
import SidebarOption from "./SidebarOption";
import "./Sidebar.css";

import { Link } from "react-router-dom";

// material icons
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltRoundedIcon from "@material-ui/icons/ListAltRounded";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function Sidebar() {
  return (
    <nav className="nav">
      <img
        src="https://www.creativefreedom.co.uk/wp-content/uploads/2017/06/Twitter-logo-2012.png"
        alt="logo"
        className="logo"
      />
      <SidebarOption Icon={HomeRoundedIcon} navItem="Home" active />
      <Link to="/explore">
        <SidebarOption navItem="Explore" />
      </Link>
      <Link to="/notifications">
        <SidebarOption Icon={NotificationsNoneIcon} navItem="Notifications" />
      </Link>
      <Link to="/home">
        <SidebarOption Icon={MailOutlineRoundedIcon} navItem="messages" />
      </Link>
      <Link to="/i/bookmarks">
        <SidebarOption Icon={BookmarkBorderIcon} navItem="bookmarks" />
      </Link>
      <Link to="/lists">
        <SidebarOption Icon={ListAltRoundedIcon} navItem="lists" />
      </Link>
      <Link to="/Lorem__Ip">
        <SidebarOption Icon={PersonOutlineRoundedIcon} navItem="profile" />
      </Link>
      <SidebarOption
        Icon={MoreHorizRoundedIcon}
        navItem="more"
        clickFormore
        circleIcon
      />
      <button className="tweet-btn">tweet</button>
      <div className="user">
        <div className="side">
          <AccountCircleRoundedIcon />
          <div>
            <h2>LoremIpsum</h2>
            <p>@Lorem__Ip</p>
          </div>
        </div>
        <KeyboardArrowDownIcon />
      </div>
    </nav>
  );
}

export default Sidebar;
