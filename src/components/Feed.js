import React from "react";
import Header from "./Header";
import Feeds from "./Feeds";
import Trend from "./Trend";
import ExploreFeed from "./ExploreFeed";
// materialIcons
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import GifRoundedIcon from "@material-ui/icons/GifRounded";
import PollIcon from "@material-ui/icons/Poll";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import ScheduleIcon from "@material-ui/icons/Schedule";
import SettingsIcon from "@material-ui/icons/Settings";
import "./Feed.css";

function Feed({ explore }) {
  return (
    <div className="feed">
      {explore ? (
        <>
          <div className="feed__header">
            <Header />
          </div>
          <div className="events">
            <img
              className="events__img"
              src="https://pbs.twimg.com/semantic_core_img/1256224053565640704/FVkUoDzu?format=jpg&name=small"
            />
            <div className="img__content">
              <p>COVID-19 &middot; LIVE</p>
              <h1>Updates on Covid-19 in Nigeria</h1>
            </div>
            <div className="img--overlay"></div>
          </div>
          <div className="feed__trend">
            <div className="feed__trend--topic">
              <h2>Trends for you</h2>
            </div>
            <Trend />
            <Trend />
            <Trend />
            <Trend />
            <div className="trend__more">
              <p>Show more</p>
            </div>
          </div>
          <div className="explore__column">
            <ExploreFeed topic="Technology" />
            <div className="trend__more">
              <p>Show more</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="feed__header">
            <Header title="Home" Icon={SettingsIcon} />
          </div>
          <div className="feed__inputBlock">
            <div className="feed__input">
              <AccountCircleIcon />
              <textarea type="text" placeholder="What's happening?" />
            </div>
            <div className="feed__input__addons">
              <div className="feed__icons">
                <div>
                  <ImageOutlinedIcon />
                </div>
                <div>
                  <GifRoundedIcon />
                </div>
                <div>
                  <PollIcon />
                </div>
                <div>
                  <InsertEmoticonIcon />
                </div>
                <div>
                  <ScheduleIcon />
                </div>
              </div>
              <button type="submit">Tweet</button>
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
          />
        </>
      )}
    </div>
  );
}

export default Feed;
