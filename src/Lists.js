import React from "react";
import Sidebar from "./components/Sidebar";
import Trends from "./components/Trends";
import ListsFeeder from "./components/ListsFeeder";

function Lists() {
  return (
    <div className="app">
      <Sidebar />
      <ListsFeeder />
      <Trends />
    </div>
  );
}

export default Lists;
