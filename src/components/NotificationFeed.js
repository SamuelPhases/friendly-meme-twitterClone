import React from "react";
import Header from "./Header";
import "./NotificationFeed.css";
import SettingsIcon from "@material-ui/icons/Settings";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";

function NotificationFeed() {
  return (
    <div className="feed">
      <div className="notification--scroll">
        <div className="feed__notification">
          {/* HEADER */}
          <Header title="Notifications" Icon={SettingsIcon} />
        </div>
        <div className="feed__notificationSplit">
          <h2 className="notification__am active">All</h2>
          <h2 className="notification__am">mentions</h2>
        </div>
      </div>
      <div>
        <div className="notification__allItems">
          <div className="notification__dp">
            <div>
              <PersonRoundedIcon />
            </div>
            <div>
              <AccountCircleRoundedIcon />
            </div>
            <div>
              <AccountCircleRoundedIcon />
            </div>
            <div>
              <AccountCircleRoundedIcon />
            </div>
          </div>
          <p>
            <strong>Lom__Ip</strong> and 2 others followed you
          </p>
        </div>
        <div className="notification__mentionItems">
          <h3>Nothing to see here - yet</h3>
          <p>When someone mentions you, you'll find it here.</p>
        </div>
      </div>
    </div>
  );
}

export default NotificationFeed;
