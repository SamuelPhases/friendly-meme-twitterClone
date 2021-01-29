import React from "react";
// materialIcons
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import ReplayRoundedIcon from "@material-ui/icons/ReplayRounded";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";
import RedoIcon from "@material-ui/icons/Redo";
import "./Feeds.css";

function Feeds({
  username,
  displayName,
  time,
  post,
  comment,
  repost,
  like,
  dm,
  image,
  retweet,
}) {
  return (
    <div className="feeds">
      <div className="feeds__dp"></div>
      <div className="feeds__content">
        {retweet && (
          <div className="retweet__feed">
            <div>
              <RedoIcon />
            </div>
            <p>You retweeted</p>
          </div>
        )}
        <div className="feeds__header">
          <h3>{username}</h3>
          <p>@{displayName}</p>
          <p>&middot;</p>
          <p>{time}</p>
        </div>
        <div className="expand">
          <KeyboardArrowDownRoundedIcon />
        </div>
        <p className="feeds__text">{post}</p>
        {image && <img src={image} className="feeds__image" />}
        <div className="feeds__icon">
          <div>
            <div>
              <ChatBubbleOutlineRoundedIcon />
            </div>
            <p>{comment}</p>
          </div>
          <div>
            <div>
              <ReplayRoundedIcon />
            </div>
            <p>{repost}</p>
          </div>
          <div>
            <div>
              <FavoriteBorderRoundedIcon />
            </div>
            <p>{like}</p>
          </div>
          <div>
            <div>
              <PublishRoundedIcon />
            </div>
            <p>{dm}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feeds;
