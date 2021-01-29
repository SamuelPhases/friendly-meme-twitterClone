import React from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Trends from "./components/Trends";

function Explore() {
  return (
    <div className="app">
      <Sidebar />
      <Feed explore />
      <Trends explore />
    </div>
  );
}

export default Explore;
