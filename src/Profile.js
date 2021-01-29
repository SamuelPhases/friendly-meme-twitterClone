import React from "react";
import Sidebar from "./components/Sidebar";
import ProfileTrend from "./components/ProfileTrend";
import ProfileFeeder from "./components/ProfileFeeder";

function Profile() {
  return (
    <div className="app">
      <Sidebar />
      <ProfileFeeder />
      <ProfileTrend />
    </div>
  );
}

export default Profile;
