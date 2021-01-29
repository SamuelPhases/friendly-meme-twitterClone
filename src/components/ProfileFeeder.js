import React from "react";
import Feeds from "./Feeds";
import "./ProfileFeeder.css";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
function ProfileFeeder() {
  return (
    <div className="feed">
      <div className="profile__header">
        <ArrowBackRoundedIcon />
        <div className="profile__headerContent">
          <h3>LoremIpsum</h3>
          <p>1.3B Tweets</p>
        </div>
      </div>
      <div className="profile__body">
        <div className="profile__bodyHeader">
          <div className="profile__bodyDp">
            <AccountCircleIcon />
          </div>
          <button className="profile__setup">Set up profile</button>
        </div>
        <div className="profile__bodyBody">
          <h3>LoremIpsum</h3>
          <p>@Lorem__Ip</p>
          <div className="profile__bodyTime">
            <CalendarTodayIcon />

            <span>Joined January 2020</span>
          </div>
          <div className="profile__follow">
            <div>
              <h3>10</h3>
              <span>Following</span>
            </div>
            <div>
              <h3>3B</h3>
              <span>Followers</span>
            </div>
          </div>
        </div>
        <div className="profile__bodyContent">
          <h3 className="activeTab">Tweets</h3>
          <h3>Tweets & replies</h3>
          <h3>Media</h3>
          <h3>Likes</h3>
        </div>
      </div>
      <Feeds
        username="Feed User"
        displayName="Lorem__Ips"
        time="10s"
        post="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repellat
        cum corporis, commodi eius, qui iure dolorem sunt sit necessitatibus
        nam similique mollitia minima itaque harum, perspiciatis rem maxime
        laboriosam."
        comment="100"
        repost="100"
        like="900"
        dm="10"
        image="https://pbs.twimg.com/media/EX1IbbXXYAE2YlF?format=jpg&name=small"
        retweet
      />
      <Feeds
        username="Feed User"
        displayName="Lorem__Ips"
        time="10s"
        post="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repellat
        cum corporis, commodi eius, qui iure dolorem sunt sit necessitatibus
        nam similique mollitia minima itaque harum, perspiciatis rem maxime
        laboriosam."
        comment="100"
        repost="100"
        like="900"
        dm="10"
        image="https://pbs.twimg.com/media/EX1IbbXXYAE2YlF?format=jpg&name=small"
        retweet
      />
      <Feeds
        username="Feed User"
        displayName="Lorem__Ips"
        time="10s"
        post="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repellat
        cum corporis, commodi eius, qui iure dolorem sunt sit necessitatibus
        nam similique mollitia minima itaque harum, perspiciatis rem maxime
        laboriosam."
        comment="100"
        repost="100"
        like="900"
        dm="10"
        image="https://pbs.twimg.com/media/EX1IbbXXYAE2YlF?format=jpg&name=small"
        retweet
      />
    </div>
  );
}

export default ProfileFeeder;
