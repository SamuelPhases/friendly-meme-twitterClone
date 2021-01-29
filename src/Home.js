import React from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Trends from "./components/Trends";
import Header from "./components/Header";

function Home() {
  return (
    <div className="app">
      <Sidebar />
      {/* <Feed /> */}
      <Feed>
        <Header title="Home" />
      </Feed>

      <Trends />
    </div>
  );
}

export default Home;
