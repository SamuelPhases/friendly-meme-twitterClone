import React from "react";
import Sidebar from "./components/Sidebar";
import Trends from "./components/Trends";
import NotificationFeed from "./components/NotificationFeed";

function Notification() {
  return (
    <div className="app">
      <Sidebar />
      <NotificationFeed />
      <Trends />
    </div>
  );
}

export default Notification;
