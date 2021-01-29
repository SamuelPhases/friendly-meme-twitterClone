import React from "react";

import "./BookmarkFeed.css";

function BookmarkFeed() {
  return (
    <div className="feed">
      <div className="bookmark--scroll">
        <div className="bookmark__notification">
          <h3>Bookmarks</h3>
          <p>@Lorem__Ip</p>
        </div>
      </div>
      <div className="bookmark__item">
        <h3>You haven’t added any Tweets to your Bookmarks yet</h3>
        <p>When you do, they’ll show up here.</p>
      </div>
    </div>
  );
}

export default BookmarkFeed;
