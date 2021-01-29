import React from "react";
import Sidebar from "./components/Sidebar";
import Trends from "./components/Trends";
import BookmarkFeed from "./components/BookmarkFeed";

function Bookmark() {
  return (
    <div className="app">
      <Sidebar />
      <BookmarkFeed />
      <Trends />
    </div>
  );
}

export default Bookmark;
